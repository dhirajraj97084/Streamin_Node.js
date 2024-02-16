const http=require('http');
const fs=require('fs');

const server=http.createServer();  //create http server.

server.on('request',(req,res)=>{   
    // 
    const rstream=fs.createReadStream('text.txt'); 
     rstream.pipe(res);    
})

server.listen(8082,'127.0.0.1');