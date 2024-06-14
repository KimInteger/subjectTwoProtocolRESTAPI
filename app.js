const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const sqlite3 = require('sqlite3').verbose();

const PORT = process.env.PORT || 8080;

const server = http.createServer((req,res)=>{
  console.log(req.url);
  console.log(req.method);
  if(req.url === '/'){
    fs.readFile('./index.html',(err,data)=>{
      if(err){
        res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
        res.end('서버 자체 에러');
        return;
      } else {
        res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
        res.end(data);
      } 
    });
  } else {
    res.writeHead(404,{"Content-Type":"text/plain; charset=UTF-8"});
    res.end('페이지를 찾을 수 없습니다');
  }
});

server.listen(PORT, (err)=>{
  if(err){
    throw new Error('에러가 발생하였수' + err);
  } else {
    console.log("서버가 열렸다도르");
    console.log(`http://localhost:${PORT}`);
  }
});