var net = require('net');
var clients = 0;

function CalculateSum(value) {

    var sum = 0;

    while (value !=0) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }
    
    return 'Sum :' +sum;
}

var server = net.createServer(function(client) {

    console.log('Client Connected');

    client.on('end', function() {
        console.log('Client disconnected:');
    })

    client.on('data', function(data) {
        client.write(CalculateSum(data.toString()));
    })
});


server.listen(8000, function() {
    console.log('Server Started on port 8000');
})