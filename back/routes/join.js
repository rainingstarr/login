const express = require('express');
const router = express.Router();

var db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, function(error, client) {
    if (error) return console.log(error);
    db = client.db('login');
    console.log('db connect');
});

router.post('/', function (req, res) {
    console.log(req.body);
    const user = req.body;
    db.collection('generalUser').findOne({ _id: user._id}, function (error, result) {
        if (error) return console.log(error);
        if (!result) {
          db.collection('generalUser').insertOne(user,function(error,result){
            if(error) return console.log(error);
            res.status(200).send(user);
          });        
          console.log('DB에 저장을 완료했어요~');
        }else {
          console.log('이미 존재하는 유저');
          res.status(400).send('아이디가 이미 존재합니다.');
        }
    });
});

module.exports = router;