const employee = require("../model/Employee");

const employeeController = {

    getAllEmployees: async (req, res) => {
        try {
            const findAll = await employee.find();
            res.status(200).json(findAll);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    getEmployeeById: async (req, res) => {
        try {
            const empId = req.params.id;

            const emp = await employee.findOne({employeeId: empId});

            if (emp === null) {
                return res.status(404).json({message: 'Employee not found'});
            }
            res.status(200).json(emp);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    addEmployee: async (req, res) => {
        try {
            const data = req.body

            const exist = await employee.findOne({employeeId: data.employeeId});

            if (exist !== null) {
                return res.status(409).json({message: 'Employee already exists'});
            }
            await employee.create(data);
            res.status(201).json({message: 'Employee created successfully'});
        } catch (err) {
            res.status(500).json({error: err});
        }
    },
    updateEmployee: async (req, res) => {
        try {
            const empData = req.body;

            const updatedEmp = await employee.findOneAndUpdate({employeeId: empData.employeeId}, empData, {new: true});
            if (!updatedEmp) {
                return res.status(404).json({error: 'Employee not found'});
            }
            res.status(204).json({message: 'Employee update successfully'});

        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    deleteEmployee: async (req, res) => {
        try {
            const employeeId = req.query.empId;
            const result = await employee.deleteOne({employeeId: employeeId});

            if (result.deletedCount == 0) {
                return res.status(404).json({error: 'Employee not found'});
            }
            res.status(204).json({message: 'Employee deleted success'});

        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
}

module.exports = employeeController;