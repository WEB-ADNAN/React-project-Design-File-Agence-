
const getMiddleware = function(req,res,next){
    console.log(req.headers.authorization);
    
    if(req.headers.authorization === "12345678"){
        res.send("verification done")
    }else{
        res.send({
            message:"you do not have the authorization"
        })
    }
}
module.exports = getMiddleware