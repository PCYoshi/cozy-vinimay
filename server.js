var americano = require('americano');
var port = process.env.PORT || 3000;
var host = process.env.HOST || '0.0.0.0';
americano.start({
	name: 'Vinimay',
	root: __dirname + '/build',
	host: host,
	port: port
});