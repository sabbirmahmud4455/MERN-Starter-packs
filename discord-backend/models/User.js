const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	mail: {type: String, unique: true},
	mail: {type: String},
	password: {type: String}
})

module.exports = mongoose.model("user", userSchema);