const User = require('./userModel');

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).send({user: "user has been created"})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.readUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({user: users})

    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}
// TODO: add updateUser and deleteUser controllers here





