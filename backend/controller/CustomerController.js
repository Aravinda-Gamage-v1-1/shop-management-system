let customer = require('../model/Customer');
const customerController = {

    getAllCustomers: async function (req, res) {
        try {
            const findAll = await customer.find();
            res.status(200).json(findAll);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    getCustomerById: async function (req, res) {
        try {
            const customerId = req.params.id;

            const cus = await customer.findOne({customerId: customerId});

            if (cus === null) {
                return res.status(404).json({ message: 'Customer not found' });
            }
            res.status(200).json(cus);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    addCustomer: async function (req, res) {
        try {
            const data = req.body
            console.log(data);
            const exist = await customer.findOne({ customerId: data.customerId });

            if (exist !== null) {
                return res.status(409).json({ message: 'Customer already exists' });
            }
            await customer.create(data);
            res.status(201).json({ message: 'Customer created successfully' });
        } catch (err) {
            console.log(err);
            res.status(500).json({error: err});
        }
    },
    updateCustomer: async function (req, res) {
        try {
            const customerData = req.body;

            const updatedCustomer = await customer.findOneAndUpdate({customerId: customerData.customerId}, customerData, {new: true});
            if (!updatedCustomer) {
                return res.status(404).json({error: 'Customer not found'});
            }
            res.status(204).json({ message: 'Customer update successfully' });;

        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    removeCustomer: async function (req, res) {
        try {
            const customerId = req.query.cusId;
            const result = await customer.deleteOne({customerId: customerId});

            if (result.deletedCount == 0) {
                return res.status(404).json({error: 'Customer not found'});
            }
            res.status(204).json({message: 'Customer deleted success'});

        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
}
module.exports = customerController;