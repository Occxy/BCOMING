function chargement_des_donnees_west_nile_horses() {
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
			showValue('Date_prelevement');
			showValue('Nom');
			showValue('N_Sire');
			showValue('Organism');
			showValue('Sexe');			
			showValue('Club');
			showValue('Lon');
			showValue('Lat');
			showValue('N_de_suivi');	
			showValue('N_de_res');
			showValue('Essai');
			showValue('Resultat');
			showValue('Confirmation');
			showValue('Resultat_conf');
			showValue('Seroconversion_prev');			
			showValue('Changer_status');
			showValue('Essai_IgM');
			showValue('Resultat_IgM');
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



