const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const carSchema  = new Schema({
    car_name : {
        type : String,
        required : true
    },
    car_model : {
        type : String ,
        required: true
    },
    car_company : {
        type : Schema.Types.String,      //foreign key for company details
        ref : 'Company',
        required : true
    },
    car_engine : {
        type : String,
        required : true
    },
    car_mileage : {
        type : String ,
        required : true,
    }

    
})

const Car = mongoose.model('Car' , carSchema)
module.exports = Car