const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: {type: Number, default: 1},
	score: {type: Number, default: 0}
})

mongoose.model('users', userSchema);