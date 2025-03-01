const mongoose = require('mongoose');
const dotenv =require('dotenv');
dotenv.config();

const mongoURL = process.env.MONGO_DB;

const DBConnection = () => {
    try {
        const conn = mongoose.connect(mongoURL)
        console.log(`MongoDB connected`)
    }
    catch (error) {
        console.error("connecting to mongodb:", error);
    }
}

module.exports= DBConnection;