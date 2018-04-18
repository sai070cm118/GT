var express = require('express')
var app = express()
var uuid = require('uuid');
var nJwt = require('njwt');





app.get('/', function (req, res) {
	
var claims = {
 "sub": "1234567890",
 "name": "John Doe",
 "admin": true,
 "jti": "4f5dad0a-8f4e-4604-9f48-059e1c680d2f",
 "iat": 1492434898,
 "exp": 1492438498
}

var jwt = nJwt.create(claims,"secret0168","HS256");
var token = jwt.compact();
  res.send(token)
})

app.get('/get', function (req, res) {
	nJwt.verify('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjRmNWRhZDBhLThmNGUtNDYwNC05ZjQ4LTA1OWUxYzY4MGQyZiIsImlhdCI6MTQ5MzQzNDg5OCwiZXhwIjoxNDkyNjIwOTU3fQ.kmQjrpRgcbidkq1-Wl1ortOvhcp0ZJVh-v8kjFNfHFE','secret0168',function(err,verifiedJwt){
	  if(err){
		console.log(err); // Token has expired, has been tampered with, etc
		res.send(err)
	  }else{
		console.log(verifiedJwt); // Will contain the header and body
		res.send(verifiedJwt)
	  }
	});
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

