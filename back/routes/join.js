const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const encryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(32).toString('hex');
    crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err, derivedKey) => {
      if (err) reject(err);
      resolve({
        salt,
        hash: derivedKey.toString('hex')
      });
    });
  });
};


var db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, function(error, client) {
    if (error) return console.log(error);
    db = client.db('login');
    console.log('db connect');
});

router.post('/', function (req, res) {
    const user = req.body;
    db.collection('generalUser').findOne({ _id: user._id}, function (error, result) {
        if (error) return console.log(error);
        if (!result) {
          encryptPassword(user.pw)
          .then(function(result){
            user.pw = result.hash;
            user.salt = result.salt;
            db.collection('generalUser').insertOne(user,function(error,result){
              if(error) return console.log(error);
              res.status(200).send(user);
              console.log(user);
            });
          });
          console.log('DB에 저장을 완료했어요~');
        }else {
          console.log('이미 존재하는 유저');
          res.status(400).send('아이디가 이미 존재합니다.');
        }
    });
});

module.exports = router;