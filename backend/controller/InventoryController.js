const inventory = require("../model/Inventory");
const supplier = require("../model/Supplier");
const ItemSize = require("../model/ItemSize");
const mongoose = require("mongoose");
const employee = require("../model/Employee");

const inventoryController = {

    getAllInventory: async (req, res) => {
        try {
            const findAll = await inventory.find().populate('sizes').populate('supplier').exec();
            res.status(200).json(findAll);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    getInventoryById: async (req, res) => {
        try {
            const itemCode = req.params.id;

            const item = await inventory.findOne({itemCode: itemCode}).populate('sizes')
                .populate('supplier');

            if (item === null) {
                return res.status(404).json({message: 'Item not found'});
            }

            item._doc.sm = item.sizes[0].quantity;
            item._doc.md = item.sizes[1].quantity
            item._doc.lg = item.sizes[2].quantity
            item._doc.xl = item.sizes[3].quantity
            item._doc.xxl = item.sizes[4].quantity

            res.status(200).json(item);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    addInventory: async (req, res) => {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const data = req.body

            const exist = await inventory.findOne({itemCode: data.itemCode});

            if (exist !== null) {
                await session.abortTransaction();
                session.endSession();
                return res.status(409).json({message: 'Item already exists'});
            }

            const sup = await supplier.findOne({supplierCode: data.supplierCode});

            if (sup === null) {
                await session.abortTransaction();
                session.endSession();
                return res.status(404).json({message: 'Supplier not found'});
            }

            const item = new inventory({

                itemCode: data.itemCode,
                itemDesc: data.itemDesc,
                itemPicture: data.itemPicture,
                category: data.category,
                supplierName: sup.supplierName,
                salePrice: data.salePrice,
                buyPrice: data.buyPrice,
                expectedProfit: data.expectedProfit,
                profitMargin: data.profitMargin,
                status: data.status,
                supplier: sup._id
            });

            await item.save({ session });

            const sizes = [
                new ItemSize({ size: 'S', quantity: Number(data.sm), itemCode: item._id }),
                new ItemSize({ size: 'M', quantity: Number(data.md), itemCode: item._id }),
                new ItemSize({ size: 'L', quantity: Number(data.lg), itemCode: item._id }),
                new ItemSize({ size: 'XL', quantity: Number(data.xl), itemCode: item._id }),
                new ItemSize({ size: 'XXL', quantity: Number(data.xxl), itemCode: item._id }),
            ];

            const savedItemSizes = await ItemSize.insertMany(sizes, { session });

            item.sizes = savedItemSizes.map(size => size._id);
            item.qty =  Number(data.sm) + Number(data.md) + Number(data.lg) + Number(data.xl) + Number(data.xxl);
            item.originalQty = item.qty
            await item.save({ session });

            await session.commitTransaction();
            session.endSession();
            res.status(201).json({message: 'Inventory and item sizes saved successfully'});
        } catch (err) {
            await session.abortTransaction();
            session.endSession();
            res.status(500).json({error: err});
        }
    },
    updateInventory: async (req, res) => {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const data = req.body

            const exist = await inventory.findOne({itemCode: data.itemCode});

            if (exist === null) {
                await session.abortTransaction();
                session.endSession();
                return res.status(404).json({message: 'Item not found'});
            }

            const sup = await supplier.findOne({supplierCode: data.supplierCode});

            if (sup === null) {
                await session.abortTransaction();
                session.endSession();
                return res.status(404).json({message: 'Supplier not found'});
            }

            const item = {
                itemDesc: data.itemDesc,
                itemPicture: data.itemPicture,
                category: data.category,
                supplierName: sup.supplierName,
                salePrice: data.salePrice,
                buyPrice: data.buyPrice,
                expectedProfit: data.expectedProfit,
                profitMargin: data.profitMargin,
                supplier: sup._id
            };

            let allQty = data.sm + data.md + data.lg + data.xl + data.xxl

            await inventory.updateOne({ itemCode: data.itemCode }, item).session(session);

            const sizes = [
                new ItemSize({ size: 'S', quantity: data.sm, itemCode: exist._id }),
                new ItemSize({ size: 'M', quantity: data.md, itemCode: exist._id }),
                new ItemSize({ size: 'L', quantity: data.lg, itemCode: exist._id }),
                new ItemSize({ size: 'XL', quantity: data.xl, itemCode: exist._id }),
                new ItemSize({ size: 'XXL', quantity: data.xxl, itemCode: exist._id }),
            ];

            await ItemSize.deleteMany({ itemCode: exist._id }).session(session);
            const savedItemSizes = await ItemSize.insertMany(sizes, { session });

            if (exist.originalQty < allQty){
                item.originalQty = allQty
            }else {
                item.originalQty = exist.originalQty
            }
            let check = item.originalQty / 2;
            if (allQty !== 0 && check>allQty){
                item.status = "Low"
            }else if (allQty !== 0 && check<allQty){
                item.status = "Available"
            }else if (allQty === 0){
                item.status = "Not Available"
                item.originalQty = 0;
            }

            await inventory.updateOne({ itemCode: data.itemCode }, {
                sizes: savedItemSizes.map(size => size._id),
                qty: allQty,
                originalQty: item.originalQty,
                status: item.status
            }).session(session);

            await session.commitTransaction();
            session.endSession();
            res.status(204).json({message: 'Inventory and item sizes Update successfully'});
        } catch (err) {
            await session.abortTransaction();
            session.endSession();
            res.status(500).json({error: err});
        }
    },
    deleteInventory: async (req, res) => {

        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const itemCode = req.query.itmId;
            const item = await inventory.findOne({itemCode: itemCode});

            if (item === null) {
                await session.abortTransaction();
                session.endSession();
                return res.status(404).json({message: 'Item not found'});
            }
            await ItemSize.deleteMany({ itemCode: item._id }).session(session);

            const result = await inventory.deleteOne({ itemCode: itemCode }).session(session);

            if (result.deletedCount === 0) {
                await session.abortTransaction();
                session.endSession();
                return res.status(404).json({ error: 'Item not found' });
            }
            await session.commitTransaction();
            session.endSession();
            res.status(204).json({message: 'Item deleted success'});
        } catch (err) {
            await session.abortTransaction();
            session.endSession();
        }

    },
}

module.exports = inventoryController;