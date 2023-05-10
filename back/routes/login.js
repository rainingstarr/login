const express = require('express');
const axios = require('axios');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

var db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, function(error, client) {
    if (error) return console.log(error);
    db = client.db('login');
    console.log('db connect');
});

router.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
router.use(passport.initialize());
router.use(passport.session());

router.get('/', function (req, res) {
    res.send('안녕 여기는 login 서버야~');    
});

// router.get('/mypage',로그인했니,function(req,res){
//     console.log(req.user);
//     res.render('mypage.ejs',{사용자 : req.user});
// });

// function 로그인했니(req,res,next){
//     if (req.user){
//         next()
//     }else{
//         res.send('로그인안하셧는데요?')
//     }
// }

passport.use(new LocalStrategy({
  usernameField: 'id',
  passwordField: 'pw',
  session: true,
  passReqToCallback: false,
}, function (입력한아이디, 입력한비번, done) {
  db.collection('generalUser').findOne({id: 입력한아이디}, function (에러, 결과) {
    if (에러) return done(에러);
    if (!결과) return done(null, false, { message: '존재하지않는 아이디요' });
    if (입력한비번 == 결과.pw) {
      return done(null, 결과);
    } else {
      return done(null, false, { message: '비번틀렸어요' });
    }
  });
}));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function (아이디, done) {
    db.collection('generalUser').findOne({id: 아이디}, function (에러, 결과) {
        done(null, 결과);
    });
});
router.post('/', passport.authenticate('local', {failureRedirect: '/fail'}), function(req, res) {
    res.redirect('/');
});



module.exports = router;