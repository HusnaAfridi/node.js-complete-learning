const http=require("http");
const arg=process.argv;//store argument from given command line(terminal say input leny ka array)
console.log(arg);//argv mean argument vector
const port=arg[5];//5 is the index of port i.e 3000
http.createServer((req,resp)=>{
    resp.write("testing input from cmd");
    resp.end();
}).listen(port)
console.log("server running on port" + port);