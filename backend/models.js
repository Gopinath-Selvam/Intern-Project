const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    validity: { type: Date, required: true }
})

const User = mongoose.model("User", userSchema)

module.exports = User;