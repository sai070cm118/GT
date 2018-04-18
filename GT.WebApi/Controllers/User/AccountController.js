
var express=require('express');
var Router=express.Router();
var _service=require('gtservice');

var RequestHandler = require('../../RequestHandler.js');
var winstonConsole=require('gtlogger');


Router.route('/')
    .post(function (req, res,next) {
        
        _service.AccountService.add({_id:req.body._id},function(result){
            req.result=result;
            next();
        });
    },RequestHandler);


Router.route('/:id')
  .get(function (req, res,next) {
    _service.AccountService.getById(req.params.id,function(result){
        req.result=result;
        next();
    });
},RequestHandler);

module.exports=Router;