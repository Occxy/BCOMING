function chargement_des_donnees_rhinokhov_zoocov_lab() {
	showConnexionStatus();
	
    var table = searchParams.get('table');

    chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_rhinokhov_zoocov_lab' + table);

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
				
				if (elementName == 'rtPCR_SARS_COV_2_E_gene') {
					elementName = 'rtPCR_SARS-COV-2_E_gene'
				}
				
				element.innerHTML = result.rows[0].doc[elementName];
				element.style.color = "red";
			}
			
			showValue('Username');
											
			showValue('Project');
			showValue('No'); 
			showValue('Sampling_Date');
			showValue('Animal_ID'); 
			showValue('Sample_Type'); 
			showValue('Taxa'); 
			showValue('Genus_Species'); 
			showValue('Province'); 
			showValue('rtPCR_SARS_COV_2_E_gene'); 
			showValue('PCR_Quan_result'); 
			showValue('PCR_Watanabe_result');

						
			
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



