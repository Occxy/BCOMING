function chargement_des_donnees_biodivafreid_locations() {
	showConnexionStatus();
	
    var table = searchParams.get('table');

    chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_biodivafreid_locations' + table);

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
											
			showValue('location_code');
			showValue('sess_check');
			showValue('location_name');
			showValue('country');
			showValue('province');
			showValue('locality');
			showValue('site_details');
			showValue('latitude');
			showValue('lat_ns');
			showValue('longitude');
			showValue('long_ew');
			showValue('coord_source');
			showValue('gps_projection');
			showValue('gps_datum');
			showValue('coord_precision');
			showValue('altitude');
			showValue('alt_source');
			showValue('Mapgrid');
			showValue('habitat_Type');
			showValue('rodent_proofing');
			showValue('inside_cover');
			showValue('outside_cover');
			showValue('open_water');
			showValue('recent_rodent_control');
			showValue('pictures');
			showValue('habitat_remarks');

			



			
						
			
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



