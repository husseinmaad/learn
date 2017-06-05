var request = require('request');
var fs = require("fs");
var address = process.argv[2]

request("https://www.google.com/maps/embed/v1/place?key=AIzaSyDAB3gSgd0h0nhh1YWqyxE8kdN3sdpY8Rk&q=`${address}`",(err,res,body) =>{
  if (!err && res.statusCode == 200) {

   fs.writeFile("result.txt", body , function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
    }); 
  }
})



