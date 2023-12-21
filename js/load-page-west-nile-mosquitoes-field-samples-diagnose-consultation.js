function chargement_des_donnees_west_nile_mosquitoes_field_samples_diagnose() {
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
					
																												


			showValue('ID_FD');
			showValue('ID_FS');
			showValue('Group');
			showValue('Species');
			showValue('Sex');
			showValue('Individuals');			
			showValue('Used_Individuals');
			showValue('Date_Used_Individuals');
			showValue('RNA_and_cDNA_plates_ANSES');
			showValue('RNA_and_cDNA_well');	
			showValue('RNA_and_cDNA_Id');
			showValue('Date');
			showValue('Year');
			showValue('Month');
			showValue('Day');
			showValue('Site');			
			showValue('Location');
			showValue('Habitat');			
			showValue('Colonne1');
			showValue('Observation');			
			showValue('Notes');
			showValue('Lat');			
			showValue('Lon');
			showValue('Project_Study');
			showValue('Trap_method');
			showValue('Biotope');
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



