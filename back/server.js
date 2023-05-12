const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

var db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, function(error, client) {
  if (error) return console.log(error);
  db = client.db('login');
  app.listen(process.env.PORT, function() {
    console.log('listening on 8080');
  });
});

app.use('/naverLogin', require('./routes/login/oauth/naverLogin'));
app.use('/kakaoLogin', require('./routes/login/oauth/kakaoLogin'));
app.use('/login', require('./routes/login/login'));
app.use('/join',require('./routes/join'));




//--------------------visitor--------------------
app.get('/visitor',function(req,res){
  let todayVisitor;
  let totalVisitor;
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 0부터 시작하기 때문에 1을 더해줍니다.
  const date = today.getDate();
  const nowday = `${year}-${month}-${date}`;
  db.collection('visitor').findOne({_id: 'totalVisitor'}, function (error, result) {
    if (error) return console.log(error);
    totalVisitor = result.visitor + 1;
    db.collection('visitor').updateOne({_id: 'totalVisitor'}, {$inc:{visitor:1}}, function (error, result) {
      if (error) return console.log(error);
      console.log('total visitor +1 했습니다.');
    });
    db.collection('visitor').findOne({_id: nowday}, function (error, result) {
      if (error) return console.log(error);
      if (!result) {
        db.collection('visitor').insertOne({_id: nowday, visitor: 1},function(error,result){
          if(error) return console.log(error);
          console.log('DB에 visitor 새로 등록했습니다.');
          todayVisitor = 1;
        });        
      }else {      
        todayVisitor = result.visitor + 1;
        db.collection('visitor').updateOne({_id: nowday},{$inc:{visitor:1}},function(error,result){
          if(error) return console.log(error);
          console.log('today visitor +1 했습니다.');
        });
      }
      console.log({today: todayVisitor, total: totalVisitor});
      res.status(200).json({today: todayVisitor, total: totalVisitor});  
    });
  });
});
//--------------------visitor--------------------