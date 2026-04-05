const Registration = require('../models/registrationModels')

const alluserController = async (req,res)=>{
    let alluser = await Registration.find({})
    res.send(alluser)
}

module.exports = alluserController