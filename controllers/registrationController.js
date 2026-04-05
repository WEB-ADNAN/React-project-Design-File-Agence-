const Registration = require('../models/registrationModels')

const registrationController = (req,res)=>{
    const {username,email,number} = req.body

    let user = new Registration({
        username:username,
        email:email,
        number:number
    })

    user.save()
    res.send(user)
}

module.exports = registrationController