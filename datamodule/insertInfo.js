const sqlite3 = require('sqlite3').verbose();

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('get','https://jsonplaceholder.typicode.com/todos');

xhr.send();



