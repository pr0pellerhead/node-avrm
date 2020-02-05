let c1 = require('./classes/c1');
var fetch = require('node-fetch');

let f = c1.c2f(14);
console.log(f);

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));