

var fields = 
    			['Num_rongeur', 'CODE_rongeur', 'NumMission_NumSite', 'N_site', 'Date', 'J', 'Equipe', 'Pays', 'Region', 'Arrondissement', 'Village', 
					'Num_piege', 'Type_piege', 'Site_capture', 'Emplacement_piege', 'Detail_emplacement', 'Lat_degre_dec_Piege', 'Latitude_piege', 
					'Long_degre_dec_Piege', 'Longitude_piege', 'Contention', 'Preleveur', 'Autopsie', 'Identification_espece', 'Famille_terrain', '' +
					'Genre_terrain', 'Espece_terrain', 'Famille_labo', 'Genre_labo', 'Espece_labo', 'Sexe', 'Age', 'F_gestante', 'F_lactante', 'Nbtotal_paires_mamelles',
					'N_mamelles_pectorales', 'N_mamelles_abdominales', 'N_mamelles_inguinales', 'Male_testicules_descendues', 'Male_longueur_testicules', 
					'Poids_sac_rongeur_g', 'Poids_sac_g', 'Poids_g', 'L_totale_corps_Ltc_mm', 'L_queue_mm', 'L_patte_arriere_Tib_mm', 'L_crane_mm', 
					'L_oreille_mm', 'Taille_yeux', 'Couleur_pelage_dorsal', 'Couleur_pelage_ventral', 'Photo', 'Remarques_anomalies', 'Relache_vivant', 
					'Cause_deces', 'Recapture', 'Comment_recapture', 'Euthanasie', 'Methode_eutha', 'Dosage_Ketamine_mL', 'Biopsie_oreille_BO', 'Ecouv_Salive_RNAl_SA',
					'Ecouv_Urogenital_RNAl_URO', 'Urine_RNAl_UR', 'Ecouv_rectal_RNAl_RE', 'Feces_RNAl_FE', 'Sang_DBS_nb_cercles', 'Ectoparasites_Tiques_Eth_EP_TI',
					'Ectoparasites_Puces_Eth_EP_PU', 'Poils_ethanol_PO', 'Autres_echantillons', 'Autres_echantillons_details', 'Coeur_RNAl_CO',
					'Poumon_RNAl_PO', 'Foie_RNAl_FO', 'Rate_RNAl_RA', 'Rein_RNAl_RN', 'Testicule_RNAl_TE', 'Ovaire_RNAl_OV', 'Embryon_RNAl_EM',
					'F_gestante_nb_embryons', 'Intestins_RNAl_INT', 'Peau_RNAl_PE', 'Cerveau_RNAl_CE', 'Autre_Organe_RNAl', 'Details_autre_organe_RNAl',
					'Remarques_echantillons', 'Username']


var fields_CSV_head =   'Num_rongeur;CODE_rongeur;NumMission_NumSite;N_site;Date;J;Equipe;Pays;Region;Arrondissement;Village;' +
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
						'Remarques_echantillons;Username;\r\n';


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
	var DBcremer_rongeurs_captures_cameroon = new PouchDB(remote_couchdb + 'bcoming_cremer_rongeurs_captures_cameroon' + debug);
} else {
	var DBcremer_rongeurs_captures_cameroon = new PouchDB('bcoming_cremer_rongeurs_captures_cameroon' + debug);
};

var tab_cremer_rongeurs_captures_cameroon = new Array();
var tab = new Array();


DBcremer_rongeurs_captures_cameroon.allDocs({  		
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
   				
   				obj.Num_rongeur = row.doc.Num_rongeur; 
   				obj.CODE_rongeur = row.doc.CODE_rongeur; 
   				obj.NumMission_NumSite = row.doc.NumMission_NumSite; 
   				obj.N_site = row.doc.N_site; 
   				obj.Date = row.doc.Date;
   				obj.J = row.doc.J; 
   				obj.Equipe = row.doc.Equipe; 
   				obj.Pays = row.doc.Pays; 
   				obj.Region = row.doc.Region; 
   				obj.Arrondissement = row.doc.Arrondissement; 
   				obj.Village = row.doc.Village;
				obj.Num_piege = row.doc.Num_piege; 
				obj.Type_piege = row.doc.Type_piege; 
				obj.Site_capture = row.doc.Site_capture; 
				obj.Emplacement_piege = row.doc.Emplacement_piege; 
				obj.Detail_emplacement = row.doc.Detail_emplacement; 
				obj.Lat_degre_dec_Piege = row.doc.Lat_degre_dec_Piege; 
				obj.Latitude_piege = row.doc.Latitude_piege;
				obj.Long_degre_dec_Piege = row.doc.Long_degre_dec_Piege; 
				obj.Longitude_piege = row.doc.Longitude_piege;
				obj.Contention = row.doc.Contention; 
				obj.Preleveur = row.doc.Preleveur;
				obj.Autopsie = row.doc.Autopsie;
				obj.Identification_espece = row.doc.Identification_espece; 
				obj.Famille_terrain = row.doc.Famille_terrain;
				obj.Genre_terrain = row.doc.Genre_terrain;
				obj.Espece_terrain = row.doc.Espece_terrain;
				obj.Famille_labo = row.doc.Famille_labo;
				obj.Genre_labo = row.doc.Genre_labo;
				obj.Espece_labo = row.doc.Espece_labo;
				obj.Sexe = row.doc.Sexe;
				obj.Age = row.doc.Age; 
				obj.F_gestante = row.doc.F_gestante; 
				obj.F_lactante = row.doc.F_lactante;
				obj.Nbtotal_paires_mamelles = row.doc.Nbtotal_paires_mamelles;
				obj.N_mamelles_pectorales = row.doc.N_mamelles_pectorales;
				obj.N_mamelles_abdominales = row.doc.N_mamelles_abdominales;
				obj.N_mamelles_inguinales = row.doc.N_mamelles_inguinales;
				obj.Male_testicules_descendues = row.doc.Male_testicules_descendues;
				obj.Male_longueur_testicules = row.doc.Male_longueur_testicules;
				obj.Poids_sac_rongeur_g = row.doc.Poids_sac_rongeur_g;
				obj.Poids_sac_g = row.doc.Poids_sac_g;
				obj.Poids_g = row.doc.Poids_g;
				obj.L_totale_corps_Ltc_mm = row.doc.L_totale_corps_Ltc_mm;
				obj.L_queue_mm = row.doc.L_queue_mm;
				obj.L_patte_arriere_Tib_mm = row.doc.L_patte_arriere_Tib_mm; 
				obj.L_crane_mm = row.doc.L_crane_mm;
				obj.L_oreille_mm = row.doc.L_oreille_mm;
				obj.Taille_yeux = row.doc.Taille_yeux;
				obj.Couleur_pelage_dorsal = row.doc.Couleur_pelage_dorsal;
				obj.Couleur_pelage_ventral = row.doc.Couleur_pelage_ventral;
				obj.Photo = row.doc.Photo;
				obj.Remarques_anomalies = row.doc.Remarques_anomalies;
				obj.Relache_vivant = row.doc.Relache_vivant;
				obj.Cause_deces = row.doc.Cause_deces;
				obj.Recapture = row.doc.Recapture;
				obj.Comment_recapture = row.doc.Comment_recapture;
				obj.Euthanasie = row.doc.Euthanasie;
				obj.Methode_eutha = row.doc.Methode_eutha;
				obj.Dosage_Ketamine_mL = row.doc.Dosage_Ketamine_mL;
				obj.Biopsie_oreille_BO = row.doc.Biopsie_oreille_BO;
				obj.Ecouv_Salive_RNAl_SA = row.doc.Ecouv_Salive_RNAl_SA;
				obj.Ecouv_Urogenital_RNAl_URO = row.doc.Ecouv_Urogenital_RNAl_URO;
				obj.Urine_RNAl_UR = row.doc.Urine_RNAl_UR;
				obj.Ecouv_rectal_RNAl_RE = row.doc.Ecouv_rectal_RNAl_RE;
				obj.Feces_RNAl_FE = row.doc.Feces_RNAl_FE;
				obj.Sang_DBS_nb_cercles = row.doc.Sang_DBS_nb_cercles;
				obj.Ectoparasites_Tiques_Eth_EP_TI = row.doc.Ectoparasites_Tiques_Eth_EP_TI;
				obj.Ectoparasites_Puces_Eth_EP_PU = row.doc.Ectoparasites_Puces_Eth_EP_PU;
				obj.Poils_ethanol_PO = row.doc.Poils_ethanol_PO;
				obj.Autres_echantillons = row.doc.Autres_echantillons;
				obj.Autres_echantillons_details = row.doc.Autres_echantillons_details;
				obj.Coeur_RNAl_CO = row.doc.Coeur_RNAl_CO;
				obj.Poumon_RNAl_PO = row.doc.Poumon_RNAl_PO;
				obj.Foie_RNAl_FO = row.doc.Foie_RNAl_FO;
				obj.Rate_RNAl_RA = row.doc.Rate_RNAl_RA;
				obj.Rein_RNAl_RN = row.doc.Rein_RNAl_RN;
				obj.Testicule_RNAl_TE = row.doc.Testicule_RNAl_TE;
				obj.Ovaire_RNAl_OV = row.doc.Ovaire_RNAl_OV;
				obj.Embryon_RNAl_EM = row.doc.Embryon_RNAl_EM;
				obj.F_gestante_nb_embryons = row.doc.F_gestante_nb_embryons;
				obj.Intestins_RNAl_INT = row.doc.Intestins_RNAl_INT;
				obj.Peau_RNAl_PE = row.doc.Peau_RNAl_PE;
				obj.Cerveau_RNAl_CE = row.doc.Cerveau_RNAl_CE;
				obj.Autre_Organe_RNAl = row.doc.Autre_Organe_RNAl;
				obj.Details_autre_organe_RNAl = row.doc.Details_autre_organe_RNAl;
				obj.Remarques_echantillons = row.doc.Remarques_echantillons;
				
			  	

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

   				tab_cremer_rongeurs_captures_cameroon.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBcremer_rongeurs_captures_cameroon.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addBcomingCremerRongeursCapturesCameroonRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			
			CSV_data = CSV_data +
				
				row.Num_rongeur + ';' +
   				row.CODE_rongeur + ';' +
   				row.NumMission_NumSite + ';' +
   				row.N_site + ';' +
   				row.Date + ';' +
   				row.J + ';' +
   				row.Equipe + ';' +
   				row.Pays + ';' +
   				row.Region + ';' +
   				row.Arrondissement + ';' +
   				row.Village + ';' +
				row.Num_piege + ';' +
				row.Type_piege + ';' +
				row.Site_capture + ';' +
				row.Emplacement_piege + ';' +
				row.Detail_emplacement + ';' +
				row.Lat_degre_dec_Piege + ';' +
				row.Latitude_piege + ';' +
				row.Long_degre_dec_Piege + ';' + 
				row.Longitude_piege + ';' +
				row.Contention + ';' +
				row.Preleveur + ';' +
				row.Autopsie + ';' +
				row.Identification_espece + ';' +
				row.Famille_terrain + ';' +
				row.Genre_terrain + ';' +
				row.Espece_terrain + ';' +
				row.Famille_labo + ';' +
				row.Genre_labo + ';' +
				row.Espece_labo + ';' +
				row.Sexe + ';' +
				row.Age + ';' +
				row.F_gestante + ';' +
				row.F_lactante + ';' +
				row.Nbtotal_paires_mamelles + ';' +
				row.N_mamelles_pectorales + ';' +
				row.N_mamelles_abdominales + ';' +
				row.N_mamelles_inguinales + ';' +
				row.Male_testicules_descendues + ';' +
				row.Male_longueur_testicules + ';' +
				row.Poids_sac_rongeur_g + ';' +
				row.Poids_sac_g + ';' +
				row.Poids_g + ';' +
				row.L_totale_corps_Ltc_mm + ';' +
				row.L_queue_mm + ';' +
				row.L_patte_arriere_Tib_mm + ';' +
				row.L_crane_mm + ';' +
				row.L_oreille_mm + ';' +
				row.Taille_yeux + ';' +
				row.Couleur_pelage_dorsal + ';' +
				row.Couleur_pelage_ventral + ';' +
				row.Photo + ';' +
				row.Remarques_anomalies + ';' +
				row.Relache_vivant + ';' +
				row.Cause_deces + ';' +
				row.Recapture + ';' +
				row.Comment_recapture + ';' +
				row.Euthanasie + ';' +
				row.Methode_eutha + ';' +
				row.Dosage_Ketamine_mL + ';' +
				row.Biopsie_oreille_BO + ';' +
				row.Ecouv_Salive_RNAl_SA + ';' +
				row.Ecouv_Urogenital_RNAl_URO + ';' +
				row.Urine_RNAl_UR + ';' +
				row.Ecouv_rectal_RNAl_RE + ';' +
				row.Feces_RNAl_FE + ';' +
				row.Sang_DBS_nb_cercles + ';' +
				row.Ectoparasites_Tiques_Eth_EP_TI + ';' +
				row.Ectoparasites_Puces_Eth_EP_PU + ';' +
				row.Poils_ethanol_PO + ';' +
				row.Autres_echantillons + ';' +
				row.Autres_echantillons_details + ';' +
				row.Coeur_RNAl_CO + ';' +
				row.Poumon_RNAl_PO + ';' +
				row.Foie_RNAl_FO + ';' +
				row.Rate_RNAl_RA + ';' +
				row.Rein_RNAl_RN + ';' +
				row.Testicule_RNAl_TE + ';' +
				row.Ovaire_RNAl_OV + ';' +
				row.Embryon_RNAl_EM + ';' +
				row.F_gestante_nb_embryons + ';' +
				row.Intestins_RNAl_INT + ';' +
				row.Peau_RNAl_PE + ';' +
				row.Cerveau_RNAl_CE + ';' +
				row.Autre_Organe_RNAl + ';' +
				row.Details_autre_organe_RNAl + ';' +
				row.Remarques_echantillons + ';' +
		  	 
				row.Username + ';\r\n'
				
		
			} else {	
				 
add_selection_field(row)
				
				
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
	       		saveAs(blob, "bcoming_cremer_rongeurs_captures_cameroon" + clock.now + ".csv");
	       		document.location.href="import_export.html?table=_bcoming_cremer&type=bcoming_cremer";
			}	
			
	} 
			
	
}

function add_selection_field(row) {
	for (var i=0; i < fields.length; i++) {
		if (array_selected_fields.indexOf(fields[i]) > -1) {
			if (add_heading == true) {
				CSV_heading = CSV_heading + fields[i] + ';';
			}
			CSV_data = CSV_data + row[fields[i]] + ";"
		};
	}
}



window.onload = function() {
	$('#export_all_fields').click(function(){
		CSV_data = fields_CSV_head;
		
		
		var res = alasql("SELECT Num_rongeur, CODE_rongeur, NumMission_NumSite, N_site, Date, J, Equipe, Pays, Region, Arrondissement, Village, Num_piege, Type_piege, Site_capture, Emplacement_piege, Detail_emplacement, Lat_degre_dec_Piege, Latitude_piege, Long_degre_dec_Piege, Longitude_piege, Contention, Preleveur, Autopsie, Identification_espece, Famille_terrain, Genre_terrain, Espece_terrain, Famille_labo, Genre_labo, Espece_labo, Sexe, Age, F_gestante, F_lactante, Nbtotal_paires_mamelles, N_mamelles_pectorales, N_mamelles_abdominales, N_mamelles_inguinales, Male_testicules_descendues, Male_longueur_testicules, Poids_sac_rongeur_g, Poids_sac_g, Poids_g, L_totale_corps_Ltc_mm, L_queue_mm, L_patte_arriere_Tib_mm, L_crane_mm, L_oreille_mm, Taille_yeux, Couleur_pelage_dorsal, Couleur_pelage_ventral, Photo, Remarques_anomalies, Relache_vivant, Cause_deces, Recapture, Comment_recapture, Euthanasie, Methode_eutha, Dosage_Ketamine_mL, Biopsie_oreille_BO, Ecouv_Salive_RNAl_SA, Ecouv_Urogenital_RNAl_URO, Urine_RNAl_UR, Ecouv_rectal_RNAl_RE, Feces_RNAl_FE, Sang_DBS_nb_cercles, Ectoparasites_Tiques_Eth_EP_TI, Ectoparasites_Puces_Eth_EP_PU, Poils_ethanol_PO, Autres_echantillons, Autres_echantillons_details, Coeur_RNAl_CO, Poumon_RNAl_PO, Foie_RNAl_FO, Rate_RNAl_RA, Rein_RNAl_RN, Testicule_RNAl_TE, Ovaire_RNAl_OV, Embryon_RNAl_EM, F_gestante_nb_embryons, Intestins_RNAl_INT, Peau_RNAl_PE, Cerveau_RNAl_CE, Autre_Organe_RNAl, Details_autre_organe_RNAl, Remarques_echantillons, Username FROM ? ORDER BY Date", [tab_cremer_rongeurs_captures_cameroon] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addBcomingCremerRongeursCapturesCameroonRecord(row, false);
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
		
		var res = alasql("SELECT Num_rongeur, CODE_rongeur, NumMission_NumSite, N_site, Date, J, Equipe, Pays, Region, Arrondissement, Village, Num_piege, Type_piege, Site_capture, Emplacement_piege, Detail_emplacement, Lat_degre_dec_Piege, Latitude_piege, Long_degre_dec_Piege, Longitude_piege, Contention, Preleveur, Autopsie, Identification_espece, Famille_terrain, Genre_terrain, Espece_terrain, Famille_labo, Genre_labo, Espece_labo, Sexe, Age, F_gestante, F_lactante, Nbtotal_paires_mamelles, N_mamelles_pectorales, N_mamelles_abdominales, N_mamelles_inguinales, Male_testicules_descendues, Male_longueur_testicules, Poids_sac_rongeur_g, Poids_sac_g, Poids_g, L_totale_corps_Ltc_mm, L_queue_mm, L_patte_arriere_Tib_mm, L_crane_mm, L_oreille_mm, Taille_yeux, Couleur_pelage_dorsal, Couleur_pelage_ventral, Photo, Remarques_anomalies, Relache_vivant, Cause_deces, Recapture, Comment_recapture, Euthanasie, Methode_eutha, Dosage_Ketamine_mL, Biopsie_oreille_BO, Ecouv_Salive_RNAl_SA, Ecouv_Urogenital_RNAl_URO, Urine_RNAl_UR, Ecouv_rectal_RNAl_RE, Feces_RNAl_FE, Sang_DBS_nb_cercles, Ectoparasites_Tiques_Eth_EP_TI, Ectoparasites_Puces_Eth_EP_PU, Poils_ethanol_PO, Autres_echantillons, Autres_echantillons_details, Coeur_RNAl_CO, Poumon_RNAl_PO, Foie_RNAl_FO, Rate_RNAl_RA, Rein_RNAl_RN, Testicule_RNAl_TE, Ovaire_RNAl_OV, Embryon_RNAl_EM, F_gestante_nb_embryons, Intestins_RNAl_INT, Peau_RNAl_PE, Cerveau_RNAl_CE, Autre_Organe_RNAl, Details_autre_organe_RNAl, Remarques_echantillons, Username FROM ? ORDER BY Date", [tab_cremer_rongeurs_captures_cameroon] );
	     			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addBcomingCremerRongeursCapturesCameroonRecord(row, true);
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



	
