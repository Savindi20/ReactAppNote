const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const db = async() => {
    try {
        const conn = await mongoose.connect(MONGODB_URL);
        console.info(`Mongo DB connected to: ${conn.connection.host}`)

    }catch (error) {
        console.error("MongoDB Connection Error ", error)
    }
}

module.exports = db;