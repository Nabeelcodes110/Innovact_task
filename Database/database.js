const mongoose = require('mongoose')

const connectToMongoose = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    console.log('database is connected')
}

module.exports = connectToMongoose