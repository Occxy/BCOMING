function chargement_des_donnees_west_nile_chickens() {
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

											
			showValue('Date_prelevement');
			showValue('Description');
			showValue('Espece');
			showValue('Type_d_enquete');
			showValue('Nom_demandeur');
			showValue('Nom_d_eleveur');			
			showValue('Commune');
			showValue('N_de_suivi');
			showValue('Essai');
			showValue('N_de_res');
			showValue('Resultat');			
			showValue('Confirmation');
			showValue('Resultat_conf');
			showValue('Lon');
			showValue('Lat');
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



