const net = require('net');

const client = new net.Socket();
client.connect(3000, '192.168.0.16', function () {
    console.log('Connected');
    client.write('');
});

client.on('data',data => console.log(data.toString()))
