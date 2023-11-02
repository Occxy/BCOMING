function chargement_des_donnees_rongeurs_captures_guinea() {
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
			showValue('Date');
			showValue('Equipe');
			showValue('Binome_prelevement');
			showValue('Site_region');
			showValue('Site_precis_de_capture');
			showValue('Piege');
			showValue('Numero_de_piege');
			showValue('Lieu_de_capture');
			showValue('Lieu_de_capture_autre');
			showValue('Lat_degre_dec_Piege');
			showValue('Latitude_Piege');
			showValue('Long_degre_dec_Piege');
			showValue('Longitude_Piege');
			showValue('Taille_yeux');
			showValue('Couleur_pelage_dorsal');
			showValue('Couleur_pelage_ventral');
			showValue('Espece_identifiee');
			showValue('Famille');
			showValue('Genre');
			showValue('Espece');
			showValue('Age');
			showValue('Sexe');
			showValue('Femelles_gestante');
			showValue('Femelles_lactante');
			showValue('Nombre_de_paires_de_mamelles');
			showValue('checkboxPect');
			showValue('Pect');
			showValue('checkboxAbdo');
			showValue('Abdo');
			showValue('checkboxIngu');
			showValue('Ingu');
			showValue('Testicules_descendus');
			showValue('Longueur_mm');
			showValue('Remarques');
			showValue('Poids_avec_sac_g');
			showValue('Poids_du_sac_g');
			showValue('Poids_net_animal_g');
			showValue('L_corps_mm');
			showValue('L_queue_mm');
			showValue('L_pied_arriere_mm');
			showValue('L_crane_mm');
			showValue('L_oreille_mm');
			showValue('Photo');
			showValue('Relache');
			showValue('Mort_naturelle_carcasse_trouvee');
			showValue('Mort_due_a_la_capture_manip');
			showValue('Euthanasie');
			showValue('Dosage_injection_ketamine');
			showValue('Si_relache_marquage');
			showValue('Si_marque_numero');
			showValue('Ecouv_gorge_RNAl');
			showValue('Sang_papier_buvard');
			showValue('Biopsie_d_oreille_ethanol');
			showValue('Feces_RNAl');
			showValue('Ecouv_urine_RNAl');
			showValue('Ecouv_rectal_RNAl');
			showValue('Ectoparasites_ethanol');
			showValue('Tiques');
			showValue('Puces');
			showValue('Echantillons_Autre');
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
			/*showValue('SamplingDate');
			showValue('AnimalCode');
			showValue('Province');
			showValue('Site');
			showValue('Species');
			showValue('SampleType');			
			showValue('SampleCode');
			showValue('Final_Result_for_Corona_Watanabe');
			showValue('Final_Result_for_Corona_Quan');*/
						
			
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



