
var express=require('express');
var Router=express.Router();
var _service=require('gtservice');

var RequestHandler = require('../../RequestHandler.js');
var winstonConsole=require('gtlogger');


Router.route('/')
    .post(function (req, res,next) {

        console.log(req.body);
        _service.GamePositionService.add(req.body,function(result){
            req.result=result;
            next();
        });
    },RequestHandler);


Router.route('/:id')
  .get(function (req, res,next) {
    _service.GamePositionService.getById(req.params.id,false,function(result){
        req.result=result;
        next();
    });
},RequestHandler);


Router.route('/Free/:id')
  .get(function (req, res,next) {
    _service.GamePositionService.getById(req.params.id,true,function(result){
        req.result=result;
        next();
    });
},RequestHandler);


Router.route('/GetByGame/:id')
.get(function (req, res,next) {
  _service.GamePositionService.getByGameId(req.params.id,function(result){
      req.result=result;
      next();
  });
},RequestHandler);



module.exports=Router;