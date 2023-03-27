function chargement_des_donnees_biodivafreid() {
	showConnexionStatus();
	
    var table = searchParams.get('table');

    chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
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
					
			function showValue(elementName) {
				
				var element = document.getElementById(elementName + '_value');
				element.innerHTML = result.rows[0].doc[elementName];
				element.style.color = "red";
			}
			
			showValue('Username');
											
			showValue('project_code');
			showValue('ua_id_pr');
			showValue('ua_id_nr');
			showValue('ua_id');
			showValue('date');
			showValue('location_code');
			showValue('session_code');
			showValue('Location');
			showValue('locses');
			showValue('Session_check');			
			showValue('sub_order');	 
			showValue('genus_field');	 
			showValue('species_field');	 
			showValue('trap');	 
			showValue('trap_id');	 
			showValue('sex');	 
			showValue('sex_cond');	 
			showValue('weight_g');	 
			showValue('head_body_mm');	 
			showValue('tail_mm');	 
			showValue('embryo_tot');	 
			showValue('ectopar_tot');	 
			showValue('capture_remarks');	 
			showValue('liver_LI');	 
			showValue('spleen_SP');	 
			showValue('kindney_KI');	 
			showValue('lung_LU');	 
			showValue('intestine_IN');	 
			showValue('uterus_UT');	 
			showValue('blood_BL');	 
			showValue('other_tissue_XX');	 
			showValue('eye_EY');	
			showValue('TE');	 
			showValue('SP');	 
			showValue('KL');	 
			showValue('KD');	 
			showValue('LI');	 
			showValue('FC');	 
			showValue('LU');	 
			showValue('BL');	 
			showValue('TN');	
			showValue('EY');	 
			showValue('ECTO');	 
			showValue('BR');	 
			showValue('FOET');	 
			showValue('URINE_WHATMAN');	 
			showValue('HI_FORMOL');	 
			showValue('CARCASS_FORMOL');	
			showValue('Tongue_in_ethanol'); 
			showValue('Swab_Oral'); 
			showValue('Swab_Nasal'); 
			showValue('Swab_Anal'); 
			showValue('Swab_Urogenital'); 
			showValue('BAT_NUMBER1'); 
			showValue('Bat_Reproductive_status'); 
			showValue('Bat_Teeth'); 
			showValue('Bat_Bone_fusion'); 
			showValue('Bat_Age'); 
			showValue('Bat_Forearm_length_mm'); 
			showValue('Bat_Tibia_length_mm');
			showValue('Bat_Age_2');
			showValue('Bat_Urine'); 
			showValue('Bat_Faeces');
			showValue('Bat_Oral_swab');
			showValue('Bat_Wing_punch');
			showValue('Bat_Blood_filter_paper');
			showValue('Bat_ectoparasites');
			showValue('Livestock_Age'); 
			showValue('habitat');

			



			
						
			
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



