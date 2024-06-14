const sqlite3 = require('sqlite3').verbose();

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('get','https://jsonplaceholder.typicode.com/todos');

xhr.send();

xhr.addEventListener('load',()=>{
  if(xhr.status === 200){
    let result = xhr.responseText;
    let data = JSON.parse(result);
    console.log(data);
    
    
  } else {
    throw new Error('에러가 발생:' + xhr.status);
  }
});




