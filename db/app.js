var express = require('express')
var app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/group', function(req, res) {
	console.log(req.query.username);
	res.status(200).json({
		members: ['Holly'],
		player: ['Hannah'],
		admin: ['Donald'],
		id: ['PartyGroup1593'],
		name: ['PARTY GROUP']
	})
});

app.listen(3000)

/*const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))*/