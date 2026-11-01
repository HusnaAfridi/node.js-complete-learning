//creating server on nodejs is used to create a web application that can handle requests and responses from clients.
//  It allows us to build APIs, serve static files, and manage routing for different endpoints.
//  Node.js provides the 'http' module to create a server
//  http listens for incoming requests and sends back appropriate responses. 
// This is essential for building scalable and efficient web applications.
const http=require("http");
http.createServer((req, res) => {
      // res.write("HELLO HUSNA!!You have created your first server on nodejs");
       res.write("<h1>HELLO HUSNA!!You have created your first server on nodejs</h1>");
    res.end();
}).listen(2006, () => {
    console.log("server is running on port 2006");
});
//request and response are two parameters use in client server architecture.
//to start server again press ctrl+c or kill terminal and then node server.js.
