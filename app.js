const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const sqlite3 = require('sqlite3').verbose();

const PORT = process.env.PORT || 8080;

const server = http.createServer((req,res)=>{
  console.log('서버 오픈');
});

server.listen(PORT, (err)=>{
  if(err){
    throw new Error('에러가 발생하였수' + err);
  } else {
    console.log("서버가 열렸다도르");
    console.log(`http://localhost:${PORT}`);
  }
});