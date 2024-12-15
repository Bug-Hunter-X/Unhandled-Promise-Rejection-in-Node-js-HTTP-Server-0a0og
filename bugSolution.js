const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080)
  .on('error', err => {
    console.error('Server failed to start:', err);
  });

//Example of handling promise rejections
//  The following code snippet demonstrates how to handle promise rejections using .catch().
//This snippet does not directly relate to the http server example above, but is intended to help in general.
//  fs.readFile('./somefile.txt', 'utf8')
//    .then(data => {
//      console.log(data);
//    })
//    .catch(err => {
//      console.error('Failed to read file:', err);
//    });
