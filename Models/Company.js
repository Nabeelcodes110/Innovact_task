const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const companySchema  = new Schema({
    company_name : {
        type : String , 
        requied : true
    },
    company_email : {
        type : String,
        required : true
    },
    company_contact : {
        type : String ,
        required : true
    },
    company_location : {
        type : String,
        required : true
    } 
})

const Company = mongoose.model('Company' , companySchema)
module.exports = Company