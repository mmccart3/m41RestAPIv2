const { Router } = require('express');
const { createUser, readUsers} = require("./userControllers");

const userRouter = Router()

userRouter.get("/readUser", readUsers);
userRouter.post("/createUser", createUser)
//TODO: Add update and delete routes here. 

module.exports = userRouter