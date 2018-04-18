var express=require('express');
var Router=express.Router();
var _service=require('gtservice');



Router.route('/')
  .get(function (req, res) {

    
       _service.TransactionStatusService.getAll(function(result){
            if(result.error)
                res.status(500).json(result);
            else
                res.json(result);
       });
  })
  .post(function (req, res) {
    console.log(req.body);
    _service.TransactionStatusService.add(req.body,function(result){
            if(result.error)
                res.status(500).json(result);
            else
                res.json(result);
       });
  })
  .put(function (req, res) {
    var result= _service.TransactionStatusService.update(req.body,function(result){
            if(result.error)
                res.status(500).json(result);
            else
                res.json(result);
       });
  });


Router.route('/:id')
  .get(function (req, res) {
    _service.TransactionStatusService.getById(req.params.id,function(result){
        if(result.error)
            res.status(500).json(result);
        else
            res.json(result);
    });
    
  });



module.exports=Router;