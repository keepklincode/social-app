const User = require("../model/user");

const getAllUser = async (req, res, next)=> {
    let users;
    try {
        users = await User.find();     
    } catch (error) {
        console.log(error);
        // return {
        //     status: false,
        //     message: "check getAllUser route"
        // }
    }
    
    if (!users){
        return res.status(400).json({message: "User not found"})
        // return {
        //     status: false,
        //     message: "user not found"
        // }
    }
    return res.status(200).json({users})
    // return {
    //     status: true,
    //     message: "user found",
    //     users
    // }
};

const signUp = async (req, res, next) =>{
    // console.log(req.body)
    try {
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({email});
    
    if(existingUser) {
        res.status(400).json({message: "Email already exist"})
    }
    const newUser = await User.create({
        name,
        email,
        password
    })
    await newUser.save();
    res.status(200).json({message: "successfully created"})

        
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "error on signUp route"})
        
    }
}

module.exports = {
    getAllUser,
    signUp
}