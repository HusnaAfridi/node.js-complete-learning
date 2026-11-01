//SERVER RESPONSE
const http=require("http");
const age=19;
http.createServer((req, res) => {
    Response.setHeader("Content-type","text/html");
       res.write(`
        <html>
        <head>
        <title>CODE WITH HUSNA</title>
        </head>
        <body>
        <h1>HELLO HUSNA AFRIDI</h1>
        </body>
        </html>
        `);
    res.end();
}).listen(3000, () => {
    console.log("server is running on port 3000");
});

