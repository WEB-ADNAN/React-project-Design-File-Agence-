const express = require('express')
const app = express()
const mongoose = require('mongoose')
const registrationController = require('./controllers/registrationController')
const alluserController = require('./controllers/alluserController')
const getMiddleware = require('./middleware/getmiddleware')

//middleware
app.use(express.json())


//Database connect
mongoose.connect('mongodb+srv://sami2502:1UURdyRP69D6NKsu@cluster0.8nf1qxl.mongodb.net/?appName=Cluster0').then(()=>{
    console.log('Database connected'); 
})

//Routes
app.post('/registration', registrationController)
app.get('/alluser', alluserController)
app.get('/getuser', getMiddleware)

//Server port
app.listen(5000,()=>{
    console.log('server is runing');
    
})

// Express Setup
// 2. Database Setup -> MongoDB
// 3. Data Database kivabe pathay ar data database theke kivabe ase
// 4. get middleware
// 5. Swagger Add