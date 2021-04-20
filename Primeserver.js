var net = require('net');
var clients = 0;

function checkPrime(n) {

   // Corner case
    if (n <= 1){
        return (n+' is not Prime');
    }
    // Check from 2 to n-1
    for (let i = 2; i < n; i++){
        if (n % i == 0){
            return (n+' is not a Prime');
        }
    }
    return (n+' is a Prime');
}


var server = net.createServer(function(client) {

    console.log('Client Connected');

    client.on('end', function() {
        console.log('Client disconnected:');
    })

    client.on('data', function(data) {
        client.write(checkPrime(data));
    })
});

server.listen(8000, function() {
    console.log('Server Started on port 8000');
})