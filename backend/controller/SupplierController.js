const supplier = require("../model/Supplier");

const supplierController = {

    getAllSupplier: async (req, res) => {
        try {
            const findAll = await supplier.find();
            res.status(200).json(findAll);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    getSupplierById: async (req, res) => {
        try {
            const supId = req.params.id;

            const sup = await supplier.findOne({supplierCode: supId});

            if (sup === null) {
                return res.status(404).json({message: 'Supplier not found'});
            }
            res.status(200).json(sup);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    addSupplier: async (req, res) => {
        try {
            const data = req.body

            const exist = await supplier.findOne({supplierCode: data.supplierCode});

            if (exist !== null) {
                return res.status(409).json({message: 'Supplier already exists'});
            }
            await supplier.create(data);
            res.status(201).json({message: 'Supplier created successfully'});
        } catch (err) {
            res.status(500).json({error: err});
        }
    },
    updateSupplier: async (req, res) => {
        try {
            const supData = req.body;

            const updatedSup = await supplier.findOneAndUpdate({supplierCode: supData.supplierCode}, supData, {new: true});
            if (!updatedSup) {
                return res.status(404).json({error: 'Supplier not found'});
            }
            res.status(204).json({message: 'Supplier update successfully'});

        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    deleteSupplier: async (req, res) => {
        try {
            const supplierId = req.query.supId;
            const result = await supplier.deleteOne({supplierCode: supplierId});

            if (result.deletedCount == 0) {
                return res.status(404).json({error: 'Supplier not found'});
            }
            res.status(204).json({message: 'Supplier deleted success'});

        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
}

module.exports = supplierController;