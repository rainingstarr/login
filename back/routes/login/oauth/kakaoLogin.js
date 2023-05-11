const express = require('express');
const axios = require('axios');
const router = express.Router();

var db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, function(error, client) {
    if (error) return console.log(error);
    db = client.db('login');
});

router.post('/',function(req,res){
    axios({
        method: 'get',
        url: 'https://kapi.kakao.com/v2/user/me',
        headers: {
            'Authorization': `Bearer ${req.body.accessToken}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    })
    .then((response) => {
        let data = response.data;
        const user ={
            name: data.properties.nickname,
            _id: data.kakao_account.email,
            age: data.kakao_account.age_range
        }
        db.collection('oauthUser').findOne({ _id: data.kakao_account.email }, function (error, result) {
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
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).send('에러');
    });
});

router.get('/', function (req, res) {
    res.send('안녕 여기는 kakaoLogin 서버야~');
  });

module.exports = router;