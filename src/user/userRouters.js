const { Router } = require('express');
const { createUser, readUsers, updateUser, deleteUser, loginUser} = require("./userControllers");
const {hashPass, tokenCheck, comparePass} = require('../middleware');

const userRouter = Router()

userRouter.get("/readUser", readUsers);
userRouter.post("/createUser", hashPass, createUser);
userRouter.post("/loginUser",comparePass, loginUser)
userRouter.get("/loginUser",tokenCheck, loginUser)
userRouter.put("/updateUser", updateUser );
userRouter.delete("/deleteUser/:username", deleteUser);
//TODO: Add update and delete routes here. 

module.exports = userRouter