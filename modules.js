//module is a block of code used to achieve a specific task.
//there are three types of module 1.core module 2.third party module 3.custom module
//core module are present by default but import

const fs =require("fs");
const os=require("os");
console.log(os.platform());//win32
console.log(os.arch());//x64
console.log(os.freemem());//753127424
console.log(os.totalmem());//1073741824
console.log(os.hostname());//DESKTOP-TGHFURI
console.log(os.type());//Windows_NT
console.log(os.release());//10.0.19041
console.log(os.cpus());//[ { model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
//================================================================================
//THIRD PARTY MODULE
//third party module are not present by default but we can install them using npm
//npm is a package manager for node.js
//===============================================================================
//CUSTOM MODULE
//custom module are created by the user to achieve a specific task,made by the user and can be used in other files
//=================================================================================
//GLOBAL OBJECTS
//global objects are objects that are available in all modules and can be accessed without importing them
console.log("abc");//abc
console.log(process.cwd());//C:\Users\DELL\Desktop\nodejs
console.log(process.pid);//12364
//==============================================================================
//global objects forcefully imported
const {log}=require("console");
log("hello world");//hello world
//=======================================================================
//JS CONSOLE VS NODE CONSOLE
//JS console is used to print the output in the browser console but node console is used to print the output in the terminal

