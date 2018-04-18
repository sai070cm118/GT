var express=require('express');
var Router=express.Router();
var _service=require('gtservice');



Router.route('/:GameId/:PreviousMessageId')
  .get(function (req, res) {
    _service.GameGroupService.getPreviousMessages(req.params.GameId,req.params.PreviousMessageId,function(result){
        if(result.error)
            res.status(500).json(result);
        else
            res.json(result);
    })
  });


  Router.route('/')
  .post(function (req, res) {
    _service.GameMessageService.add(req.body,function(result){
        if(result.error)
            res.status(500).json(result);
        else
            res.json(result.data);
    });
  });
  
module.exports=Router;