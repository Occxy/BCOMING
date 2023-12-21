function chargement_des_donnees_west_nile_humans() {
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
			showValue('Organism');
			showValue('Age');
			showValue('Comunne');
			showValue('Colonne1');			
			showValue('Lieu_prelevement');
			showValue('WNV_IgM_CNR');
			showValue('WNV_IgG_CNR');
			showValue('Autres_arboviroses');	
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



