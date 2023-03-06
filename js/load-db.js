localStorage['remote_couchdb'] = 'https://database.ebo-sursy.eu/couchdb/';
localStorage['db_loaded'] = '0';
/*localStorage.removeItem('chauves_souris_capturees_transvihmi_guinee_count');
localStorage.removeItem('chauves_souris_capturees_transvihmi_cameroun_count');
localStorage.removeItem('chauves_souris_non_invasives_transvihmi_count');
localStorage.removeItem('viande_de_brousse_transvihmi_count');

localStorage.removeItem('chauves_souris_capturees_mivegec_count');
localStorage.removeItem('chauves_souris_non_invasives_mivegec_count');
localStorage.removeItem('viande_de_brousse_mivegec_count');

localStorage.removeItem('chauves_souris_capturees_astre_count');
localStorage.removeItem('chauves_souris_non_invasives_astre_count');

localStorage.removeItem('grands_singes_antilopes_transvihmi_cameroun');
localStorage.removeItem('grands_singes_antilopes_transvihmi_rdc');
localStorage.removeItem('grands_singes_antilopes_transvihmi_rca');
localStorage.removeItem('grands_singes_antilopes_transvihmi_rwanda');*/

localStorage.removeItem('step');
	
var remote_couchdb = localStorage.getItem('remote_couchdb');

var localDB = new PouchDB('username');
var remoteDB = new PouchDB(remote_couchdb + 'username', {skip_setup: true});
			
localDB.sync(remoteDB).on('complete', function(info) {              
	load_db_equipe();
}).on('error', function (err) {
	// error while replicating
	alert('alert username: ' + JSON.stringify(err));
	window.location = 'login.html';
});

function load_db_equipe() {
	var localDB = new PouchDB('equipe');
	var remoteDB = new PouchDB(remote_couchdb + 'equipe', {skip_setup: true});
	
	localDB.sync(remoteDB).on('complete', function(info) {              
		load_version();
	}).on('error', function (err) {
		// error while replicating
		alert('alert equipe: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

function load_version() {
	var localDB = new PouchDB('version');
	var remoteDB = new PouchDB(remote_couchdb + 'version', {skip_setup: true});
	
	localDB.sync(remoteDB).on('complete', function(info) {              
		window.location = 'login.html';
	}).on('error', function (err) {
		// error while replicating
		alert('alert version: ' + JSON.stringify(err));
		window.location = 'login.html';
	});
};

