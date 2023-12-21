function chargement_des_donnees_insula_av_samples() {
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
			showValue('Time');
			showValue('Individu_ID');
			showValue('Common_Name');
			showValue('Scientif_Name');
			showValue('Sex');			
			showValue('Age_Adult_Juvenile');
			showValue('Weight_g');
			showValue('Size_mm');
			showValue('Site');			
			showValue('Degradation_Y_N');			
			showValue('Nombre_de_filets');
			showValue('Prelevement_Sanguin_B');
			showValue('Ecouvillon_Oral_OS');
			showValue('Ecouvillon_Cloacal_CS');	
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



