const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//signup
exports.signup = async (req,res) => {
    try{
        const {name,email,password,role} = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already Exists'
            });
        }

        //hash password
        let hashPassword;
        try{
            hashPassword = await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:'Error in hashing Passowrd'
            })
        }

        //create new user in Db
        const user = await User.create({
            name,email,password:hashPassword,role
        })

        return res.status(200).json({
            success:true,
            message:'User Created Successfully',
        });


    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:'User is not register...! Please try again'
        })
    }
}

//login
exports.login = async (req,res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success : false,
                message:"Please enter all the details"
            });
        }

        //check in db for register user
        let user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user is not a valid user"
            })
        }

        //verify password
        if(await bcrypt.compare(password,user.password)){
            const payload = {
                email:user.email,
                id:user._id,
                role:user.role,
            }
            let token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});
            user = user.toObject();
            user.password = null;
            user.token = token;


            res.cookie("token",token, {
                expires : new Date(Date.now() + 30000),
                httpOnly : true,
            }).status(200).json({
                success:true,
                token : token,
                user : user,
                message : "User is login successfully"
            })

        }
        else{
            return res.status(403).json({
                success:false,
                message:"Wrong Password"
            })
        }

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Not able to login"
        })
    }
}