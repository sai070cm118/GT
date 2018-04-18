
var express = require('express');
var router = express.Router();
const path = require('path');
var ConfigurationManager = require('gtconfigurationmanager');
var ProxyService=require('gtproxyservice');
var MyConsole=require('gtlogger');

var passport= require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GithubStrategy = require('passport-github2').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var InstagramStrategy = require('passport-instagram').Strategy;
var LocalStrategy = require('passport-Local').Strategy;

const SecurityManager = require('gtsecuritymanager');
var CoreModels=require('gtcore');

passport.use(new FacebookStrategy({
  clientID: ConfigurationManager.getFacebookAuthStrategy().clientID,
  clientSecret: ConfigurationManager.getFacebookAuthStrategy().clientSecret,
  callbackURL: ConfigurationManager.getFacebookAuthStrategy().callbackDomain + ConfigurationManager.getFacebookAuthStrategy().callbackURI,
  profileFields: ['id', 'displayName', 'link',  'photos', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.use(new TwitterStrategy({
  consumerKey: ConfigurationManager.getTwitterAuthStrategy().consumerKey,
  consumerSecret: ConfigurationManager.getTwitterAuthStrategy().consumerSecret,
  callbackURL: ConfigurationManager.getTwitterAuthStrategy().callbackDomain + ConfigurationManager.getTwitterAuthStrategy().callbackURI,
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.use(new GithubStrategy({
  clientID: ConfigurationManager.getGithubAuthStrategy().clientID,
  clientSecret: ConfigurationManager.getGithubAuthStrategy().clientSecret,
  callbackURL: ConfigurationManager.getGithubAuthStrategy().callbackDomain + ConfigurationManager.getGithubAuthStrategy().callbackURI,
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.use(new GoogleStrategy({
  clientID: ConfigurationManager.getGooglePlusAuthStrategy().clientID,
  clientSecret: ConfigurationManager.getGooglePlusAuthStrategy().clientSecret,
  callbackURL: ConfigurationManager.getGooglePlusAuthStrategy().callbackDomain + ConfigurationManager.getGooglePlusAuthStrategy().callbackURI,
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.use(new InstagramStrategy({
  clientID: ConfigurationManager.getInstagramAuthStrategy().clientID,
  clientSecret: ConfigurationManager.getInstagramAuthStrategy().clientSecret,
  callbackURL: ConfigurationManager.getInstagramAuthStrategy().callbackDomain + ConfigurationManager.getInstagramAuthStrategy().callbackURI,
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.use(new LocalStrategy({
  usernameField: 'user.email',
  passwordField: 'user.Password',
  session: false
  },
  function(username, password, done) {
    ProxyService.GET('api/user/GetByEmail/asd',{username:username,password:password},function(err,response){
      if( response.data!=undefined){
        if(response.data.Id!=0){
          return done(null, user);
        }
        else{
          return done({message:'Invalid credentials.'});
        }
      }
      else{
        return done(response.error);
      }
    });
  }
));

//Catch all other routes and return the index file
router.get('/',function(req,res,next){
  next()
  }, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
  
router.get('/auth/facebook',
  passport.authenticate('facebook'),
  function(req, res){
});

router.get('/auth/google',
  passport.authenticate('google', { scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read'
  ] }
));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req,res,next){

    var fbProfile=req.user;
    profile={
      "Email":fbProfile.emails[0].value,
      "FirstName":fbProfile.displayName.split(' ')[0],
      "LastName":fbProfile.displayName.split(' ')[1],
      "ProfileName":fbProfile.displayName,
      "ProfilePic":fbProfile.photos[0].value,
      "User":{
        "RegistrationIP":"",
        "FacebookID":fbProfile.id
      }
    };

    SecurityManager.SocialLogin(profile,function(result){
      if(result == undefined){
          res.redirect('/login');
      }
      else{
          res.redirect('/login/'+result );
      }
    });
  }
);

router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/'}),function(req,res,next){
    var gPlusProfile=req.user;

    profile={
      "Email":gPlusProfile.emails[0].value,
      "FirstName":gPlusProfile.displayName.split(' ')[0],
      "LastName":gPlusProfile.displayName.split(' ')[1],
      "ProfileName":gPlusProfile.displayName,
      "ProfilePic":gPlusProfile.photos[0].value,
      "User":{
        "RegistrationIP":"",
        "GooglePlus":gPlusProfile.id
      }
    };

    SecurityManager.SocialLogin(profile,function(result){
      if(result == undefined){
          res.redirect('/login');
      }
      else{
          res.redirect('/login/'+result );
      }
    });
});

router.post('/Register',function(req,res,next){
  var registerProfile=req.body;
  profile={
    "Email":registerProfile.User.Email,
    "FirstName":registerProfile.ProfileName,
    "LastName":"",
    "ProfileName":registerProfile.ProfileName,
    "ProfilePic":"",
    "User":{
      "RegistrationIP":"",
      "PasswordHash":registerProfile.User.Password,
    }
  };

  SecurityManager.NewRegistration(profile,function(result){
    res.json({Token:result});
  });

});

router.post('/login',function(req,res,next){
  
  var profile=req.body;

  console.log(profile);


  SecurityManager.Login(profile.User,false,function(err,result){
    console.log(result);

    if(err)
      res.json({Token:''});
    else  if(result.error)
      res.json({Token:''});
    else
    res.json({Token:result.data});

  });
});

router.get('/login/:id',  function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

router.get('/verifyEmail/:Token',  function(req, res) {
  MyConsole.log(req.params.Token);
  console.log(req.params.Token);
  ProxyService.GET('api/user/VerifyEmail/'+req.params.Token,{},function(err,responseData){
    MyConsole.log(responseData);
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
});



router.get('/RecoverPassword/:Token',  function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


router.get('*',function(req, res){
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = router