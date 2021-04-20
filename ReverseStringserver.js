var net = require('net');
var clients = 0;

function ReverseString(str) {

    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;

}

var server = net.createServer(function(client) {

    console.log('Client Connected');

    client.on('end', function() {
        console.log('Client disconnected:');
    })

    client.on('data', function(data) {
        client.write(ReverseString(data.toString()));
    })
});

server.listen(8000, function() {
    console.log('Server Started on port 8000');
})