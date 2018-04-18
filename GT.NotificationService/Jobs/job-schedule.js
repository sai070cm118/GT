
var sampleJob = require('./sample-job.js');

var Agenda = require('../Utilities/ConfigurationManager.js').getAgendaManager();

var NotificationSocket = require('../Utilities/ConfigurationManager.js').getSocketConnection();


exports.setupJobs = function() {

	sampleJob.showMessage(Agenda);

	Agenda.on('ready', function() {
		Agenda.every('1 seconds', 'CreateGame');
		Agenda.every('3 days', 'StartGame');
		Agenda.every('3 days', 'EndGame');
		Agenda.every('3 days', 'Calculate');
		Agenda.every('3 days', 'Backup');
		Agenda.start();
	});
}