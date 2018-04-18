var express=require('express');
var Router=express.Router();
var _service=require('gtservice');



Router.route('/')
  .post(function (req, res) {
    _service.GameGroupService.createGroup(req.body,function(result){
        if(result.error)
            res.status(500).json(result);
        else
            res.json(result.data);
    });
  });


  Router.route('/AddParticipient')
  // create a user
  .post(function (req, res) {
    _service.GameGroupService.addParticipient(req.body.Id,req.body.participants,function(result){
        if(result.error)
            res.status(500).json(result);
        else
            res.json(result.data);
    });
  });

  
Router.route('/GetGroupById/:Id')
  // create a user
  .get(function (req, res) {
      
    console.log(req.params.Id);
    _service.GameGroupService.getGroupById(req.params.Id,function(result){
        if(result.error)
            res.status(500).json(result);
        else
            res.json(result.data);
    });
  });


  

module.exports=Router;