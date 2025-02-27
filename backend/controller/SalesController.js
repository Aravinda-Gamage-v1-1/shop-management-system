const mongoose = require('mongoose');
const inventory = require("../model/Inventory");
const Sales = require("../model/Sales")

const orderController = {

    getAllOrders: async (req, res) => {

    },
    getOrderById: async (req, res) => {
        try {
            const orderNo = req.params.id;

            const order = await Sales.findOne({orderNo: orderNo}).populate({
                path: 'saleDetails.itemCode',
                select: 'itemCode -_id'
            })

            if (order === null) {
                return res.status(404).json({message: 'Order not found'});
            }
            res.status(200).json(order);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    addOrder: async (req, res) => {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            const salesData = req.body
            const exist = await Sales.findOne({orderNo: salesData.orderNo});

            if (exist !== null) {
                await session.abortTransaction();
                session.endSession();
                return res.status(409).json({message: 'Order already exists'});
            }

            for (let i = 0; i < salesData.saleDetails.length; i++) {
                const detail = salesData.saleDetails[i];

                const inventoryItem = await inventory.findOne({itemCode: detail.itemCode}).exec();
                if (!inventoryItem) {
                    throw new Error(`Item with itemCode not found`);
                }

                salesData.saleDetails[i].itemCode = inventoryItem._id;
            }
            const newSale = new Sales(salesData);

            await newSale.save({session});

            await session.commitTransaction();
            session.endSession();

            res.status(201).json({message: 'Order saved successfully'});

        } catch (error) {
            await session.abortTransaction();
            session.endSession();
            res.status(500).json({error: error});
        }
    },
    updateOrder: async (req, res) => {

    },
    deleteOrder: async (req, res) => {

    },
}

module.exports = orderController;