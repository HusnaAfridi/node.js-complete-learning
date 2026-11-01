const http=require("http");
const fs=require("fs");
const querystring=require("querystring");
const server=http.createServer((req,res)=>{
   if (req.url === "/"){
     res.writeHead(200,{"Content-Type":"text/html"});
res.end(fs.readFileSync("form.html"));

}
 else if(req.url==="/submit"){
    let dataBody =[];
    req.on("data",chunk =>{
        dataBody.push(chunk);
    });
    req.on("end",()=>{
        let rawData = Buffer.concat(dataBody).toString();
        let readableData=querystring.parse(rawData);
        console.log(readableData);

        //creating file through synchronous method
let dataString="My name is "  +readableData.name   +  " and my friend name is " + readableData.friendname;
console.log(dataString);
fs.writeFileSync("text/" + readableData.name + ".txt" , dataString);
console.log('File Created');
        res.writeHead(200,{"Content-Type":"text/html"});
    res.end(`<h1>CONGRATULATION! YOU ARE NOW FRIENDS</h1>
    <p>Your friendship request has been submitted.</p>`);
    });
};
});server.listen(3200);
console.log("server running on port 3200");
