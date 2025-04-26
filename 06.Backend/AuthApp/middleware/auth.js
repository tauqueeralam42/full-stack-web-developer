const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.auth = (req,res,next) => {
    try{
        //extract jwt token
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");

        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token Missing'
            });
        }

        //verify token
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        }
        catch(err){
            return res.status(401).json({
                success : false,
                message:'token is invalid',
            })

        }
        next();

    }
    catch(err){
        return res.status(401).json({
            success:false,
            message:'Something went wrong'
        })
    }
}

exports.isStudent = (req,res,next) => {
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:'This is Protected route for Studet'
            })
        }
        next(); 
    }
    catch(err){
        return res.status(500).json({
            success : false,
            err,
            message : 'User role is not matching'
        })
    }
}

exports.isAdmin = (req,res,next) => {
    try{
        if(req.user.role != "Admin"){
            return res.status(401).json({
                success : false,
                message : "This is Protected route for Admin"
            })
        }
        next();

    }
    catch(err){
        return res.status(500).json({
            success : false,
            err,
            message : 'User role is not matching'
        })

    }
}