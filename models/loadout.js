const mongoose = require('mongoose');
const { Schema } = mongoose;
const ItemSchema = require('./item');

const loadoutSchema = new Schema({
	items:[ItemSchema],
	_user:{type:Schema.Types.ObjectId, ref: 'User'}
})

mongoose.model('items', loadoutSchema);