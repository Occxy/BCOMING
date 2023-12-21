function chargement_des_donnees_insula_mi_samples() {
	showConnexionStatus();
	
    var table = searchParams.get('table');

    chargement_des_donnees(table);
}

function chargement_des_donnees(table) {

	
	var id = localStorage.getItem('ID' + table);


	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'bcoming' + table + debug);
	} else {
		var DB = new PouchDB('bcoming' + table + debug);
	};
	DB.allDocs({  		
		keys: [id],
		include_docs: true,
		attachments: true
	}).then(function (result) {
	
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
			console.log(JSON.stringify(result.rows));
					
			function showValue(elementName) {
				
				var element = document.getElementById(elementName + '_value');
				element.innerHTML = result.rows[0].doc[elementName];
				element.style.color = "red";
			}
			
			showValue('Username');
											

			showValue('Date');
			showValue('Code');
			showValue('Sample');
			showValue('Observateurs');
			showValue('Site');
			showValue('Def_site');
			showValue('Biotope');
			showValue('Taxa');
			showValue('Famille');
			showValue('Genre');
			
			showValue('Species');
			showValue('Poids_g');
			showValue('Taille_queue_cm');
			showValue('Taille_corps_cm');
			showValue('Sexe');
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



