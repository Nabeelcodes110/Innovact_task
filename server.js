const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const connectToMongoose = require('./Database/database')
const bookingRoutes = require('./Routes/booking')
const carRoutes = require('./Routes/car')
const companyRoutes = require('./Routes/company')
require('dotenv').config()
const port  = process.env.PORT || 5000


//database connnection
connectToMongoose()

//middlewares
app.use(cors())
app.use(bodyParser.json())

//Routes 
app.use('/api' , carRoutes)
app.use('/api' , bookingRoutes)
app.use('/api' , companyRoutes)
app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(port , ()=> console.log("server is running at port 5000"))