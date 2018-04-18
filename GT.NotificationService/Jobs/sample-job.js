var NotificationSocket = require('../Utilities/ConfigurationManager.js').getSocketConnection();

var Globals=require('../Utilities/Globals')

exports.showMessage = function(Agenda) {

	Agenda.define('CreateGame', function(job) {
		console.log('Create');
		NotificationSocket.emit('AtoS','CreateGame');
	});

	Agenda.define('StartGame', function(job) {
		NotificationSocket.emit('AtoS','StartGame');
	});

	Agenda.define('EndGame', function(job) {
		NotificationSocket.emit('AtoS','EndGame');
	});

	Agenda.define('Calculate', function(job) {
		NotificationSocket.emit('AtoS','Calculate');
	});

	Agenda.define('Backup', function(job) {
		NotificationSocket.emit('AtoS','Backup');
	});

}
