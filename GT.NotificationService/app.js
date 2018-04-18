var express = require('express');
var NotificationSocket=require('./Utilities/ConfigurationManager.js').getSocketConnection();
var jobSchedule = require('./Jobs/job-schedule.js');
var NotificationApp = express();
var ConfigurationManager = require('gtconfigurationmanager');
	
jobSchedule.setupJobs();






module.exports = NotificationApp;