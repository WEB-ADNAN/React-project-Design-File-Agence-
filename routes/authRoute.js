const express = require('express')
const router = express.Router()

router.post('/user', (req,res)=>{
    const {username,email,password,gender,age,country,city,phone,address} = req.body
    console.log(req.body);
    
})

module.exports = router