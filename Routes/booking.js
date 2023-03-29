const Router = require('express').Router()
const bookingModel = require('../Models/Booking')


//get all booking details
Router.get('/getBookings' , async (req,res)=>{
    try{
        const bookingDeetails = await bookingModel.find({}).then(
            (data => res.status(200).json(data))
        )

    }
    catch(err){
        res.status(404).send("No data found")
    }
   
})

//add new booking
Router.post('/addBooking' , async (req,res)=>{
    try{
        const newBooking = await bookingModel.create({
            user_email : req.body.user_email,
            user_contact : req.body.user_contact,
            car_model : req.body.car_model,
            company : req.body.company,
            date_of_booking : req.body.date_of_booking,
            confirmation : req.body.confirmation,
        }).then((data) => res.status(201).json(data))
    }
    catch(err){
        console.log(err)
        res.status(500).send('Internal server error')
    }
   
})



//soft delete a booking
Router.put('/cancelConfirmation/:bookingId' , async(req,res)=>{
    try{
        const booking = await bookingModel.findOneAndUpdate({_id : req.params.bookingId} , {confirmation : false}).then(
            data => res.status(201).json(data)
        )
    }
    catch(err){
        res.status(400).send("Internal server error")

    }
})


//update booking details
Router.put('/updateBooking/:bookingId' , async (req,res)=>{
    try{

        const bookingDetails = await bookingModel.findOneAndUpdate({_id:req.params.bookingId} , {
            user_email : req.body.user_email,
            user_contact : req.body.user_contact,
            car_model : req.body.car_model,
            company : req.body.company,
            date_of_booking : req.body.date_of_booking,
            confirmation : req.body.confirmation,
        }).then(data => res.status(201).json(data))

    }
    catch(err){
        res.status(400).send("Internal Server Error")

    }
} )



module.exports = Router