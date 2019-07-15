var http = require('http');
var express = require('express');
var app = express();
var server= https.Server(app)
var bodyParser = require('body-parser');
var mongo = require('mongodb');

var db_url = "mongo://localhost:27017"

mongo.MongoClient.connect(db_url, {useNewUrlParser: true},
  function(err, client){
    console.log("Could Not Connect DB")
  }else{
    db = client.db('node-cw9')
  }
  )

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

app.post('/article/new', function(req, res){
    console.log(req.body)
    db.createCollection('articles', function(err, collection){
      console.log(collection)
    })
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
