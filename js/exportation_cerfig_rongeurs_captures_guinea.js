

var fields = 
    			['N_identification', 'Date', 'Equipe', 'Binome_prelevement', 'Site_region', 'Site_precis_de_capture', 'Piege', 'Numero_de_piege', 
    			 'Lieu_de_capture', 'Lieu_de_capture_autre', 'Lat_degre_dec_Piege', 'Latitude_Piege', 'Long_degre_dec_Piege', 'Longitude_Piege', 
    			 'Taille_yeux', 'Couleur_pelage_dorsal', 'Couleur_pelage_ventral', 'Espece_identifiee', 'Famille', 'Genre', 'Espece', 'Age', 
    			 'Sexe', 'Femelles_gestante', 'Femelles_lactante', 'Nombre_de_paires_de_mamelles', 'checkboxPect', 'Pect', 'checkboxAbdo', 
    			 'Abdo', 'checkboxIngu', 'Ingu', 'Testicules_descendus', 'Longueur_mm', 'Remarques', 'Poids_avec_sac_g', 'Poids_du_sac_g', 
    			 'Poids_net_animal_g', 'L_corps_mm', 'L_queue_mm', 'L_pied_arriere_mm', 'L_crane_mm', 'L_oreille_mm', 'Photo', 'Relache', 
    			 'Mort_naturelle_carcasse_trouvee', 'Mort_due_a_la_capture_manip', 'Euthanasie', 'Dosage_injection_ketamine', 'Si_relache_marquage', 
    			 'Si_marque_numero', 'Ecouv_gorge_RNAl', 'Sang_papier_buvard', 'Biopsie_d_oreille_ethanol', 'Feces_RNAl', 'Ecouv_urine_RNAl', 'Ecouv_rectal_RNAl', 
    			 'Ectoparasites_ethanol', 'Tiques', 'Puces', 'Echantillons_Autre', 'Autres_echantillons_ou_remarques', 'Coeur_CO', 'Poumons_PO', 
    			 'Foie_FO', 'Rate_RA', 'Reins_RN', 'Intestins_INT', 'Testicule_TE', 'Ovaires_OV', 'Embryons_EM', 'Nombre_d_embryons', 
    			 'Organes_RNAl_autre', 'Username']


var fields_CSV_head =   'N_identification;Date;Equipe;Binome_prelevement;Site_region;Site_precis_de_capture;Piege;Numero_de_piege;' + 
						'Lieu_de_capture;Lieu_de_capture_autre;Lat_degre_dec_Piege;Latitude_Piege;Long_degre_dec_Piege;Longitude_Piege;' + 
						'Taille_yeux;Couleur_pelage_dorsal;Couleur_pelage_ventral;Espece_identifiee;Famille;Genre;Espece;Age;' + 
						'Sexe;Femelles_gestante;Femelles_lactante;Nombre_de_paires_de_mamelles;checkboxPect;Pect;checkboxAbdo;' + 
						'Abdo;checkboxIngu;Ingu;Testicules_descendus;Longueur_mm;Remarques;Poids_avec_sac_g;Poids_du_sac_g;' + 
						'Poids_net_animal_g;L_corps_mm;L_queue_mm;L_pied_arriere_mm;L_crane_mm;L_oreille_mm;Photo;Relache;' + 
						'Mort_naturelle_carcasse_trouvee;Mort_due_a_la_capture_manip;Euthanasie;Dosage_injection_ketamine;Si_relache_marquage;Si_marque_numero;' + 
						'Ecouv_gorge_RNAl;Sang_papier_buvard;Biopsie_d_oreille_ethanol;Feces_RNAl;Ecouv_urine_RNAl;Ecouv_rectal_RNAl;' + 
						'Ectoparasites_ethanol;Tiques;Puces;Echantillons_Autre;Autres_echantillons_ou_remarques;Coeur_CO;Poumons_PO;' + 
						'Foie_FO;Rate_RA;Reins_RN;Intestins_INT;Testicule_TE;Ovaires_OV;Embryons_EM;Nombre_d_embryons;' + 
						'Organes_RNAl_autre;Username;\r\n';


var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

add_heading = true;
CSV_heading = '';
CSV_data = '';



var array_selected_fields = [];

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DBcerfig_rongeurs_captures_guinea = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBcerfig_rongeurs_captures_guinea = new PouchDB('bcoming' + nom_table + debug);
};

var tab_cerfig_rongeurs_captures_guinea = new Array();
var tab = new Array();


DBcerfig_rongeurs_captures_guinea.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {
	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
		var tableData = JSON.parse(JSON.stringify(result));
		i = 0;
		tableData.rows.forEach(function(row){   
   			try {
   				//tab[i] = new Array();
   				var obj = new Object();
   				
   				obj.N_identification = row.doc.N_identification;
		  	    obj.Date = row.doc.Date;
		  	    obj.Equipe = row.doc.Equipe;
			  	obj.Binome_prelevement = row.doc.Binome_prelevement;
			  	obj.Site_region = row.doc.Site_region;
			  	obj.Site_precis_de_capture = row.doc.Site_precis_de_capture;
			  	obj.Piege = row.doc.Piege;
			  	obj.Numero_de_piege = row.doc.Numero_de_piege;
			  	obj.Lieu_de_capture = row.doc.Lieu_de_capture;
			  	obj.Lieu_de_capture_autre = row.doc.Lieu_de_capture_autre;
			  	obj.Lat_degre_dec_Piege = row.doc.Lat_degre_dec_Piege;
			  	obj.Latitude_Piege = row.doc.Latitude_Piege;
			  	obj.Long_degre_dec_Piege = row.doc.Long_degre_dec_Piege;
			  	obj.Longitude_Piege = row.doc.Longitude_Piege;
			  	obj.Taille_yeux = row.doc.Taille_yeux;
			  	obj.Couleur_pelage_dorsal = row.doc.Couleur_pelage_dorsal;
			  	obj.Couleur_pelage_ventral = row.doc.Couleur_pelage_ventral;
			  	obj.Espece_identifiee = row.doc.Espece_identifiee;
			  	obj.Famille = row.doc.Famille;
			  	obj.Genre = row.doc.Genre;
			  	obj.Espece = row.doc.Espece;
			  	obj.Age = row.doc.Age;
			  	obj.Sexe = row.doc.Sexe;
			  	obj.Femelles_gestante = row.doc.Femelles_gestante;
			  	obj.Femelles_lactante = row.doc.Femelles_lactante;
			  	obj.Nombre_de_paires_de_mamelles = row.doc.Nombre_de_paires_de_mamelles;
			  	obj.checkboxPect = row.doc.checkboxPect;
			  	obj.Pect = row.doc.Pect;
			  	obj.checkboxAbdo = row.doc.checkboxAbdo;
			  	obj.Abdo = row.doc.Abdo;
			  	obj.checkboxIngu = row.doc.checkboxIngu;
			  	obj.Ingu = row.doc.Ingu;
			  	obj.Testicules_descendus = row.doc.Testicules_descendus;
			  	obj.Longueur_mm = row.doc.Longueur_mm;
			  	obj.Remarques = row.doc.Remarques;
			  	obj.Poids_avec_sac_g = row.doc.Poids_avec_sac_g;
			  	obj.Poids_du_sac_g = row.doc.Poids_du_sac_g;
			  	obj.Poids_net_animal_g = row.doc.Poids_net_animal_g;
			  	obj.L_corps_mm = row.doc.L_corps_mm;
			  	obj.L_queue_mm = row.doc.L_queue_mm;
			  	obj.L_pied_arriere_mm = row.doc.L_pied_arriere_mm;
			  	obj.L_crane_mm = row.doc.L_crane_mm;
			  	obj.L_oreille_mm = row.doc.L_oreille_mm;
			  	obj.Photo = row.doc.Photo;
			  	obj.Relache = row.doc.Relache;
			  	obj.Mort_naturelle_carcasse_trouvee = row.doc.Mort_naturelle_carcasse_trouvee;
			  	obj.Mort_due_a_la_capture_manip = row.doc.Mort_due_a_la_capture_manip;
			  	obj.Euthanasie = row.doc.Euthanasie;
			  	obj.Dosage_injection_ketamine = row.doc.Dosage_injection_ketamine;
			    obj.Si_relache_marquage = row.doc.Si_relache_marquage;
			  	obj.Si_marque_numero = row.doc.Si_marque_numero;
			  	obj.Ecouv_gorge_RNAl = row.doc.Ecouv_gorge_RNAl;
			  	obj.Sang_papier_buvard = row.doc.Sang_papier_buvard;
			  	obj.Biopsie_d_oreille_ethanol = row.doc.Biopsie_d_oreille_ethanol;
			  	obj.Feces_RNAl = row.doc.Feces_RNAl;
			  	obj.Ecouv_urine_RNAl = row.doc.Ecouv_urine_RNAl;
			  	obj.Ecouv_rectal_RNAl = row.doc.Ecouv_rectal_RNAl;
			  	obj.Ectoparasites_ethanol = row.doc.Ectoparasites_ethanol;
			  	obj.Tiques = row.doc.Tiques;
			  	obj.Puces = row.doc.Puces;
			  	obj.Echantillons_Autre = row.doc.Echantillons_Autre;
			  	obj.Autres_echantillons_ou_remarques = row.doc.Autres_echantillons_ou_remarques;
			  	obj.Coeur_CO = row.doc.Coeur_CO;
			  	obj.Poumons_PO = row.doc.Poumons_PO;
			  	obj.Foie_FO = row.doc.Foie_FO;
			  	obj.Rate_RA = row.doc.Rate_RA;
			  	obj.Reins_RN = row.doc.Reins_RN;
			  	obj.Intestins_INT = row.doc.Intestins_INT;
			  	obj.Testicule_TE = row.doc.Testicule_TE;
			  	obj.Ovaires_OV = row.doc.Ovaires_OV;
			  	obj.Embryons_EM = row.doc.Embryons_EM;
			  	obj.Nombre_d_embryons = row.doc.Nombre_d_embryons;
			  	obj.Organes_RNAl_autre = row.doc.Organes_RNAl_autre;
			  	

			  	obj.Username = row.doc.Username;

   				/*obj.SamplingDate = row.doc.SamplingDate 
   				obj.AnimalCode = row.doc.AnimalCode
   				obj.Province = row.doc.Province 
   				obj.Site = row.doc.Site 
   				obj.Species = row.doc.Species 
   				obj.SampleType = row.doc.SampleType 
   				obj.SampleCode = row.doc.SampleCode
   				obj.Genus_Species = row.doc.Genus_Species 
   				obj.Final_Result_for_Corona_Watanabe = row.doc.Final_Result_for_Corona_Watanabe 
   				obj.Final_Result_for_Corona_Quan = row.doc.Final_Result_for_Corona_Quan 

  				
   				obj.Username = row.doc.Username */

   				tab_cerfig_rongeurs_captures_guinea.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBcerfig_rongeurs_captures_guinea.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addBcomingRongeursCapturesGuineaRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			
			CSV_data = CSV_data +
				
				row.N_identification + ';' +
		  	    row.Date + ';' +
		  	    row.Equipe + ';' +
			  	row.Binome_prelevement + ';' +
			  	row.Site_region + ';' +
			  	row.Site_precis_de_capture + ';' +
			  	row.Piege + ';' +
			  	row.Numero_de_piege + ';' +
			  	row.Lieu_de_capture + ';' +
			  	row.Lieu_de_capture_autre + ';' +
			  	row.Lat_degre_dec_Piege + ';' +
			  	row.Latitude_Piege + ';' +
			  	row.Long_degre_dec_Piege + ';' +
			  	row.Longitude_Piege + ';' +
			  	row.Taille_yeux + ';' +
			  	row.Couleur_pelage_dorsal + ';' +
			  	row.Couleur_pelage_ventral + ';' +
			  	row.Espece_identifiee + ';' +
			  	row.Famille + ';' +
			  	row.Genre + ';' +
			  	row.Espece + ';' +
			  	row.Age + ';' +
			  	row.Sexe + ';' +
			  	row.Femelles_gestante + ';' +
			  	row.Femelles_lactante + ';' +
			  	row.Nombre_de_paires_de_mamelles + ';' +
			  	row.checkboxPect + ';' +
			  	row.Pect + ';' +
			  	row.checkboxAbdo + ';' +
			  	row.Abdo + ';' +
			  	row.checkboxIngu + ';' +
			  	row.Ingu + ';' +
			  	row.Testicules_descendus + ';' +
			  	row.Longueur_mm + ';' +
			  	row.Remarques + ';' +
			  	row.Poids_avec_sac_g + ';' +
			  	row.Poids_du_sac_g + ';' +
			  	row.Poids_net_animal_g + ';' +
			  	row.L_corps_mm + ';' +
			  	row.L_queue_mm + ';' +
			  	row.L_pied_arriere_mm + ';' +
			  	row.L_crane_mm + ';' +
			  	row.L_oreille_mm + ';' +
			  	row.Photo + ';' +
			  	row.Relache + ';' +
			  	row.Mort_naturelle_carcasse_trouvee + ';' +
			  	row.Mort_due_a_la_capture_manip + ';' +
			  	row.Euthanasie + ';' +
			  	row.Dosage_injection_ketamine + ';' +
			  	row.Si_relache_marquage + ';' +
			  	row.Si_marque_numero + ';' +
			  	row.Ecouv_gorge_RNAl + ';' +
			  	row.Sang_papier_buvard + ';' +
			  	row.Biopsie_d_oreille_ethanol + ';' +
			  	row.Feces_RNAl + ';' +
			  	row.Ecouv_urine_RNAl + ';' +
			  	row.Ecouv_rectal_RNAl + ';' +
			  	row.Ectoparasites_ethanol + ';' +
			  	row.Tiques + ';' +
			  	row.Puces + ';' +
			  	row.Echantillons_Autre + ';' +
			  	row.Autres_echantillons_ou_remarques + ';' +
			  	row.Coeur_CO + ';' +
			  	row.Poumons_PO + ';' +
			  	row.Foie_FO + ';' +
			  	row.Rate_RA + ';' +
			  	row.Reins_RN + ';' +
			  	row.Intestins_INT + ';' +
			  	row.Testicule_TE + ';' +
			  	row.Ovaires_OV + ';' +
			  	row.Embryons_EM + ';' +
			  	row.Nombre_d_embryons + ';' +
			  	row.Organes_RNAl_autre + ';' +
		  	 
				row.Username + ';\r\n'
				
		
			} else {	
				 
				if (array_selected_fields.indexOf('N_identification') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'N_identification;';
					}
					CSV_data = CSV_data + row.N_identification + ";"
				};
				if (array_selected_fields.indexOf('Date') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date;';
					}
					CSV_data = CSV_data + row.Date + ";"
				};				
				if (array_selected_fields.indexOf('Equipe') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Equipe;';
					}
					CSV_data = CSV_data + row.Equipe + ";"
				};				
				if (array_selected_fields.indexOf('Binome_prelevement') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Binome_prelevement;';
					}
					CSV_data = CSV_data + row.Binome_prelevement + ";"
				};	
				if (array_selected_fields.indexOf('Site_region') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Site_region;';
					}
					CSV_data = CSV_data + row.Site_region + ";"
				};	
				if (array_selected_fields.indexOf('Site_precis_de_capture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Site_precis_de_capture;';
					}
					CSV_data = CSV_data + row.Site_precis_de_capture + ";"
				};
				if (array_selected_fields.indexOf('Piege') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Piege;';
					}
					CSV_data = CSV_data + row.Piege + ";"
				};
				if (array_selected_fields.indexOf('Numero_de_piege') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Numero_de_piege;';
					}
					CSV_data = CSV_data + row.Numero_de_piege + ";"
				};
				if (array_selected_fields.indexOf('Lieu_de_capture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Lieu_de_capture;';
					}
					CSV_data = CSV_data + row.Lieu_de_capture + ";"
				};
				if (array_selected_fields.indexOf('Lieu_de_capture_autre') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Lieu_de_capture_autre;';
					}
					CSV_data = CSV_data + row.Lieu_de_capture_autre + ";"
				};
				if (array_selected_fields.indexOf('Lat_degre_dec_Piege') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Lat_degre_dec_Piege;';
					}
					CSV_data = CSV_data + row.Lat_degre_dec_Piege + ";"
				};
				if (array_selected_fields.indexOf('Latitude_Piege') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Latitude_Piege;';
					}
					CSV_data = CSV_data + row.Latitude_Piege + ";"
				};
				if (array_selected_fields.indexOf('Long_degre_dec_Piege') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Long_degre_dec_Piege;';
					}
					CSV_data = CSV_data + row.Long_degre_dec_Piege + ";"
				};
				if (array_selected_fields.indexOf('Longitude_Piege') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Longitude_Piege;';
					}
					CSV_data = CSV_data + row.Longitude_Piege + ";"
				};
				if (array_selected_fields.indexOf('Taille_yeux') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Taille_yeux;';
					}
					CSV_data = CSV_data + row.Taille_yeux + ";"
				};
				if (array_selected_fields.indexOf('Couleur_pelage_dorsal') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Couleur_pelage_dorsal;';
					}
					CSV_data = CSV_data + row.Couleur_pelage_dorsal + ";"
				};
				if (array_selected_fields.indexOf('Couleur_pelage_ventral') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Couleur_pelage_ventral;';
					}
					CSV_data = CSV_data + row.Couleur_pelage_ventral + ";"
				};
				if (array_selected_fields.indexOf('Espece_identifiee') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece_identifiee;';
					}
					CSV_data = CSV_data + row.Espece_identifiee + ";"
				};
				if (array_selected_fields.indexOf('Famille') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Famille;';
					}
					CSV_data = CSV_data + row.Famille + ";"
				};
				if (array_selected_fields.indexOf('Genre') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genre;';
					}
					CSV_data = CSV_data + row.Genre + ";"
				};
				if (array_selected_fields.indexOf('Espece') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Espece;';
					}
					CSV_data = CSV_data + row.Espece + ";"
				};
				if (array_selected_fields.indexOf('Age') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Age;';
					}
					CSV_data = CSV_data + row.Age + ";"
				};
				if (array_selected_fields.indexOf('Sexe') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sexe;';
					}
					CSV_data = CSV_data + row.Sexe + ";"
				};
				if (array_selected_fields.indexOf('Femelles_gestante') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Femelles_gestante;';
					}
					CSV_data = CSV_data + row.Femelles_gestante + ";"
				};
				if (array_selected_fields.indexOf('Femelles_lactante') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Femelles_lactante;';
					}
					CSV_data = CSV_data + row.Femelles_lactante + ";"
				};
				if (array_selected_fields.indexOf('Nombre_de_paires_de_mamelles') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nombre_de_paires_de_mamelles;';
					}
					CSV_data = CSV_data + row.Nombre_de_paires_de_mamelles + ";"
				};
				if (array_selected_fields.indexOf('checkboxPect') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'checkboxPect;';
					}
					CSV_data = CSV_data + row.checkboxPect + ";"
				};
				if (array_selected_fields.indexOf('Pect') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Pect;';
					}
					CSV_data = CSV_data + row.Pect + ";"
				};
				if (array_selected_fields.indexOf('checkboxAbdo') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'checkboxAbdo;';
					}
					CSV_data = CSV_data + row.checkboxAbdo + ";"
				};
				if (array_selected_fields.indexOf('Abdo') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Abdo;';
					}
					CSV_data = CSV_data + row.Abdo + ";"
				};
				if (array_selected_fields.indexOf('checkboxIngu') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'checkboxIngu;';
					}
					CSV_data = CSV_data + row.checkboxIngu + ";"
				};
				if (array_selected_fields.indexOf('Ingu') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ingu;';
					}
					CSV_data = CSV_data + row.Ingu + ";"
				};
				if (array_selected_fields.indexOf('Testicules_descendus') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Testicules_descendus;';
					}
					CSV_data = CSV_data + row.Testicules_descendus + ";"
				};
				if (array_selected_fields.indexOf('Longueur_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Longueur_mm;';
					}
					CSV_data = CSV_data + row.Longueur_mm + ";"
				};
				if (array_selected_fields.indexOf('Remarques') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Remarques';
					}
					CSV_data = CSV_data + row.Remarques + ";"
				};
				if (array_selected_fields.indexOf('Poids_avec_sac_g') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Poids_avec_sac_g';
					}
					CSV_data = CSV_data + row.Poids_avec_sac_g + ";"
				};
				if (array_selected_fields.indexOf('Poids_du_sac_g') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Poids_du_sac_g';
					}
					CSV_data = CSV_data + row.Poids_du_sac_g + ";"
				};
				if (array_selected_fields.indexOf('Poids_net_animal_g') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Poids_net_animal_g';
					}
					CSV_data = CSV_data + row.Poids_net_animal_g + ";"
				};
				if (array_selected_fields.indexOf('L_corps_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'L_corps_mm';
					}
					CSV_data = CSV_data + row.L_corps_mm + ";"
				};
				if (array_selected_fields.indexOf('L_queue_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'L_queue_mm';
					}
					CSV_data = CSV_data + row.L_queue_mm + ";"
				};
				if (array_selected_fields.indexOf('L_pied_arriere_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'L_pied_arriere_mm';
					}
					CSV_data = CSV_data + row.L_pied_arriere_mm + ";"
				};
				if (array_selected_fields.indexOf('L_crane_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'L_crane_mm';
					}
					CSV_data = CSV_data + row.L_crane_mm + ";"
				};
				if (array_selected_fields.indexOf('L_oreille_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'L_oreille_mm';
					}
					CSV_data = CSV_data + row.L_oreille_mm + ";"
				};
				if (array_selected_fields.indexOf('Photo') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Photo';
					}
					CSV_data = CSV_data + row.Photo + ";"
				};
				if (array_selected_fields.indexOf('Relache') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Relache';
					}
					CSV_data = CSV_data + row.Relache + ";"
				};
			  	if (array_selected_fields.indexOf('Mort_naturelle_carcasse_trouvee') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Mort_naturelle_carcasse_trouvee';
					}
					CSV_data = CSV_data + row.Mort_naturelle_carcasse_trouvee + ";"
				};
				if (array_selected_fields.indexOf('Mort_due_a_la_capture_manip') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Mort_due_a_la_capture_manip';
					}
					CSV_data = CSV_data + row.Mort_due_a_la_capture_manip + ";"
				};
				if (array_selected_fields.indexOf('Euthanasie') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Euthanasie';
					}
					CSV_data = CSV_data + row.Euthanasie + ";"
				};
				if (array_selected_fields.indexOf('Dosage_injection_ketamine') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Dosage_injection_ketamine';
					}
					CSV_data = CSV_data + row.Dosage_injection_ketamine + ";"
				};
				if (array_selected_fields.indexOf('Si_relache_marquage') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Si_relache_marquage';
					}
					CSV_data = CSV_data + row.Si_relache_marquage + ";"
				};
				if (array_selected_fields.indexOf('Si_marque_numero') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Si_marque_numero';
					}
					CSV_data = CSV_data + row.Si_marque_numero + ";"
				};
				if (array_selected_fields.indexOf('Ecouv_gorge_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ecouv_gorge_RNAl';
					}
					CSV_data = CSV_data + row.Ecouv_gorge_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Sang_papier_buvard') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sang_papier_buvard';
					}
					CSV_data = CSV_data + row.Sang_papier_buvard + ";"
				};
				if (array_selected_fields.indexOf('Biopsie_d_oreille_ethanol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Biopsie_d_oreille_ethanol';
					}
					CSV_data = CSV_data + row.Biopsie_d_oreille_ethanol + ";"
				};
				if (array_selected_fields.indexOf('Feces_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Feces_RNAl';
					}
					CSV_data = CSV_data + row.Feces_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Ecouv_urine_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ecouv_urine_RNAl';
					}
					CSV_data = CSV_data + row.Ecouv_urine_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Ecouv_rectal_RNAl') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ecouv_rectal_RNAl';
					}
					CSV_data = CSV_data + row.Ecouv_rectal_RNAl + ";"
				};
				if (array_selected_fields.indexOf('Ectoparasites_ethanol') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ectoparasites_ethanol';
					}
					CSV_data = CSV_data + row.Ectoparasites_ethanol + ";"
				};
				if (array_selected_fields.indexOf('Tiques') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Tiques';
					}
					CSV_data = CSV_data + row.Tiques + ";"
				};
				if (array_selected_fields.indexOf('Puces') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Puces';
					}
					CSV_data = CSV_data + row.Puces + ";"
				};
				if (array_selected_fields.indexOf('Echantillons_Autre') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Echantillons_Autre';
					}
					CSV_data = CSV_data + row.Echantillons_Autre + ";"
				};
				if (array_selected_fields.indexOf('Autres_echantillons_ou_remarques') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Autres_echantillons_ou_remarques';
					}
					CSV_data = CSV_data + row.Autres_echantillons_ou_remarques + ";"
				};
				if (array_selected_fields.indexOf('Coeur_CO') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Coeur_CO';
					}
					CSV_data = CSV_data + row.Coeur_CO + ";"
				};
				if (array_selected_fields.indexOf('Poumons_PO') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Poumons_PO';
					}
					CSV_data = CSV_data + row.Poumons_PO + ";"
				};
				if (array_selected_fields.indexOf('Foie_FO') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Foie_FO';
					}
					CSV_data = CSV_data + row.Foie_FO + ";"
				};
				if (array_selected_fields.indexOf('Rate_RA') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Rate_RA';
					}
					CSV_data = CSV_data + row.Rate_RA + ";"
				};
				if (array_selected_fields.indexOf('Reins_RN') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Reins_RN';
					}
					CSV_data = CSV_data + row.Reins_RN + ";"
				};
				if (array_selected_fields.indexOf('Intestins_INT') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Intestins_INT';
					}
					CSV_data = CSV_data + row.Intestins_INT + ";"
				};
				if (array_selected_fields.indexOf('Testicule_TE') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Testicule_TE';
					}
					CSV_data = CSV_data + row.Testicule_TE + ";"
				};
				if (array_selected_fields.indexOf('Ovaires_OV') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ovaires_OV';
					}
					CSV_data = CSV_data + row.Ovaires_OV + ";"
				};
				if (array_selected_fields.indexOf('Embryons_EM') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Embryons_EM';
					}
					CSV_data = CSV_data + row.Embryons_EM + ";"
				};
				if (array_selected_fields.indexOf('Nombre_d_embryons') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Nombre_d_embryons';
					}
					CSV_data = CSV_data + row.Nombre_d_embryons + ";"
				};
				if (array_selected_fields.indexOf('Organes_RNAl_autre') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Organes_RNAl_autre';
					}
					CSV_data = CSV_data + row.Organes_RNAl_autre + ";"
				};
				
				if (array_selected_fields.indexOf('Username') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Username;';
					}
					CSV_data = CSV_data + row.Username + ";"
				};
				
			  	
				
				if (add_heading) {
					CSV_heading = CSV_heading + "\r\n";
					CSV_data = CSV_heading + CSV_data + "\r\n"
					add_heading = false;
				} else {
					CSV_data = CSV_data + "\r\n";
				}
			}
			
			console.log(count);
			if (count == 0) {
				var blob = new Blob(['\ufeff' + CSV_data], {type: "text/csv;charset=ISO-8859-1"});
	       		saveAs(blob, "cerfig_rongeurs_captures_guinea" + clock.now + ".csv");
			}	
			
	} 
			
	
}



window.onload = function() {
	$('#export_all_fields').click(function(){
		CSV_data = fields_CSV_head;
		
		
		var res = alasql("SELECT N_identification, Date, Equipe, Binome_prelevement, Site_region, Site_precis_de_capture, Piege, Numero_de_piege, Lieu_de_capture, Lieu_de_capture_autre, Lat_degre_dec_Piege, Latitude_Piege, Long_degre_dec_Piege, Longitude_Piege, Taille_yeux, Couleur_pelage_dorsal, Couleur_pelage_ventral, Espece_identifiee, Famille, Genre, Espece, Age, Sexe, Femelles_gestante, Femelles_lactante, Nombre_de_paires_de_mamelles, checkboxPect, Pect, checkboxAbdo, Abdo, checkboxIngu, Ingu, Testicules_descendus, Longueur_mm, Remarques, Poids_avec_sac_g, Poids_du_sac_g, Poids_net_animal_g, L_corps_mm, L_queue_mm, L_pied_arriere_mm, L_crane_mm, L_oreille_mm, Photo, Relache, Mort_naturelle_carcasse_trouvee, Mort_due_a_la_capture_manip, Euthanasie, Dosage_injection_ketamine, Si_relache_marquage, Si_marque_numero, Ecouv_gorge_RNAl, Sang_papier_buvard, Biopsie_d_oreille_ethanol, Feces_RNAl, Ecouv_urine_RNAl, Ecouv_rectal_RNAl, Ectoparasites_ethanol, Tiques, Puces, Echantillons_Autre, Autres_echantillons_ou_remarques, Coeur_CO, Poumons_PO, Foie_FO, Rate_RA, Reins_RN, Intestins_INT, Testicule_TE, Ovaires_OV, Embryons_EM, Nombre_d_embryons, Organes_RNAl_autre, Username FROM ? ORDER BY Date", [tab_cerfig_rongeurs_captures_guinea] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addBcomingRongeursCapturesGuineaRecord(row, false);
			}
			
			
		}).catch(function (err) {
			console.log(err);
		});
	})


	$('#export_selected_fields').click(function(){
		
		array_selected_fields = [];
		array_selected_fields.length = 0;
		
		$('#multiselect1 :selected').each(function(i, sel){ 
			array_selected_fields.push($(sel).val()); 
			//alert($(sel).val())
		});
		
		var res = alasql("SELECT N_identification, Date, Equipe, Binome_prelevement, Site_region, Site_precis_de_capture, Piege, Numero_de_piege, Lieu_de_capture, Lieu_de_capture_autre, Lat_degre_dec_Piege, Latitude_Piege, Long_degre_dec_Piege, Longitude_Piege, Taille_yeux, Couleur_pelage_dorsal, Couleur_pelage_ventral, Espece_identifiee, Famille, Genre, Espece, Age, Sexe, Femelles_gestante, Femelles_lactante, Nombre_de_paires_de_mamelles, checkboxPect, Pect, checkboxAbdo, Abdo, checkboxIngu, Ingu, Testicules_descendus, Longueur_mm, Remarques, Poids_avec_sac_g, Poids_du_sac_g, Poids_net_animal_g, L_corps_mm, L_queue_mm, L_pied_arriere_mm, L_crane_mm, L_oreille_mm, Photo, Relache, Mort_naturelle_carcasse_trouvee, Mort_due_a_la_capture_manip, Euthanasie, Dosage_injection_ketamine, Si_relache_marquage, Si_marque_numero, Ecouv_gorge_RNAl, Sang_papier_buvard, Biopsie_d_oreille_ethanol, Feces_RNAl, Ecouv_urine_RNAl, Ecouv_rectal_RNAl, Ectoparasites_ethanol, Tiques, Puces, Echantillons_Autre, Autres_echantillons_ou_remarques, Coeur_CO, Poumons_PO, Foie_FO, Rate_RA, Reins_RN, Intestins_INT, Testicule_TE, Ovaires_OV, Embryons_EM, Nombre_d_embryons, Organes_RNAl_autre, Username FROM ? ORDER BY Date", [tab_cerfig_rongeurs_captures_guinea] );
	     			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addBcomingRongeursCapturesGuineaRecord(row, true);
			}
			
			
		}).catch(function (err) {
			console.log(err);
		});
	})
	
	$("#add_selection_criteria").attr("disabled", true);

	var $multiselect1 = $("#multiselect1");
	
	$.each(fields, function(index, value) {
		console.log(value);
		$multiselect1.append($("<option>").attr("value", value).text(value));
	});
	
	$multiselect1.multiSelect();
}



	
