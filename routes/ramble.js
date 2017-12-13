module.exports = app => {
	console.log('in app');
	app.get('/api/items', (req, res) => {
		console.log(req);
		res.send(req.body)
	});
}