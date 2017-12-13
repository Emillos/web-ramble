const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
	itemName: String
});

module.exports = itemSchema;