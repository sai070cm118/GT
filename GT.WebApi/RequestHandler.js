

var ErrorLogger=require('gterrorLogger');
var winstonConsole=require('gtlogger');

module.exports = function(req, res, next) {

    winstonConsole.log('debug',req.result.data.message);
    ErrorLogger.error('debug',req.result.data.message);
    
    res.json(req.result);

}