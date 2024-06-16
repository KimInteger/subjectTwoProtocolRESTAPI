const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const sqlite3 = require('sqlite3').verbose();

const PORT = process.env.PORT || 8080;

const temp = require('./templatemodule/template');

const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.method === 'GET'){
    if(req.url === '/') {
      fs.readFile('./index.html',(err,data)=>{
        if(err){
          throw new Error('에러 발생');
        } else {
          res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
          res.end(data);
        }
      });
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
  } else if ( req.method === 'POST'){
    if(req.url === '/readDB') {
      let testA = [];
      async function a() {
        const db = new sqlite3.Database('./database/info.db');
        db.all("SELECT * FROM info",(err,rows)=>{
          if(err){
            throw new Error('에러가 발생');
          } else {
            rows.forEach((row)=>{
              testA.push(row);
            });
            console.log(JSON.stringify(testA,null,2));
  
          }
        });
        db.close();
      }
      a();
      res.writeHead(200,{"Content-Type":'text/plain; charset=UTF-8'});
      res.end(temp.basicTemp('테스트','/test.css',JSON.stringify(testA,null,2)),'/test.js');
    } else {
      res.writeHead(404,{"Content-Type":"text/plain; charset=UTF-8"});
      res.end("페이지를 찾을 수 없습니다.");  
    }
  } else {
    res.writeHead(404,{"Content-Type":"text/plain; charset=UTF-8"});
    res.end("페이지를 찾을 수 없습니다.");
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