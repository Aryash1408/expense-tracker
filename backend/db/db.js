const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DATABASE IS CONNECTED')
    } catch (error) {
        console.log('DATABASE CONNECTION ERROR:', error)
    }
}

module.exports = db;
