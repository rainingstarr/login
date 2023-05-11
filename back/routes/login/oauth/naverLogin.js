const express = require('express');
const axios = require('axios');
const router = express.Router();

var db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, function(error, client) {
    if (error) return console.log(error);
    db = client.db('login');
});


router.post('/', function (req, res) {
  axios({
    method: 'get',
    url: 'https://openapi.naver.com/v1/nid/me',
    headers: {
      'Authorization': `Bearer ${req.body.accessToken}`
    }
  })
  .then((response) => {
    let data = response.data;
    const user = {
      _id: data.response.email,
      name: data.response.name,
      age: data.response.age
    };    
    db.collection('oauthUser').findOne({ _id: response.data.response.email }, function (error, result) {
      if (error) return console.log(error);
      if (!result) {
        db.collection('oauthUser').insertOne(user,function(error,result){
          if(error) return console.log(error);
          res.status(200).send(user);
        });        
        console.log('DB에 저장을 완료했어요~');
      }else {
        console.log('이미 존재하는 유저');
        res.status(200).send(user);
      }
    });
  })
  .catch((error) => {
    console.log(error);
    res.status(400).send('에러');
  });
});

router.get('/', function (req, res) {
  res.send('안녕 여기는 naverLogin 서버야~');
});

module.exports = router;