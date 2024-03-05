//Create a web server that's going to send a response of big image or small image when client sends a request of big.jpg or small.jpg.

const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    if (request.url === '/big.jpg') {
        fs.readFile('big.jpg', (err, data) => {
            response.end(data);
        });
    } else if (request.url === '/small.jpg') {
        fs.readFile('small.jpg', (err, data) => {
            response.end(data);
        });
    }
}).listen(3000);
