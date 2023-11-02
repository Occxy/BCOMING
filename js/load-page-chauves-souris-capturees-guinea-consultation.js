function chargement_des_donnees_chauves_souris_capturees_guinea() {
	showConnexionStatus();
	
    var table = searchParams.get('table');

    chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_bcoming' + table);

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
											
			showValue('N_identification');
			showValue('N_identification_mere');
			showValue('Date');
			showValue('Equipe');
			showValue('Site_region');
			showValue('Site_precis_de_capture');
			showValue('Lat_degre_dec');
			showValue('Latitude');
			showValue('Long_degre_dec');
			showValue('Longitude');
			showValue('Dans');
			showValue('Dans_autre');
			showValue('Lieu_de_capture');
			showValue('Proximite_du_village_ville');
			showValue('Methode_de_capture');
			showValue('Espece_identifiee');
			showValue('Type_de_chauve_souris');
			showValue('Famille');
			showValue('Genre');
			showValue('Espece');
			showValue('Taille_yeux');
			showValue('Couleur_pelage_dorsal');
			showValue('Couleur_pelage_ventral');
			
			
			showValue('Age');
			showValue('Sexe');
			showValue('Gestante');
			showValue('Lactante');
			showValue('Suitee');
			showValue('Sexe_jeune');
			showValue('Poids_jeune');
			showValue('N_ident_jeune');
			showValue('Remarques');
			showValue('Mesureur');
			showValue('Poids_g');
			showValue('L_totale_corps_mm');
			showValue('L_avant_bras_mm');
			showValue('L_queue_mm');
			showValue('L_metacarpe_3ieme_doigt_mm');
			showValue('Photo');
			showValue('Relachee_vivante');
			showValue('Mort_naturelle_carcasse_trouvee');
			showValue('Mort_due_a_la_capture_manip_euthanasie');
			showValue('Si_relachee_marquage');
			showValue('Si_marquee_numero');			
			showValue('Sang_papier_buvard');
			showValue('Ecouv_gorge_RNAl');
			showValue('Wing_punch_ethanol');
			showValue('Feces_RNAl');
			showValue('Urine_RNAl');
			showValue('Ecouv_rectal_RNAl');
			showValue('Feces_et_urine_RNAl');
			showValue('Ectoparasites_ethanol');
			showValue('Autres_echantillons_ou_remarques');
			showValue('Coeur_CO');
			showValue('Poumons_PO');
			showValue('Foie_FO');
			showValue('Rate_RA');
			showValue('Reins_RN');
			showValue('Intestins_INT');
			showValue('Testicule_TE');
			showValue('Ovaires_OV');
			showValue('Embryons_EM');
			showValue('Nombre_d_embryons');
			showValue('Organes_RNAl_autre');
			
						
			
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



