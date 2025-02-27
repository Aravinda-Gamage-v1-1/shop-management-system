const user = require("../model/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const customer = require("../model/Customer");
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'u606aDawnmeMVMgxesY2Dvf55DXrqtl3';
const userController = {

    getAllUsers: async (req, res) => {

    },
    getUserById: async (req, res) => {
        try {
            const username = req.params.id;

            const exist = await user.findOne({username: username});

            if (exist === null) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(exist);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    addUser: async (req, res) => {
        try {
            const data = req.body

            const exist = await user.findOne({username: data.username});

            if (exist !== null) {
                return res.status(409).json({message: 'User already exists'});
            }

            if (!data.username || !data.password || !data.role) {
                return res.status(400).json({ message: 'Username and password and role are required.' });
            }
            else if (!data.username) {
                return res.status(400).json({ message: 'Username are required.' });
            }
            else if (!data.password) {
                return res.status(400).json({ message: 'password are required.' });
            }
            else if (!data.role) {
                return res.status(400).json({ message: 'role are required.' });
            }

            const hashedPassword = await bcrypt.hash(data.password, 10);
            let userdata = {
                username: data.username,
                password: hashedPassword,
                role: data.role,
            }
            await user.create(userdata);
            res.status(201).json({message: 'User created successfully'});
        } catch (err) {
            res.status(500).json({error: err});
        }
    },
    logUser: async (req, res) => {
        try {
            const { username, password } = req.body;

            const exist = await user.findOne({username: username});

            if (exist === null) {
                return res.status(409).json({message: 'User not found'});
            }

            const validPassword = await bcrypt.compare(password, exist.password);
            if (!validPassword) {
                return res.status(400).json({ message: 'Invalid password' });
            }

            const token = jwt.sign({ username: exist.username,role: exist.role }, SECRET_KEY, { expiresIn: '1h' });

            res.json({ token });
        } catch (err) {
            res.status(500).json({error: err});
        }
    },
    updateUser: async (req, res) => {

    },
    deleteUser: async (req, res) => {

    },
}

module.exports = userController;