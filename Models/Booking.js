const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const bookingSchema  = new Schema({
    user_email : {
        type : String,
        required : true,
    },
    user_contact : {
        type : String,
        required : true
    },
    //foreign key for car details
    car_model : {
        type : Schema.Types.String,
        ref : 'Car',
        required : true

    },

    //foreign key for company details
    company : {
        type : Schema.Types.String, 
        ref : 'Company',
        requied : true
    },
    date_of_booking : {
        type : Date,
        required : true
    },
    //if this field is false then booking is canceled or not confirmed
    confirmation : {
        type : Boolean,
        required : true
    },
    time_stamp : {
        type : Date,
        default : Date.now
    }
})

const bookingModel = mongoose.model('Booking' , bookingSchema)
module.exports = bookingModel