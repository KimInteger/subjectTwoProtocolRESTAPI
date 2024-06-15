const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const sqlite3 = require('sqlite3').verbose();

const PORT = process.env.PORT || 8080;

const temp = require('./templatemodule/template');

const server = http.createServer((req,res)=>{
  if(req.url === '/') {
    res.writeHead(200,{"Content-type":'text/html; charset=UTF-8'});
    res.end(temp.basicTemp('test','/test.css','와 테스트','test.js'));
  } else if (req.url === '/test.css') {
    fs.readFile('./test.css',(err,data)=>{
      if(err){
        throw new Error('에러 발생');
      } else {
        res.writeHead(200,{"Content-Type":"text/css"});
        res.end(data);
      }
    });
    
  } else if (req.url === '/test.js') {
    fs.readFile('./test.js',(err,data)=>{
      if(err){
        throw new Error('에러 발생');
      } else {
        res.writeHead(200,{"Content-Type":"text/css charset=UTF-8"});
        res.end(data);
      }
    });
  } else if (req.url === '/favicon.ico') {
    return;
  } else {
    res.writeHead(404,{"Content-Type":"text/plain; charset=UTF-8"});
    res.end('페이지를 찾을 수 없습니다,');
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