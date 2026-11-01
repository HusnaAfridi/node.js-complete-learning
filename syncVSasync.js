//mostly programming languages are synchronous like javascript,but it can be run asynchronous.
//synchronous mean 1 task run at a time....it takes more time
//asynchronous mean next task does not wait for previous task to complete,is runs....it takes less time.
//js and node are synchronous by default.

//synchronous
console.log("task1");
console.log("task2");
console.log("task3");

//asynchronous
console.log("task1");
setTimeout(() => {
    console.log("task2");
}, 2000);
console.log("task3");

//async in node js   //file reading
const fs = require("fs");
fs.readFile("text/husna.txt","utf-8",(error,data)=>{
if(error){
    return false
} console.log(data);
});console.log("end script");

//sync in node js
const data = fs.readFileSync("text/husna.txt","utf-8");
console.log(data);
console.log("end script");

//working of node js
//call stack;code is executed here line by line.LIFO(last in(function) first out)
//node APIs gets task like set timeout,fs.readfile or promises so call stack does not get block
//Event loop checks the call stack empty or not if ,then it pushes task of node api into call stack
//code => call stack => node API => Event loop
 