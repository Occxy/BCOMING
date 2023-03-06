function loaded_login() {
	
	showConnexionStatus();
	
	localStorage.removeItem('loginUsername');
	localStorage.removeItem('loginPassword');
	localStorage.removeItem('login');
	localStorage.removeItem('date');
	localStorage.removeItem('auth');
	localStorage.removeItem('debug');

}

function loaded_register() {
	showConnexionStatus();
	
    var Equipe = document.getElementById("Equipe");		
	var DB = new PouchDB('equipe');
  	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var equipeTablesData = JSON.parse(JSON.stringify(result));
			
    		equipeTablesData.rows.forEach(function(row){   
    			registerEquipe.options[registerEquipe.options.length] = new Option(row.doc.Equipe, '0'); 
    		});		    		
		}
	}).catch(function (err) {
		console.log(err);
	});  	
}

function loaded() {
	showConnexionStatus();
}

function loaded_bat(table) {
	showConnexionStatus();
	if (localStorage.getItem('web') === 'oui') {
		load_tables_reference_bat_web(table, false);
	} else {
		load_tables_reference_bat(table, false);
	}
}

function loaded_bat_add(table) {
	showConnexionStatus();
	if (localStorage.getItem('web') === 'oui') {
		load_tables_reference_bat_web(table, true);
	} else {
		load_tables_reference_bat(table, true);
	}
	
	var id = localStorage.getItem('ID_' + table);
	
	var doc = JSON.parse(localStorage.getItem('chauves_souris_captureesTablesData'));
	
	var N_identification_mere = document.getElementById("N_identification_mere");
	N_identification_mere.value = doc.N_identification_mere;
	
	var Date = document.getElementById("Date");
	Date.value = doc.Date;
	
	var Equipe = document.getElementById("Equipe");
	Equipe.value = doc.Equipe;
	
	var Region_capture = document.getElementById("Region_capture");
	Region_capture.value = doc.Region_capture;
	
	var Site_capture = document.getElementById("Site_capture");
	Site_capture.value = doc.Site_capture;
	
	var Lat_degre_dec = document.getElementById("Lat_degre_dec");
	Lat_degre_dec.value = doc.Lat_degre_dec;
	
	var Latitude = document.getElementById("Latitude");
	try {
		Latitude.value = doc.Latitude;	
	}
	catch(err) {
	};
	
	var Long_degre_dec = document.getElementById("Long_degre_dec");
	Long_degre_dec.value = doc.Long_degre_dec;
	
	var Longitude = document.getElementById("Longitude");					
	try {
		Longitude.value = doc.Longitude;					
	}
	catch(err) {
	};
	
	var Proximite_village_km = document.getElementById("Proximite_village_km");
	Proximite_village_km.value = doc.Proximite_village_km;	
	
	var Type_chauve_souris = document.getElementById("Type_chauve_souris");				
	try {
		Type_chauve_souris.value = doc.Type_chauve_souris;	
	}
	catch(err) {
	};
	
	var Espece_identifiee = document.getElementById("Espece_identifiee");
	try {
		Espece_identifiee.value = doc.Espece_identifiee;
	}
	catch(err) {
	};				
	
	var Sexe = document.getElementById("Sexe");			
	try {
		Sexe.value = doc.Sexe;	
	}
	catch(err) {
	};
	
	var Age = document.getElementById("Age");
	try {
		Age.value = doc.Age;					
	}
	catch(err) {
	};
				
	var Gestante = document.getElementById("Gestante");
	try {
		Gestante.value = doc.Gestante;									
	}
	catch(err) {
	};
	
	var Lactation = document.getElementById("Lactation");
	try {
		Lactation.value = doc.Lactation;													
	}
	catch(err) {
	};		
	
	var Suitee = document.getElementById("Suitee");
	try {
		Suitee.value = doc.Suitee;	
		Suitee.onchange();
	}
	catch(err) {
	};	
	
	var Sexe_enfant = document.getElementById("Sexe_enfant");			
	try {
		Sexe_enfant.value = doc.Sexe_enfant;																								
	}
	catch(err) {
	};
	
	var Poids_enfant = document.getElementById("Poids_enfant");
	Poids_enfant.value = doc.Poids_enfant;
	
	var Identifiant_enfant = document.getElementById("Identifiant_enfant");
	Identifiant_enfant.value = doc.Identifiant_enfant;
	
	var Vivante = document.getElementById("Vivante");
	try {
		Vivante.value = doc.Vivante;																					
	}
	catch(err) {
	};
	
	var Cause_deces = document.getElementById("Cause_deces");
	try {
		Cause_deces.value = doc.Cause_deces;																									
	}
	catch(err) {
	};
	
	var Poids_gr = document.getElementById("Poids_gr");
	Poids_gr.value = doc.Poids_gr;
	
	var L_avant_bras_mm = document.getElementById("L_avant_bras_mm");
	L_avant_bras_mm.value = doc.L_avant_bras_mm;
	
	var L_totale_corps_mm = document.getElementById("L_totale_corps_mm");
	L_totale_corps_mm.value = doc.L_totale_corps_mm;
	
	var Taille_yeux = document.getElementById("Taille_yeux");
	Taille_yeux.value = doc.Taille_yeux;
	
	var L_queue_mm = document.getElementById("L_queue_mm");
	L_queue_mm.value = doc.L_queue_mm;
	
	var L_metacarpe_3ieme_doigt_mm = document.getElementById("L_metacarpe_3ieme_doigt_mm");
	L_metacarpe_3ieme_doigt_mm.value = doc.L_metacarpe_3ieme_doigt_mm;
	
	var Couleur_pelage_dorsal = document.getElementById("Couleur_pelage_dorsal");
	Couleur_pelage_dorsal.value = doc.Couleur_pelage_dorsal;
	
	var Couleur_pelage_ventral = document.getElementById("Couleur_pelage_ventral");
	Couleur_pelage_ventral.value = doc.Couleur_pelage_ventral;
	
	var Remarques_anomalies = document.getElementById("Remarques_anomalies");
	Remarques_anomalies.value = doc.Remarques_anomalies;
	
	var Sang_DBS_nb_cercles = document.getElementById("Sang_DBS_nb_cercles");
	Sang_DBS_nb_cercles.value = doc.Sang_DBS_nb_cercles;
	
	var Sang_tube_EDTA = document.getElementById("Sang_tube_EDTA");
	Sang_tube_EDTA.value = doc.Sang_tube_EDTA;
				
	var Feces_RNAl = document.getElementById("Feces_RNAl");
	Feces_RNAl.value = doc.Feces_RNAl;
	  
	var Urine = document.getElementById("Urine");
	Urine.value = doc.Urine;
	
	var Urine_DUS_nombre_cercles = document.getElementById("Urine_DUS_nombre_cercles");
	Urine_DUS_nombre_cercles.value = doc.Urine_DUS_nombre_cercles;
	
	var Feces_urine_RNAl = document.getElementById("Feces_urine_RNAl");
	Feces_urine_RNAl.value = doc.Feces_urine_RNAl;
	
	var Ecouvillon_gorge_RNAl = document.getElementById("Ecouvillon_gorge_RNAl");
	Ecouvillon_gorge_RNAl.value = doc.Ecouvillon_gorge_RNAl;
	
	var Ecouvillon_rectal_RNAl = document.getElementById("Ecouvillon_rectal_RNAl");
	Ecouvillon_rectal_RNAl.value = doc.Ecouvillon_rectal_RNAl;
	
	var Ectoparasites_ethanol = document.getElementById("Ectoparasites_ethanol");
	Ectoparasites_ethanol.value = doc.Ectoparasites_ethanol;
	
	var Poils_ethanol = document.getElementById("Poils_ethanol");
	Poils_ethanol.value = doc.Poils_ethanol;
	
	var Wing_punch_ethanol = document.getElementById("Wing_punch_ethanol");
	Wing_punch_ethanol.value = doc.Wing_punch_ethanol;
	
	var Feces_culture_glycerol = document.getElementById("Feces_culture_glycerol");
	Feces_culture_glycerol.value = doc.Feces_culture_glycerol;
	
	var Sperme = document.getElementById("Sperme");
	Sperme.value = doc.Sperme;
	
	var Autres_echantillons_remarques = document.getElementById("Autres_echantillons_remarques");
	Autres_echantillons_remarques.value = doc.Autres_echantillons_remarques;
			
	var Specimen_entier = document.getElementById("Specimen_entier");			
	try {
		Specimen_entier.value = doc.Specimen_entier;																								
	}
	catch(err) {
	};
	
	var Specimen_preserve_dans = document.getElementById("Specimen_preserve_dans");			
	try {
		Specimen_preserve_dans.value = doc.Specimen_preserve_dans;																								
	}
	catch(err) {
	};
	
	var Prelevement_organe = document.getElementById("Prelevement_organe");			
	try {
		Prelevement_organe.value = doc.Prelevement_organe;																								
	}
	catch(err) {
	};
	
	var Foie_formol = document.getElementById("Foie_formol");
	try {
		Foie_formol.value = doc.Foie_formol;																												
	}
	catch(err) {
	};
	
	var Foie_RNAl = document.getElementById("Foie_RNAl");
	Foie_RNAl.value = doc.Foie_RNAl;
	
	var Rate_formol = document.getElementById("Rate_formol");				
	try {
		Rate_formol.value = doc.Rate_formol;																												
	}
	catch(err) {
	};
	
	var Rate_RNAl = document.getElementById("Rate_RNAl");
	Rate_RNAl.value = doc.Rate_RNAl;
	
	var Reins_formol = document.getElementById("Reins_formol");			
	try {
		Reins_formol.value = doc.Reins_formol;																												
	}
	catch(err) {
	};
	
	var Reins_RNAl = document.getElementById("Reins_RNAl");
	Reins_RNAl.value = doc.Reins_RNAl;
	
	var Intestins_formol = document.getElementById("Intestins_formol");
	try {
		Intestins_formol.value = doc.Intestins_formol;																																
	}
	catch(err) {
	};
	
	var Intestins_RNAl = document.getElementById("Intestins_RNAl");
	Intestins_RNAl.value = doc.Intestins_RNAl;
	
	var Poumons_formol = document.getElementById("Poumons_formol");			
	try {
		Poumons_formol.value = doc.Poumons_formol;																																
	}
	catch(err) {
	};
	
	var Poumons_RNAl = document.getElementById("Poumons_RNAl");
	Poumons_RNAl.value = doc.Poumons_RNAl;			
	
	var Coeur_formol = document.getElementById("Coeur_formol");			
	try {
		Coeur_formol.value = doc.Coeur_formol;																																
	}
	catch(err) {
	};			
	
	var Coeur_RNAl = document.getElementById("Coeur_RNAl");
	Coeur_RNAl.value = doc.Coeur_RNAl;
	
	var Ggl_lymph_formol = document.getElementById("Ggl_lymph_formol");			
	try {
		Ggl_lymph_formol.value = doc.Ggl_lymph_formol;																																
	}
	catch(err) {
	};
	
	var Ggl_lymph_RNAl = document.getElementById("Ggl_lymph_RNAl");
	Ggl_lymph_RNAl.value = doc.Ggl_lymph_RNAl;
	
	var Testicules_formol = document.getElementById("Testicules_formol");			
	try {
		Testicules_formol.value = doc.Testicules_formol;																																
	}
	catch(err) {
	};
	
	var Testicules_RNAl = document.getElementById("Testicules_RNAl");
	Testicules_RNAl.value = doc.Testicules_RNAl;
				
	var Peau_formol = document.getElementById("Peau_formol");			
	try {
		Peau_formol.value = doc.Peau_formol;																															
	}
	catch(err) {
	};
	
	var Peau_RNAl = document.getElementById("Peau_RNAl");
	Peau_RNAl.value = doc.Peau_RNAl;			
	
	var Muscles_formol = document.getElementById("Muscles_formol");			
	try {
		Muscles_formol.value = doc.Muscles_formol;																															
	}
	catch(err) {
	};
	
	var Muscles_RNAl = document.getElementById("Muscles_RNAl");
	Muscles_RNAl.value = doc.Muscles_RNAl;			
	
	var Cerveau_formol = document.getElementById("Cerveau_formol");			
	try {
		Cerveau_formol.value = doc.Cerveau_formol;																															
	}
	catch(err) {
	};
	
	var Cerveau_RNAl = document.getElementById("Cerveau_RNAl");
	Cerveau_RNAl.value = doc.Cerveau_RNAl;
	
	var Autre = document.getElementById("Autre");
	Autre.value = doc.Autre;
				
	var Autre_formol = document.getElementById("Autre_formol");			
	try {
		Autre_formol.value = doc.Autre_formol;																															
	}
	catch(err) {
	};
	
	var Autre_RNAl = document.getElementById("Autre_RNAl");
	Autre_RNAl.value = doc.Autre_RNAl;
	
	var Remarques_echantillons = document.getElementById("Remarques_echantillons");
	Remarques_echantillons.value = doc.Remarques_echantillons;
	
}

function loaded_modify_bat(table) {
	showConnexionStatus();
	
	if (localStorage.getItem('web') === 'oui') {
		load_tables_reference_bat_web(table, false);
	} else {
		load_tables_reference_bat(table, false);
	}
	
	var id = localStorage.getItem('ID_' + table);
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + table + debug);
	} else {
		var DB = new PouchDB(table + debug);
	};
	DB.allDocs({  		
  		keys: [id],
		include_docs: true,
		attachments: true
	}).then(function (result) {
		
		DB.allDocs({  
			keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
		// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
				
				var N_identification_CS = document.getElementById("N_identification_CS");
				N_identification_CS.value = result.rows[0].doc.N_identification_CS;
				
				
				var N_identification_mere = document.getElementById("N_identification_mere");
				N_identification_mere.value = result.rows[0].doc.N_identification_mere;
				
				var Date = document.getElementById("Date");
				Date.value = result.rows[0].doc.Date;
				
				var N_site = document.getElementById("N_site");			
				try {
					N_site.value = result.rows[0].doc.N_site;	
					N_site.onchange();
				}
				catch(err) {
				};
							
				var Equipe = document.getElementById("Equipe");
				Equipe.value = result.rows[0].doc.Equipe;
				
				var Pays = document.getElementById("Pays");			
				try {
					Pays.value = result.rows[0].doc.Pays;	
				}
				catch(err) {
				};
				
				var Region_capture = document.getElementById("Region_capture");
				Region_capture.value = result.rows[0].doc.Region_capture;
				
				var Site_capture = document.getElementById("Site_capture");
				Site_capture.value = result.rows[0].doc.Site_capture;
				
				var Environnement = document.getElementById("Environnement");			
				try {
					Environnement.value = result.rows[0].doc.Environnement;	
				}
				catch(err) {
				};
				
				var Lieu_capture = document.getElementById("Lieu_capture");			
				try {
					Lieu_capture.value = result.rows[0].doc.Lieu_capture;	
				}
				catch(err) {
				};
				
				var Lat_degre_dec = document.getElementById("Lat_degre_dec");
				Lat_degre_dec.value = result.rows[0].doc.Lat_degre_dec;
				
				var Latitude = document.getElementById("Latitude");
				try {
					Latitude.value = result.rows[0].doc.Latitude;	
				}
				catch(err) {
				};
				
				var Long_degre_dec = document.getElementById("Long_degre_dec");
				Long_degre_dec.value = result.rows[0].doc.Long_degre_dec;
				
				var Longitude = document.getElementById("Longitude");					
				try {
					Longitude.value = result.rows[0].doc.Longitude;					
				}
				catch(err) {
				};
				
				var Proximite_village_km = document.getElementById("Proximite_village_km");
				Proximite_village_km.value = result.rows[0].doc.Proximite_village_km;	
				
				var Methode_capture = document.getElementById("Methode_capture");
				try {
					Methode_capture.value = result.rows[0].doc.Methode_capture;	
				}
				catch(err) {
				};
				
				var Type_chauve_souris = document.getElementById("Type_chauve_souris");				
				try {
					Type_chauve_souris.value = result.rows[0].doc.Type_chauve_souris;	
				}
				catch(err) {
				};
				
				var Espece_identifiee = document.getElementById("Espece_identifiee");
				try {
					Espece_identifiee.value = result.rows[0].doc.Espece_identifiee;
				}
				catch(err) {
				};				
				
				var Famille_terrain = document.getElementById("Famille_terrain");
				var Genre_terrain = document.getElementById("Genre_terrain");
				var Espece_terrain = document.getElementById("Espece_terrain");
				var Famille_labo = document.getElementById("Famille_labo");
				var Genre_labo = document.getElementById("Genre_labo");
				var Espece_labo = document.getElementById("Espece_labo");
				var Famille_consensus = document.getElementById("Famille_consensus");
				var Genre_consensus = document.getElementById("Genre_consensus");
				var Espece_consensus = document.getElementById("Espece_consensus");
	
				try {
					select_change(Famille_terrain, Genre_terrain, Espece_terrain, result.rows[0].doc.Famille_terrain, result.rows[0].doc.Genre_terrain, result.rows[0].doc.Espece_terrain);
					select_change(Famille_labo, Genre_labo, Espece_labo, result.rows[0].doc.Famille_labo, result.rows[0].doc.Genre_labo, result.rows[0].doc.Espece_labo);
					select_change(Famille_consensus, Genre_consensus, Espece_consensus, result.rows[0].doc.Famille_consensus, result.rows[0].doc.Genre_consensus, result.rows[0].doc.Espece_consensus);
				}
				catch(err) {
				};
				
				var Sexe = document.getElementById("Sexe");			
				try {
					Sexe.value = result.rows[0].doc.Sexe;	
				}
				catch(err) {
				};
				
				var Age = document.getElementById("Age");
				try {
					Age.value = result.rows[0].doc.Age;					
				}
				catch(err) {
				};
							
				var Gestante = document.getElementById("Gestante");
				try {
					Gestante.value = result.rows[0].doc.Gestante;									
				}
				catch(err) {
				};
				
				var Lactation = document.getElementById("Lactation");
				try {
					Lactation.value = result.rows[0].doc.Lactation;													
				}
				catch(err) {
				};			
				
				var Suitee = document.getElementById("Suitee");
				try {
					Suitee.value = result.rows[0].doc.Suitee;	
					Suitee.onchange();
				}
				catch(err) {
				};	
				
				var Sexe_enfant = document.getElementById("Sexe_enfant");			
				try {
					Sexe_enfant.value = result.rows[0].doc.Sexe_enfant;																								
				}
				catch(err) {
				};
				
				var Poids_enfant = document.getElementById("Poids_enfant");
				Poids_enfant.value = result.rows[0].doc.Poids_enfant;
				
				var Identifiant_enfant = document.getElementById("Identifiant_enfant");
				Identifiant_enfant.value = result.rows[0].doc.Identifiant_enfant;
				
				var Vivante = document.getElementById("Vivante");
				try {
					Vivante.value = result.rows[0].doc.Vivante;																					
				}
				catch(err) {
				};
				
				var Cause_deces = document.getElementById("Cause_deces");
				try {
					Cause_deces.value = result.rows[0].doc.Cause_deces;																									
				}
				catch(err) {
				};
				
				var Poids_gr = document.getElementById("Poids_gr");
				Poids_gr.value = result.rows[0].doc.Poids_gr;
				
				var L_avant_bras_mm = document.getElementById("L_avant_bras_mm");
				L_avant_bras_mm.value = result.rows[0].doc.L_avant_bras_mm;
				
				var L_totale_corps_mm = document.getElementById("L_totale_corps_mm");
				L_totale_corps_mm.value = result.rows[0].doc.L_totale_corps_mm;
				
				var Taille_yeux = document.getElementById("Taille_yeux");
				Taille_yeux.value = result.rows[0].doc.Taille_yeux;
				
				var L_queue_mm = document.getElementById("L_queue_mm");
				L_queue_mm.value = result.rows[0].doc.L_queue_mm;
				
				var L_metacarpe_3ieme_doigt_mm = document.getElementById("L_metacarpe_3ieme_doigt_mm");
				L_metacarpe_3ieme_doigt_mm.value = result.rows[0].doc.L_metacarpe_3ieme_doigt_mm;
				
				var Couleur_pelage_dorsal = document.getElementById("Couleur_pelage_dorsal");
				Couleur_pelage_dorsal.value = result.rows[0].doc.Couleur_pelage_dorsal;
				
				var Couleur_pelage_ventral = document.getElementById("Couleur_pelage_ventral");
				Couleur_pelage_ventral.value = result.rows[0].doc.Couleur_pelage_ventral;
				
				var Remarques_anomalies = document.getElementById("Remarques_anomalies");
				Remarques_anomalies.value = result.rows[0].doc.Remarques_anomalies;
				
				var Sang_DBS_nb_cercles = document.getElementById("Sang_DBS_nb_cercles");
				Sang_DBS_nb_cercles.value = result.rows[0].doc.Sang_DBS_nb_cercles;
				
				var Sang_tube_EDTA = document.getElementById("Sang_tube_EDTA");
				Sang_tube_EDTA.value = result.rows[0].doc.Sang_tube_EDTA;
							
				var Feces_RNAl = document.getElementById("Feces_RNAl");
				Feces_RNAl.value = result.rows[0].doc.Feces_RNAl;
				  
				var Urine = document.getElementById("Urine");
				Urine.value = result.rows[0].doc.Urine;
				
				var Urine_DUS_nombre_cercles = document.getElementById("Urine_DUS_nombre_cercles");
				Urine_DUS_nombre_cercles.value = result.rows[0].doc.Urine_DUS_nombre_cercles;
				
				var Feces_urine_RNAl = document.getElementById("Feces_urine_RNAl");
				Feces_urine_RNAl.value = result.rows[0].doc.Feces_urine_RNAl;
				
				var Ecouvillon_gorge_RNAl = document.getElementById("Ecouvillon_gorge_RNAl");
				Ecouvillon_gorge_RNAl.value = result.rows[0].doc.Ecouvillon_gorge_RNAl;
				
				var Ecouvillon_rectal_RNAl = document.getElementById("Ecouvillon_rectal_RNAl");
				Ecouvillon_rectal_RNAl.value = result.rows[0].doc.Ecouvillon_rectal_RNAl;
				
				var Ectoparasites_ethanol = document.getElementById("Ectoparasites_ethanol");
				Ectoparasites_ethanol.value = result.rows[0].doc.Ectoparasites_ethanol;
				
				var Poils_ethanol = document.getElementById("Poils_ethanol");
				Poils_ethanol.value = result.rows[0].doc.Poils_ethanol;
				
				var Wing_punch_ethanol = document.getElementById("Wing_punch_ethanol");
				Wing_punch_ethanol.value = result.rows[0].doc.Wing_punch_ethanol;
				
				var Feces_culture_glycerol = document.getElementById("Feces_culture_glycerol");
				Feces_culture_glycerol.value = result.rows[0].doc.Feces_culture_glycerol;
				
				var Sperme = document.getElementById("Sperme");
				Sperme.value = result.rows[0].doc.Sperme;
				
				var Autres_echantillons_remarques = document.getElementById("Autres_echantillons_remarques");
				Autres_echantillons_remarques.value = result.rows[0].doc.Autres_echantillons_remarques;
						
				var Specimen_entier = document.getElementById("Specimen_entier");			
				try {
					Specimen_entier.value = result.rows[0].doc.Specimen_entier;																								
				}
				catch(err) {
				};
				
				var Specimen_preserve_dans = document.getElementById("Specimen_preserve_dans");			
				try {
					Specimen_preserve_dans.value = result.rows[0].doc.Specimen_preserve_dans;																								
				}
				catch(err) {
				};
				
				var Prelevement_organe = document.getElementById("Prelevement_organe");			
				try {
					Prelevement_organe.value = result.rows[0].doc.Prelevement_organe;																								
				}
				catch(err) {
				};
				
				var Foie_formol = document.getElementById("Foie_formol");
				try {
					Foie_formol.value = result.rows[0].doc.Foie_formol;																												
				}
				catch(err) {
				};
				
				var Foie_RNAl = document.getElementById("Foie_RNAl");
				Foie_RNAl.value = result.rows[0].doc.Foie_RNAl;
				
				var Rate_formol = document.getElementById("Rate_formol");				
				try {
					Rate_formol.value = result.rows[0].doc.Rate_formol;																												
				}
				catch(err) {
				};
				
				var Rate_RNAl = document.getElementById("Rate_RNAl");
				Rate_RNAl.value = result.rows[0].doc.Rate_RNAl;
				
				var Reins_formol = document.getElementById("Reins_formol");			
				try {
					Reins_formol.value = result.rows[0].doc.Reins_formol;																												
				}
				catch(err) {
				};
				
				var Reins_RNAl = document.getElementById("Reins_RNAl");
				Reins_RNAl.value = result.rows[0].doc.Reins_RNAl;
				
				var Intestins_formol = document.getElementById("Intestins_formol");
				try {
					Intestins_formol.value = result.rows[0].doc.Intestins_formol;																																
				}
				catch(err) {
				};
				
				var Intestins_RNAl = document.getElementById("Intestins_RNAl");
				Intestins_RNAl.value = result.rows[0].doc.Intestins_RNAl;
				
				var Poumons_formol = document.getElementById("Poumons_formol");			
				try {
					Poumons_formol.value = result.rows[0].doc.Poumons_formol;																																
				}
				catch(err) {
				};
				
				var Poumons_RNAl = document.getElementById("Poumons_RNAl");
				Poumons_RNAl.value = result.rows[0].doc.Poumons_RNAl;			
				
				var Coeur_formol = document.getElementById("Coeur_formol");			
				try {
					Coeur_formol.value = result.rows[0].doc.Coeur_formol;																																
				}
				catch(err) {
				};			
				
				var Coeur_RNAl = document.getElementById("Coeur_RNAl");
				Coeur_RNAl.value = result.rows[0].doc.Coeur_RNAl;
				
				var Ggl_lymph_formol = document.getElementById("Ggl_lymph_formol");			
				try {
					Ggl_lymph_formol.value = result.rows[0].doc.Ggl_lymph_formol;																																
				}
				catch(err) {
				};
				
				var Ggl_lymph_RNAl = document.getElementById("Ggl_lymph_RNAl");
				Ggl_lymph_RNAl.value = result.rows[0].doc.Ggl_lymph_RNAl;
				
				var Testicules_formol = document.getElementById("Testicules_formol");			
				try {
					Testicules_formol.value = result.rows[0].doc.Testicules_formol;																																
				}
				catch(err) {
				};
				
				var Testicules_RNAl = document.getElementById("Testicules_RNAl");
				Testicules_RNAl.value = result.rows[0].doc.Testicules_RNAl;
							
				var Peau_formol = document.getElementById("Peau_formol");			
				try {
					Peau_formol.value = result.rows[0].doc.Peau_formol;																															
				}
				catch(err) {
				};
				
				var Peau_RNAl = document.getElementById("Peau_RNAl");
				Peau_RNAl.value = result.rows[0].doc.Peau_RNAl;			
				
				var Muscles_formol = document.getElementById("Muscles_formol");			
				try {
					Muscles_formol.value = result.rows[0].doc.Muscles_formol;																															
				}
				catch(err) {
				};
				
				var Muscles_RNAl = document.getElementById("Muscles_RNAl");
				Muscles_RNAl.value = result.rows[0].doc.Muscles_RNAl;			
				
				var Cerveau_formol = document.getElementById("Cerveau_formol");			
				try {
					Cerveau_formol.value = result.rows[0].doc.Cerveau_formol;																															
				}
				catch(err) {
				};
				
				var Cerveau_RNAl = document.getElementById("Cerveau_RNAl");
				Cerveau_RNAl.value = result.rows[0].doc.Cerveau_RNAl;
				
				var Autre = document.getElementById("Autre");
				Autre.value = result.rows[0].doc.Autre;
							
				var Autre_formol = document.getElementById("Autre_formol");			
				try {
					Autre_formol.value = result.rows[0].doc.Autre_formol;																															
				}
				catch(err) {
				};
				
				var Autre_RNAl = document.getElementById("Autre_RNAl");
				Autre_RNAl.value = result.rows[0].doc.Autre_RNAl;
				
				var Remarques_echantillons = document.getElementById("Remarques_echantillons");
				Remarques_echantillons.value = result.rows[0].doc.Remarques_echantillons;
				  
	    	};
		}).catch(function (err) {
			console.log(err);
		});
	}).catch(function (err) {
		console.log(err);
	});
}

function loaded_bat_non_invasives(table) {
	showConnexionStatus();
	if (localStorage.getItem('web') === 'oui') {
		load_tables_reference_bat_non_invasives_web(table, false);
	} else {
		load_tables_reference_bat_non_invasives(table, false);
	}
}

function loaded_bat_non_invasives_add(table) {
	showConnexionStatus();
	
	if (localStorage.getItem('web') === 'oui') {
		load_tables_reference_bat_non_invasives_web(table, true);
	} else {
		load_tables_reference_bat_non_invasives(table, true);
	}
	
	var id = localStorage.getItem('ID_' + table);
	
	var doc = JSON.parse(localStorage.getItem('chauves_souris_non_invasivesTablesData'));
			
	var Date = document.getElementById("Date");
	Date.value = doc.Date;
			
	var Heure_debut = document.getElementById("Heure_debut");
	Heure_debut.value = doc.Heure_debut;
			
	var Heure_fin = document.getElementById("Heure_fin");
	Heure_fin.value = doc.Heure_fin;
			
	var Equipe = document.getElementById("Equipe");
	Equipe.value = doc.Equipe;
			
	var Pays = document.getElementById("Pays");
	try {
		Pays.value = doc.Pays;	
	}
	catch(err) {
	};
			
	var Region_collecte = document.getElementById("Region_collecte");
	Region_collecte.value = doc.Region_collecte;
			
	var Site_collecte = document.getElementById("Site_collecte");
	Site_collecte.value =doc.Site_collecte;
			
	var Environnement = document.getElementById("Environnement");
	try {
		Environnement.value = doc.Environnement;	
	}
	catch(err) {
	};
			
	var Lieu_collecte = document.getElementById("Lieu_collecte");
	try {
		Lieu_collecte.value = doc.Lieu_collecte;	
	}
	catch(err) {
	};
			
	var Lat_degre_dec = document.getElementById("Lat_degre_dec");
	Lat_degre_dec.value = doc.Lat_degre_dec;
			
	var Latitude = document.getElementById("Latitude");
	try {
		Latitude.value = doc.Latitude;	
	}
	catch(err) {
	};
			
	var Long_degre_dec = document.getElementById("Long_degre_dec");
	Long_degre_dec.value = doc.Long_degre_dec;
			
	var Longitude = document.getElementById("Longitude");
	try {
		Longitude.value = doc.Longitude;	
	}
	catch(err) {
	};
			
	var Type_site = document.getElementById("Type_site");
	try {
		Type_site.value = doc.Type_site;	
	}
		catch(err) {
	};
			
	var Proximite_village_km = document.getElementById("Proximite_village_km");
	Proximite_village_km.value = doc.Proximite_village_km;
			
	var Type_chauves_souris = document.getElementById("Type_chauves_souris");
	try {
		Type_chauves_souris.value = doc.Type_chauves_souris;	
	}
		catch(err) {
	};

	var Remarques = document.getElementById("Remarques");
	Remarques.value = doc.Remarques;
			
}

function loaded_modify_bat_non_invasives(table) {
	showConnexionStatus();
	
	if (localStorage.getItem('web') === 'oui') {
		load_tables_reference_bat_non_invasives_web(table, false, true);
	} else {
		load_tables_reference_bat_non_invasives(table, false, true);
	};
}

function load_datas_bat_non_invasives(table) {
	
	var id = localStorage.getItem('ID_' + table);
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
			
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + table + debug);
	} else {
		var DB = new PouchDB(table + debug);
	};
  	DB.allDocs({  		
  		keys: [id],
		include_docs: true,
		attachments: true
	}).then(function (result) {
		
		DB.allDocs({  
			keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
		// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
				
				alert('N_site : ' + result.rows[0].doc.N_site);
				
				var N_site = document.getElementById("N_site");			
				try {
					N_site.value = result.rows[0].doc.N_site;	
					N_site.onchange();
				}
				catch(err) {
				};
				
				var Date = document.getElementById("Date");
				Date.value = result.rows[0].doc.Date;
				
				var Heure_debut = document.getElementById("Heure_debut");
				Heure_debut.value = result.rows[0].doc.Heure_debut;
				
				var Heure_fin = document.getElementById("Heure_fin");
				Heure_fin.value = result.rows[0].doc.Heure_fin;
				
				var Equipe = document.getElementById("Equipe");
				Equipe.value = result.rows[0].doc.Equipe;
				
				var Pays = document.getElementById("Pays");
				try {
					Pays.value = result.rows[0].doc.Pays;	
				}
				catch(err) {
				};
				
				var Region_collecte = document.getElementById("Region_collecte");
				Region_collecte.value = result.rows[0].doc.Region_collecte;
				
				var Site_collecte = document.getElementById("Site_collecte");
				Site_collecte.value = result.rows[0].doc.Site_collecte;
				
				var Environnement = document.getElementById("Environnement");
				try {
					Environnement.value = result.rows[0].doc.Environnement;	
				}
				catch(err) {
				};
				
				var Lieu_collecte = document.getElementById("Lieu_collecte");
				try {
					Lieu_collecte.value = result.rows[0].doc.Lieu_collecte;	
				}
				catch(err) {
				};
				
				var Lat_degre_dec = document.getElementById("Lat_degre_dec");
				Lat_degre_dec.value = result.rows[0].doc.Lat_degre_dec;
				
				var Latitude = document.getElementById("Latitude");
				try {
					Latitude.value = result.rows[0].doc.Latitude;	
				}
				catch(err) {
				};
				
				var Long_degre_dec = document.getElementById("Long_degre_dec");
				Long_degre_dec.value = result.rows[0].doc.Long_degre_dec;
				
				var Longitude = document.getElementById("Longitude");
				try {
					Longitude.value = result.rows[0].doc.Longitude;	
				}
				catch(err) {
				};
				
				var Type_site = document.getElementById("Type_site");
				try {
					Type_site.value = result.rows[0].doc.Type_site;	
				}
				catch(err) {
				};
				
				var Proximite_village_km = document.getElementById("Proximite_village_km");
				Proximite_village_km.value = result.rows[0].doc.Proximite_village_km;
				
				var Type_chauves_souris = document.getElementById("Type_chauves_souris");
				try {
					Type_chauves_souris.value = result.rows[0].doc.Type_chauves_souris;	
				}
				catch(err) {
				};
				
				var Famille_1 = document.getElementById("Famille_1");
				var Genre_1 = document.getElementById("Genre_1");
				var Espece_1 = document.getElementById("Espece_1");
				var Famille_2 = document.getElementById("Famille_2");
				var Genre_2 = document.getElementById("Genre_2");
				var Espece_2 = document.getElementById("Espece_2");
				var Famille_3 = document.getElementById("Famille_3");
				var Genre_3 = document.getElementById("Genre_3");
				var Espece_3 = document.getElementById("Espece_3");
	
				try {
					select_change(Famille_1, Genre_1, Espece_1, result.rows[0].doc.Famille_1, result.rows[0].doc.Genre_1, result.rows[0].doc.Espece_1);
					select_change(Famille_2, Genre_2, Espece_2, result.rows[0].doc.Famille_2, result.rows[0].doc.Genre_2, result.rows[0].doc.Espece_2);
					select_change(Famille_3, Genre_3, Espece_3, result.rows[0].doc.Famille_3, result.rows[0].doc.Genre_3, result.rows[0].doc.Espece_3);
				}
				catch(err) {
				};
				
				var Remarques = document.getElementById("Remarques");
				Remarques.value = result.rows[0].doc.Remarques;
				
			}
		}).catch(function (err) {
			console.log(err);
		});
	}).catch(function (err) {
		console.log(err);
	});
}

function loaded_viande_de_brousse() {
	showConnexionStatus();
	load_tables_reference_viande_de_brousse();
}

function loaded_modify_viande_de_brousse(table) {
	showConnexionStatus();
	
	load_tables_reference_viande_de_brousse();
	
	var id = localStorage.getItem('ID_' + table);
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	var DB = new PouchDB(table + debug);
  	DB.allDocs({  		
  		keys: [id],
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
			console.log(JSON.stringify(result.rows));
			
			var N_identification_echantillon = document.getElementById("N_identification_echantillon");
			N_identification_echantillon.value = result.rows[0].doc.N_identification_echantillon;
								
			var Date = document.getElementById("Date");
			Date.value = result.rows[0].doc.Date;
			
			var Pays = document.getElementById("Pays");			
			try {
				Pays.value = result.rows[0].doc.Pays;	
			}
			catch(err) {
			};
			
			var Enqueteur = document.getElementById("Enqueteur");
			Enqueteur.value = result.rows[0].doc.Enqueteur;
			
			var Region_collecte = document.getElementById("Region_collecte");
			Region_collecte.value = result.rows[0].doc.Region_collecte;
			
			var Site_collecte = document.getElementById("Site_collecte");
			Site_collecte.value = result.rows[0].doc.Site_collecte;
			
			var Environnement = document.getElementById("Environnement");			
			try {
				Environnement.value = result.rows[0].doc.Environnement;	
			}
			catch(err) {
			};
			
			var Lieu_collecte = document.getElementById("Lieu_collecte");			
			try {
				Lieu_collecte.value = result.rows[0].doc.Lieu_collecte;	
			}
			catch(err) {
			};
			
			var Lat_degre_dec = document.getElementById("Lat_degre_dec");
			Lat_degre_dec.value = result.rows[0].doc.Lat_degre_dec;
			
			var Latitude = document.getElementById("Latitude");
			try {
				Latitude.value = result.rows[0].doc.Latitude;	
			}
			catch(err) {
			};
			
			var Long_degre_dec = document.getElementById("Long_degre_dec");
			Long_degre_dec.value = result.rows[0].doc.Long_degre_dec;
			
			var Longitude = document.getElementById("Longitude");					
			try {
				Longitude.value = result.rows[0].doc.Longitude;					
			}
			catch(err) {
			};
						
			var Preleve_chez = document.getElementById("Preleve_chez");
			try {
				Preleve_chez.value = result.rows[0].doc.Preleve_chez;	
			}
			catch(err) {
			};
			
			var Tue_par_chasseur = document.getElementById("Tue_par_chasseur");				
			try {
				Tue_par_chasseur.value = result.rows[0].doc.Tue_par_chasseur;	
			}
			catch(err) {
			};
			
			var Methode_chasse = document.getElementById("Methode_chasse");
			try {
				Methode_chasse.value = result.rows[0].doc.Methode_chasse;
			}
			catch(err) {
			};				
						 	
			var Nbre_pieges = document.getElementById("Nbre_pieges");
			Nbre_pieges.value = result.rows[0].doc.Nbre_pieges;
							
			var Distance_village = document.getElementById("Distance_village");
			Distance_village.value = result.rows[0].doc.Distance_village;
			
			var Duree_de_chasse = document.getElementById("Duree_de_chasse");
			try {
				Duree_de_chasse.value = result.rows[0].doc.Duree_de_chasse;
			}
			catch(err) {
			};	
			
			var Destination = document.getElementById("Destination");
			try {
				Destination.value = result.rows[0].doc.Destination;
			}
			catch(err) {
			};	
			
			var Lieu_vente = document.getElementById("Lieu_vente");
			Lieu_vente.value = result.rows[0].doc.Lieu_vente;
							
			var Prix_vente = document.getElementById("Prix_vente");
			Prix_vente.value = result.rows[0].doc.Prix_vente;
			
			var Type_animal = document.getElementById("Type_animal");
			try {
				Type_animal.value = result.rows[0].doc.Type_animal;
			}
			catch(err) {
			};	
						
			var Espece_nom_local = document.getElementById("Espece_nom_local");
			Espece_nom_local.value = result.rows[0].doc.Espece_nom_local;
			
			var Famille = document.getElementById("Famille");
			var Genre = document.getElementById("Genre");
			var Espece = document.getElementById("Espece");
			
			try {
				select_change(Famille, Genre, Espece, result.rows[0].doc.Famille, result.rows[0].doc.Genre, result.rows[0].doc.Espece);
			}
			catch(err) {
			};
			
			var Sexe = document.getElementById("Sexe");			
			try {
				Sexe.value = result.rows[0].doc.Sexe;	
			}
			catch(err) {
			};
			
			var Age = document.getElementById("Age");
			try {
				Age.value = result.rows[0].doc.Age;					
			}
			catch(err) {
			};
						
			var Mort_depuis = document.getElementById("Mort_depuis");
			try {
				Mort_depuis.value = result.rows[0].doc.Mort_depuis;									
			}
			catch(err) {
			};
			
			var Etat_carcasse_animal = document.getElementById("Etat_carcasse_animal");
			try {
				Etat_carcasse_animal.value = result.rows[0].doc.Etat_carcasse_animal;													
			}
			catch(err) {
			};			
			
			var Decoupage_carcasse = document.getElementById("Decoupage_carcasse");
			try {
				Decoupage_carcasse.value = result.rows[0].doc.Decoupage_carcasse;	
			}
			catch(err) {
			};	
						
			var L_total_corps = document.getElementById("L_total_corps");
			L_total_corps.value = result.rows[0].doc.L_total_corps;
			
			var Poids = document.getElementById("Poids");
			Poids.value = result.rows[0].doc.Poids;
			
			var Observations_carcasse = document.getElementById("Observations_carcasse");
			try {
				Observations_carcasse.value = result.rows[0].doc.Observations_carcasse;																					
			}
			catch(err) {
			};
			
			var Collecte_sang_DBS = document.getElementById("Collecte_sang_DBS");
			try {
				Collecte_sang_DBS.value = result.rows[0].doc.Collecte_sang_DBS;																									
			}
			catch(err) {
			};
						
			var Qualite_echantillon = document.getElementById("Qualite_echantillon");			
			try {
				Qualite_echantillon.value = result.rows[0].doc.Qualite_echantillon;																								
			}
			catch(err) {
			};
			
			var Endroit_prelevement = document.getElementById("Endroit_prelevement");			
			try {
				Endroit_prelevement.value = result.rows[0].doc.Endroit_prelevement;																								
			}
			catch(err) {
			};
						
			var Remarques_echantillon = document.getElementById("Remarques_echantillon");
			Remarques_echantillon.value = result.rows[0].doc.Remarques_echantillon;
	  	}
	}).catch(function (err) {
		console.log(err);
	});
}

function load_tables_reference_bat(table, add) {
	
	var doc;
	if (add) {
		doc = JSON.parse(localStorage.getItem('chauves_souris_captureesTablesData'));
	}
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	/*var nom_equipe;
	var code_equipe = localStorage.getItem('code_equipe');
	if ((code_equipe === '6') || (debug !== '')) {
		nom_equipe = '_astre';
	} else if ((code_equipe === '2') || (debug !== '')) {
		nom_equipe = '_ird';
	} else if ((code_equipe === '1') || (debug !== '')) {
		nom_equipe = '_transvihmi';
	};*/
	
	var nom_equipe;
	if (table == 'chauves_souris_capturees_astre') {
		nom_equipe = '_astre';
	} else if (table == 'chauves_souris_capturees_mivegec') {
		nom_equipe = '_mivegec';
	} else if (table == 'chauves_souris_capturees_transvihmi') {
		nom_equipe = '_transvihmi';
	};
	
	var N_site = document.getElementById("N_site");		
	var DB = new PouchDB('site' + nom_equipe + debug);
	 	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var siteTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	siteTablesData.rows.forEach(function(row){   
	    		N_site.options[N_site.options.length] = new Option(row.doc.N_site, row.doc.N_site/*row.id*/);
	    	});		
	    	
	    	if (add) {
	    		try {
	    			N_site.value = doc.N_site;	
	    			N_site.onchange();
	    		}
	    		catch(err) {
	    		};
	    	};
		}
	}).catch(function (err) {
		console.log(err);
	});
	
	var Pays = document.getElementById("Pays");		
	var DB = new PouchDB('pays' + debug);
	 	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var paysTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	paysTablesData.rows.forEach(function(row){   
	    		Pays.options[Pays.options.length] = new Option(row.doc.Pays, row.doc.Pays); 
	    	});		 
	    	
	    	if (add) {
	    		try {
	    			Pays.value = doc.Pays;	
	    		}
	    		catch(err) {
	    		};
	    	};
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
	var Environnement = document.getElementById("Environnement");	
	var DB = new PouchDB('environnement' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		var environnementTablesData = JSON.parse(JSON.stringify(result));
	   		
	   		environnementTablesData.rows.forEach(function(row){   
	   			Environnement.options[Environnement.options.length] = new Option(row.doc.Environnement, row.doc.Environnement); 
	   		});	
	   		Environnement.options[Environnement.options.length] = new Option("Manquant", "Manquant");
	   		
	   		if (add) {
	    		try {
	    			Environnement.value = doc.Environnement;	
	    		}
	    		catch(err) {
	    		};
	    	};
	    	
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
  	var Lieu_capture = document.getElementById("Lieu_capture");	
	var DB = new PouchDB('lieu_capture' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var lieu_captureTablesData = JSON.parse(JSON.stringify(result));
    		
    		lieu_captureTablesData.rows.forEach(function(row){   
    			Lieu_capture.options[Lieu_capture.options.length] = new Option(row.doc.Lieu_capture, row.doc.Lieu_capture); 
    		});		    
    		Lieu_capture.options[Lieu_capture.options.length] = new Option("Manquant", "Manquant");
    		
    		if (add) {
	    		try {
	    			Lieu_capture.value = doc.Lieu_capture;	
	    		}
	    		catch(err) {
	    		};
	    	};
	    	
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
  	var Methode_capture = document.getElementById("Methode_capture");	
	var DB = new PouchDB('methode_capture' + debug);
  	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var methode_captureTablesData = JSON.parse(JSON.stringify(result));
    		
    		methode_captureTablesData.rows.forEach(function(row){   
    			Methode_capture.options[Methode_capture.options.length] = new Option(row.doc.Methode_capture, row.doc.Methode_capture); 
    		});		
    		Methode_capture.options[Methode_capture.options.length] = new Option("Manquant", "Manquant");
    		
    		if (add) {
	    		try {
	    			Methode_capture.value = doc.Methode_capture;	
	    		}
	    		catch(err) {
	    		};
	    	};
	    	
		}
	}).catch(function (err) {
		console.log(err);
	});  	
  	
	if ((table == 'chauves_souris_capturees_astre') || (table == 'chauves_souris_capturees_transvihmi') || (table == 'chauves_souris_capturees_mivegec')) {
	  	var Famille_terrain = document.getElementById("Famille_terrain");
		var Famille_labo = document.getElementById("Famille_labo");
		var Famille_consensus = document.getElementById("Famille_consensus");
		var DB = new PouchDB('espece' + debug);
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		localStorage['especeTablesData'] = JSON.stringify(result);
	    		var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
	    		
		   		especeTablesData.rows[0].doc.Famille.forEach(function(row){   
		   			Famille_terrain.options[Famille_terrain.options.length] = new Option(row.Nom, row.Nom); 
		   			Famille_labo.options[Famille_labo.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_consensus.options[Famille_consensus.options.length] = new Option(row.Nom, row.Nom);
		   		});	
		   		Famille_terrain.options[Famille_terrain.options.length] = new Option("Manquant", "Manquant");
		   		Famille_labo.options[Famille_labo.options.length] = new Option("Manquant", "Manquant");
		   		Famille_consensus.options[Famille_consensus.options.length] = new Option("Manquant", "Manquant");
		   		
		   		if (add) {
		    		try {
		    			select_change(Famille_terrain, Genre_terrain, Espece_terrain, doc.Famille_terrain, doc.Genre_terrain, doc.Espece_terrain);
		    			select_change(Famille_labo, Genre_labo, Espece_labo, doc.Famille_labo, doc.Genre_labo, doc.Espece_labo);
		    			select_change(Famille_consensus, Genre_consensus, Espece_consensus, doc.Famille_consensus, doc.Genre_consensus, doc.Espece_consensus);
		    		}
		    		catch(err) {
		    		};
		    	};
		    	
			}
		}).catch(function (err) {
			console.log(err);
		});
  	} else if ((table == 'chauves_souris_non_invasives_astre') || (table == 'chauves_souris_non_invasives_astre') || (table == 'chauves_souris_non_invasives_astre')){
  		var Famille_1 = document.getElementById("Famille_1");
  		var Famille_2 = document.getElementById("Famille_2");
  		var Famille_3 = document.getElementById("Famille_3");
  		var DB = new PouchDB('espece' + debug);
  		DB.allDocs({  		
  			include_docs: true,
  			attachments: true
  		}).then(function (result) {
  			// handle result
  			if (typeof(JSON.stringify(result)) != "undefined"){  
  		   		localStorage['especeTablesData'] = JSON.stringify(result);
  	    		
  				var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
  		    		
  			   	especeTablesData.rows[0].doc.Famille.forEach(function(row){   
  			   		Famille_1.options[Famille_1.options.length] = new Option(row.Nom, row.Nom); 
  			   		Famille_2.options[Famille_2.options.length] = new Option(row.Nom, row.Nom);
  			   		Famille_3.options[Famille_3.options.length] = new Option(row.Nom, row.Nom);
  			   	});	
  		   		Famille_1.options[Famille_1.options.length] = new Option("Manquant", "Manquant");
 			   	Famille_2.options[Famille_2.options.length] = new Option("Manquant", "Manquant");
 			   	Famille_3.options[Famille_3.options.length] = new Option("Manquant", "Manquant");
 			   	
 			   if (add) {
 		    		try {
 		    			select_change(Famille_1, Genre_1, Espece_1, doc.Famille_1, doc.Genre_1, doc.Espece_1);
		    			select_change(Famille_2, Genre_2, Espece_2, doc.Famille_2, doc.Genre_2, doc.Espece_2);
		    			select_change(Famille_3, Genre_3, Espece_3, doc.Famille_3, doc.Genre_3, doc.Espece_3);
		    		
 		    		}
 		    		catch(err) {
 		    		};
 		    	};
 		    	
  			}
  		}).catch(function (err) {
  			console.log(err);
  		});
  	}
}

function load_tables_reference_bat_web(table, add) {
	
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	
	var doc;
	if (add) {
		doc = JSON.parse(localStorage.getItem('chauves_souris_captureesTablesData'));
	}
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	var nom_equipe;
	if (table == 'chauves_souris_capturees_astre') {
		nom_equipe = '_astre';
	} else if (table == 'chauves_souris_capturees_mivegec') {
		nom_equipe = '_mivegec';
	} else if (table == 'chauves_souris_capturees_transvihmi') {
		nom_equipe = '_transvihmi';
	};
	
	var N_site = document.getElementById("N_site");		
	var remoteDB = new PouchDB(remote_couchdb + 'site' + nom_equipe + debug);
	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		
		var remoteDB2 = new PouchDB(remote_couchdb + 'site' + nom_equipe + debug);
		remoteDB2.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	var siteTablesData = JSON.parse(JSON.stringify(result));
		    	
		    	siteTablesData.rows.forEach(function(row){   
		    		alert(row.doc.N_site);
		    		N_site.options[N_site.options.length] = new Option(row.doc.N_site, row.doc.N_site/*row.id*/);
		    	});		
		    	
		    	if (add) {
		    		try {
		    			N_site.value = row.doc.N_site;	
		    			N_site.onchange();
		    		}
		    		catch(err) {
		    		};
		    	};
			}
		}).catch(function (err) {
			console.log(err);
		});
	}).catch(function (err) {
		console.log(err);
	});
	
	var Pays = document.getElementById("Pays");		
	var remoteDB = new PouchDB(remote_couchdb + 'pays' + debug);
	 	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var paysTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	paysTablesData.rows.forEach(function(row){   
	    		Pays.options[Pays.options.length] = new Option(row.doc.Pays, row.doc.Pays); 
	    	});		 
	    	
	    	if (add) {
	    		try {
	    			Pays.value = doc.Pays;	
	    		}
	    		catch(err) {
	    		};
	    	};
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
	var Environnement = document.getElementById("Environnement");	
	var remoteDB = new PouchDB(remote_couchdb + 'environnement' + debug);
	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		var environnementTablesData = JSON.parse(JSON.stringify(result));
	   		
	   		environnementTablesData.rows.forEach(function(row){   
	   			Environnement.options[Environnement.options.length] = new Option(row.doc.Environnement, row.doc.Environnement); 
	   		});	
	   		Environnement.options[Environnement.options.length] = new Option("Manquant", "Manquant");
	   		
	   		if (add) {
	    		try {
	    			Environnement.value = doc.Environnement;	
	    		}
	    		catch(err) {
	    		};
	    	};
	    	
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
  	var Lieu_capture = document.getElementById("Lieu_capture");	
	var remoteDB = new PouchDB(remote_couchdb + 'lieu_capture' + debug);
	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var lieu_captureTablesData = JSON.parse(JSON.stringify(result));
    		
    		lieu_captureTablesData.rows.forEach(function(row){   
    			Lieu_capture.options[Lieu_capture.options.length] = new Option(row.doc.Lieu_capture, row.doc.Lieu_capture); 
    		});		    
    		Lieu_capture.options[Lieu_capture.options.length] = new Option("Manquant", "Manquant");
    		
    		if (add) {
	    		try {
	    			Lieu_capture.value = doc.Lieu_capture;	
	    		}
	    		catch(err) {
	    		};
	    	};
	    	
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
  	var Methode_capture = document.getElementById("Methode_capture");	
	var remoteDB = new PouchDB(remote_couchdb + 'methode_capture' + debug);
	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var methode_captureTablesData = JSON.parse(JSON.stringify(result));
    		
    		methode_captureTablesData.rows.forEach(function(row){   
    			Methode_capture.options[Methode_capture.options.length] = new Option(row.doc.Methode_capture, row.doc.Methode_capture); 
    		});		
    		Methode_capture.options[Methode_capture.options.length] = new Option("Manquant", "Manquant");
    		
    		if (add) {
	    		try {
	    			Methode_capture.value = doc.Methode_capture;	
	    		}
	    		catch(err) {
	    		};
	    	};
	    	
		}
	}).catch(function (err) {
		console.log(err);
	});  	
  	
	if ((table == 'chauves_souris_capturees_astre') || (table == 'chauves_souris_capturees_transvihmi') || (table == 'chauves_souris_capturees_mivegec')) {
	  	var Famille_terrain = document.getElementById("Famille_terrain");
		var Famille_labo = document.getElementById("Famille_labo");
		var Famille_consensus = document.getElementById("Famille_consensus");
		var remoteDB = new PouchDB(remote_couchdb + 'espece' + debug);
		remoteDB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		localStorage['especeTablesData'] = JSON.stringify(result);
	    		var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
	    		
		   		especeTablesData.rows[0].doc.Famille.forEach(function(row){   
		   			Famille_terrain.options[Famille_terrain.options.length] = new Option(row.Nom, row.Nom); 
		   			Famille_labo.options[Famille_labo.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_consensus.options[Famille_consensus.options.length] = new Option(row.Nom, row.Nom);
		   		});	
		   		Famille_terrain.options[Famille_terrain.options.length] = new Option("Manquant", "Manquant");
		   		Famille_labo.options[Famille_labo.options.length] = new Option("Manquant", "Manquant");
		   		Famille_consensus.options[Famille_consensus.options.length] = new Option("Manquant", "Manquant");
		   		
		   		if (add) {
		    		try {
		    			select_change(Famille_terrain, Genre_terrain, Espece_terrain, doc.Famille_terrain, doc.Genre_terrain, doc.Espece_terrain);
		    			select_change(Famille_labo, Genre_labo, Espece_labo, doc.Famille_labo, doc.Genre_labo, doc.Espece_labo);
		    			select_change(Famille_consensus, Genre_consensus, Espece_consensus, doc.Famille_consensus, doc.Genre_consensus, doc.Espece_consensus);
		    		}
		    		catch(err) {
		    		};
		    	};
		    	
			}
		}).catch(function (err) {
			console.log(err);
		});
  	} else if ((table == 'chauves_souris_non_invasives_astre') || (table == 'chauves_souris_non_invasives_astre') || (table == 'chauves_souris_non_invasives_astre')){
  		var Famille_1 = document.getElementById("Famille_1");
  		var Famille_2 = document.getElementById("Famille_2");
  		var Famille_3 = document.getElementById("Famille_3");
  		var remoteDB = new PouchDB(remote_couchdb + 'espece' + debug);
  		remoteDB.allDocs({  		
  			include_docs: true,
  			attachments: true
  		}).then(function (result) {
  			// handle result
  			if (typeof(JSON.stringify(result)) != "undefined"){  
  		   		localStorage['especeTablesData'] = JSON.stringify(result);
  	    		
  				var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
  		    		
  			   	especeTablesData.rows[0].doc.Famille.forEach(function(row){   
  			   		Famille_1.options[Famille_1.options.length] = new Option(row.Nom, row.Nom); 
  			   		Famille_2.options[Famille_2.options.length] = new Option(row.Nom, row.Nom);
  			   		Famille_3.options[Famille_3.options.length] = new Option(row.Nom, row.Nom);
  			   	});	
  		   		Famille_1.options[Famille_1.options.length] = new Option("Manquant", "Manquant");
 			   	Famille_2.options[Famille_2.options.length] = new Option("Manquant", "Manquant");
 			   	Famille_3.options[Famille_3.options.length] = new Option("Manquant", "Manquant");
 			   	
 			   if (add) {
 		    		try {
 		    			select_change(Famille_1, Genre_1, Espece_1, doc.Famille_1, doc.Genre_1, doc.Espece_1);
		    			select_change(Famille_2, Genre_2, Espece_2, doc.Famille_2, doc.Genre_2, doc.Espece_2);
		    			select_change(Famille_3, Genre_3, Espece_3, doc.Famille_3, doc.Genre_3, doc.Espece_3);
		    		
 		    		}
 		    		catch(err) {
 		    		};
 		    	};
 		    	
  			}
  		}).catch(function (err) {
  			console.log(err);
  		});
  	}
}

function load_tables_reference_bat_non_invasives(table, add) {
	
	var doc;
	if (add) {
		doc = JSON.parse(localStorage.getItem('chauves_souris_non_invasivesTablesData'));
	}
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	var nom_equipe;
	if (table == 'chauves_souris_non_invasives_astre') {
		nom_equipe = '_astre';
	} else if (table == 'chauves_souris_non_invasives_mivegec') {
		nom_equipe = '_mivegec';
	} else if (table == 'chauves_souris_non_invasives_transvihmi') {
		nom_equipe = '_transvihmi';
	};
	
	var N_site = document.getElementById("N_site");		
	var DB = new PouchDB('site' + nom_equipe + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		
		var DB = new PouchDB('site' + nom_equipe + debug);
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
		
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	var siteTablesData = JSON.parse(JSON.stringify(result));
		    	
		    	siteTablesData.rows.forEach(function(row){   
		    		N_site.options[N_site.options.length] = new Option(row.doc.N_site, row.doc.N_site);
		    	});		
		    	
		    	if (add) {
		    		try {
		    			N_site.value = doc.N_site;	
		    			N_site.onchange();
		    		}
		    		catch(err) {
		    		};
		    	};
			}
		}).catch(function (err) {
			console.log(err);
		});
	}).catch(function (err) {
		console.log(err);
	});
	
	var Pays = document.getElementById("Pays");		
	var DB = new PouchDB('pays' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		var paysTablesData = JSON.parse(JSON.stringify(result));
	   		
	   		paysTablesData.rows.forEach(function(row){   
	   			Pays.options[Pays.options.length] = new Option(row.doc.Pays, row.doc.Pays); 
	   		});		 
	   		
	   		if (add) {
	    		try {
	    			Pays.value = doc.Pays;	
	    		}
	    		catch(err) {
	    		};
	    	};
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
	var Environnement = document.getElementById("Environnement");	
	var DB = new PouchDB('environnement' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		var environnementTablesData = JSON.parse(JSON.stringify(result));
	   		
	   		environnementTablesData.rows.forEach(function(row){   
	   			Environnement.options[Environnement.options.length] = new Option(row.doc.Environnement, row.doc.Environnement); 
	   		});	
	   		Environnement.options[Environnement.options.length] = new Option("Manquant", "Manquant");
		
	   		if (add) {
	    		try {
	    			Environnement.value = doc.Environnement;	
	    		}
	    		catch(err) {
	    		};
	    	};
 		
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
	var Lieu_collecte = document.getElementById("Lieu_collecte");	
	var DB = new PouchDB('lieu_collecte' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		var lieu_collecteTablesData = JSON.parse(JSON.stringify(result));
	   		
	   		lieu_collecteTablesData.rows.forEach(function(row){   
	   			Lieu_collecte.options[Lieu_collecte.options.length] = new Option(row.doc.Lieu_collecte, row.doc.Lieu_collecte); 
	   		});		    
	   		Lieu_collecte.options[Lieu_collecte.options.length] = new Option("Manquant", "Manquant");
		
	   		if (add) {
	    		try {
	    			Lieu_collecte.value = doc.Lieu_collecte;	
	    		}
	    		catch(err) {
	    		};
	    	};
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
	if ((table == 'chauves_souris_capturees_astre') || (table == 'chauves_souris_capturees_transvihmi') || (table == 'chauves_souris_capturees_mivegec')) {
	  	var Famille_terrain = document.getElementById("Famille_terrain");
		var Famille_labo = document.getElementById("Famille_labo");
		var Famille_consensus = document.getElementById("Famille_consensus");
		var DB = new PouchDB('espece' + debug);
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		localStorage['especeTablesData'] = JSON.stringify(result);
	    		var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
	    		
		   		especeTablesData.rows[0].doc.Famille.forEach(function(row){   
		   			Famille_terrain.options[Famille_terrain.options.length] = new Option(row.Nom, row.Nom); 
		   			Famille_labo.options[Famille_labo.options.length] = new Option(row.Nom, row.Nom);
		   			Famille_consensus.options[Famille_consensus.options.length] = new Option(row.Nom, row.Nom);
		   		});	
		   		Famille_terrain.options[Famille_terrain.options.length] = new Option("Manquant", "Manquant");
		   		Famille_labo.options[Famille_labo.options.length] = new Option("Manquant", "Manquant");
		   		Famille_consensus.options[Famille_consensus.options.length] = new Option("Manquant", "Manquant");
		   		
		   		if (add) {
		    		try {
		    			select_change(Famille_terrain, Genre_terrain, Espece_terrain, doc.Famille_terrain, doc.Genre_terrain, doc.Espece_terrain);
		    			select_change(Famille_labo, Genre_labo, Espece_labo, doc.Famille_labo, doc.Genre_labo, doc.Espece_labo);
		    			select_change(Famille_consensus, Genre_consensus, Espece_consensus, doc.Famille_consensus, doc.Genre_consensus, doc.Espece_consensus);
		    		}
		    		catch(err) {
		    		};
		    	};
		    	
			}
		}).catch(function (err) {
			console.log(err);
		});
  	} else if ((table == 'chauves_souris_non_invasives_astre') || (table == 'chauves_souris_non_invasives_mivegec') || (table == 'chauves_souris_non_invasives_transvihmi')){
  		var Famille_1 = document.getElementById("Famille_1");
  		var Famille_2 = document.getElementById("Famille_2");
  		var Famille_3 = document.getElementById("Famille_3");
  		var DB = new PouchDB('espece' + debug);
  		DB.allDocs({  		
  			include_docs: true,
  			attachments: true
  		}).then(function (result) {
  			// handle result
  			if (typeof(JSON.stringify(result)) != "undefined"){  
  		   		localStorage['especeTablesData'] = JSON.stringify(result);
  	    		
  				var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
  		    		
  			   	especeTablesData.rows[0].doc.Famille.forEach(function(row){   
  			   		Famille_1.options[Famille_1.options.length] = new Option(row.Nom, row.Nom); 
  			   		Famille_2.options[Famille_2.options.length] = new Option(row.Nom, row.Nom);
  			   		Famille_3.options[Famille_3.options.length] = new Option(row.Nom, row.Nom);
  			   	});	
  		   		Famille_1.options[Famille_1.options.length] = new Option("Manquant", "Manquant");
 			   	Famille_2.options[Famille_2.options.length] = new Option("Manquant", "Manquant");
 			   	Famille_3.options[Famille_3.options.length] = new Option("Manquant", "Manquant");
 			   	
 			   if (add) {
 		    		try {
 		    			select_change(Famille_1, Genre_1, Espece_1, doc.Famille_1, doc.Genre_1, doc.Espece_1);
		    			select_change(Famille_2, Genre_2, Espece_2, doc.Famille_2, doc.Genre_2, doc.Espece_2);
		    			select_change(Famille_3, Genre_3, Espece_3, doc.Famille_3, doc.Genre_3, doc.Espece_3);
		    		
 		    		}
 		    		catch(err) {
 		    		};
 		    	};
 		    	
  			}
  		}).catch(function (err) {
  			console.log(err);
  		});
  	}
  	  	
}

function load_tables_reference_bat_non_invasives_web(table, add, modify) {
	
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	
	var doc;
	if (add) {
		doc = JSON.parse(localStorage.getItem('chauves_souris_non_invasivesTablesData'));
	}
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	var nom_equipe;
	if (table == 'chauves_souris_non_invasives_astre') {
		nom_equipe = '_astre';
	} else if (table == 'chauves_souris_non_invasives_mivegec') {
		nom_equipe = '_mivegec';
	} else if (table == 'chauves_souris_non_invasives_transvihmi') {
		nom_equipe = '_transvihmi';
	};
	
	var N_site = document.getElementById("N_site");		
	var remoteDB = new PouchDB(remote_couchdb + 'site' + nom_equipe + debug);
	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		
		var remoteDB2 = new PouchDB(remote_couchdb + 'site' + nom_equipe + debug);
		remoteDB2.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
		
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	var siteTablesData = JSON.parse(JSON.stringify(result));
		    	
		    	siteTablesData.rows.forEach(function(row){   
		    		alert(row.doc.N_site);
		    		N_site.options[N_site.options.length] = new Option(row.doc.N_site, row.doc.N_site);
		    	});		
		    	
		    	if (add) {
		    		try {
		    			N_site.value = doc.N_site;	
		    			N_site.onchange();
		    		}
		    		catch(err) {
		    		};
		    	};
		    	
		    	listePays();
		    }
		}).catch(function (err) {
			console.log(err);
		});
	}).catch(function (err) {
		console.log(err);
	});
	
	function listePays() {
		var Pays = document.getElementById("Pays");		
		var remoteDB = new PouchDB(remote_couchdb + 'pays' + debug);
		remoteDB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		var paysTablesData = JSON.parse(JSON.stringify(result));
		   		
		   		paysTablesData.rows.forEach(function(row){   
		   			Pays.options[Pays.options.length] = new Option(row.doc.Pays, row.doc.Pays); 
		   		});		 
		   		
		   		if (add) {
		    		try {
		    			Pays.value = doc.Pays;	
		    		}
		    		catch(err) {
		    		};
		    	};
		    	
		    	listeEnvironnement();
			}
		}).catch(function (err) {
			console.log(err);
		});
	};
	  	
	function listeEnvironnement() {
		var Environnement = document.getElementById("Environnement");	
		var remoteDB = new PouchDB(remote_couchdb + 'environnement' + debug);
		remoteDB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		var environnementTablesData = JSON.parse(JSON.stringify(result));
		   		
		   		environnementTablesData.rows.forEach(function(row){   
		   			Environnement.options[Environnement.options.length] = new Option(row.doc.Environnement, row.doc.Environnement); 
		   		});	
		   		Environnement.options[Environnement.options.length] = new Option("Manquant", "Manquant");
			
		   		if (add) {
		    		try {
		    			Environnement.value = doc.Environnement;	
		    		}
		    		catch(err) {
		    		};
		    	};
		    	
		    	listeLieu_collecte();
			}
		}).catch(function (err) {
			console.log(err);
		});
	};
	  	
	function listeLieu_collecte() {
		var Lieu_collecte = document.getElementById("Lieu_collecte");	
		var remoteDB = new PouchDB(remote_couchdb + 'lieu_collecte' + debug);
		remoteDB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		var lieu_collecteTablesData = JSON.parse(JSON.stringify(result));
		   		
		   		lieu_collecteTablesData.rows.forEach(function(row){   
		   			Lieu_collecte.options[Lieu_collecte.options.length] = new Option(row.doc.Lieu_collecte, row.doc.Lieu_collecte); 
		   		});		    
		   		Lieu_collecte.options[Lieu_collecte.options.length] = new Option("Manquant", "Manquant");
			
		   		if (add) {
		    		try {
		    			Lieu_collecte.value = doc.Lieu_collecte;	
		    		}
		    		catch(err) {
		    		};
		    	};
		    	
		    	listeFamille();
			}
		}).catch(function (err) {
			console.log(err);
		});
	}
	  	
	function listeFamille() {
		if ((table == 'chauves_souris_capturees_astre') || (table == 'chauves_souris_capturees_transvihmi') || (table == 'chauves_souris_capturees_mivegec')) {
		  	var Famille_terrain = document.getElementById("Famille_terrain");
			var Famille_labo = document.getElementById("Famille_labo");
			var Famille_consensus = document.getElementById("Famille_consensus");
			var remoteDB = new PouchDB(remote_couchdb + 'espece' + debug);
			remoteDB.allDocs({  		
				include_docs: true,
				attachments: true
			}).then(function (result) {
				// handle result
				if (typeof(JSON.stringify(result)) != "undefined"){  
			   		localStorage['especeTablesData'] = JSON.stringify(result);
		    		var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
		    		
			   		especeTablesData.rows[0].doc.Famille.forEach(function(row){   
			   			Famille_terrain.options[Famille_terrain.options.length] = new Option(row.Nom, row.Nom); 
			   			Famille_labo.options[Famille_labo.options.length] = new Option(row.Nom, row.Nom);
			   			Famille_consensus.options[Famille_consensus.options.length] = new Option(row.Nom, row.Nom);
			   		});	
			   		Famille_terrain.options[Famille_terrain.options.length] = new Option("Manquant", "Manquant");
			   		Famille_labo.options[Famille_labo.options.length] = new Option("Manquant", "Manquant");
			   		Famille_consensus.options[Famille_consensus.options.length] = new Option("Manquant", "Manquant");
			   		
			   		if (add) {
			    		try {
			    			select_change(Famille_terrain, Genre_terrain, Espece_terrain, doc.Famille_terrain, doc.Genre_terrain, doc.Espece_terrain);
			    			select_change(Famille_labo, Genre_labo, Espece_labo, doc.Famille_labo, doc.Genre_labo, doc.Espece_labo);
			    			select_change(Famille_consensus, Genre_consensus, Espece_consensus, doc.Famille_consensus, doc.Genre_consensus, doc.Espece_consensus);
			    		}
			    		catch(err) {
			    		};
			    	};
			    	
				}
			}).catch(function (err) {
				console.log(err);
			});
	  	} else if ((table == 'chauves_souris_non_invasives_astre') || (table == 'chauves_souris_non_invasives_mivegec') || (table == 'chauves_souris_non_invasives_transvihmi')){
	  		var Famille_1 = document.getElementById("Famille_1");
	  		var Famille_2 = document.getElementById("Famille_2");
	  		var Famille_3 = document.getElementById("Famille_3");
	  		var remoteDB = new PouchDB(remote_couchdb + 'espece' + debug);
	  		remoteDB.allDocs({  		
	  			include_docs: true,
	  			attachments: true
	  		}).then(function (result) {
	  			// handle result
	  			if (typeof(JSON.stringify(result)) != "undefined"){  
	  		   		localStorage['especeTablesData'] = JSON.stringify(result);
	  	    		
	  				var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
	  		   	    
	  		   		especeTablesData.rows[0].doc.Famille.forEach(function(row){ 	
	  			   		Famille_1.options[Famille_1.options.length] = new Option(row.Nom, row.Nom); 
	  			   		Famille_2.options[Famille_2.options.length] = new Option(row.Nom, row.Nom);
	  			   		Famille_3.options[Famille_3.options.length] = new Option(row.Nom, row.Nom);
	  			   	});	
	  		   		Famille_1.options[Famille_1.options.length] = new Option("Manquant", "Manquant");
	 			   	Famille_2.options[Famille_2.options.length] = new Option("Manquant", "Manquant");
	 			   	Famille_3.options[Famille_3.options.length] = new Option("Manquant", "Manquant");
	 			   	
	 			   if (add) {
	 		    		try {
	 		    			select_change(Famille_1, Genre_1, Espece_1, doc.Famille_1, doc.Genre_1, doc.Espece_1);
			    			select_change(Famille_2, Genre_2, Espece_2, doc.Famille_2, doc.Genre_2, doc.Espece_2);
			    			select_change(Famille_3, Genre_3, Espece_3, doc.Famille_3, doc.Genre_3, doc.Espece_3);
			    		
	 		    		}
	 		    		catch(err) {
	 		    		};
	 		    	};
	 		    	
	  			}
	  		}).catch(function (err) {
	  			console.log(err);
	  		});
	  	}
		if (modify) {
			load_datas_bat_non_invasives(table);
		}
	}
  	  	
}

function load_tables_reference_viande_de_brousse() {
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	var Pays = document.getElementById("Pays");		
	var DB = new PouchDB('pays' + debug);
	 	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	localStorage['paysTablesData'] = JSON.stringify(result);
	    	console.log(JSON.stringify(result));
	    	var paysTablesData = JSON.parse(localStorage.getItem('paysTablesData'));
	    	paysTablesData.rows.forEach(function(row){   
	    		Pays.options[Pays.options.length] = new Option(row.doc.Pays, row.doc.Pays); 
	    	});		    		
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
	var Environnement = document.getElementById("Environnement");	
	var DB = new PouchDB('environnement' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		localStorage['environnementTablesData'] = JSON.stringify(result);
	   		console.log(JSON.stringify(result));
	   		var environnementTablesData = JSON.parse(localStorage.getItem('environnementTablesData'));
	   		environnementTablesData.rows.forEach(function(row){   
	   			Environnement.options[Environnement.options.length] = new Option(row.doc.Environnement, row.doc.Environnement); 
	   		});	
	   		Environnement.options[Environnement.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	});
	
	var Lieu_collecte = document.getElementById("Lieu_collecte");	
	var DB = new PouchDB('lieu_collecte' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		localStorage['lieu_collecteTablesData'] = JSON.stringify(result);
    		console.log(JSON.stringify(result));
    		var lieu_collecteTablesData = JSON.parse(localStorage.getItem('lieu_collecteTablesData'));
    		lieu_collecteTablesData.rows.forEach(function(row){   
    			Lieu_collecte.options[Lieu_collecte.options.length] = new Option(row.doc.Lieu_collecte, row.doc.Lieu_collecte); 
    		});		    
    		Lieu_collecte.options[Lieu_collecte.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	});
		  	
	var Preleve_chez = document.getElementById("Preleve_chez");	
	var DB = new PouchDB('preleve_chez' + debug);
  	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		localStorage['preleve_chezTablesData'] = JSON.stringify(result);
    		console.log(JSON.stringify(result));
    		var preleve_chezTablesData = JSON.parse(localStorage.getItem('preleve_chezTablesData'));
    		preleve_chezTablesData.rows.forEach(function(row){   
    			Preleve_chez.options[Preleve_chez.options.length] = new Option(row.doc.Preleve_chez, row.doc.Preleve_chez); 
    		});		
    		Preleve_chez.options[Preleve_chez.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	}); 	
  	
  	var Methode_chasse = document.getElementById("Methode_chasse");	
	var DB = new PouchDB('methode_chasse' + debug);
  	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		localStorage['methode_chasseTablesData'] = JSON.stringify(result);
    		console.log(JSON.stringify(result));
    		var methode_chasseTablesData = JSON.parse(localStorage.getItem('methode_chasseTablesData'));
    		methode_chasseTablesData.rows.forEach(function(row){   
    			Methode_chasse.options[Methode_chasse.options.length] = new Option(row.doc.Methode_chasse, row.doc.Methode_chasse); 
    		});		
    		Methode_chasse.options[Methode_chasse.options.length] = new Option("IN", "IN");    		
    		Methode_chasse.options[Methode_chasse.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	}); 
  	
  	var Destination = document.getElementById("Destination");	
	var DB = new PouchDB('destination' + debug);
  	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		localStorage['destinationTablesData'] = JSON.stringify(result);
    		console.log(JSON.stringify(result));
    		var destinationTablesData = JSON.parse(localStorage.getItem('destinationTablesData'));
    		destinationTablesData.rows.forEach(function(row){   
    			Destination.options[Destination.options.length] = new Option(row.doc.Destination, row.doc.Destination); 
    		});		
    		Destination.options[Destination.options.length] = new Option("IN", "IN");    		
    		Destination.options[Destination.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	}); 
  	
  	var Type_animal = document.getElementById("Type_animal");	
	var DB = new PouchDB('type_animal' + debug);
  	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		localStorage['type_animalTablesData'] = JSON.stringify(result);
    		console.log(JSON.stringify(result));
    		var type_animalTablesData = JSON.parse(localStorage.getItem('type_animalTablesData'));
    		type_animalTablesData.rows.forEach(function(row){   
    			Type_animal.options[Type_animal.options.length] = new Option(row.doc.Type_animal, row.doc.Type_animal); 
    		});		
    		Type_animal.options[Type_animal.options.length] = new Option("IN", "IN");    		
    		Type_animal.options[Type_animal.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	}); 
	  	
  	var Famille = document.getElementById("Famille");	
	var DB = new PouchDB('espece_animal' + debug);
  	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		localStorage['espece_animalTablesData'] = JSON.stringify(result);
    		console.log(JSON.stringify(result));
    		var espece_animalTablesData = JSON.parse(localStorage.getItem('espece_animalTablesData'));
    		espece_animalTablesData.rows[0].doc.Famille.forEach(function(row){   
    			Famille.options[Famille.options.length] = new Option(row.Nom, row.Nom); 
    		});	
    		Famille.options[Famille.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	});
  	
  	var Etat_carcasse_animal = document.getElementById("Etat_carcasse_animal");	
	var DB = new PouchDB('etat_carcasse_animal' + debug);
  	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		localStorage['etat_carcasse_animalTablesData'] = JSON.stringify(result);
    		console.log(JSON.stringify(result));
    		var etat_carcasse_animalTablesData = JSON.parse(localStorage.getItem('etat_carcasse_animalTablesData'));
    		etat_carcasse_animalTablesData.rows.forEach(function(row){   
    			Etat_carcasse_animal.options[Etat_carcasse_animal.options.length] = new Option(row.doc.Etat_carcasse_animal, row.doc.Etat_carcasse_animal); 
    		});		
    		Etat_carcasse_animal.options[Etat_carcasse_animal.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	}); 
  	
  	var Qualite_echantillon = document.getElementById("Qualite_echantillon");	
	var DB = new PouchDB('qualite_echantillon' + debug);
  	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		localStorage['qualite_echantillonTablesData'] = JSON.stringify(result);
    		console.log(JSON.stringify(result));
    		var qualite_echantillonTablesData = JSON.parse(localStorage.getItem('qualite_echantillonTablesData'));
    		qualite_echantillonTablesData.rows.forEach(function(row){   
    			Qualite_echantillon.options[Qualite_echantillon.options.length] = new Option(row.doc.Qualite_echantillon, row.doc.Qualite_echantillon); 
    		});		
    		Qualite_echantillon.options[Qualite_echantillon.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	}); 
  	
  	var Endroit_prelevement = document.getElementById("Endroit_prelevement");	
	var DB = new PouchDB('endroit_prelevement' + debug);
  	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		localStorage['endroit_prelevementTablesData'] = JSON.stringify(result);
    		console.log(JSON.stringify(result));
    		var endroit_prelevementTablesData = JSON.parse(localStorage.getItem('endroit_prelevementTablesData'));
    		endroit_prelevementTablesData.rows.forEach(function(row){   
    			Endroit_prelevement.options[Endroit_prelevement.options.length] = new Option(row.doc.Endroit_prelevement, row.doc.Endroit_prelevement); 
    		});		
    		Endroit_prelevement.options[Endroit_prelevement.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	}); 

};

function loaded_site(table) {
	showConnexionStatus();
	if (localStorage.getItem('web') === 'oui') {
		load_tables_reference_site_web(table);
	} else {
		load_tables_reference_site(table);
	}	
};

function load_tables_reference_site(table) {
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	var Pays = document.getElementById("Pays");		
	var DB = new PouchDB('pays' + debug);
	 	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var paysTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	paysTablesData.rows.forEach(function(row){   
	    		Pays.options[Pays.options.length] = new Option(row.doc.Pays, row.doc.Pays); 
	    	});		    		
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
	var Environnement = document.getElementById("Environnement");	
	var DB = new PouchDB('environnement' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		var environnementTablesData = JSON.parse(JSON.stringify(result));
	   		
	   		environnementTablesData.rows.forEach(function(row){   
	   			Environnement.options[Environnement.options.length] = new Option(row.doc.Environnement, row.doc.Environnement); 
	   		});	
	   		Environnement.options[Environnement.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
  	var Lieu_capture = document.getElementById("Lieu_capture");	
	var DB = new PouchDB('lieu_capture' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var lieu_captureTablesData = JSON.parse(JSON.stringify(result));
    		
    		lieu_captureTablesData.rows.forEach(function(row){   
    			Lieu_capture.options[Lieu_capture.options.length] = new Option(row.doc.Lieu_capture, row.doc.Lieu_capture); 
    		});		    
    		Lieu_capture.options[Lieu_capture.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	});
}

function load_tables_reference_site_web(table) {
	
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	var Pays = document.getElementById("Pays");		
	var remoteDB = new PouchDB(remote_couchdb + 'pays' + debug);
	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var paysTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	paysTablesData.rows.forEach(function(row){   
	    		Pays.options[Pays.options.length] = new Option(row.doc.Pays, row.doc.Pays); 
	    	});		    		
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
	var Environnement = document.getElementById("Environnement");	
	var remoteDB = new PouchDB(remote_couchdb + 'environnement' + debug);
	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		var environnementTablesData = JSON.parse(JSON.stringify(result));
	   		
	   		environnementTablesData.rows.forEach(function(row){   
	   			Environnement.options[Environnement.options.length] = new Option(row.doc.Environnement, row.doc.Environnement); 
	   		});	
	   		Environnement.options[Environnement.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
  	var Lieu_capture = document.getElementById("Lieu_capture");	
	var remoteDB = new PouchDB(remote_couchdb + 'lieu_capture' + debug);
	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var lieu_captureTablesData = JSON.parse(JSON.stringify(result));
    		
    		lieu_captureTablesData.rows.forEach(function(row){   
    			Lieu_capture.options[Lieu_capture.options.length] = new Option(row.doc.Lieu_capture, row.doc.Lieu_capture); 
    		});		    
    		Lieu_capture.options[Lieu_capture.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	});
}

function loaded_modify_site(table) {
	showConnexionStatus();
	
	//load_tables_reference_bat(table);
	
	if (localStorage.getItem('web') === 'oui') {
		load_tables_reference_site_web(table);
	} else {
		load_tables_reference_site(table);
	}
	
	var id = localStorage.getItem('ID_' + table);
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + table + debug);
	} else {
		var DB = new PouchDB(table + debug);
	};
  	DB.allDocs({  		
  		keys: [id],
		include_docs: true,
		attachments: true
	}).then(function (result) {
		
		DB.allDocs({  		
	  		keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
			
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
									
				var Date = document.getElementById("Date");
				Date.value = result.rows[0].doc.Date;
				
				var Equipe = document.getElementById("Equipe");
				Equipe.value = result.rows[0].doc.Equipe;
				
				var N_site = document.getElementById("N_site");
				N_site.value = result.rows[0].doc.N_site;
							
				var Pays = document.getElementById("Pays");			
				try {
					Pays.value = result.rows[0].doc.Pays;	
				}
				catch(err) {
				};
				
				var Region_capture = document.getElementById("Region_capture");
				Region_capture.value = result.rows[0].doc.Region_capture;
				
				var Site_capture = document.getElementById("Site_capture");
				Site_capture.value = result.rows[0].doc.Site_capture;
				
				var Environnement = document.getElementById("Environnement");			
				try {
					Environnement.value = result.rows[0].doc.Environnement;	
				}
				catch(err) {
				};
				
				var Lieu_capture = document.getElementById("Lieu_capture");			
				try {
					Lieu_capture.value = result.rows[0].doc.Lieu_capture;	
				}
				catch(err) {
				};
				
				var Lat_degre_dec = document.getElementById("Lat_degre_dec");
				Lat_degre_dec.value = result.rows[0].doc.Lat_degre_dec;
				
				var Latitude = document.getElementById("Latitude");
				try {
					Latitude.value = result.rows[0].doc.Latitude;	
				}
				catch(err) {
				};
				
				var Long_degre_dec = document.getElementById("Long_degre_dec");
				Long_degre_dec.value = result.rows[0].doc.Long_degre_dec;
				
				var Longitude = document.getElementById("Longitude");					
				try {
					Longitude.value = result.rows[0].doc.Longitude;					
				}
				catch(err) {
				};
				
				var Proximite_village_km = document.getElementById("Proximite_village_km");
				Proximite_village_km.value = result.rows[0].doc.Proximite_village_km;	
							
	    	}
		}).catch(function (err) {
			console.log(err);
		});
	}).catch(function (err) {
		console.log(err);
	});
}

function loaded_mission(table) {
	showConnexionStatus();
	if (localStorage.getItem('web') === 'oui') {
		load_tables_reference_mission_web(table);
	} else {
		load_tables_reference_mission(table);
	}	
};

function load_tables_reference_mission(table) {
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	var Pays = document.getElementById("Pays");		
	var DB = new PouchDB('pays' + debug);
	 	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var paysTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	paysTablesData.rows.forEach(function(row){   
	    		Pays.options[Pays.options.length] = new Option(row.doc.Pays, row.doc.Pays); 
	    	});		    		
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
	var Environnement = document.getElementById("Environnement");	
	var DB = new PouchDB('environnement' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		var environnementTablesData = JSON.parse(JSON.stringify(result));
	   		
	   		environnementTablesData.rows.forEach(function(row){   
	   			Environnement.options[Environnement.options.length] = new Option(row.doc.Environnement, row.doc.Environnement); 
	   		});	
	   		Environnement.options[Environnement.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	});
	
	var nom_equipe;
	if (table == 'donnees_mission_astre') {
		nom_equipe = '_astre';
	} else if (table == 'donnees_mission_mivegec') {
		nom_equipe = '_mivegec';
	} else if (table == 'donnees_mission_transvihmi') {
		nom_equipe = '_transvihmi';
	};
	
	var N_site = document.getElementById("N_site");		
	var DB = new PouchDB('site' + nom_equipe + debug);
	 	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var siteTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	siteTablesData.rows.forEach(function(row){   
	    		N_site.options[N_site.options.length] = new Option(row.doc.N_site, row.doc.N_site/*row.id*/);
	    	});		
	    	
	    	try {
	    		N_site.value = doc.N_site;	
	    		N_site.onchange();
	    	} catch(err) {
	    	};
		}
	}).catch(function (err) {
		console.log(err);
	});
	 	
	 	
	var DB = new PouchDB('espece' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
		   	localStorage['especeTablesData'] = JSON.stringify(result);
	    }
	}).catch(function (err) {
			console.log(err);
	}); 	
}

function load_tables_reference_mission_web(table) {
	
	var remote_couchdb = localStorage.getItem('remote_couchdb');
		
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	var Pays = document.getElementById("Pays");		
	var remoteDB = new PouchDB(remote_couchdb + 'pays' + debug);
	 	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var paysTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	paysTablesData.rows.forEach(function(row){   
	    		Pays.options[Pays.options.length] = new Option(row.doc.Pays, row.doc.Pays); 
	    	});		    		
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
	var Environnement = document.getElementById("Environnement");	
	var remoteDB = new PouchDB(remote_couchdb + 'environnement' + debug);
	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		var environnementTablesData = JSON.parse(JSON.stringify(result));
	   		
	   		environnementTablesData.rows.forEach(function(row){   
	   			Environnement.options[Environnement.options.length] = new Option(row.doc.Environnement, row.doc.Environnement); 
	   		});	
	   		Environnement.options[Environnement.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	});
	
	var nom_equipe;
	if (table == 'donnees_mission_astre') {
		nom_equipe = '_astre';
	} else if (table == 'donnees_mission_mivegec') {
		nom_equipe = '_mivegec';
	} else if (table == 'donnees_mission_transvihmi') {
		nom_equipe = '_transvihmi';
	};
	
	var N_site = document.getElementById("N_site");		
	var remoteDB = new PouchDB(remote_couchdb + 'site' + nom_equipe + debug);
	 	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var siteTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	siteTablesData.rows.forEach(function(row){   
	    		N_site.options[N_site.options.length] = new Option(row.doc.N_site, row.doc.N_site/*row.id*/);
	    	});		
	    	
	    	try {
	    		N_site.value = doc.N_site;	
	    		N_site.onchange();
	    	} catch(err) {
	    	};
		}
	}).catch(function (err) {
		console.log(err);
	});
	 	
	 	
	var remoteDB = new PouchDB(remote_couchdb + 'espece' + debug);
	remoteDB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
		   	localStorage['especeTablesData'] = JSON.stringify(result);
	    }
	}).catch(function (err) {
			console.log(err);
	}); 	
}

function loaded_modify_mission(table) {
	showConnexionStatus();
	
	
	if (localStorage.getItem('web') === 'oui') {
		load_tables_reference_mission_web(table);
	} else {
		load_tables_reference_mission(table);
	}
	
	var id = localStorage.getItem('ID_' + table);
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + table + debug);
	} else {
		var DB = new PouchDB(table + debug);
	};
  	DB.allDocs({  		
  		keys: [id],
		include_docs: true,
		attachments: true
	}).then(function (result) {
		
		DB.allDocs({  		
	  		keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
		
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
									
				var Date_debut = document.getElementById("Date_debut");
				Date_debut.value = result.rows[0].doc.Date_debut;
				
				var Date_fin = document.getElementById("Date_fin");
				Date_fin.value = result.rows[0].doc.Date_fin;
				
				var ID_CS_debut = document.getElementById("ID_CS_debut");
				ID_CS_debut.value = result.rows[0].doc.ID_CS_debut;
				
				var ID_CS_fin = document.getElementById("ID_CS_fin");
				ID_CS_fin.value = result.rows[0].doc.ID_CS_fin;
				
				var ID_non_invasif_debut = document.getElementById("ID_non_invasif_debut");
				ID_non_invasif_debut.value = result.rows[0].doc.ID_non_invasif_debut;
				
				var ID_non_invasif_fin = document.getElementById("ID_non_invasif_fin");
				ID_non_invasif_fin.value = result.rows[0].doc.ID_non_invasif_fin;
				
				var N_site = document.getElementById("N_site");			
				try {
					N_site.value = result.rows[0].doc.N_site;	
					N_site.onchange();
				}
				catch(err) {
				};
				
				var Equipe = document.getElementById("Equipe");
				Equipe.value = result.rows[0].doc.Equipe;
				
				var Pays = document.getElementById("Pays");			
				try {
					Pays.value = result.rows[0].doc.Pays;	
				}
				catch(err) {
				};
				
				var Region_capture = document.getElementById("Region_capture");
				Region_capture.value = result.rows[0].doc.Region_capture;
				
				var Site_capture = document.getElementById("Site_capture");
				Site_capture.value = result.rows[0].doc.Site_capture;
				
				var Environnement = document.getElementById("Environnement");			
				try {
					Environnement.value = result.rows[0].doc.Environnement;	
				}
				catch(err) {
				};
							
				var Lat_degre_dec = document.getElementById("Lat_degre_dec");
				Lat_degre_dec.value = result.rows[0].doc.Lat_degre_dec;
				
				var Latitude = document.getElementById("Latitude");
				try {
					Latitude.value = result.rows[0].doc.Latitude;	
				}
				catch(err) {
				};
				
				var Long_degre_dec = document.getElementById("Long_degre_dec");
				Long_degre_dec.value = result.rows[0].doc.Long_degre_dec;
				
				var Longitude = document.getElementById("Longitude");					
				try {
					Longitude.value = result.rows[0].doc.Longitude;					
				}
				catch(err) {
				};
				
				var Proximite_village_km = document.getElementById("Proximite_village_km");
				Proximite_village_km.value = result.rows[0].doc.Proximite_village_km;
				
				var Type = document.getElementById("Type");
				try {
					Type.value = result.rows[0].doc.Type;
				}
				catch(err) {
				};
				
				var Type_Roost = document.getElementById("Type_Roost");
				try {
					Type_Roost.value = result.rows[0].doc.Type_Roost;
				}
				catch(err) {
				};
				
				var Proximite_eau = document.getElementById("Proximite_eau");
				Proximite_eau.value = result.rows[0].doc.Proximite_eau;
				
				var Hauteur_canope = document.getElementById("Hauteur_canope");
				Hauteur_canope.value = result.rows[0].doc.Hauteur_canope;
							
				var Description_site = document.getElementById("Description_site");
				Description_site.value = result.rows[0].doc.Description_site;
				
				var ID_genet_espece = document.getElementById("ID_genet_espece");
				ID_genet_espece.value = result.rows[0].doc.ID_genet_espece;
				
				var Espece_animale_sauvage = document.getElementById("Espece_animale_sauvage");
				Espece_animale_sauvage.value = result.rows[0].doc.Espece_animale_sauvage;
				
				var Espece_animale_domestique = document.getElementById("Espece_animale_domestique");
				Espece_animale_domestique.value = result.rows[0].doc.Espece_animale_domestique;
				
				var Interaction = document.getElementById("Interaction");
				try {
					Interaction.value = result.rows[0].doc.Interaction;
				}
				catch(err) {
				};
				
				var Description_interaction_animaux = document.getElementById("Description_interaction_animaux");
				Description_interaction_animaux.value = result.rows[0].doc.Description_interaction_animaux;
				
				//activité humaine
				
				var Activite_humaine = result.rows[0].doc.Activite_humaine;
				Activite_humaine = Activite_humaine.trim().split(",");
				
				for (var i=0; i<Activite_humaine.length; i++) {
					console.log("'" + Activite_humaine[i].trim() + "'");
					var Activite_humaine_string = Activite_humaine[i].trim();
					
					var l1 = document.getElementById("test");
					var l2 = l1.childNodes;
					for (var j=0;j<l2.length;j++) {
						var Element = document.getElementById('Activite_humaine' + j); 
						if (Element.value === Activite_humaine_string) {
							Element.checked = true;
						};
					};
				};
				
				var Description_interaction_homme = document.getElementById("Description_interaction_homme");
				Description_interaction_homme.value = result.rows[0].doc.Description_interaction_homme;
				
				var Camera_trap = document.getElementById("Camera_trap");
				try {
					Camera_trap.value = result.rows[0].doc.Camera_trap;
				}
				catch(err) {
				};
				
				var Heure_debut_camera = document.getElementById("Heure_debut_camera");
				Heure_debut_camera.value = result.rows[0].doc.Heure_debut_camera;
				
				var Heure_fin_camera = document.getElementById("Heure_fin_camera");
				Heure_fin_camera.value = result.rows[0].doc.Heure_fin_camera;
				
				
				
	    	}
		}).catch(function (err) {
			console.log(err);
		});
	}).catch(function (err) {
		console.log(err);
	});
}

function loaded_journaliere(table) {
	showConnexionStatus();
	load_tables_reference_journaliere(table);

};

function load_tables_reference_journaliere(table) {
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	var Pays = document.getElementById("Pays");		
	var DB = new PouchDB('pays' + debug);
	 	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var paysTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	paysTablesData.rows.forEach(function(row){   
	    		Pays.options[Pays.options.length] = new Option(row.doc.Pays, row.doc.Pays); 
	    	});		    		
		}
	}).catch(function (err) {
		console.log(err);
	});
	  	
	var Environnement = document.getElementById("Environnement");	
	var DB = new PouchDB('environnement' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	   		var environnementTablesData = JSON.parse(JSON.stringify(result));
	   		
	   		environnementTablesData.rows.forEach(function(row){   
	   			Environnement.options[Environnement.options.length] = new Option(row.doc.Environnement, row.doc.Environnement); 
	   		});	
	   		Environnement.options[Environnement.options.length] = new Option("Manquant", "Manquant");
		}
	}).catch(function (err) {
		console.log(err);
	});
	
	var nom_equipe;
	if (table == 'donnees_journalieres_astre') {
		nom_equipe = '_astre';
	} else if (table == 'donnees_journalieres_mivegec') {
		nom_equipe = '_mivegec';
	} else if (table == 'donnees_journalieres_transvihmi') {
		nom_equipe = '_transvihmi';
	};
	
	var N_site = document.getElementById("N_site");		
	var DB = new PouchDB('site' + nom_equipe + debug);
	 	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var siteTablesData = JSON.parse(JSON.stringify(result));
	    	
	    	siteTablesData.rows.forEach(function(row){   
	    		N_site.options[N_site.options.length] = new Option(row.doc.N_site, row.doc.N_site/*row.id*/);
	    	});		
	    	
	    	try {
	    		N_site.value = doc.N_site;	
	    		N_site.onchange();
	    	} catch(err) {
	    	};
		}
	}).catch(function (err) {
		console.log(err);
	});
	 	
	 	
	 	var DB = new PouchDB('espece' + debug);
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		localStorage['especeTablesData'] = JSON.stringify(result);
	    	}
		}).catch(function (err) {
			console.log(err);
		}); 	
}

function loaded_modify_journaliere(table) {
	showConnexionStatus();
	
	load_tables_reference_journaliere(table);
	
	var id = localStorage.getItem('ID_' + table);
	console.log(id);
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
	
	var DB = new PouchDB(table + debug);
  	DB.allDocs({  		
  		keys: [id],
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
			console.log(JSON.stringify(result.rows));
								
			var Date = document.getElementById("Date");
			Date.value = result.rows[0].doc.Date;
			
			var ID_CS_preleve_debut = document.getElementById("ID_CS_preleve_debut");
			ID_CS_preleve_debut.value = result.rows[0].doc.ID_CS_preleve_debut;
			
			var ID_CS_preleve_fin = document.getElementById("ID_CS_preleve_fin");
			ID_CS_preleve_fin.value = result.rows[0].doc.ID_CS_preleve_fin;
			
			var N_site = document.getElementById("N_site");			
			try {
				N_site.value = result.rows[0].doc.N_site;	
				N_site.onchange();
			}
			catch(err) {
			};
			
			var Equipe = document.getElementById("Equipe");
			Equipe.value = result.rows[0].doc.Equipe;
			
			var Pays = document.getElementById("Pays");			
			try {
				Pays.value = result.rows[0].doc.Pays;	
			}
			catch(err) {
			};
			
			var Region_capture = document.getElementById("Region_capture");
			Region_capture.value = result.rows[0].doc.Region_capture;
			
			var Site_capture = document.getElementById("Site_capture");
			Site_capture.value = result.rows[0].doc.Site_capture;
			
			var Environnement = document.getElementById("Environnement");			
			try {
				Environnement.value = result.rows[0].doc.Environnement;	
			}
			catch(err) {
			};
						
			var Lat_degre_dec = document.getElementById("Lat_degre_dec");
			Lat_degre_dec.value = result.rows[0].doc.Lat_degre_dec;
			
			var Latitude = document.getElementById("Latitude");
			try {
				Latitude.value = result.rows[0].doc.Latitude;	
			}
			catch(err) {
			};
			
			var Long_degre_dec = document.getElementById("Long_degre_dec");
			Long_degre_dec.value = result.rows[0].doc.Long_degre_dec;
			
			var Longitude = document.getElementById("Longitude");					
			try {
				Longitude.value = result.rows[0].doc.Longitude;					
			}
			catch(err) {
			};
			
			var Proximite_village_km = document.getElementById("Proximite_village_km");
			Proximite_village_km.value = result.rows[0].doc.Proximite_village_km;
			
			var Roost_diurne = document.getElementById("Roost_diurne");
			try {
				Roost_diurne.value = result.rows[0].doc.Roost_diurne;
				Roost_diurne.onchange();
			}
			catch(err) {
			};
			
			var Presence_diurne = document.getElementById("Presence_diurne");
			try {
				Presence_diurne.value = result.rows[0].doc.Presence_diurne;
			}
			catch(err) {
			};
			
			//var TaxonomieDiurne = document.getElementById("TaxonomieDiurne");
			//TaxonomieDiurne.value = result.rows[0].doc.TaxonomieDiurne;
									
			var Methode_comptage_diurne = document.getElementById("Methode_comptage_diurne");
			Methode_comptage_diurne.value = result.rows[0].doc.Methode_comptage_diurne;
			
			var Resultat_comptage_diurne_1 = document.getElementById("Resultat_comptage_diurne_1");
			Resultat_comptage_diurne_1.value = result.rows[0].doc.Resultat_comptage_diurne_1;
			
			var Resultat_comptage_diurne_2 = document.getElementById("Resultat_comptage_diurne_2");
			Resultat_comptage_diurne_2.value = result.rows[0].doc.Resultat_comptage_diurne_2;
			
			var Utilisation_site_nocturne = document.getElementById("Utilisation_site_nocturne");
			try {
				Utilisation_site_nocturne.value = result.rows[0].doc.Utilisation_site_nocturne;
				Utilisation_site_nocturne.onchange();
			}
			catch(err) {
			};
			
			var Aliment_consomme = document.getElementById("Aliment_consomme");
			Aliment_consomme.value = result.rows[0].doc.Aliment_consomme;
			
			var Presence_nocturne = document.getElementById("Presence_nocturne");
			try {
				Presence_nocturne.value = result.rows[0].doc.Presence_nocturne;
			}
			catch(err) {
			};
			
			//var TaxonomieNocturne = document.getElementById("TaxonomieNocturne");
			//TaxonomieNocturne.value = result.rows[0].doc.TaxonomieNocturne;
			
			var Methode_comptage_nocturne = document.getElementById("Methode_comptage_nocturne");
			Methode_comptage_nocturne.value = result.rows[0].doc.Methode_comptage_nocturne;
						
			var Resultat_comptage_nocturne_1 = document.getElementById("Resultat_comptage_nocturne_1");
			Resultat_comptage_nocturne_1.value = result.rows[0].doc.Resultat_comptage_nocturne_1;
			
			var Resultat_comptage_nocturne_2 = document.getElementById("Resultat_comptage_nocturne_2");
			Resultat_comptage_nocturne_2.value = result.rows[0].doc.Resultat_comptage_nocturne_2;
			
			var Vocalisations = document.getElementById("Vocalisations");
			try {
				Vocalisations.value =  result.rows[0].doc.Vocalisations;
				Vocalisations.onchange();
			}
			catch(err) {
			};
			
			var Parade_sexuelle = document.getElementById("Parade_sexuelle");
			Parade_sexuelle.value = result.rows[0].doc.Parade_sexuelle;
						
			var Copulations = document.getElementById("Copulations");
			try {
				Copulations.value = result.rows[0].doc.Copulations;
			}
			catch(err) {
			};
			
			var Suitee = document.getElementById("Suitee");
			try {
				Suitee.value = result.rows[0].doc.Suitee;
			}
			catch(err) {
			};
			
			var Agressions = document.getElementById("Agressions");
			try {
				Agressions.value = result.rows[0].doc.Agressions;
			}
			catch(err) {
			};
			
			var Filet_canopee_nb = document.getElementById("Filet_canopee_nb");
			Filet_canopee_nb.value = result.rows[0].doc.Filet_canopee_nb;
			
			var Filet_canopee_m2 = document.getElementById("Filet_canopee_m2");
			Filet_canopee_m2.value = result.rows[0].doc.Filet_canopee_m2;
			
			var Filet_sol_nb = document.getElementById("Filet_sol_nb");
			Filet_sol_nb.value = result.rows[0].doc.Filet_sol_nb;
			
			var Filet_sol_m2 = document.getElementById("Filet_sol_m2");
			Filet_sol_m2.value = result.rows[0].doc.Filet_sol_m2;
			
			var Filet_debut = document.getElementById("Filet_debut");
			Filet_debut.value = result.rows[0].doc.Filet_debut;
			
			var Filet_fin = document.getElementById("Filet_fin");	
			Filet_fin.value = result.rows[0].doc.Filet_fin;
			
			var Filet_temps = document.getElementById("Filet_temps");
			Filet_temps.value = result.rows[0].doc.Filet_temps;
			
			var Filet_capture_nb = document.getElementById("Filet_capture_nb");
			Filet_capture_nb.value = result.rows[0].doc.Filet_capture_nb;
			
			var Harp_debut = document.getElementById("Harp_debut");
			Harp_debut.value = result.rows[0].doc.Harp_debut;
			
			var Harp_fin = document.getElementById("Harp_fin");
			Harp_fin.value = result.rows[0].doc.Harp_fin;
			
			var Harp_temps = document.getElementById("Harp_temps");
			Harp_temps.value = result.rows[0].doc.Harp_temps;
			
			var Harpe_nb = document.getElementById("Harpe_nb");
			Harpe_nb.value = result.rows[0].doc.Harpe_nb;
			
			var Saison = document.getElementById("Saison");
			try {
				Saison.value = result.rows[0].doc.Saison;
			}
			catch(err) {
			};
			
			var Climat = document.getElementById("Climat");
			try {
				Climat.value = result.rows[0].doc.Climat;
				Climat.onchange();
			}
			catch(err) {
			};
			
			var Autre_climat = document.getElementById("Autre_climat");
			Autre_climat.value = result.rows[0].doc.Autre_climat;
			
			var Precipitation = document.getElementById("Precipitation");
			Precipitation.value = result.rows[0].doc.Precipitation;
			
			var Vent = document.getElementById("Vent");
			try {
				Vent.value = result.rows[0].doc.Vent;
			}
			catch(err) {
			};
			
			var Lune = document.getElementById("Lune");
			try {
				Lune.value = result.rows[0].doc.Lune;
			}
			catch(err) {
			};
			
			var Temperature_logger = document.getElementById("Temperature_logger");
			try {
				Temperature_logger.value = result.rows[0].doc.Temperature_logger;
			}
			catch(err) {
			};
			
			var Humidite_logger = document.getElementById("Humidite_logger");
			try {
				Humidite_logger.value = result.rows[0].doc.Humidite_logger;
			}
			catch(err) {
			};
			
    	}
	}).catch(function (err) {
		console.log(err);
	});
}


function load_tables_importation(table) {
	showConnexionStatus();
	
	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};

	var DB = new PouchDB('pays' + debug);
	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	localStorage['paysTablesData'] = JSON.stringify(result);
	    };
	}).catch(function (err) {
		console.log(err);
	});
	 	
	if ((table == 'chauves_souris_capturees_astre') || (table == 'chauves_souris_capturees_transvihmi') || (table == 'chauves_souris_capturees_mivegec')
	 	 || (table == 'chauves_souris_non_invasives_astre') || (table == 'chauves_souris_non_invasives_transvihmi') || (table == 'chauves_souris_non_invasives_mivegec')) {
		var DB = new PouchDB('espece' + debug);
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		   		localStorage['especeTablesData'] = JSON.stringify(result);
		   		var especeTablesData = JSON.parse(localStorage.getItem('especeTablesData'));
	    	};
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	if ((table == 'viande_de_brousse_transvihmi') || (table == 'viande_de_brousse_mivegec')) {
		var DB = new PouchDB('espece_animal' + debug);
		DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				localStorage['especeAnimalTablesData'] = JSON.stringify(result);
			   	var especeAnimalTablesData = JSON.parse(localStorage.getItem('especeAnimalTablesData'));
		    };
		}).catch(function (err) {
			console.log(err);
		});
	};

	if ((table == 'chauves_souris_capturees_astre') || (table == 'chauves_souris_capturees_transvihmi') || (table == 'chauves_souris_capturees_mivegec')) {
		var DB = new PouchDB('lieu_capture' + debug);
		 	DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	localStorage['lieu_captureTablesData'] = JSON.stringify(result);
		    }
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	if ((table == 'chauves_souris_non_invasives_astre') || (table == 'chauves_souris_non_invasives_transvihmi') || (table == 'chauves_souris_non_invasives_mivegec') || (table == 'viande_de_brousse_transvihmi') || (table == 'viande_de_brousse_mivegec')) {
		var DB = new PouchDB('lieu_collecte' + debug);
		 	DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	localStorage['lieu_collecteTablesData'] = JSON.stringify(result);
		    }
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	var DB = new PouchDB('environnement' + debug);
	 	DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
			localStorage['environnementTablesData'] = JSON.stringify(result);
	    }
	}).catch(function (err) {
		console.log(err);
	});
	 
	if ((table == 'chauves_souris_capturees_astre') || (table == 'chauves_souris_capturees_transvihmi') || (table == 'chauves_souris_capturees_mivegec')) {
		var DB = new PouchDB('methode_capture' + debug);
		 	DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	localStorage['methode_captureTablesData'] = JSON.stringify(result);
		    }
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	if ((table == 'viande_de_brousse_transvihmi') || (table == 'viande_de_brousse_mivegec')) {
		var DB = new PouchDB('preleve_chez' + debug);
		 	DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	localStorage['preleve_chez'] = JSON.stringify(result);
		    }
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	if ((table == 'viande_de_brousse_transvihmi') || (table == 'viande_de_brousse_mivegec')) {
		var DB = new PouchDB('methode_chasse' + debug);
		 	DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	localStorage['methode_chasse'] = JSON.stringify(result);
		    }
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	if ((table == 'viande_de_brousse_transvihmi') || (table == 'viande_de_brousse_mivegec')) {
		var DB = new PouchDB('destination' + debug);
		 	DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	localStorage['destination'] = JSON.stringify(result);
		    }
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	if ((table == 'viande_de_brousse_transvihmi') || (table == 'viande_de_brousse_mivegec')) {
		var DB = new PouchDB('type_animal' + debug);
		 	DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	localStorage['type_animal'] = JSON.stringify(result);
		    }
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	if ((table == 'viande_de_brousse_transvihmi') || (table == 'viande_de_brousse_mivegec')) {
		var DB = new PouchDB('etat_carcasse_animal' + debug);
		 	DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	localStorage['etat_carcasse_animal'] = JSON.stringify(result);
		    }
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	if ((table == 'viande_de_brousse_transvihmi') || (table == 'viande_de_brousse_mivegec')) {
		var DB = new PouchDB('qualite_echantillon' + debug);
		 	DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	localStorage['qualite_echantillon'] = JSON.stringify(result);
		    }
		}).catch(function (err) {
			console.log(err);
		});
	};
	
	if ((table == 'viande_de_brousse_transvihmi') || (table == 'viande_de_brousse_mivegec')) {
		var DB = new PouchDB('endroit_prelevement' + debug);
		 	DB.allDocs({  		
			include_docs: true,
			attachments: true
		}).then(function (result) {
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
		    	localStorage['endroit_prelevement'] = JSON.stringify(result);
		    }
		}).catch(function (err) {
			console.log(err);
		});
	};
}

function load_tables_exportation(table) {
	showConnexionStatus();
	
	var multiselect1 = document.getElementById("multiselect1");		
	
	if ((table == 'chauves_souris_capturees_astre') || (table == 'chauves_souris_capturees_transvihmi') || (table == 'chauves_souris_capturees_mivegec')) {
		var fields = 
			['N_identification_CS', 'N_identification_mere', 'N_site', 'Date',
			 'Equipe', 'Pays', 'Region_capture', 'Site_capture', 'Lieu_capture',
		     'Environnement', 'Latitude', 'Lat_degre_dec', 'Longitude', 'Long_degre_dec',
		     'Proximite_village_km', 'Methode_capture', 'Type_chauve_souris',
		     'Espece_identifiee', 'Famille_terrain', 'Genre_terrain', 'Espece_terrain',
		     'Famille_labo', 'Genre_labo', 'Espece_labo', 'Famille_consensus', 'Genre_consensus', 
		     'Espece_consensus', 'Sexe', 'Age', 'Gestante', 'Lactation', 'Suitee', 'Sexe_enfant',
		     'Poids_enfant', 'Identifiant_enfant', 'Vivante', 'Cause_deces', 'Poids_gr',
		     'L_avant_bras_mm', 'L_totale_corps_mm', 'Taille_yeux', 'L_queue_mm',
		     'L_metacarpe_3ieme_doigt_mm', 'Couleur_pelage_dorsal',
		     'Couleur_pelage_ventral', 'Remarques_anomalies', 'Sang_DBS_nb_cercles', 
		     'Sang_tube_EDTA', 'Feces_RNAl', 'Urine', 'Urine_DUS_nombre_cercles',
		     'Feces_urine_RNAl', 'Ecouvillon_gorge_RNAl', 'Ecouvillon_rectal_RNAl',
		     'Ectoparasites_ethanol', 'Poils_ethanol', 'Wing_punch_ethanol',
		     'Feces_culture_glycerol', 'Sperme', 'Autres_echantillons_remarques',
		     'Specimen_entier', 'Specimen_preserve_dans', 'Prelevement_organe',
		     'Foie_formol', 'Foie_RNAl', 'Rate_formol', 'Rate_RNAl', 'Reins_formol',
		     'Reins_RNAl', 'Intestins_formol', 'Intestins_RNAl', 'Poumons_formol',
		     'Poumons_RNAl', 'Coeur_formol','Coeur_RNAl', 'Ggl_lymph_formol',
		     'Ggl_lymph_RNAl', 'Testicules_formol', 'Testicules_RNAl', 'Peau_formol',
		     'Peau_RNAl', 'Muscles_formol', 'Muscles_RNAl', 'Cerveau_formol',
		     'Cerveau_RNAl', 'Autre', 'Autre_formol', 'Autre_RNAl', 'Remarques_echantillons'];
		
	} else if ((table == 'chauves_souris_non_invasives_astre') || (table == 'chauves_souris_non_invasives_transvihmi') || (table == 'chauves_souris_non_invasives_mivegec')) {
		var fields = 
			['Date', 'Heure_debut', 'Heure_fin', 'N_site', 'Equipe', 'Pays', 'Region_collecte', 'Site_collecte', 'Environnement', 
			 'Lieu_collecte', 'Lat_degre_dec', 'Latitude', 'Long_degre_dec', 'Longitude', 'Type_site', 'Proximite_village_km',
			 'Type_chauves_souris', 'Famille_1', 'Genre_1', 'Espece_1', 'Famille_2', 'Genre_2', 'Espece_2', 'Famille_3', 
			 'Genre_3', 'Espece_3', 'Remarques', 'N_identification_echantillon', 'Type_echantillon', 'Nbre_feces_par_tube',
			 'Urine_methode', 'Urine_papier_buvard_nbre_cercles'];
	}
		
	for (var i = 0; i < fields.length; i++) {
		multiselect1.options[i] = new Option(fields[i], fields[i]);
	};
	
}

function showConnexionStatus() {
	var led = document.getElementById("led");
	var p_led = document.getElementById("p_led");
	
	if (navigator.onLine) {
    	led.className = "led-green";
    	p_led.innerHTML = "Online";
    } else {
    	led.className = "led-red";
    	p_led.innerHTML = "Offline";
    }	
}
