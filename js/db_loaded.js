show_infos();

disable_li();

var elem = document.getElementById("child");
elem.style.display="none";

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

var fonction = localStorage.getItem('fonction');

/*var chauves_souris_capturees_transvihmi_guinee = 'chauves_souris_capturees_transvihmi_guinee' + debug + '_count';
var chauves_souris_capturees_astre_transvihmi_guinee = 'chauves_souris_capturees_astre_transvihmi_guinee' + debug + '_count';
var chauves_souris_capturees_transvihmi_cameroun = 'chauves_souris_capturees_transvihmi_cameroun' + debug + '_count';
var chauves_souris_capturees_transvihmi_rdc = 'chauves_souris_capturees_transvihmi_rdc' + debug + '_count';
var chauves_souris_capturees_astre_guinee = 'chauves_souris_capturees_astre_guinee' + debug + '_count';
var chauves_souris_capturees_astre_congo = 'chauves_souris_capturees_astre_congo' + debug + '_count';
var chauves_souris_capturees_astre_gabon = 'chauves_souris_capturees_astre_gabon' + debug + '_count';
var chauves_souris_non_invasives_transvihmi_guinee = 'chauves_souris_non_invasives_transvihmi_guinee' + debug + '_count';
var chauves_souris_non_invasives_astre_transvihmi_guinee = 'chauves_souris_non_invasives_astre_transvihmi_guinee' + debug + '_count';
var chauves_souris_non_invasives_transvihmi_rdc = 'chauves_souris_non_invasives_transvihmi_rdc' + debug + '_count';
var chauves_souris_non_invasives_transvihmi_cameroun = 'chauves_souris_non_invasives_transvihmi_cameroun' + debug + '_count';
var chauves_souris_non_invasives_transvihmi_rdc = 'chauves_souris_non_invasives_transvihmi_rdc' + debug + '_count';
var chauves_souris_non_invasives_astre_guinee = 'chauves_souris_non_invasives_astre_guinee' + debug + '_count';
var chauves_souris_non_invasives_astre_congo = 'chauves_souris_non_invasives_astre_congo' + debug + '_count';
var chauves_souris_non_invasives_astre_gabon = 'chauves_souris_non_invasives_astre_gabon' + debug + '_count';
var viande_de_brousse_transvihmi_guinee = 'viande_de_brousse_transvihmi_guinee' + debug + '_count';
var viande_de_brousse_transvihmi_cameroun = 'viande_de_brousse_transvihmi_cameroun' + debug + '_count';
var viande_de_brousse_transvihmi_rdc = 'viande_de_brousse_transvihmi_rdc' + debug + '_count';
var animals_mivegec_congo = 'animals_mivegec_congo' + debug + '_count';
var animals_mivegec_gabon = 'animals_mivegec_gabon' + debug + '_count';
var individus_cibu = 'individus_cibu' + debug + '_count';
var prelevements_cibu = 'prelevements_cibu' + debug + '_count';
var faune_astre_transvihmi_guinee = 'faune_astre_transvihmi_guinee' + debug + '_count';

document.getElementById("label_chauves_souris_capturees_transvihmi_guinee_count").innerHTML = localStorage.getItem(chauves_souris_capturees_transvihmi_guinee);
document.getElementById("label_chauves_souris_capturees_astre_transvihmi_guinee_count").innerHTML = localStorage.getItem(chauves_souris_capturees_astre_transvihmi_guinee);
document.getElementById("label_chauves_souris_capturees_transvihmi_cameroun_count").innerHTML = localStorage.getItem(chauves_souris_capturees_transvihmi_cameroun);
document.getElementById("label_chauves_souris_capturees_transvihmi_rdc_count").innerHTML = localStorage.getItem(chauves_souris_capturees_transvihmi_rdc);
document.getElementById("label_chauves_souris_capturees_astre_guinee_count").innerHTML = localStorage.getItem(chauves_souris_capturees_astre_guinee);
document.getElementById("label_chauves_souris_capturees_astre_congo_count").innerHTML = localStorage.getItem(chauves_souris_capturees_astre_congo);
document.getElementById("label_chauves_souris_capturees_astre_gabon_count").innerHTML = localStorage.getItem(chauves_souris_capturees_astre_gabon);
document.getElementById("label_chauves_souris_capturees_astre_transvihmi_guinee_count").innerHTML = localStorage.getItem(chauves_souris_capturees_astre_transvihmi_guinee);
document.getElementById("label_chauves_souris_non_invasives_transvihmi_guinee_count").innerHTML = localStorage.getItem(chauves_souris_non_invasives_transvihmi_guinee);
document.getElementById("label_chauves_souris_non_invasives_astre_transvihmi_guinee_count").innerHTML = localStorage.getItem(chauves_souris_non_invasives_astre_transvihmi_guinee);
document.getElementById("label_chauves_souris_non_invasives_transvihmi_rdc_count").innerHTML = localStorage.getItem(chauves_souris_non_invasives_transvihmi_rdc);
document.getElementById("label_chauves_souris_non_invasives_transvihmi_cameroun_count").innerHTML = localStorage.getItem(chauves_souris_non_invasives_transvihmi_cameroun);
document.getElementById("label_chauves_souris_non_invasives_transvihmi_rdc_count").innerHTML = localStorage.getItem(chauves_souris_non_invasives_transvihmi_rdc);
document.getElementById("label_chauves_souris_non_invasives_astre_guinee_count").innerHTML = localStorage.getItem(chauves_souris_non_invasives_astre_guinee);
document.getElementById("label_chauves_souris_non_invasives_astre_congo_count").innerHTML = localStorage.getItem(chauves_souris_non_invasives_astre_congo);
document.getElementById("label_chauves_souris_non_invasives_astre_gabon_count").innerHTML = localStorage.getItem(chauves_souris_non_invasives_astre_gabon);
document.getElementById("label_chauves_souris_non_invasives_astre_transvihmi_guinee_count").innerHTML = localStorage.getItem(chauves_souris_non_invasives_astre_transvihmi_guinee);

document.getElementById("label_viande_de_brousse_transvihmi_guinee_count").innerHTML = localStorage.getItem(viande_de_brousse_transvihmi_guinee);
document.getElementById("label_viande_de_brousse_transvihmi_cameroun_count").innerHTML = localStorage.getItem(viande_de_brousse_transvihmi_cameroun);
document.getElementById("label_viande_de_brousse_transvihmi_rdc_count").innerHTML = localStorage.getItem(viande_de_brousse_transvihmi_rdc);
document.getElementById("label_animals_mivegec_congo_count").innerHTML = localStorage.getItem(animals_mivegec_congo);
document.getElementById("label_animals_mivegec_gabon_count").innerHTML = localStorage.getItem(animals_mivegec_gabon);
document.getElementById("label_individus_cibu_count").innerHTML = localStorage.getItem(individus_cibu);
document.getElementById("label_prelevements_cibu_count").innerHTML = localStorage.getItem(prelevements_cibu);

document.getElementById("label_faune_astre_transvihmi_guinee_count").innerHTML = localStorage.getItem(faune_astre_transvihmi_guinee);*/


var bcoming_camacross = 'bcoming_camacross' + debug + '_count';
var bcoming_rhinokhov_zoocov_lab = 'bcoming_rhinokhov_zoocov_lab' + debug + '_count';
var bcoming_rhinokhov_zoocov_animal = 'bcoming_rhinokhov_zoocov_animal' + debug + '_count';
var bcoming_biodivafreid = 'bcoming_biodivafreid' + debug + '_count';
var bcoming_biodivafreid_locations = 'bcoming_biodivafreid_locations' + debug + '_count';
var cerfig_rongeurs_captures_guinea = 'cerfig_rongeurs_captures_guinea' + debug + '_count';
var bcoming_cerfig_chauves_souris_capturees_guinea = 'bcoming_cerfig_chauves_souris_capturees_guinea' + debug + '_count';

/*document.getElementById("label_bcoming_camacross_count").innerHTML = localStorage.getItem(bcoming_camacross);
document.getElementById("label_bcoming_rhinokhov_zoocov_lab_count").innerHTML = localStorage.getItem(bcoming_rhinokhov_zoocov_lab);
document.getElementById("label_bcoming_rhinokhov_zoocov_animal_count").innerHTML = localStorage.getItem(bcoming_rhinokhov_zoocov_animal);
document.getElementById("label_bcoming_biodivafreid_count").innerHTML = localStorage.getItem(bcoming_biodivafreid);
document.getElementById("label_bcoming_biodivafreid_locations_count").innerHTML = localStorage.getItem(bcoming_biodivafreid_locations);
document.getElementById("label_cerfig_rongeurs_captures_guinea_count").innerHTML = localStorage.getItem(cerfig_rongeurs_captures_guinea);
document.getElementById("label_bcoming_cerfig_chauves_souris_capturees_guinea_count").innerHTML = localStorage.getItem(bcoming_cerfig_chauves_souris_capturees_guinea);*/

//Define an array of IDs
var elementIds = [
  "label_bcoming_camacross_count",
  /*"label_bcoming_rhinokhov_zoocov_lab_count",
  "label_bcoming_rhinokhov_zoocov_animal_count",*/
  "label_bcoming_rhinokhov_zoocov_count",
  "label_bcoming_biodivafreid_count",
  "label_bcoming_biodivafreid_locations_count",
  "label_bcoming_cerfig_rongeurs_captures_guinea_count",
  "label_bcoming_cerfig_chauves_souris_capturees_guinea_count",
  "label_bcoming_merfi_guinea_survey_data_count",
  "label_bcoming_insula_sites_count",
  "label_bcoming_insula_av_samples_count",
  "label_bcoming_insula_av_inventories_wp1_count",
  "label_bcoming_insula_ch_samples_count",
  "label_bcoming_insula_ch_samples_data_count",
  "label_bcoming_insula_mi_samples_count",
  "label_bcoming_insula_he_samples_count",
  "label_bcoming_insula_he_samples_data_inventories_count",  
  "label_bcoming_west_nile_humans_count",
  "label_bcoming_west_nile_horses_count",
  "label_bcoming_west_nile_birds_count",
  "label_bcoming_west_nile_chickens_count",
  "label_bcoming_west_nile_mosquitoes_field_collection_sites_count",
  "label_bcoming_west_nile_mosquitoes_field_samples_count",
  "label_bcoming_west_nile_mosquitoes_field_samples_diagnose_count"
];

// Loop through the array of IDs and set their content based on localStorage values
elementIds.forEach(function (elementId) {
  var localStorageValue = localStorage.getItem(elementId.replace("_count", ""));
  localStorageValue = localStorage.getItem(elementId.replace("label_", ""));
  var element = document.getElementById(elementId);

  if (localStorageValue === null || localStorageValue === "") {
    element.innerHTML = "Not accessible";
  } else {
    element.innerHTML = localStorageValue;
  }
});

if (String(fonction) == 'admin') {
	
	/*if ((code_equipe != 2) && (code_equipe != 5)) {
		document.getElementById("card_tables_references").style.display="block";
		document.getElementById("card_tables_phenologie").style.display="block";
		document.getElementById("card_tables_espece_chauves_souris").style.display="block";
	}*/
	
	/*var tables_references = document.getElementById("tables_references");
	var tables_phenologie = document.getElementById("tables_phenologie");
	var tables_espece_chauves_souris = document.getElementById("tables_espece_chauves_souris");
	
	var code_equipe = localStorage.getItem('code_equipe');
	var pays = localStorage.getItem('nom_pays');
	
	if (code_equipe == 20) {
		var fields = [
			['pays_transvihmi_guinee_debug', 'Pays'],
			['lieu_capture_transvihmi_guinee_debug', 'Lieu_capture'],
			['lieu_collecte_transvihmi_guinee_debug', 'Lieu_collecte'],
			['methode_capture_transvihmi_guinee_debug', 'Methode_capture'],
			['couleur_pelage_dorsal_transvihmi_guinee_debug', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_transvihmi_guinee_debug', 'Couleur_pelage_ventral'],
			['preleve_chez_transvihmi_guinee_debug', 'Preleve_chez'],
			['methode_chasse_transvihmi_guinee_debug', 'Methode_chasse'],
			['destination_transvihmi_guinee_debug', 'Destination'],
			['type_animal_transvihmi_guinee_debug', 'Type_animal'],
			['etat_carcasse_animal_transvihmi_guinee_debug', 'Etat_carcasse_animal'],
			['qualite_echantillon_transvihmi_guinee_debug', 'Qualite_echantillon'],
			['endroit_prelevement_transvihmi_guinee_debug', 'Endroit_prelevement'],
			['activite_humaine_transvihmi_guinee_debug', 'Activite_humaine'],
			['espece_transvihmi_guinee_debug', ''],
			['espece_animal_transvihmi_guinee_debug', ''],
			['phenologie_transvihmi_guinee_debug', ''],
			['pays_transvihmi_cameroun_debug', 'Pays'],
			['lieu_capture_transvihmi_cameroun_debug', 'Lieu_capture'],
			['lieu_collecte_transvihmi_cameroun_debug', 'Lieu_collecte'],
			['methode_capture_transvihmi_cameroun_debug', 'Methode_capture'],
			['couleur_pelage_dorsal_transvihmi_cameroun_debug', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_transvihmi_cameroun_debug', 'Couleur_pelage_ventral'],
			['preleve_chez_transvihmi_cameroun_debug', 'Preleve_chez'],
			['methode_chasse_transvihmi_cameroun_debug', 'Methode_chasse'],
			['destination_transvihmi_cameroun_debug', 'Destination'],
			['type_animal_transvihmi_cameroun_debug', 'Type_animal'],
			['etat_carcasse_animal_transvihmi_cameroun_debug', 'Etat_carcasse_animal'],
			['qualite_echantillon_transvihmi_cameroun_debug', 'Qualite_echantillon'],
			['endroit_prelevement_transvihmi_cameroun_debug', 'Endroit_prelevement'],
			['activite_humaine_transvihmi_cameroun_debug', 'Activite_humaine'],
			['espece_transvihmi_cameroun_debug', ''],
			['espece_animal_transvihmi_cameroun_debug', ''],
			['phenologie_transvihmi_cameroun_debug', ''],
			['pays_transvihmi_rdc_debug', 'Pays'],
			['lieu_capture_transvihmi_rdc_debug', 'Lieu_capture'],
			['lieu_collecte_transvihmi_rdc_debug', 'Lieu_collecte'],
			['methode_capture_transvihmi_rdc_debug', 'Methode_capture'],
			['couleur_pelage_dorsal_transvihmi_rdc_debug', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_transvihmi_rdc_debug', 'Couleur_pelage_ventral'],
			['preleve_chez_transvihmi_rdc_debug', 'Preleve_chez'],
			['methode_chasse_transvihmi_rdc_debug', 'Methode_chasse'],
			['destination_transvihmi_rdc_debug', 'Destination'],
			['type_animal_transvihmi_rdc_debug', 'Type_animal'],
			['etat_carcasse_animal_transvihmi_rdc_debug', 'Etat_carcasse_animal'],
			['qualite_echantillon_transvihmi_rdc_debug', 'Qualite_echantillon'],
			['endroit_prelevement_transvihmi_rdc_debug', 'Endroit_prelevement'],
			['activite_humaine_transvihmi_rdc_debug', 'Activite_humaine'],
			['espece_transvihmi_rdc_debug', ''],
			['espece_animal_transvihmi_rdc_debug', ''],
			['phenologie_transvihmi_rdc_debug', ''],
			['pays_astre_guinee_debug', 'Pays'],
			['lieu_capture_astre_guinee_debug', 'Lieu_capture'],
			['lieu_collecte_astre_guinee_debug', 'Lieu_collecte'],
			['methode_capture_astre_guinee_debug', 'Methode_capture'],
			['couleur_pelage_dorsal_astre_guinee_debug', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_astre_guinee_debug', 'Couleur_pelage_ventral'],
			['activite_humaine_astre_guinee_debug', 'Activite_humaine'],
			['espece_astre_guinee_debug', ''],
			['phenologie_astre_guinee_debug', ''],
			['pays_astre_cameroun_debug', 'Pays'],
			['lieu_capture_astre_congo_debug', 'Lieu_capture'],
			['lieu_collecte_astre_congo_debug', 'Lieu_collecte'],
			['methode_capture_astre_congo_debug', 'Methode_capture'],
			['couleur_pelage_dorsal_astre_congo_debug', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_astre_congo_debug', 'Couleur_pelage_ventral'],
			['activite_humaine_astre_congo_debug', 'Activite_humaine'],
			['espece_astre_congo_debug', ''],
			['phenologie_astre_congo_debug', ''],
			['pays_astre_gabon_debug', 'Pays'],
			['lieu_capture_astre_gabon_debug', 'Lieu_capture'],
			['lieu_collecte_astre_gabon_debug', 'Lieu_collecte'],
			['methode_capture_astre_gabon_debug', 'Methode_capture'],
			['couleur_pelage_dorsal_astre_gabon_debug', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_astre_gabon_debug', 'Couleur_pelage_ventral'],
			['activite_humaine_astre_gabon_debug', 'Activite_humaine'],
			['espece_astre_gabon_debug', ''],
			['phenologie_astre_gabon_debug', ''],
			['pays_astre_transvihmi_guinee_debug', 'Pays'],
			['couleur_pelage_dorsal_astre_transvihmi_guinee_debug', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_astre_transvihmi_guinee_debug', 'Couleur_pelage_ventral'],
			['activite_humaine_astre_transvihmi_guinee_debug', 'Activite_humaine'],
			
		]; 
		var fields2 = [
			['phenologie_transvihmi_guinee_debug', ''],
			['phenologie_transvihmi_cameroun_debug', ''],
			['phenologie_transvihmi_rdc_debug', ''],
			['phenologie_astre_guinee_debug', ''],
			['phenologie_astre_congo_debug', ''],
			['phenologie_astre_gabon_debug', '']
		];
		var fields3 = [
			['espece_transvihmi_guinee_debug', ''],
			['espece_transvihmi_cameroun_debug', ''],
			['espece_transvihmi_rdc_debug', ''],
			['espece_astre_guinee_debug', ''],
			['espece_astre_congo_debug', ''],
			['espece_astre_gabon_debug', ''],
			['espece_astre_transvihmi_guinee_debug', ''],
		];
		
	} else if ((code_equipe == 1) && (pays == 'tous')) {
		var fields = [
			['pays_transvihmi_guinee', 'Pays'],
			['lieu_capture_transvihmi_guinee', 'Lieu_capture'],
			['lieu_collecte_transvihmi_guinee', 'Lieu_collecte'],
			['methode_capture_transvihmi_guinee', 'Methode_capture'],
			['couleur_pelage_dorsal_transvihmi_guinee', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_transvihmi_guinee', 'Couleur_pelage_ventral'],
			['preleve_chez_transvihmi_guinee', 'Preleve_chez'],
			['methode_chasse_transvihmi_guinee', 'Methode_chasse'],
			['destination_transvihmi_guinee', 'Destination'],
			['type_animal_transvihmi_guinee', 'Type_animal'],
			['etat_carcasse_animal_transvihmi_guinee', 'Etat_carcasse_animal'],
			['qualite_echantillon_transvihmi_guinee', 'Qualite_echantillon'],
			['endroit_prelevement_transvihmi_guinee', 'Endroit_prelevement'],
			['activite_humaine_transvihmi_guinee', 'Activite_humaine'],
			['pays_transvihmi_cameroun', 'Pays'],
			['lieu_capture_transvihmi_cameroun', 'Lieu_capture'],
			['lieu_collecte_transvihmi_cameroun', 'Lieu_collecte'],
			['methode_capture_transvihmi_cameroun', 'Methode_capture'],
			['couleur_pelage_dorsal_transvihmi_cameroun', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_transvihmi_cameroun', 'Couleur_pelage_ventral'],
			['preleve_chez_transvihmi_cameroun', 'Preleve_chez'],
			['methode_chasse_transvihmi_cameroun', 'Methode_chasse'],
			['destination_transvihmi_cameroun', 'Destination'],
			['type_animal_transvihmi_cameroun', 'Type_animal'],
			['etat_carcasse_animal_transvihmi_cameroun', 'Etat_carcasse_animal'],
			['qualite_echantillon_transvihmi_cameroun', 'Qualite_echantillon'],
			['endroit_prelevement_transvihmi_cameroun', 'Endroit_prelevement'],
			['activite_humaine_transvihmi_cameroun', 'Activite_humaine'],
			['pays_transvihmi_rdc', 'Pays'],
			['lieu_capture_transvihmi_rdc', 'Lieu_capture'],
			['lieu_collecte_transvihmi_rdc', 'Lieu_collecte'],
			['methode_capture_transvihmi_rdc', 'Methode_capture'],
			['couleur_pelage_dorsal_transvihmi_rdc', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_transvihmi_rdc', 'Couleur_pelage_ventral'],
			['preleve_chez_transvihmi_rdc', 'Preleve_chez'],
			['methode_chasse_transvihmi_rdc', 'Methode_chasse'],
			['destination_transvihmi_rdc', 'Destination'],
			['type_animal_transvihmi_rdc', 'Type_animal'],
			['etat_carcasse_animal_transvihmi_rdc', 'Etat_carcasse_animal'],
			['qualite_echantillon_transvihmi_rdc', 'Qualite_echantillon'],
			['endroit_prelevement_transvihmi_rdc', 'Endroit_prelevement'],
			['activite_humaine_transvihmi_rdc', 'Activite_humaine']	
		];		
		var fields2 = [
			['phenologie_transvihmi_guinee', ''],
			['phenologie_transvihmi_cameroun', ''],
			['phenologie_transvihmi_rdc', '']
		];
		var fields3 = [
			['espece_transvihmi_guinee', ''],
			['espece_transvihmi_cameroun', ''],
			['espece_transvihmi_rdc', '']
		];
	} else if ((code_equipe == 1) && (pays == 'guinee')) {
		var fields = [
			['pays_transvihmi_guinee', 'Pays'],
			['lieu_capture_transvihmi_guinee', 'Lieu_capture'],
			['lieu_collecte_transvihmi_guinee', 'Lieu_collecte'],
			['methode_capture_transvihmi_guinee', 'Methode_capture'],
			['couleur_pelage_dorsal_transvihmi_guinee', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_transvihmi_guinee', 'Couleur_pelage_ventral'],
			['preleve_chez_transvihmi_guinee', 'Preleve_chez'],
			['methode_chasse_transvihmi_guinee', 'Methode_chasse'],
			['destination_transvihmi_guinee', 'Destination'],
			['type_animal_transvihmi_guinee', 'Type_animal'],
			['etat_carcasse_animal_transvihmi_guinee', 'Etat_carcasse_animal'],
			['qualite_echantillon_transvihmi_guinee', 'Qualite_echantillon'],
			['endroit_prelevement_transvihmi_guinee', 'Endroit_prelevement'],
			['activite_humaine_transvihmi_guinee', 'Activite_humaine']			
		];		
		var fields2 = [
			['phenologie_transvihmi_guinee', '']
		];
		var fields3 = [
			['espece_transvihmi_guinee', '']
		];
	} else if ((code_equipe == 1) && (pays == 'cameroun')) {
		var fields = [
			['pays_transvihmi_cameroun', 'Pays'],
			['lieu_capture_transvihmi_cameroun', 'Lieu_capture'],
			['lieu_collecte_transvihmi_cameroun', 'Lieu_collecte'],
			['methode_capture_transvihmi_cameroun', 'Methode_capture'],
			['couleur_pelage_dorsal_transvihmi_cameroun', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_transvihmi_cameroun', 'Couleur_pelage_ventral'],
			['preleve_chez_transvihmi_cameroun', 'Preleve_chez'],
			['methode_chasse_transvihmi_cameroun', 'Methode_chasse'],
			['destination_transvihmi_cameroun', 'Destination'],
			['type_animal_transvihmi_cameroun', 'Type_animal'],
			['etat_carcasse_animal_transvihmi_cameroun', 'Etat_carcasse_animal'],
			['qualite_echantillon_transvihmi_cameroun', 'Qualite_echantillon'],
			['endroit_prelevement_transvihmi_cameroun', 'Endroit_prelevement'],
			['activite_humaine_transvihmi_cameroun', 'Activite_humaine']
		];		
		var fields2 = [
			['phenologie_transvihmi_cameroun', '']
		];
		var fields3 = [
			['espece_transvihmi_cameroun', '']
		];
	} else if ((code_equipe == 1) && (pays == 'rdc')) {
		var fields = [			
			['pays_transvihmi_rdc', 'Pays'],
			['lieu_capture_transvihmi_rdc', 'Lieu_capture'],
			['lieu_collecte_transvihmi_rdc', 'Lieu_collecte'],
			['methode_capture_transvihmi_rdc', 'Methode_capture'],
			['couleur_pelage_dorsal_transvihmi_rdc', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_transvihmi_rdc', 'Couleur_pelage_ventral'],
			['preleve_chez_transvihmi_rdc', 'Preleve_chez'],
			['methode_chasse_transvihmi_rdc', 'Methode_chasse'],
			['destination_transvihmi_rdc', 'Destination'],
			['type_animal_transvihmi_rdc', 'Type_animal'],
			['etat_carcasse_animal_transvihmi_rdc', 'Etat_carcasse_animal'],
			['qualite_echantillon_transvihmi_rdc', 'Qualite_echantillon'],
			['endroit_prelevement_transvihmi_rdc', 'Endroit_prelevement'],
			['activite_humaine_transvihmi_rdc', 'Activite_humaine']	
		];		
		var fields2 = [
			['phenologie_transvihmi_rdc', '']
		];
		var fields3 = [
			['espece_transvihmi_rdc', '']
		];
	} else if (code_equipe == 2) {
		var fields = [];
		var fields2 = [];
		var fields3 = [];		
	} else if (code_equipe == 5) {
		var fields = [];
		var fields2 = [];
		var fields3 = [];		
	} else if ((code_equipe == 6) && (pays == 'tous')) {
		var fields = [
			['pays_astre_guinee', 'Pays'],
			['lieu_capture_astre_guinee', 'Lieu_capture'],
			['lieu_collecte_astre_guinee', 'Lieu_collecte'],
			['methode_capture_astre_guinee', 'Methode_capture'],
			['couleur_pelage_dorsal_astre_guinee', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_astre_guinee', 'Couleur_pelage_ventral'],
			['activite_humaine_astre_guinee', 'Activite_humaine'],
			['pays_astre_congo', 'Pays'],
			['lieu_capture_astre_congo', 'Lieu_capture'],
			['lieu_collecte_astre_congo', 'Lieu_collecte'],
			['methode_capture_astre_congo', 'Methode_capture'],
			['couleur_pelage_dorsal_astre_congo', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_astre_congo', 'Couleur_pelage_ventral'],
			['activite_humaine_astre_congo', 'Activite_humaine'],
			['pays_astre_gabon', 'Pays'],
			['lieu_capture_astre_gabon', 'Lieu_capture'],
			['lieu_collecte_astre_gabon', 'Lieu_collecte'],
			['methode_capture_astre_gabon', 'Methode_capture'],
			['couleur_pelage_dorsal_astre_gabon', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_astre_gabon', 'Couleur_pelage_ventral'],
			['activite_humaine_astre_gabon', 'Activite_humaine'],
			['espece_astre_transvihmi_guinee', '']
		];		
		var fields2 = [
			['phenologie_astre_guinee', ''],
			['phenologie_astre_congo', ''],
			['phenologie_astre_gabon', '']
		];
		var fields3 = [
			['espece_astre_guinee', ''],
			['espece_astre_congo', ''],
			['espece_astre_gabon', '']
		];
	} else if ((code_equipe == 6) && (pays == 'guinee')) {
		var fields = [
			['lieu_capture_astre_guinee', 'Lieu_capture'],
			['lieu_collecte_astre_guinee', 'Lieu_collecte'],
			['methode_capture_astre_guinee', 'Methode_capture'],
			['couleur_pelage_dorsal_astre_guinee', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_astre_guinee', 'Couleur_pelage_ventral'],
			['activite_humaine_astre_guinee', 'Activite_humaine']
		];		
		var fields2 = [			
			['phenologie_astre_guinee', '']
		];
		var fields3 = [
			['espece_astre_guinee', '']
			['espece_astre_transvihmi_guinee', '']
		];
	} else if ((code_equipe == 6) && (pays == 'congo')) {
		var fields = [
			['lieu_capture_astre_congo', 'Lieu_capture'],
			['lieu_collecte_astre_congo', 'Lieu_collecte'],
			['methode_capture_astre_congo', 'Methode_capture'],
			['couleur_pelage_dorsal_astre_congo', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_astre_congo', 'Couleur_pelage_ventral'],
			['activite_humaine_astre_congo', 'Activite_humaine']
		];		
		var fields2 = [			
			['phenologie_astre_congo', '']
		];
		var fields3 = [
			['espece_astre_congo', '']
		];
	} else if ((code_equipe == 6) && (pays == 'gabon')) {
		var fields = [
			['lieu_capture_astre_gabon', 'Lieu_capture'],
			['lieu_collecte_astre_gabon', 'Lieu_collecte'],
			['methode_capture_astre_gabon', 'Methode_capture'],
			['couleur_pelage_dorsal_astre_gabon', 'Couleur_pelage_dorsal'],
			['couleur_pelage_ventral_astre_gabon', 'Couleur_pelage_ventral'],
			['activite_humaine_astre_gabon', 'Activite_humaine']
		];		
		var fields2 = [			
			['phenologie_astre_gabon', '']
		];
		var fields3 = [
			['espece_astre_gabon', '']
		];
	}
	
	for (var i=0;i<fields.length;i++) {
		tables_references.options[tables_references.options.length] = new Option(fields[i][0], fields[i][1]);
	}
	for (var i=0;i<fields2.length;i++) {
		tables_phenologie.options[tables_phenologie.options.length] = new Option(fields2[i][0], fields2[i][1]);
	}
	for (var i=0;i<fields3.length;i++) {
		tables_espece_chauves_souris.options[tables_espece_chauves_souris.options.length] = new Option(fields3[i][0], fields3[i][1]);
	}
	
	loadjs('js/charts.js');*/
}

enable_li();
