
var express=require('express');
var Router=express.Router();
var _service=require('gtservice');

var RequestHandler = require('../../RequestHandler.js');
var winstonConsole=require('gtlogger');


Router.route('/')
    .get(function (req, res,next) {
        _service.AppGameService.getAll(function(result){
            if(result.error)
                res.status(500).json(result);
            else
                res.json(result.data);
        });
    })
    .post(function (req, res,next) {
        _service.AppGameService.add(req.body,function(result){
            req.result=result;
            next();
        });
    },RequestHandler);


Router.route('/:id')
  .get(function (req, res,next) {
    _service.AppGameService.getById(req.params.id,function(result){
        req.result=result;
        next();
    });
},RequestHandler);

module.exports=Router;