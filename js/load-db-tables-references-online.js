var step = 0;
var width = 0;

var remote_couchdb = localStorage.getItem('remote_couchdb');
var code_equipe = localStorage.getItem('code_equipe');
var projects = localStorage.getItem('projects');
var codeProjectsArray = projects.split(',');
var nom_pays = localStorage.getItem('nom_pays');

localStorage['bcoming_camacross_count'] = '';
localStorage['bcoming_rhinokhov_zoocov_count'] = '';
localStorage['cerfig_rongeurs_captures_guinea_count'] = '';
localStorage['bcoming_cerfig_chauves_souris_capturees_guinea_count'] = '';
localStorage['bcoming_biodivafreid_count'] = '';
localStorage['bcoming_biodivafreid_locations_count'] = '';
localStorage['bcoming_insula_av_samples_count'] = '';

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

show_infos();
disable_li();

show_progress_bar();

var progressbar_count = 0;

var tables_principales = [];

function arrayIncludes(arr, value) {
    return arr.indexOf(value) !== -1;
}

tables_principales_infos = ['bcoming_camacross',
							'bcoming_rhinokhov_zoocov',
							'bcoming_cerfig_rongeurs_captures_guinea',
							'bcoming_cerfig_chauves_souris_capturees_guinea',
							'bcoming_biodivafreid',
							'bcoming_biodivafreid_locations',
							'bcoming_insula_sites',
					        'bcoming_insula_av_samples',
					        'bcoming_insula_av_inventories_wp1',
					        'bcoming_insula_av_samples',
					        'bcoming_insula_ch_samples',
					        'bcoming_insula_ch_samples_data',
					        'bcoming_insula_mi_samples',
					        'bcoming_insula_he_samples',
					        'bcoming_insula_he_samples_data_inventories',
						    'bcoming_west_nile_humans',
						    'bcoming_west_nile_horses',
						    'bcoming_west_nile_birds',
						    'bcoming_west_nile_chickens',
						    'bcoming_west_nile_mosquitoes_field_collection_sites',
						    'bcoming_west_nile_mosquitoes_field_samples',
						    'bcoming_west_nile_mosquitoes_field_samples_diagnose',
						    'bcoming_merfi_guinea_survey_data']

if  (debug !== '') {
	tables_principales = ['bcoming_camacross_debug', 'bcoming_rhinokhov_zoocov_lab_debug', 'bcoming_rhinokhov_zoocov_animal_debug', 
		                  'bcoming_biodivafreid_debug', 'bcoming_biodivafreid_locations_debug', 'cerfig_rongeurs_captures_guinea_debug',
		                   'bcoming_cerfig_chauves_souris_capturees_guinea_debug'
		  ];
	
	

} else {
	/*tables_principales = ['cerfig_rongeurs_captures_guinea',
        'bcoming_cerfig_chauves_souris_capturees_guinea', 'bcoming_camacross', 'bcoming_rhinokhov_zoocov_lab', 'bcoming_rhinokhov_zoocov_animal', 
        'bcoming_biodivafreid', 'bcoming_biodivafreid_locations' 
        ];*/
	
	for (var i = 1; i < 9; i++) {
		  
		if (i === 2) {
		    if (arrayIncludes(codeProjectsArray, String(i))) {
		      tables_principales.push('bcoming_camacross');
		    }
		}
		if (i === 3) {
		    if (arrayIncludes(codeProjectsArray, String(i))) {
		      tables_principales.push('bcoming_rhinokhov_zoocov');
		    }
		}
		if (i === 4) {
		    if (arrayIncludes(codeProjectsArray, String(i))) {
		      tables_principales.push('bcoming_cerfig_rongeurs_captures_guinea');
		      tables_principales.push('bcoming_cerfig_chauves_souris_capturees_guinea');
		    }
		}
		if (i === 5) {
		    if (arrayIncludes(codeProjectsArray, String(i))) {
		      tables_principales.push('bcoming_biodivafreid');
		      tables_principales.push('bcoming_biodivafreid_locations');
		    }
		}
		if (i === 6) {
		    if (arrayIncludes(codeProjectsArray, String(i))) {
		      tables_principales.push('bcoming_insula_sites');
		      tables_principales.push('bcoming_insula_av_samples');
		      tables_principales.push('bcoming_insula_av_inventories_wp1');
		      tables_principales.push('bcoming_insula_av_samples');
		      tables_principales.push('bcoming_insula_ch_samples');
		      tables_principales.push('bcoming_insula_ch_samples_data');
		      tables_principales.push('bcoming_insula_mi_samples');
		      tables_principales.push('bcoming_insula_he_samples');
		      tables_principales.push('bcoming_insula_he_samples_data_inventories');
		    }
		}
		if (i === 7) {
		    if (arrayIncludes(codeProjectsArray, String(i))) {
		      tables_principales.push('bcoming_west_nile_humans');
		      tables_principales.push('bcoming_west_nile_horses');
		      tables_principales.push('bcoming_west_nile_birds');
		      tables_principales.push('bcoming_west_nile_chickens');
		      tables_principales.push('bcoming_west_nile_mosquitoes_field_collection_sites');
		      tables_principales.push('bcoming_west_nile_mosquitoes_field_samples');
		      tables_principales.push('bcoming_west_nile_mosquitoes_field_samples_diagnose');
		    }
		}
		if (i === 8) {
		    if (arrayIncludes(codeProjectsArray, String(i))) {
		      tables_principales.push('bcoming_merfi_guinea_survey_data');
		    }
		}
	}



}
	
	
	/*else if ((code_equipe === '1') && (nom_pays == 'guinee')) {
	tables_principales = ['chauves_souris_capturees_transvihmi_guinee', 'chauves_souris_non_invasives_transvihmi_guinee',
						  'viande_de_brousse_transvihmi_guinee', 'site_transvihmi_guinee', 
						  'donnees_mission_transvihmi_guinee', 'donnees_journalieres_transvihmi_guinee',
						  'chauves_souris_capturees_astre_transvihmi_guinee', 'chauves_souris_non_invasives_astre_transvihmi_guinee',
						  'caracterisations_grottes_astre_transvihmi_guinee', 'cameras_trap_astre_transvihmi_guinee',
						  'donnees_mission_astre_transvihmi_guinee', 'donnees_journalieres_astre_transvihmi_guinee',
						  'faune_astre_transvihmi_guinee'];
} else if ((code_equipe === '1') && (nom_pays == 'cameroun')) {
			tables_principales = ['chauves_souris_capturees_transvihmi_cameroun', 'chauves_souris_non_invasives_transvihmi_cameroun',
				  'viande_de_brousse_transvihmi_cameroun', 'viande_de_brousse_nhp_transvihmi_cameroun', 'site_transvihmi_cameroun', 
				  'donnees_mission_transvihmi_cameroun', 'donnees_journalieres_transvihmi_cameroun',
				  'grands_singes_antilopes_transvihmi_cameroun'];
} else if ((code_equipe === '1') && (nom_pays == 'rdc')) {
	tables_principales = ['chauves_souris_capturees_transvihmi_rdc', 'chauves_souris_non_invasives_transvihmi_rdc',
		  'viande_de_brousse_transvihmi_rdc', 'site_transvihmi_rdc', 
		  'donnees_mission_transvihmi_rdc', 'donnees_journalieres_transvihmi_rdc',
		  'grands_singes_antilopes_transvihmi_rdc'];
} else if ((code_equipe === '1') && (nom_pays == 'rca')) {
	tables_principales = ['chauves_souris_capturees_transvihmi_rdc', 'chauves_souris_non_invasives_transvihmi_rdc',
		  'grands_singes_antilopes_transvihmi_rca'];
} else if ((code_equipe === '1') && (nom_pays == 'rwanda')) {
	tables_principales = ['grands_singes_antilopes_transvihmi_rwanda'];
} else if ((code_equipe === '1') && (nom_pays == 'tous')) {
	tables_principales = ['chauves_souris_capturees_transvihmi_guinee', 'chauves_souris_non_invasives_transvihmi_guinee',
		  'viande_de_brousse_transvihmi_guinee', 'site_transvihmi_guinee', 
		  'donnees_mission_transvihmi_guinee', 'donnees_journalieres_transvihmi_guinee',
		  'chauves_souris_capturees_transvihmi_cameroun', 'chauves_souris_non_invasives_transvihmi_cameroun',
		  'viande_de_brousse_transvihmi_cameroun', 'site_transvihmi_cameroun', 
		  'donnees_mission_transvihmi_cameroun', 'donnees_journalieres_transvihmi_cameroun',
		  'chauves_souris_capturees_transvihmi_rdc', 'chauves_souris_non_invasives_transvihmi_rdc',
		  'viande_de_brousse_transvihmi_rdc', 'site_transvihmi_rdc', 
		  'donnees_mission_transvihmi_rdc', 'donnees_journalieres_transvihmi_rdc',
		  'grands_singes_antilopes_transvihmi_cameroun', 'grands_singes_antilopes_transvihmi_rdc',
		  'grands_singes_antilopes_transvihmi_gabon',
		  'grands_singes_antilopes_transvihmi_rca', 'grands_singes_antilopes_transvihmi_rwanda',
		  'chauves_souris_capturees_astre_transvihmi_guinee', 'chauves_souris_non_invasives_astre_transvihmi_guinee',
		  'caracterisations_grottes_astre_transvihmi_guinee', 'cameras_trap_astre_transvihmi_guinee',
		  'donnees_mission_astre_transvihmi_guinee', 'donnees_journalieres_astre_transvihmi_guinee',
		  'faune_astre_transvihmi_guinee'];
} else if ((code_equipe === '2') && (nom_pays == 'congo')) {
	tables_principales = ['animals_mivegec_congo'];
} else if ((code_equipe === '2') && (nom_pays == 'gabon')) {
	tables_principales = ['animals_mivegec_gabon'];
} else if ((code_equipe === '2') && (nom_pays == 'tous')) {
	tables_principales = ['animals_mivegec_congo', 'animals_mivegec_gabon'];
} else if ((code_equipe === '5') && (nom_pays == 'tous')) {
	tables_principales = ['animals_ipg_guinee'];	
} else if ((code_equipe === '6') && (nom_pays == 'guinee')) {
	tables_principales = ['chauves_souris_capturees_astre_guinee', 'chauves_souris_non_invasives_astre_guinee', 
						  'site_astre_guinee', 'donnees_mission_astre_guinee', 'donnees_journalieres_astre_guinee',
						  'chauves_souris_capturees_astre_transvihmi_guinee', 'chauves_souris_non_invasives_astre_transvihmi_guinee',
						  'caracterisations_grottes_astre_transvihmi_guinee', 'cameras_trap_astre_transvihmi_guinee',
						  'donnees_mission_astre_transvihmi_guinee', 'donnees_journalieres_astre_transvihmi_guinee',
						  'faune_astre_transvihmi_guinee'];
}  else if ((code_equipe === '6') && (nom_pays == 'congo')) {
	tables_principales = ['chauves_souris_capturees_astre_congo', 'chauves_souris_non_invasives_astre_congo', 
		  'site_astre_congo', 'donnees_mission_astre_congo', 'donnees_journalieres_astre_congo'];
}  else if ((code_equipe === '6') && (nom_pays == 'gabon')) {
	tables_principales = ['chauves_souris_capturees_astre_gabon', 'chauves_souris_non_invasives_astre_gabon', 
		  'site_astre_gabon', 'donnees_mission_astre_gabon', 'donnees_journalieres_astre_gabon'];
} else if ((code_equipe === '6') && (nom_pays == 'tous')) {
	tables_principales = ['chauves_souris_capturees_astre_guinee', 'chauves_souris_non_invasives_astre_guinee', 
		  'site_astre_guinee', 'donnees_mission_astre_guinee', 'donnees_journalieres_astre_guinee',
		  'chauves_souris_capturees_astre_congo', 'chauves_souris_non_invasives_astre_congo', 
		  'site_astre_congo', 'donnees_mission_astre_congo', 'donnees_journalieres_astre_congo',
		  'chauves_souris_capturees_astre_gabon', 'chauves_souris_non_invasives_astre_gabon', 
		  'site_astre_gabon', 'donnees_mission_astre_gabon', 'donnees_journalieres_astre_gabon',
		  'chauves_souris_capturees_astre_transvihmi_guinee', 'chauves_souris_non_invasives_astre_transvihmi_guinee',
		  'caracterisations_grottes_astre_transvihmi_guinee', 'cameras_trap_astre_transvihmi_guinee',
		  'donnees_mission_astre_transvihmi_guinee', 'donnees_journalieres_astre_transvihmi_guinee',
		  'faune_astre_transvihmi_guinee'];
}*/

var tabCount = new Array();

if  (debug !== '') {
	var tables_references = 
		['bcoming_username', 'username', 'bcoming_version', 'bcoming_cerfig_rongeurs_captures_couleur_pelage_dorsal_debug',  'bcoming_cerfig_rongeurs_captures_couleur_pelage_ventral_debug',
		 'bcoming_cerfig_rongeurs_captures_espece_debug', 'bcoming_cerfig_chauves_souris_capturees_couleur_pelage_dorsal_debug',  'bcoming_cerfig_chauves_souris_capturees_couleur_pelage_ventral_debug',
		 'bcoming_cerfig_chauves_souris_capturees_espece_debug'

		 ];
	
	
} else {
	var tables_references = 
		['bcoming_username', 'username', 'bcoming_version', 'bcoming_cerfig_rongeurs_captures_couleur_pelage_dorsal',  'bcoming_cerfig_rongeurs_captures_couleur_pelage_ventral',
		 'bcoming_cerfig_rongeurs_captures_espece', 'bcoming_cerfig_chauves_souris_capturees_couleur_pelage_dorsal',  'bcoming_cerfig_chauves_souris_capturees_couleur_pelage_ventral',
		 'bcoming_cerfig_chauves_souris_capturees_espece'

		 ];
}

/*else if ((code_equipe === '1') && (nom_pays == 'guinee')) {
	var tables_references = 
		['espece_transvihmi_guinee', 'pays_transvihmi_guinee', 'lieu_capture_transvihmi_guinee', 'lieu_collecte_transvihmi_guinee', 'methode_capture_transvihmi_guinee', 
		 'couleur_pelage_dorsal_transvihmi_guinee', 'couleur_pelage_dorsal_transvihmi_guinee',  	
		 'preleve_chez_transvihmi_guinee', 'methode_chasse_transvihmi_guinee', 'destination_transvihmi_guinee', 'type_animal_transvihmi_guinee', 'etat_carcasse_animal_transvihmi_guinee',
		 'qualite_echantillon_transvihmi_guinee', 'endroit_prelevement_transvihmi_guinee', 'espece_animal_transvihmi_guinee', 'phenologie_transvihmi_guinee', 'activite_humaine_transvihmi_guinee'];
} else if ((code_equipe === '1') && (nom_pays == 'cameroun')) {
	var tables_references = 
		['espece_transvihmi_cameroun', 'pays_transvihmi_cameroun', 'lieu_capture_transvihmi_cameroun', 'lieu_collecte_transvihmi_cameroun', 'methode_capture_transvihmi_cameroun', 
		 'couleur_pelage_dorsal_transvihmi_cameroun', 'couleur_pelage_ventral_transvihmi_cameroun',  	
		 'preleve_chez_transvihmi_cameroun', 'methode_chasse_transvihmi_cameroun', 'destination_transvihmi_cameroun', 'type_animal_transvihmi_cameroun', 'etat_carcasse_animal_transvihmi_cameroun',
		 'qualite_echantillon_transvihmi_cameroun', 'endroit_prelevement_transvihmi_cameroun', 'espece_animal_transvihmi_cameroun', 'phenologie_transvihmi_cameroun', 'activite_humaine_transvihmi_cameroun'];
} else if ((code_equipe === '1') && (nom_pays == 'rdc')) {
	var tables_references = 
		['espece_transvihmi_rdc', 'pays_transvihmi_rdc', 'lieu_capture_transvihmi_rdc', 'lieu_collecte_transvihmi_rdc', 'methode_capture_transvihmi_rdc', 
		 'couleur_pelage_dorsal_transvihmi_rdc', 'couleur_pelage_ventral_transvihmi_rdc',  	
		 'preleve_chez_transvihmi_rdc', 'methode_chasse_transvihmi_rdc', 'destination_transvihmi_rdc', 'type_animal_transvihmi_rdc', 'etat_carcasse_animal_transvihmi_rdc',
		 'qualite_echantillon_transvihmi_rdc', 'endroit_prelevement_transvihmi_rdc', 'espece_animal_transvihmi_rdc', 'phenologie_transvihmi_rdc', 'activite_humaine_transvihmi_rdc'];
} else if ((code_equipe === '1') && (nom_pays == 'tous')) {
	var tables_references = 
		['espece_transvihmi_guinee', 'pays_transvihmi_guinee', 'lieu_capture_transvihmi_guinee', 'lieu_collecte_transvihmi_guinee', 'methode_capture_transvihmi_guinee', 
		 'couleur_pelage_dorsal_transvihmi_guinee', 'couleur_pelage_dorsal_transvihmi_guinee',  	
		 'preleve_chez_transvihmi_guinee', 'methode_chasse_transvihmi_guinee', 'destination_transvihmi_guinee', 'type_animal_transvihmi_guinee', 'etat_carcasse_animal_transvihmi_guinee',
		 'qualite_echantillon_transvihmi_guinee', 'endroit_prelevement_transvihmi_guinee', 'espece_animal_transvihmi_guinee', 'phenologie_transvihmi_guinee', 'activite_humaine_transvihmi_guinee',
		 'espece_transvihmi_cameroun', 'pays_transvihmi_cameroun', 'lieu_capture_transvihmi_cameroun', 'lieu_collecte_transvihmi_cameroun', 'methode_capture_transvihmi_cameroun', 
		 'couleur_pelage_dorsal_transvihmi_cameroun', 'couleur_pelage_ventral_transvihmi_cameroun',  	
		 'preleve_chez_transvihmi_cameroun', 'methode_chasse_transvihmi_cameroun', 'destination_transvihmi_cameroun', 'type_animal_transvihmi_cameroun', 'etat_carcasse_animal_transvihmi_cameroun',
		 'qualite_echantillon_transvihmi_cameroun', 'endroit_prelevement_transvihmi_cameroun', 'espece_animal_transvihmi_cameroun', 'phenologie_transvihmi_cameroun', 'activite_humaine_transvihmi_cameroun',
		 'espece_transvihmi_rdc', 'pays_transvihmi_rdc', 'lieu_capture_transvihmi_rdc', 'lieu_collecte_transvihmi_rdc', 'methode_capture_transvihmi_rdc', 
		 'couleur_pelage_dorsal_transvihmi_rdc', 'couleur_pelage_ventral_transvihmi_rdc',  	
		 'preleve_chez_transvihmi_rdc', 'methode_chasse_transvihmi_rdc', 'destination_transvihmi_rdc', 'type_animal_transvihmi_rdc', 'etat_carcasse_animal_transvihmi_rdc',
		 'qualite_echantillon_transvihmi_rdc', 'endroit_prelevement_transvihmi_rdc', 'espece_animal_transvihmi_rdc', 'phenologie_transvihmi_rdc', 'activite_humaine_transvihmi_rdc'];
} else if ((code_equipe === '2') && (nom_pays == 'congo')) {
	var tables_references = [];
} else if ((code_equipe === '2') && (nom_pays == 'gabon')) {
	var tables_references = [];
} else if ((code_equipe === '2') && (nom_pays == 'tous')) {
	var tables_references = [];
} else if ((code_equipe === '5') && (nom_pays == 'tous')) {
	var tables_references = [];
} else if ((code_equipe === '6') && (nom_pays == 'guinee')) {
	var tables_references = 
		['espece_astre_guinee', 'pays_astre_guinee', 'lieu_capture_astre_guinee', 'lieu_collecte_astre_guinee', 'methode_capture_astre_guinee', 'phenologie_astre_guinee', 'activite_humaine_astre_guinee',
		 'couleur_pelage_dorsal_astre_guinee', 'couleur_pelage_ventral_astre_guinee',
		 'pays_astre_transvihmi_guinee', 'espece_astre_transvihmi_guinee', 'activite_humaine_astre_transvihmi_guinee',
		 'couleur_pelage_dorsal_astre_transvihmi_guinee', 'couleur_pelage_ventral_astre_transvihmi_guinee'];
} else if ((code_equipe === '6') && (nom_pays == 'congo')) {
	var tables_references = 
		['espece_astre_congo', 'pays_astre_congo', 'lieu_capture_astre_congo', 'lieu_collecte_astre_congo', 'methode_capture_astre_congo', 'phenologie_astre_congo', 'activite_humaine_astre_congo',
		 'couleur_pelage_dorsal_astre_congo', 'couleur_pelage_ventral_astre_congo'];
} else if ((code_equipe === '6') && (nom_pays == 'gabon')) {
	var tables_references = 
		['espece_astre_gabon', 'pays_astre_gabon', 'lieu_capture_astre_gabon', 'lieu_collecte_astre_gabon', 'methode_capture_astre_gabon', 'phenologie_astre_gabon', 'activite_humaine_astre_gabon',
		 'couleur_pelage_dorsal_astre_gabon', 'couleur_pelage_ventral_astre_gabon'];
} else if ((code_equipe === '6') && (nom_pays == 'tous')) {
	var tables_references = 
		['espece_astre_guinee', 'pays_astre_guinee', 'lieu_capture_astre_guinee', 'lieu_collecte_astre_guinee', 'methode_capture_astre_guinee', 'phenologie_astre_guinee', 'activite_humaine_astre_guinee',
		 'couleur_pelage_dorsal_astre_guinee', 'couleur_pelage_ventral_astre_guinee',
   		 'espece_astre_congo', 'pays_astre_congo', 'lieu_capture_astre_congo', 'lieu_collecte_astre_congo', 'methode_capture_astre_congo', 'phenologie_astre_congo', 'activite_humaine_astre_congo',
   		 'couleur_pelage_dorsal_astre_congo', 'couleur_pelage_ventral_astre_congo',
		 'espece_astre_gabon', 'pays_astre_gabon', 'lieu_capture_astre_gabon', 'lieu_collecte_astre_gabon', 'methode_capture_astre_gabon', 'phenologie_astre_gabon', 'activite_humaine_astre_gabon',
		 'couleur_pelage_dorsal_astre_gabon', 'couleur_pelage_ventral_astre_gabon',
		 'pays_astre_transvihmi_guinee', 'espece_astre_transvihmi_guinee', 'activite_humaine_astre_transvihmi_guinee',
		 'couleur_pelage_dorsal_astre_transvihmi_guinee', 'couleur_pelage_ventral_astre_transvihmi_guinee'];
}*/

step = 100 / (tables_principales.length + tables_references.length);

var tables_principales_count = tables_principales.length;
//load_tables_count(tables_principales_count);

load_tables_count(tables_principales_infos.length);

function load_tables_count(i) {
	if (i > 0) {
		var localDB = new PouchDB(tables_principales_infos[i-1] + debug);
		var remoteDB = new PouchDB(remote_couchdb + tables_principales_infos[i-1] + debug, {skip_setup: true});
		remoteDB.info().then((infos) => {
			var table_principale_count = tables_principales_infos[i-1] + '_count';
			localStorage[table_principale_count] = infos.doc_count;
			//alert(table_principales[i-1] + ' ' + localStorage[table_principale_count])
				if (infos.doc_count > 20) {
					//alert(infos.doc_count);
					tabCount[i-1] = infos.doc_count;
				} else {
					tabCount[i-1] = 20;
				};
				return load_tables_count(i-1)
		}).catch((error) => {
			console.error(error + ' : ' + tables_principales_infos[i-1]);
			localDB.info().then((infos) => {
				var table_principale_count = tables_principales_infos[i-1] + '_count';
				localStorage[table_principale_count] = infos.doc_count;
				if (infos.doc_count > 20) {
					tabCount[i-1] = infos.doc_count;
				} else {
					tabCount[i-1] = 20;
				};
				return load_tables_count(i-1)
			}).catch((error) => {
				console.error(error);
			});
		});
	} else {
		tabCount[i-1] = 20;
		loadCount_total();
	};
}

function loadCount_total() {
    
	//on arrondit chaque les progress_count au multiple de 20 supérieur
	var non_multiple_de_20_count = 0;
	//var reste = 0;
	var total_progress_count = 0;
	
	//alert('tabCount : ' + tabCount.length)
	//alert(tabCount.lentgh)
	
	for (var i=0;i<tabCount.length;i++) {
		//alert(tabCount[i] - tabCount[i] % 20);
		total_progress_count = total_progress_count + (tabCount[i] - tabCount[i] % 20);
		localStorage['doc_' + tables_principales_infos[i] + '_progress_count'] = tabCount[i] - tabCount[i] % 20;	
	};	
	total_progress_count = total_progress_count + 17 * 20;
	
	progressbar_count = Math.round(total_progress_count / 20);
	//step = 100 / progressbar_count; 
	localStorage['step'] = step;
	localStorage['non_multiple_de_20_count'] = non_multiple_de_20_count;
	
	var tables_references_count = tables_references.length;
	
	//if (debug !== '') {
		//load_tables_references_debug(tables_references_count);
	//} else {
		load_tables_references(tables_references_count);
	//}
		
		
	
};



function load_tables_references(i) {

	if (i > 0) {
				
		var localDB = new PouchDB(tables_references[i-1] + debug);
		var remoteDB = new PouchDB(remote_couchdb + tables_references[i-1] + debug, {skip_setup: true});
		console.log('---' + tables_references[i-1] + '---');
		localDB.sync(remoteDB).on('complete', (info) => { 
			move();
			return load_tables_references(i-1);
		}).on('error', function (err) {
			// error while replicating
			alert('alert ' + tables_references[i-1] + ' ' + JSON.stringify(err));
			window.location = 'login.html';
		});
		
	} else {
		//loadjs('js/load-alldbs-online.js');
		load_tables_principales(tables_principales_count);
	}
};

function load_tables_references_debug(i) {
	
	if (i > 0) {
				
		var localDB = new PouchDB(tables_references[i-1] + debug);
		var remoteDB = new PouchDB(remote_couchdb + tables_references[i-1] + debug, {skip_setup: true});
		console.log('---' + tables_references[i-1] + '---');
		localDB.sync(remoteDB).on('complete', (info) => {  
			move();
			return load_tables_references_debug(i-1);
		}).on('error', function (err) {
			// error while replicating
			alert('alert ' + tables_references[i-1] + ' ' + JSON.stringify(err));
			window.location = 'login.html';
		});
		
		
	} else {
		//loadjs('js/load-alldbs-online.js');
		
		load_tables_principales(tables_principales_count);
	}
}

function load_tables_principales(i) {
	if (i > 0) {

		var count = 0, count_total = 0;
		localStorage['doc_' + tables_principales[i-1] + '_progress_count'] = 0;
		var localDB = new PouchDB(tables_principales[i-1] + debug);
		var remoteDB = new PouchDB(remote_couchdb + tables_principales[i-1] + debug, {skip_setup: true});
		console.log('---' + tables_principales[i-1] + '---');
	
		localDB.sync(remoteDB, {batch_size: 1000}).on('complete', (info) => {
			count_total = localStorage.getItem('doc_' + tables_principales[i-1] + '_progress_count') / 20;
			//for (var j=0; j<count_total; j++) {
				move();
			//};
			return load_tables_principales(i-1);
		}).on('change', (change) => {
			count++;  //to count how many data is sync
			console.log('Data sync ' + tables_principales[i-1], count);	
			console.log('change', change);
		}).on('error', function (err) {
			//window.location = 'login.html';
		});
	} else {
		loadjs('js/db_loaded.js');
	};
}

function move() {
    var elem = document.getElementById("myBar");    
    width = width + step;
    //alert(width)
    //alert("width : " + width + " - step :" + step);
    console.log("width : " + width);
    elem.style.width = width + '%';
    console.log("elem.style.width : " + elem.style.width + '%');
};

function show_progress_bar() {		
	var elem = document.getElementById("child");
	elem.style.display="block";
};


