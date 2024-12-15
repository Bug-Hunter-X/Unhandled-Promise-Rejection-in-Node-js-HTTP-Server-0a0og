const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//Error: Unhandled promise rejection
//The above error occurs when a promise is rejected and not handled by a '.catch' block. 
//This commonly occurs in asynchronous operations, especially those involving file systems or network requests.
//In this example, the error might be caused by an unhandled promise rejection within a part of the code not included in this snippet. 