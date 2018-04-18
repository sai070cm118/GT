

var express=require('express');
var Router=express.Router();
var _service=require('gtservice');


Router.route('/GetPaidRunningGames')
    .get(function (req, res,next) {
        _service.GameService.GetPaidRunningGames(function(result){
            if(result.error)
                res.status(500).json(result);
            else
                res.json(result.data);
        });
    });


Router.route('/GetFreeRunningGames')
    .get(function (req, res,next) {
        _service.GameService.GetFreeRunningGames(function(result){
            if(result.error)
                res.status(500).json(result);
            else
                res.json(result.data);
        });
    });
    

    

module.exports=Router;