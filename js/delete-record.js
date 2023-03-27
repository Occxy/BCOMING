var remote_couchdb = localStorage.getItem('remote_couchdb');
var delete_record_table = localStorage.getItem('delete_record_table');

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

if (localStorage.getItem('ID') != null) {
	var ID = localStorage.getItem('ID');

	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + delete_record_table + debug);
	} else {
		var DB = new PouchDB(delete_record_table + debug);
	};	
	
	DB.get(ID).then(function (doc) {
		//Deleting an existing document
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB2 = new PouchDB(remote_couchdb + delete_record_table + debug);
		} else {
			var DB2 = new PouchDB(delete_record_table + debug);
		};
		DB2.remove(doc._id, doc._rev, function(err) {
			if (err) {
				return console.log(err);
		  	} else {
		  		console.log('Document deleted successfully');
		  		DB2.allDocs({
					include_docs: true,
					attachments: true
				}).then(function (result) {
					if ((navigator.onLine) && (localStorage.getItem('web') !== 'oui')) {
						var localDB3 = new PouchDB(delete_record_table + debug);
						var debug;
						if (localStorage.getItem('debug') === null) {
							debug = '';
						} else {
							debug = localStorage.getItem('debug');
						};
						var remoteDB = new PouchDB(remote_couchdb + delete_record_table + debug,  {skip_setup: true});
						localDB3.sync(remoteDB).on('complete', (info) => { 
							/*var table = $('#example').DataTable();
							table.row($(clickedBtn).closest('tr')).remove().draw();
				    		$('#deletemodal').modal('hide');*/
						}).on('error', function (err) {
				  			// error while replicating
				  			alert('alert delete record ' + delete_record_table + ': ' + JSON.stringify(err));
				  			window.location = 'index.html';
				  		});
					};
				});
		  	}
		});
	});	
} else {
	alert('non ok')
}