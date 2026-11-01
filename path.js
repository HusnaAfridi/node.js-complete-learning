//PATH MODDULES IN NODE.JS
// The path module provides utilities for working with file and directory paths.
//They are built in core module of node.js

const path=require("path");
const file ="text/husna.txt";
console.log(path.dirname(file));//text
console.log(path.extname(file));//.txt
console.log(path.basename(file));//husna.txt
console.log(path.resolve(file));//C:\Users\Super\Desktop\node.js\text\husna.txt
console.log(path.isAbsolute(file));//false//mean not full address
//=============================================
//GLOBAL CONSTANTS IN NODE.JS
//global constants are the constants which are available in node.js without importing.
//__dirname
 //__filename

 console.log(__dirname);//C:\Users\Super\Desktop\node.js
 console.log(__filename);//C:\Users\Super\Desktop\node.js\path.js


