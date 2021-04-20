var net = require('net');
var clients = 0;

function checkArmstrong(number) {
    let sum = 0;
    
    // create a temporary variable
    let temp = number;
    while (temp > 0) {
        
        // finding the one's digit
        let r = temp % 10;
        sum += r * r * r;
    
        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
    // check the condition
    if (sum == number) {
        return number+ ' is an Armstrong number'
    }
    else {
        return number+ ' is not an Armstrong number'
    }
}


var server = net.createServer(function(client) {

    console.log('Client Connected');

    client.on('end', function() {
        console.log('Client disconnected:');
    })

    client.on('data', function(data) {
        client.write(checkArmstrong(data.toString()));
    })
});

server.listen(8000, function() {
    console.log('Server Started on port 8000');
})