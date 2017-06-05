// 98430de3

var request = require('request');
request('https://api.github.com/users/husseinmaad',(err,res,body) =>{
  if (!err && res.statusCode == 200) {
    console.log(body)
    console.log(JSON.parse(body));
  }
})

// exports.fs = require("fs");

// fs.readFile('data.txt', (err,data) =>{
//     console.log(data.toString());
// })