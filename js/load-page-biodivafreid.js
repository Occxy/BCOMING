function chargement_biodivafreid() {
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
		doc = JSON.parse(localStorage.getItem('biodivafreidTablesData'));
		
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
		
		/*var date_text = doc.date;
		let parts = date_text.split('/');
		let year = parts[2];
		var month = parseInt(parts[1]);
		let day = parseInt(parts[0]);
		let date = new Date(year, month-1, day);
		$('#date').datepicker('setDate', date);*/
		
		var date = new Date(doc.date);
		$('#date').datepicker('setDate', date);
		
		addValue('Province');
		addValue('Site');

	} else {
	
		var id = localStorage.getItem('ID_biodivafreid' + table);
		
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
					element.value = result.rows[0].doc[elementName];
					try {
						if (onchange) {
							element.onchange();
						}
					} catch(err) {
					};
				}
				
				/*var date_text = result.rows[0].doc.date;
				let parts = date_text.split('/');
				let year = parts[2];
				var month = parseInt(parts[1]);
				let day = parseInt(parts[0]);
				let date = new Date(year, month-1, day);*/
				var date = new Date(result.rows[0].doc.date);
				$('#date').datepicker('setDate', date);
				
				addValue('project_code');	
				addValue('ua_id_pr');	
				addValue('ua_id_nr');	
				addValue('ua_id');
				addValue('location_code');	
				addValue('session_code');
				addValue('Location');	
				addValue('locses');	
				addValue('Session_check');
				addValue('sub_order');	
				addValue('genus_field');	
				addValue('species_field');
				addValue('trap');	
				addValue('trap_id');	
				addValue('sex');	
				addValue('sex_cond');
				addValue('weight_g');	
				addValue('head_body_mm');	
				addValue('tail_mm');
				addValue('embryo_tot');	
				addValue('ectopar_tot');	
				addValue('capture_remarks');
				addValue('liver_LI');	
				addValue('spleen_SP');	
				addValue('kindney_KI');
				addValue('lung_LU');	
				addValue('intestine_IN');	
				addValue('uterus_UT');
				addValue('blood_BL');	
				addValue('other_tissue_XX');	
				addValue('eye_EY');
				addValue('TE');	
				addValue('SP');	
				addValue('KL');	
				addValue('KD');
				addValue('LI');	
				addValue('FC');	
				addValue('LU');	
				addValue('BL');
				addValue('TN');	
				addValue('EY');	
				addValue('ECTO');	
				addValue('BR');
				addValue('FOET');	
				addValue('URINE_WHATMAN');
				addValue('HI_FORMOL');	
				addValue('CARCASS_FORMOL');
				addValue('Tongue_in_ethanol');	
				addValue('Swab_Oral');	
				addValue('Swab_Nasal');	
				addValue('Swab_Anal');
				addValue('Swab_Urogenital');	
				addValue('BAT_NUMBER1');	
				addValue('Bat_Reproductive_status');	
				addValue('Bat_Teeth');
				addValue('Bat_Bone_fusion');	
				addValue('Bat_Age');	
				addValue('Bat_Forearm_length_mm');	
				addValue('Bat_Tibia_length_mm');
				addValue('Bat_Age_2');	
				addValue('Bat_Urine');	
				addValue('Bat_Faeces');	
				addValue('Bat_Oral_swab');
				addValue('Bat_Wing_punch');	
				addValue('Bat_Blood_filter_paper');	
				addValue('Bat_ectoparasites');
				addValue('Livestock_Age');	
				addValue('habitat');













				//alert(date.toLocaleDateString('en-EN'))
				/*addValue('AnimalCode');
				addValue('Province');
				addValue('Site');
				addValue('Species');
				addValue('SampleType');
				addValue('SampleCode');
				addValue('Final_Result_for_Corona_Watanabe');
				addValue('Final_Result_for_Corona_Quan');*/
				
				
				
					  
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


