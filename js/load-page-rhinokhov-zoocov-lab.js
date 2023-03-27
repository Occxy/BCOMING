function chargement_rhinokhov_zoocov_lab() {
	showConnexionStatus();
	
    var option = searchParams.get('option');
    var table = searchParams.get('table');
    
    if ((option == 1) || (option == 2)) {
    	modifier(table, option);
    }
	//chargement_des_tables_de_reference(table, option);
}

function chargement_des_tables_de_reference(table, option) {
	
	//0 -> juste le chargement des tables de références
	//1 -> chargement des table de références et récupérations des infos du dernier ajout
	//2 -> chargement des table de références pour modification d'un enregistrement
	
	var remote_couchdb = localStorage.getItem('remote_couchdb');

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    		 

	    	//listeLieu_capture();
	    	
	    	if ((option == 1) || (option == 2)) {
				modifier(table, option);
	  		};
		
	    }
	}).catch(function (err) {
		console.log(err);
	});

	
}


function modifier(table, option) {
	
	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('rhinokhov_zoocov_labTablesData'));
		
		function addValue(elementName, onchange) {
			var element = document.getElementById(elementName);
			element.value = doc[elementName];
			try {
				if (onchange) {
					element.onchange();
				}
			} catch(err) {
			};
		}
		
		var Sampling_Date = doc.Sampling_Date;
		
		let parts = Sampling_Date.split('-');
		
		let year = "20" + parts[2];
		var monthNames = [
		  "janv", "févr", "mars", "avr", "mai", "juin",
		  "juil", "août", "sept", "oct", "nov", "déc"
		];
		if (monthNames.indexOf(parts[1]) > -1) {
			var month = monthNames.indexOf(parts[1]);
			let day = parseInt(parts[0]);
			let date = new Date(year, month, day);
			$('#Sampling_Date').datepicker('setDate', date.toLocaleDateString('fr-FR'));
		} else {
			$('#Sampling_Date').datepicker('setDate', Sampling_Date);
		}
		
		addValue('Project');
		addValue('Province');

	} else {
	
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
				
				function addValue(elementName, onchange) {
					var element = document.getElementById(elementName);
					if (elementName == 'rtPCR_SARS_COV_2_E_gene') {
						element.value = result.rows[0].doc['rtPCR_SARS-COV-2_E_gene'];
					} else {
						element.value = result.rows[0].doc[elementName];
					}
					try {
						if (onchange) {
							element.onchange();
						}
					} catch(err) {
					};
				}
				
				addValue('Project');
				addValue('No');
				
				var Sampling_Date = result.rows[0].doc.Sampling_Date;
				let parts = Sampling_Date.split('-');
				let year = "20" + parts[2];
				var monthNames = [
					  "janv", "févr", "mars", "avr", "mai", "juin",
					  "juil", "août", "sept", "oct", "nov", "déc"
				];
				if (monthNames.indexOf(parts[1]) > -1) {
					var month = monthNames.indexOf(parts[1]);
					let day = parseInt(parts[0]);
					let date = new Date(year, month, day);
					$('#Sampling_Date').datepicker('setDate', date.toLocaleDateString('fr-FR'));
				} else {
					$('#Sampling_Date').datepicker('setDate', Sampling_Date);
				}
				
				
				
				addValue('Animal_ID');				
				addValue('Sample_Type');
				addValue('Taxa');
				addValue('Genus_Species');
				addValue('Province');
				addValue('rtPCR_SARS_COV_2_E_gene');
				addValue('PCR_Quan_result');
				addValue('PCR_Watanabe_result');
				
				
				
					  
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


