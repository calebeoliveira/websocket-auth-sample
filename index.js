var fs = require('fs');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var jwt = require('jsonwebtoken');
var ioJwt = require('socketio-jwt');


var secretKey = fs.readFileSync(__dirname+'/key_sample.pem');

server.listen(8000);

app.get('/login', function(req, res) {
	// TODO: Some auth logic
	var user = {
		id: 1
	};

	jwt.sign(user, secretKey, {algorithm: 'HS512', expiresIn: '2 years'}, function(token) {
		res.json({token: token});
	});
});

app.get('/', function (req, res) {
	res.sendFile(__dirname+'/views/index.html');
});

io.use(ioJwt.authorize({
	secret: secretKey,
	handshake: true
}));

io.on('connection', function (socket) {
	console.log('Connected: ', socket.decoded_token.id);
	socket.emit('notifications', {text: 'Hi! Have a nice day!'});
});