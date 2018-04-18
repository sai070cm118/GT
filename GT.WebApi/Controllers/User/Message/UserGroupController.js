var express=require('express');
var Router=express.Router();
var _service=require('gtservice');



Router.route('/')
  // create a user
  .post(function (req, res) {
    _service.UserGroupService.createGroup(req.body,function(result){
        if(result.error)
            res.status(500).json(result);
        else
            res.json(result.data);
    });
  });


  Router.route('/AddParticipient')
  // create a user
  .post(function (req, res) {
    _service.UserGroupService.addParticipient(req.body.Id,req.body.participants,function(result){
        if(result.error)
            res.status(500).json(result);
        else
            res.json(result.data);
    });
  });

  
Router.route('/GetGroupById/:GroupId')
  .get(function (req, res) {
    _service.UserGroupService.getGroupById(req.params.GroupId,function(result){
        if(result.error)
            res.status(500).json(result);
        else
            res.json(result.data);
    });
  });


  Router.route('/GetGroupsByUserId/:UserId')
  .get(function (req, res) {
      console.log(req.params.UserId);
    _service.UserGroupService.getUserGroups(req.params.UserId,function(result){
        if(result.error)
            res.status(500).json(result);
        else
            res.json(result.data);
    });
  });

  

module.exports=Router;