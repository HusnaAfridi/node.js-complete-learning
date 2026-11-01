//c=create
//r=read
//u=update
//d=delete(file or data)
const fs=require('fs');
//create a file
fs.writeFileSync("../files/general.txt","This is created by Husna");
//read a file
console.log(fs.readFileSync("../files/general.txt","utf8"));
//update a file
fs.writeFileSync("../files/general.txt","This is an updated file created by Husna");
//delete a file
fs.unlinkSync("../files/general.txt");
//==================================================================================
//GIVING INPUT THROUGH TERMINAL
const fs=require('fs');                //argv means argument vector, it is an array.
const operation=process.argv[2];       //argv mean taking input from terminal
const name=process.argv[3];
const content=process.argv[4];
//CREATE FILE
if(operation == 'write'){
    fs.writeFileSync(`../files/${name}`, content);
    console.log('File created successfully');//in terminal type: node crud.js write <filename> <content>
}
//READ FILE
else if(operation == 'read'){
    const data=fs.readFileSync(`../files/${name}`,"utf8");
    console.log(data);                         //in terminal type: node crud.js read <filename>//output <content>
}
//UPDATE FILE
else if(operation == 'update'){
    fs.writeFileSync(`../files/${name}`, content); //in terminal type: node crud.js update <filename> <content>
    console.log('File updated successfully');
}
//DELETE FILE
else if(operation == 'delete'){
    fs.unlinkSync(`../files/${name}`);
    console.log('File deleted successfully');//in terminal type: node crud.js delete <filename>//file will be deleted
};
