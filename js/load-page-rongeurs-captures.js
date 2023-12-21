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
		
		 

	listeCouleur_pelage_dorsal();
	    	
	    	
		
	   

	
}


function modifier(table, option) {
	
	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('cerfig_rongeurs_captures_guineaTablesData'));
		
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
				
				
				addValue('N_identification');
				
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
				
				addValue('Equipe');
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
					select_change('bcoming_cerfig_rongeurs_captures_espece', Famille, Genre, Espece, result.rows[0].doc.Famille, result.rows[0].doc.Genre, result.rows[0].doc.Espece);
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
				addValue('Organes_RNAl_autre');
				
				
				
					  
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


function listeCouleur_pelage_dorsal() {
	var Couleur_pelage_dorsal = document.getElementById("Couleur_pelage_dorsal");	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'bcoming_cerfig_rongeurs_captures_couleur_pelage_dorsal' /*+ debug*/);
	} else {
		var DB = new PouchDB('bcoming_cerfig_rongeurs_captures_couleur_pelage_dorsal' /*+ debug*/);

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
		var DB = new PouchDB(remote_couchdb + 'bcoming_cerfig_rongeurs_captures_couleur_pelage_ventral' /*+ debug*/);
	} else {
		var DB = new PouchDB('bcoming_cerfig_rongeurs_captures_couleur_pelage_ventral' /*+ debug*/);

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
	
	
	var Famille = document.getElementById("Famille");
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'bcoming_cerfig_rongeurs_captures_espece' + debug);
	} else {
		var DB = new PouchDB('bcoming_cerfig_rongeurs_captures_espece' + debug);
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
	   			Famille.options[Famille.options.length] = new Option(row.Nom, row.Nom); 
	   		});	
	   		Famille.options[Famille.options.length] = new Option("Manquant", "Manquant");
	   		
	   		if ((option == 1) || (option == 2)) {
				modifier(table, option);
	  		};
			
		}
	}).catch(function (err) {
		console.log(err);
	});
}
