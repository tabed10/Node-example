var http = require('http');
var express = require('express');
var app = express();
var server= https.Server(app)
var bodyParser = require('body-parser');

app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})
app.get('/second',function(req,res){
    res.sendFile(__dirname+'/second.html')
})
app.get('/form',function(req,res){
  res.sendFile(__dirname+'/second.html')
})

app.post('/article/new', function(){
    console.log(req.body)
})
// var server = http.createServer(function(req, res){
//   res.statusCode = 200;
//   sre.setHeader('Content-Type', 'text/html');
//   fs.readFile('index.html', function(err,data){
//     if (err){
//        return console.log("File read error")
//     }  
    
//     res.end(data);
//   })
// });
server.listen(3000, 'localhost', function(){
  console.log('Server running');
});
