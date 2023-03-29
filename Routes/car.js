const Router = require('express').Router()
const Car = require('../Models/Car')


Router.get('/getCars' , async(req,res)=>{
    try{
        const cars = await Car.find({}).then(
            (data)=>res.status(200).json(data)
        )

    }
    catch(err){
        res.status(404).send("Not Found")
    }
    
})

Router.post('/addCar' , async (req,res)=>{
    try{
        const newCar = await Car.create({
            car_name : req.body.car_name,
            car_model : req.body.car_model,
            car_company : req.body.car_company,
            car_engine : req.body.car_engine,
            car_mileage : req.body.car_mileage,
        }).then((data) => res.status(201).json(data))
    }
    catch(err){
        console.log(err)
        res.status(500).send('Internal server error')
    }
   
})

module.exports = Router