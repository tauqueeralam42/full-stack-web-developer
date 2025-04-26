const User = require("../models/user")

async function handleGetAllUsers(req,res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req,res){
    const id = req.params.id;
    //const user = users.find( (user) => user.id === id);

    const user = await User.findById(id);
    return res.json(user);
}

async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id, {lastName : "Changed"});
    return res.json({status : "Succesful"});
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "Success"});
}

async function handleCreateNewUser(req,res){
   //Using File 
   const body = req.body;
   // users.push({...body, id : users.length+1});
   // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
   //     return res.json({status : "Succes"});
   // });

//Using MongoDB
   const result = await User.create({
   firstName : body.first_name,
   lastName : body.last_name,
   email : body.email,
   gender : body.gender,
   jobTitle : body.job_title,
});

console.log(result);

return res.status(201).json({ message : "User is created Succesfully"});
  
}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}