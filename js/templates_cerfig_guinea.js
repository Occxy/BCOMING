var fields_CSV_head_rongeurs =   
						'N_identification;Date;Equipe;Binome_prelevement;Site_region;Site_precis_de_capture;Piege;Numero_de_piege;' + 
						'Lieu_de_capture;Lieu_de_capture_autre;Lat_degre_dec_Piege;Latitude_Piege;Long_degre_dec_Piege;Longitude_Piege;' + 
						'Taille_yeux;Couleur_pelage_dorsal;Couleur_pelage_ventral;Espece_identifiee;Famille;Genre;Espece;Age;' + 
						'Sexe;Femelles_gestante;Femelles_lactante;Nombre_de_paires_de_mamelles;checkboxPect;Pect;checkboxAbdo;' + 
						'Abdo;checkboxIngu;Ingu;Testicules_descendus;Longueur_mm;Remarques;Poids_avec_sac_g;Poids_du_sac_g;' + 
						'Poids_net_animal_g;L_corps_mm;L_queue_mm;L_pied_arriere_mm;L_crane_mm;L_oreille_mm;Photo;Relache;' + 
						'Mort_naturelle_carcasse_trouvee;Mort_due_a_la_capture_manip;Euthanasie;Dosage_injection_ketamine;Si_relache_marquage;Si_marque_numero;' + 
						'Ecouv_gorge_RNAl;Sang_papier_buvard;Biopsie_d_oreille_ethanol;Feces_RNAl;Ecouv_urine_RNAl;Ecouv_rectal_RNAl;' + 
						'Ectoparasites_ethanol;Tiques;Puces;Echantillons_Autre;Autres_echantillons_ou_remarques;Coeur_CO;Poumons_PO;' + 
						'Foie_FO;Rate_RA;Reins_RN;Intestins_INT;Testicule_TE;Ovaires_OV;Embryons_EM;Nombre_d_embryons;' + 
						'Organes_RNAl_autre;';



var fields_CSV_head_chauves_souris =
						'N_identification;N_identification_mere;Date;Equipe;Site_region;Site_precis_de_capture;Lat_degre_dec;Latitude;Long_degre_dec;' +
						'Longitude;Dans;Dans_autre;Lieu_de_capture;Proximite_du_village_ville;Methode_de_capture;Espece_identifiee;' +
						'Type_de_chauve_souris;Famille;Genre;Espece;Taille_yeux;Couleur_pelage_dorsal;Couleur_pelage_ventral;Sexe;Age;' +
						'Gestante;Lactante;Suitee;Sexe_jeune;Poids_jeune;N_ident_jeune;Remarques;Mesureur;Poids_g;L_totale_corps_mm;L_avant_bras_mm;' +
						'L_queue_mm;L_metacarpe_3ieme_doigt_mm;Photo;Relachee_vivante;Mort_naturelle_carcasse_trouvee;' +
						'Mort_due_a_la_capture_manip_euthanasie;Si_relae_marquage;Si_marquee_numero;Sang_papier_buvard;Ecouv_gorge_RNAl;' +
						'Wing_punch_ethanol;Feces_RNAl;Urine_RNAl;Feces_et_urine_RNAl;Ecouv_rectal_RNAl;Ectoparasites_ethanol;' +
						'Autres_echantillons_ou_remarques;Coeur_CO;Poumons_PO;Foie_FO;Rate_RA;Reins_RN;Intestins_INT;Testicule_TE;Ovaires_OV;' +
						'Embryons_EM;Nombre_d_embryons;Organes_RNAl_autre;';

window.onload = function() {
	$('#button_download').click(function(){
		CSV_data = fields_CSV_head_rongeurs;
		var blob = new Blob(['\ufeff' + CSV_data], {type: "text/csv;charset=ISO-8859-1"});
   		saveAs(blob, "RCG.csv");
	})
	
	$('#button_download_2').click(function(){
		CSV_data = fields_CSV_head_chauves_souris;
		var blob = new Blob(['\ufeff' + CSV_data], {type: "text/csv;charset=ISO-8859-1"});
   		saveAs(blob, "CSCG.csv");
	})
}