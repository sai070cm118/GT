var express=require('express');
var Router=express.Router();
var _service=require('gtservice');



Router.route('/:GroupId/:PreviousMessageId')
    //get
  .get(function (req, res) {
    _service.UserGroupService.getPreviousMessages(req.params.GroupId,req.params.PreviousMessageId,function(result){
        if(result.error)
            res.status(500).json(result);
        else
            res.json(result);
    })
  });

  Router.route('/')
  // create a user
  .post(function (req, res) {
      console.log(req.body);
    _service.MessageService.add(req.body,function(result){
        if(result.error)
            res.status(500).json(result);
        else{
            res.json(result.data);
        }
    });
  });
  
module.exports=Router;