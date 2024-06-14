const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../database/info.db');

db.run("CREATE TABLE IF NOT EXISTS info (userId INTEGER NOT NULL, id INTEGER NOT NULL, title TEXT NOT NULL)",(err)=>{
  if(err){
    throw new Error('테이블 생성 실패');
  } else {
    console.log('테이블 생성');
  }
});

db.close();