const passports = require("../models/user.schema");

const Cookie = async(req,res,next)=>{
    const {id} = req.cookies;
    if(id){
        let data = await passports.findById(id);
        if(data.username == "admin"){
            next()
        }
        else{
            res.send("only admin can access")
        }
    }
    else{
        res.redirect("login")
    }
}
// jo login hoy to data batavva mate
const isAuth = (req,res,next)=>{
    if(req.user){
        next()
    }
    else{
        res.redirect("login")
    }
}

module.exports ={Cookie , isAuth }