const Router = require('express').Router()
const Company = require('../Models/Company')


Router.get('/getCompanies' , async(req,res)=>{
    try{
        const companies = await Company.find({}).then(
            (data)=>res.status(201).json(data)
        )

    }
    catch(err){
        res.status(404).send("Not found")
    }
    
})


Router.post('/addCompany' , async (req,res)=>{
    try{
        const newCompany = await Company.create({
            company_name : req.body.company_name,
            company_email : req.body.company_email,
            company_contact : req.body.company_contact,
            company_location : req.body.company_location
        }).then((data) => res.status(201).json(data))
    }
    catch(err){
        console.log(err)
        res.status(500).send('Internal server error')
    }
   
})

module.exports = Router