//uploading a file through node.js
import express from 'express'
import multer from 'multer'

const app=express()
const storage=multer.diskStorage({
    destination:(req,file,cb)=> cb(null,'upload/'),
    filename:(req,file,cb)=> cb(null,Date.now()+'-'+file.originalname)
})
const upload=multer({storage})

//for form in browser
app.get("/",(req,resp)=>{
    resp.send(`
      <h1>File upload form</h1>
      <form action="/upload" method="post" enctype="multipart/form-data">
<input type="file" name="file"/>
<button type="submit">Upload</button> 
</form>
 `)
})
app.post("/upload",upload.single("file"),(req,resp)=>{
    resp.send("file uploaded")
})
app.listen(3200,()=> 
    console.log("server is running"))