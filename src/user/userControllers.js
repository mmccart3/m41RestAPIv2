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

exports.updateUser = async (req, res) => {
    try {
        await User.updateOne(
            {username: req.body.username},
            {[req.body.key]: req.body.value}
        );
        res.status(200).send({message: "successfully update a user"})

    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }

}

exports.deleteUser = async (req, res) => {
    console.log(req.params)
    try {
        await User.deleteOne({username: req.params.username});
        res.status(200).send({message: "successfully deleted a user"})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.username, req.body.password)
        res.status(200).send({user: user.username })
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}
// TODO: add updateUser and deleteUser controllers here





