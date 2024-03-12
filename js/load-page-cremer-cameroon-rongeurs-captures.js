function chargement_rongeurs_captures() {
	showConnexionStatus();
	
    var option = searchParams.get('option');
    table = searchParams.get('table');
    
    /*if ((option == 1) || (option == 2)) {
    	modifier(table, option);
    }*/
	chargement_des_tables_de_reference(table, option);
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
		
		 

	listeSite_capture();
	    	
	    	
		
	   

	
}


function modifier(table, option) {
	
	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('cremer_rongeurs_captures_cameroonTablesData'));
		
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
		
		/*var Date = new Date(doc.Date);
		$('#Date').datepicker('setDate', Date);*/
		/*addValue('Province');
		addValue('Site');*/

	} else {
	
		var id = localStorage.getItem('ID_bcoming' + table);
		
		//alert(id)
		
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
				
				addValue('Num_rongeur');
				addValue('CODE_rongeur');
				addValue('NumMission_NumSite');
				addValue('N_site');
				
				addValue('J');
				addValue('Equipe');
				//addValue('addValue('Pays: Pays,
				addValue('Region');
				addValue('Arrondissement');
				addValue('Village');
				addValue('Num_piege');
				addValue('Type_piege');
				addValue('Site_capture');
				addValue('Emplacement_piege');
				addValue('Detail_emplacement');
				addValue('Lat_degre_dec_Piege');
				addValue('Latitude_Piege');
				addValue('Long_degre_dec_Piege');
				addValue('Longitude_Piege');
				addValue('Contention');
				addValue('Preleveur');
				addValue('Autopsie');
				addValue('Identification_espece');
				addValue('Famille_terrain');
				addValue('Genre_terrain');
				addValue('Espece_terrain');
				addValue('Famille_labo');
				addValue('Genre_labo');
				addValue('Espece_labo');
				addValue('Sexe');
				addValue('Age');
				addValue('F_gestante');
				addValue('F_lactante');
				addValue('Nbtotal_paires_mamelles');
				addValue('N_mamelles_pectorales');
				addValue('N_mamelles_abdominales');
				addValue('N_mamelles_inguinales');
				addValue('Male_testicules_descendues');
				addValue('Male_longueur_testicules');
				addValue('Poids_sac_rongeur_g');
				addValue('Poids_sac_g');
				addValue('Poids_g');
				addValue('L_totale_corps_Ltc_mm');
				addValue('L_queue_mm');
				addValue('L_patte_arriere_Tib_mm');
				addValue('L_crane_mm');
				addValue('L_oreille_mm');
				addValue('Taille_yeux');
				addValue('Couleur_pelage_dorsal');
				addValue('Couleur_pelage_ventral');
				addValue('Photo');
				addValue('Remarques_anomalies');
				addValue('Relache_vivant', true);
				addValue('Cause_deces');
				addValue('Recapture', true);
				addValue('Comment_recapture');
				addValue('Euthanasie',true);
				addValue('Methode_eutha',true);
				addValue('Dosage_Ketamine_mL');
				addValue('Biopsie_oreille_BO');
				addValue('Ecouv_Salive_RNAl_SA');
				addValue('Ecouv_Urogenital_RNAl_URO');
				addValue('Urine_RNAl_UR');
				addValue('Ecouv_rectal_RNAl_RE');
				addValue('Feces_RNAl_FE');
				addValue('Sang_DBS_nb_cercles');
				addValue('Ectoparasites_Tiques_Eth_EP_TI');
				addValue('Ectoparasites_Puces_Eth_EP_PU');
				addValue('Poils_ethanol_PO');
				addValue('Autres_echantillons');
				addValue('Autres_echantillons_details');
				addValue('Coeur_RNAl_CO');
				addValue('Poumon_RNAl_PO');
				addValue('Foie_RNAl_FO');
				addValue('Rate_RNAl_RA');
				addValue('Rein_RNAl_RN');
				addValue('Testicule_RNAl_TE');
				addValue('Ovaire_RNAl_OV');
				addValue('Embryon_RNAl_EM');
				addValue('F_gestante_nb_embryons');
				addValue('Intestins_RNAl_INT');
				addValue('Peau_RNAl_PE');
				addValue('Cerveau_RNAl_CE');
				addValue('Autre_Organe_RNAl');
				addValue('Details_autre_organe_RNAl');
				addValue('Remarques_echantillons');
				
				
				var dateString = result.rows[0].doc.Date; // Format "jj/mm/aaaa", par exemple "21/08/2023"
				var dateParts = dateString.split('/');
				var day = parseInt(dateParts[0], 10);
				var month = parseInt(dateParts[1], 10);
				var year = parseInt(dateParts[2], 10);

				// Crée un objet Date en utilisant le format "aaaa, mm, jj"
				var stringDate = new Date(year, month - 1, day);
				
				$('.input-datepicker').datepicker({
		        	language: 'fr',
		        	autoclose: true
		      	});
				$('#Date').datepicker('setDate', stringDate);
				
				
				var Famille = document.getElementById("Famille_terrain");
				var Genre = document.getElementById("Genre_terrain");
				var Espece = document.getElementById("Espece_terrain");
				try {
					select_change('bcoming_cremer_rongeurs_captures_espece', Famille_terrain, Genre_terrain, Espece_terrain, result.rows[0].doc.Famille_terrain, result.rows[0].doc.Genre_terrain, result.rows[0].doc.Espece_terrain);
				}
				catch(err) {
				};
				
				var Famille = document.getElementById("Famille_labo");
				var Genre = document.getElementById("Genre_labo");
				var Espece = document.getElementById("Espece_labo");
				try {
					select_change('bcoming_cremer_rongeurs_captures_espece', Famille_labo, Genre_labo, Espece_labo, result.rows[0].doc.Famille_labo, result.rows[0].doc.Genre_labo, result.rows[0].doc.Espece_labo);
				}
				catch(err) {
				};
				
				/*addValue('Equipe');
				addValue('Binome_prelevement');
				addValue('Site_region');
				addValue('Site_precis_de_capture');
				addValue('Piege');
				addValue('Numero_de_piege');
				addValue('Lieu_de_capture', true);
				addValue('Lieu_de_capture_autre');
				addValue('Lat_degre_dec_Piege');
				addValue('Latitude_Piege');
			    addValue('Long_degre_dec_Piege');
				addValue('Longitude_Piege');
				addValue('Taille_yeux');
				addValue('Couleur_pelage_dorsal');
				addValue('Couleur_pelage_ventral');
				addValue('Espece_identifiee');
				addValue('Age');
				addValue('Sexe', true);
				addValue('Femelles_gestante');
				addValue('Femelles_lactante');
				addValue('Nombre_de_paires_de_mamelles');
				
				var Element = document.getElementById('checkboxPect'); 
				if (result.rows[0].doc.checkboxPect === true) {
					Element.checked = true;
					//Element.onclick();
				} else {
					Element.checked = false;
				}
				addValue('Pect');
				
				var Element = document.getElementById('checkboxAbdo'); 
				if (result.rows[0].doc.checkboxAbdo === true) {
					Element.checked = true;
					//Element.onclick();
				} else {
					Element.checked = false;
				}
				addValue('Abdo');
				
				var Element = document.getElementById('checkboxIngu'); 
				if (result.rows[0].doc.checkboxIngu === true) {
					Element.checked = true;
					//Element.onclick();
				} else {
					Element.checked = false;
				}
				addValue('Ingu');
				addValue('Testicules_descendus');
				addValue('Longueur_mm');
				addValue('Remarques');
				addValue('Poids_avec_sac_g');
				addValue('Poids_du_sac_g');
				addValue('Poids_net_animal_g');
				addValue('L_corps_mm');
				addValue('L_queue_mm');
				addValue('L_pied_arriere_mm');
				addValue('L_crane_mm');
				addValue('L_oreille_mm');
				addValue('Photo');				
				addValue('Relache');
				
				var Element = document.getElementById('Mort_naturelle_carcasse_trouvee'); 
				if (result.rows[0].doc.Mort_naturelle_carcasse_trouvee === true) {
					Element.checked = true;
					//Element.onclick();
				} else {
					Element.checked = false;
				}
				
				var Element = document.getElementById('Mort_due_a_la_capture_manip'); 
				if (result.rows[0].doc.Mort_due_a_la_capture_manip === true) {
					Element.checked = true;
					//Element.onclick();
				} else {
					Element.checked = false;
				}
				
				var Element = document.getElementById('Euthanasie'); 
				if (result.rows[0].doc.Euthanasie === true) {
					Element.checked = true;
					//Element.onclick();
				} else {
					Element.checked = false;
				}
				addValue('Dosage_injection_ketamine');
			
				addValue('Si_relache_marquage');
				
				
				
				var Famille = document.getElementById("Famille");
				var Genre = document.getElementById("Genre");
				var Espece = document.getElementById("Espece");
				try {
					select_change('bcoming_cremer_rongeurs_captures_espece', Famille, Genre, Espece, result.rows[0].doc.Famille, result.rows[0].doc.Genre, result.rows[0].doc.Espece);
				}
				catch(err) {
				};
				
				addValue('Si_marque_numero');
				addValue('Ecouv_gorge_RNAl');
				addValue('Sang_papier_buvard');
				addValue('Biopsie_d_oreille_ethanol');
				addValue('Feces_RNAl');
				addValue('Ecouv_urine_RNAl');
				addValue('Ecouv_rectal_RNAl');
				addValue('Ectoparasites_ethanol');
				addValue('Tiques');
				addValue('Puces');
				addValue('Echantillons_Autre');
				addValue('Autres_echantillons_ou_remarques');
				addValue('Coeur_CO');
				addValue('Poumons_PO');
				addValue('Foie_FO');
				addValue('Rate_RA');
				addValue('Reins_RN');
				addValue('Intestins_INT');
				addValue('Testicule_TE');
				addValue('Ovaires_OV');
				addValue('Embryons_EM');
				addValue('Nombre_d_embryons');
				addValue('Organes_RNAl_autre');*/
				
				
				
					  
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


function listeSite_capture() {
	var Site_capture = document.getElementById("Site_capture");	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'bcoming_cremer_rongeurs_captures_site_capture' /*+ debug*/);
	} else {
		var DB = new PouchDB('bcoming_cremer_rongeurs_captures_site_capture' /*+ debug*/);

	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var site_captureTablesData = JSON.parse(JSON.stringify(result));
    		
    		site_captureTablesData.rows.forEach(function(row){  
    			//alert(row.doc.Site_capture);
    			Site_capture.options[Site_capture.options.length] = new Option(row.doc.Site_capture, row.doc.Site_capture);
    			//alert(row.doc.Site_capture)
    		});		    
    		Site_capture.options[Site_capture.options.length] = new Option("Manquant", "Manquant");
    
    		//listeCouleur_pelage_ventral()
    		listeCouleur_pelage_dorsal()
		}
	}).catch(function (err) {
		console.log(err);
	});
}

function listeCouleur_pelage_dorsal() {
	var Couleur_pelage_dorsal = document.getElementById("Couleur_pelage_dorsal");	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'bcoming_cremer_rongeurs_captures_couleur_pelage_dorsal' /*+ debug*/);
	} else {
		var DB = new PouchDB('bcoming_cremer_rongeurs_captures_couleur_pelage_dorsal' /*+ debug*/);

	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var couleur_pelage_dorsalTablesData = JSON.parse(JSON.stringify(result));
    		
    		couleur_pelage_dorsalTablesData.rows.forEach(function(row){  
    			//alert(row.doc.Couleur_pelage_dorsal);
    			Couleur_pelage_dorsal.options[Couleur_pelage_dorsal.options.length] = new Option(row.doc.Couleur_pelage_dorsal, row.doc.Couleur_pelage_dorsal);
    			//alert(row.doc.Couleur_pelage_dorsal)
    		});		    
    		Couleur_pelage_dorsal.options[Couleur_pelage_dorsal.options.length] = new Option("Manquant", "Manquant");
    
    		listeCouleur_pelage_ventral()
		}
	}).catch(function (err) {
		console.log(err);
	});
}

function listeCouleur_pelage_ventral() {
	var Couleur_pelage_ventral = document.getElementById("Couleur_pelage_ventral");	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'bcoming_cremer_rongeurs_captures_couleur_pelage_ventral' /*+ debug*/);
	} else {
		var DB = new PouchDB('bcoming_cremer_rongeurs_captures_couleur_pelage_ventral' /*+ debug*/);

	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var couleur_pelage_ventralTablesData = JSON.parse(JSON.stringify(result));
    		
    		couleur_pelage_ventralTablesData.rows.forEach(function(row){  
    			//alert(row.doc.Couleur_pelage_ventral);
    			Couleur_pelage_ventral.options[Couleur_pelage_ventral.options.length] = new Option(row.doc.Couleur_pelage_ventral, row.doc.Couleur_pelage_ventral);
    			//alert(row.doc.Couleur_pelage_ventral)
    		});		    
    		Couleur_pelage_ventral.options[Couleur_pelage_ventral.options.length] = new Option("Manquant", "Manquant");
    
    		listeFamille()
		}
	}).catch(function (err) {
		console.log(err);
	});
}

function listeFamille() {
	
	
	//var Famille = document.getElementById("Famille");
	var Famille_terrain = document.getElementById("Famille_terrain");
	var Famille_labo = document.getElementById("Famille_labo");
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'bcoming_cremer_rongeurs_captures_espece' + debug);
	} else {
		var DB = new PouchDB('bcoming_cremer_rongeurs_captures_espece' + debug);
	};
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		localStorage['especeTablesData'] = JSON.stringify(result);
	   		var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
	    		
	   		especeTablesData.rows[0].doc.Famille.forEach(function(row){   
	   			//Famille.options[Famille.options.length] = new Option(row.Nom, row.Nom);
	   			Famille_terrain.options[Famille_terrain.options.length] = new Option(row.Nom, row.Nom); 
	   			Famille_labo.options[Famille_labo.options.length] = new Option(row.Nom, row.Nom);
	   		});	
	   		//Famille.options[Famille.options.length] = new Option("Manquant", "Manquant");
	   		Famille_terrain.options[Famille_terrain.options.length] = new Option("Manquant", "Manquant");
	   		Famille_labo.options[Famille_labo.options.length] = new Option("Manquant", "Manquant");
	   		
	   		if ((option == 1) || (option == 2)) {
				modifier(table, option);
	  		};
			
		}
	}).catch(function (err) {
		console.log(err);
	});
}
