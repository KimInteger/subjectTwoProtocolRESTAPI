const sqlite3 = require('sqlite3').verbose();

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('get','https://jsonplaceholder.typicode.com/todos');

xhr.send();

xhr.addEventListener('load',()=>{
  if(xhr.status === 200){
    let result = xhr.responseText;
    let data = JSON.parse(result);

    let db = new sqlite3.Database('../database/info.db');

    db.serialize(()=>{
      const stmt = db.prepare('INSERT INTO info (userId, id, title) VALUES(?, ?, ?)');

      data.forEach((item)=>{
        stmt.run(item.userId,item.id,item.title);
      });

      stmt.finalize();
    });
    db.close();
    
  } else {
    throw new Error('에러가 발생:' + xhr.status);
  }
});




