





var fields_CSV_head_rongeurs =   
	'Num_rongeur;CODE_rongeur;NumMission_NumSite;N_site;Date;J;Equipe;Pays;Region;Arrondissement;Village;' +
	'Num_piege;Type_piege;Site_capture;Emplacement_piege;Detail_emplacement;Lat_degre_dec_Piege;Latitude_piege;' +
	'Long_degre_dec_Piege;Longitude_piege;Contention;Preleveur;Autopsie;Identification_espece;Famille_terrain;' +
	'Genre_terrain;Espece_terrain;Famille_labo;Genre_labo;Espece_labo;Sexe;Age;F_gestante;F_lactante;Nbtotal_paires_mamelles;' +
	'N_mamelles_pectorales;N_mamelles_abdominales;N_mamelles_inguinales;Male_testicules_descendues;Male_longueur_testicules;' +
	'Poids_sac_rongeur_g;Poids_sac_g;Poids_g;L_totale_corps_Ltc_mm;L_queue_mm;L_patte_arriere_Tib_mm;L_crane_mm;' +
	'L_oreille_mm;Taille_yeux;Couleur_pelage_dorsal;Couleur_pelage_ventral;Photo;Remarques_anomalies;Relache_vivant;' +
	'Cause_deces;Recapture;Comment_recapture;Euthanasie;Methode_eutha;Dosage_Ketamine_mL;Biopsie_oreille_BO;Ecouv_Salive_RNAl_SA;' +
	'Ecouv_Urogenital_RNAl_URO;Urine_RNAl_UR;Ecouv_rectal_RNAl_RE;Feces_RNAl_FE;Sang_DBS_nb_cercles;Ectoparasites_Tiques_Eth_EP_TI;' +
	'Ectoparasites_Puces_Eth_EP_PU;Poils_ethanol_PO;Autres_echantillons;Autres_echantillons_details;Coeur_RNAl_CO;' +
	'Poumon_RNAl_PO;Foie_RNAl_FO;Rate_RNAl_RA;Rein_RNAl_RN;Testicule_RNAl_TE;Ovaire_RNAl_OV;Embryon_RNAl_EM;' +
	'F_gestante_nb_embryons;Intestins_RNAl_INT;Peau_RNAl_PE;Cerveau_RNAl_CE;Autre_Organe_RNAl;Details_autre_organe_RNAl;' +
	'Remarques_echantillons;';


var fields_CSV_head_chauves_souris =
						'';

window.onload = function() {
	$('#button_download').click(function(){
		CSV_data = fields_CSV_head_rongeurs;
		var blob = new Blob(['\ufeff' + CSV_data], {type: "text/csv;charset=ISO-8859-1"});
   		saveAs(blob, "RCC.csv");
	})
	
	$('#button_download_2').click(function(){
		CSV_data = fields_CSV_head_chauves_souris;
		var blob = new Blob(['\ufeff' + CSV_data], {type: "text/csv;charset=ISO-8859-1"});
   		saveAs(blob, "CSCC.csv");
	})
}