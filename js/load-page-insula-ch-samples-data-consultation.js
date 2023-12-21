function chargement_des_donnees_insula_ch_samples_data() {
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
											
			showValue('Numero');
			showValue('Code_Individu');
			showValue('Date');
			showValue('Site');
			
					
			
			showValue('Def_Site');
			showValue('Biotope');			
			showValue('Observateur');
			showValue('Filet');
			showValue('Heure_capture');
			showValue('Taxon');
			showValue('Nom_sc');
			showValue('Sexe');			
			showValue('Avant_bras');
			showValue('Doigt_5');
			showValue('Doigt_3');
			showValue('Pouce');
			showValue('Queue');
			showValue('Tibia');
			showValue('Pied');
			showValue('CM3');
//														
            
			showValue('Poids');
			showValue('Taille_testicule');
			showValue('Taille_epididymes');
			showValue('Tunique_vaginale');			
			showValue('Mammelle');
			showValue('Gestation');
			showValue('Doigt_3');
			showValue('Glandes_taille');
			showValue('Glande_couleur');
			showValue('Epiphyses');
			showValue('Chin_spot');
			showValue('Usure_dent');
			showValue('Age_estime');
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



