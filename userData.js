module.export=(req,res)=>{     //module.export share file code
    let body ="";
    req.on('data',chunk =>body += chunk);
    req.on('end',()=>{
        const data = new URLSearchParams(body);
        res.end(`Name:${data.get('name')},Email:${data.get('email')}`);
    });
};