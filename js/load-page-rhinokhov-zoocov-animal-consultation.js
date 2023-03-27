function chargement_des_donnees_rhinokhov_zoocov_animal() {
	showConnexionStatus();
	
    var table = searchParams.get('table');

    chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_rhinokhov_zoocov_animal' + table);

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
				
				if (elementName == 'Age_Status') {
					elementName = 'Age-Status'
				}
				
				element.innerHTML = result.rows[0].doc[elementName];
				element.style.color = "red";
			}
			
			showValue('Username');
						
			

			showValue('Project');
			showValue('Sampling_Date');
			showValue('Animal_ID'); 
			showValue('Genus_Species'); 
			showValue('Province');
			showValue('District'); 
			showValue('Site'); 
			showValue('Specific_location');
			showValue('Sex'); 
			showValue('Age_Status');
			showValue('Health_Status');
			showValue('Condition');
			showValue('FEV'); 
			showValue('OSV');
			showValue('OST'); 
			showValue('RSV'); 
			showValue('RST'); 
			showValue('DBS'); 
			showValue('URV'); 
			showValue('URT'); 
			showValue('WBV'); 
			showValue('BSN'); 
			showValue('BCN'); 
			showValue('FA_mm');
			showValue('Weigth_g'); 
			showValue('Photo');
			showValue('Recorder_type'); 
			showValue('File_name'); 
			showValue('Kiv'); 
			showValue('KiT'); 
			showValue('SpV'); 
			showValue('SpT');
			showValue('LiV');
			showValue('LiT');
			showValue('LuV'); 
			showValue('LuT'); 
			showValue('HeV'); 
			showValue('HeT'); 
			showValue('BrV'); 
			showValue('BrT');
			showValue('UrV');
			showValue('UrT'); 
			showValue('Other');



						
			
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



