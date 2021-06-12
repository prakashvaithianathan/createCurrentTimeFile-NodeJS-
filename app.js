const fs=require('fs');
const path = require('path');
const express=require('express');
const app= express();




app.get(`/`,(req, res) =>{
  res.send('welcome')
})


  app.get('/data',(req, res) =>{

    const timeStamp=Date.now();


    var date = new Date().toDateString();
    
    var dateCheck = new Date();
    var hour = dateCheck.getHours();
    var minute = dateCheck.getMinutes();
    var second = dateCheck.getSeconds();
    
    const time = `(${hour}-${minute}-${second})`

    fs.open(`${__dirname}/files/${date+time}.txt`,'w+', function (err) {
      if (err) throw err;
      res.send('File is created successfully.');
    });
    fs.writeFile(`${__dirname}/files/${date+time}.txt`,timeStamp.toLocaleString(), function (err) {
      if (err) throw err;
    });
      
  })


  
  app.listen(5000,()=>{
    console.log('server started');
  });
  