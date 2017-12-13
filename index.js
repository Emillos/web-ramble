const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/user');
require('./models/loadout');
require('./models/item');


mongoose.connect(keys.mongoURL);
const app = express();

require('./routes/ramble')(app);

if(process.env.NODE_ENV === 'production'){
	// make sure express serve up production assets
	// like main.js and main.css
	app.use(express.static('client/build'));

	// espress will serve up index.html
	// if route isn't recognized
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT  = process.env.PORT || 5000
app.listen(PORT);