var fields = 
	
	['N_identification', 'N_identification_mere', 'Date', 'Equipe', 'Site_region', 'Site_precis_de_capture', 'Lat_degre_dec', 'Latitude', 'Long_degre_dec', 
		'Longitude', 'Dans', 'Dans_autre', 'Lieu_de_capture', 'Proximite_du_village_ville', 'Methode_de_capture', 'Espece_identifiee', 
		'Type_de_chauve_souris', 'Famille', 'Genre', 'Espece', 'Taille_yeux', 'Couleur_pelage_dorsal', 'Couleur_pelage_ventral', 'Sexe', 'Age', 
		'Gestante', 'Lactante', 'Suitee', 'Sexe_jeune', 'Poids_jeune', 'N_ident_jeune', 'Remarques', 'Mesureur', 'Poids_g', 'L_totale_corps_mm', 'L_avant_bras_mm', 
		'L_queue_mm', 'L_metacarpe_3ieme_doigt_mm', 'Photo', 'Relachee_vivante', 'Mort_naturelle_carcasse_trouvee', 
		'Mort_due_a_la_capture_manip_euthanasie', 'Si_relae_marquage', 'Si_marquee_numero', 'Sang_papier_buvard', 'Ecouv_gorge_RNAl', 
		'Wing_punch_ethanol', 'Feces_RNAl', 'Urine_RNAl', 'Feces_et_urine_RNAl', 'Ecouv_rectal_RNAl', 'Ectoparasites_ethanol', 
		'Autres_echantillons_ou_remarques', 'Coeur_CO', 'Poumons_PO', 'Foie_FO', 'Rate_RA', 'Reins_RN', 'Intestins_INT', 'Testicule_TE', 'Ovaires_OV', 
		'Embryons_EM', 'Nombre_d_embryons', 'Organes_RNAl_autre', 'Username'] 
    			 



var fields_CSV_head =   'N_identification;N_identification_mere;Date;Equipe;Site_region;Site_precis_de_capture;Lat_degre_dec;Latitude;Long_degre_dec;' +
						'Longitude;Dans;Dans_autre;Lieu_de_capture;Proximite_du_village_ville;Methode_de_capture;Espece_identifiee;' +
						'Type_de_chauve_souris;Famille;Genre;Espece;Taille_yeux;Couleur_pelage_dorsal;Couleur_pelage_ventral;Sexe;Age;' +
						'Gestante;Lactante;Suitee;Sexe_jeune;Poids_jeune;N_ident_jeune;Remarques;Mesureur;Poids_g;L_totale_corps_mm;L_avant_bras_mm;' +
						'L_queue_mm;L_metacarpe_3ieme_doigt_mm;Photo;Relachee_vivante;Mort_naturelle_carcasse_trouvee;' +
						'Mort_due_a_la_capture_manip_euthanasie;Si_relae_marquage;Si_marquee_numero;Sang_papier_buvard;Ecouv_gorge_RNAl;' +
						'Wing_punch_ethanol;Feces_RNAl;Urine_RNAl;Feces_et_urine_RNAl;Ecouv_rectal_RNAl;Ectoparasites_ethanol;' +
						'Autres_echantillons_ou_remarques;Coeur_CO;Poumons_PO;Foie_FO;Rate_RA;Reins_RN;Intestins_INT;Testicule_TE;Ovaires_OV;' +
						'Embryons_EM;Nombre_d_embryons;Organes_RNAl_autre;Username;\r\n';

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
	var DBcerfig_chauves_souris_capturees_guinea = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBcerfig_chauves_souris_capturees_guinea = new PouchDB('bcoming' + nom_table + debug);
};

var tab_cerfig_chauves_souris_capturees_guinea = new Array();
var tab = new Array();


DBcerfig_chauves_souris_capturees_guinea.allDocs({  		
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
   				obj.N_identification_mere = row.doc.N_identification_mere;
   				obj.Date = row.doc.Date;
   				obj.Equipe = row.doc.Equipe;
   				obj.Site_region = row.doc.Site_region;
   				obj.Site_precis_de_capture = row.doc.Site_precis_de_capture;
   				obj.Lat_degre_dec = row.doc.Lat_degre_dec;
   				obj.Latitude = row.doc.Latitude;
   				obj.Long_degre_dec = row.doc.Long_degre_dec;
   				obj.Longitude = row.doc.Longitude;
				obj.Dans = row.doc.Dans;
				obj.Dans_autre = row.doc.Dans_autre;
				obj.Lieu_de_capture = row.doc.Lieu_de_capture;
				obj.Proximite_du_village_ville = row.doc.Proximite_du_village_ville;
				obj.Methode_de_capture = row.doc.Methode_de_capture;
				obj.Espece_identifiee = row.doc.Espece_identifiee;
				obj.Type_de_chauve_souris = row.doc.Type_de_chauve_souris;
				obj.Famille = row.doc.Famille;
				obj.Genre = row.doc.Genre;
				obj.Espece = row.doc.Espece;
				obj.Taille_yeux = row.doc.Taille_yeux;
				obj.Couleur_pelage_dorsal = row.doc.Couleur_pelage_dorsal;
				obj.Couleur_pelage_ventral = row.doc.Couleur_pelage_ventral;
				obj.Sexe = row.doc.Sexe;
				obj.Age = row.doc.Age;
				obj.Gestante = row.doc.Gestante;
				obj.Lactante = row.doc.Lactante;
				obj.Suitee = row.doc.Suitee;
				obj.Sexe_jeune = row.doc.Sexe_jeune;
				obj.Poids_jeune = row.doc.Poids_jeune;
				obj.N_ident_jeune = row.doc.N_ident_jeune;
				obj.Remarques = row.doc.Remarques;
				obj.Mesureur = row.doc.Mesureur;
				obj.Poids_g = row.doc.Poids_g;
				obj.L_totale_corps_mm = row.doc.L_totale_corps_mm;
				obj.L_avant_bras_mm = row.doc.L_avant_bras_mm;
				obj.L_queue_mm = row.doc.L_queue_mm;
				obj.L_metacarpe_3ieme_doigt_mm = row.doc.L_metacarpe_3ieme_doigt_mm;
				obj.Photo = row.doc.Photo;
				obj.Relachee_vivante = row.doc.Relachee_vivante;
				obj.Mort_naturelle_carcasse_trouvee = row.doc.Mort_naturelle_carcasse_trouvee;
				obj.Mort_due_a_la_capture_manip_euthanasie = row.doc.Mort_due_a_la_capture_manip_euthanasie;
				obj.Si_relae_marquage = row.doc.Si_relae_marquage;
				obj.Si_marquee_numero = row.doc.Si_marquee_numero;
				obj.Sang_papier_buvard = row.doc.Sang_papier_buvard;
				obj.Ecouv_gorge_RNAl = row.doc.Ecouv_gorge_RNAl;
				obj.Wing_punch_ethanol = row.doc.Wing_punch_ethanol;
				obj.Feces_RNAl = row.doc.Feces_RNAl;
				obj.Urine_RNAl = row.doc.Urine_RNAl;
				obj.Feces_et_urine_RNAl = row.doc.Feces_et_urine_RNAl;
				obj.Ecouv_rectal_RNAl = row.doc.Ecouv_rectal_RNAl;
				obj.Ectoparasites_ethanol = row.doc.Ectoparasites_ethanol;
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
				
   				tab_cerfig_chauves_souris_capturees_guinea.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBcerfig_chauves_souris_capturees_guinea.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addCerfig_chauves_souris_capturees_guineaRecord(row, selected) {
	
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
				row.N_identification_mere + ';' + 
				row.Date + ';' + 
				row.Equipe + ';' + 
				row.Site_region + ';' + 
				row.Site_precis_de_capture + ';' + 
				row.Lat_degre_dec + ';' + 
				row.Latitude + ';' + 
				row.Long_degre_dec + ';' + 
				row.Longitude + ';' + 
				row.Dans + ';' + 
				row.Dans_autre + ';' + 
				row.Lieu_de_capture + ';' + 
				row.Proximite_du_village_ville + ';' + 
				row.Methode_de_capture + ';' + 
				row.Espece_identifiee + ';' + 
				row.Type_de_chauve_souris + ';' + 
				row.Famille + ';' + 
				row.Genre + ';' + 
				row.Espece + ';' + 
				row.Taille_yeux + ';' + 
				row.Couleur_pelage_dorsal + ';' + 
				row.Couleur_pelage_ventral + ';' + 
				row.Sexe + ';' + 
				row.Age + ';' + 
				row.Gestante + ';' + 
				row.Lactante + ';' + 
				row.Suitee + ';' + 
				row.Sexe_jeune + ';' + 
				row.Poids_jeune + ';' + 
				row.N_ident_jeune + ';' + 
				row.Remarques + ';' + 
				row.Mesureur + ';' + 
				row.Poids_g + ';' + 
				row.L_totale_corps_mm + ';' + 
				row.L_avant_bras_mm + ';' + 
				row.L_queue_mm + ';' + 
				row.L_metacarpe_3ieme_doigt_mm + ';' + 
				row.Photo + ';' + 
				row.Relachee_vivante + ';' + 
				row.Mort_naturelle_carcasse_trouvee + ';' + 
				row.Mort_due_a_la_capture_manip_euthanasie + ';' + 
				row.Si_relae_marquage + ';' + 
				row.Si_marquee_numero + ';' + 
				row.Sang_papier_buvard + ';' + 
				row.Ecouv_gorge_RNAl + ';' + 
				row.Wing_punch_ethanol + ';' + 
				row.Feces_RNAl + ';' + 
				row.Urine_RNAl + ';' + 
				row.Feces_et_urine_RNAl + ';' + 
				row.Ecouv_rectal_RNAl + ';' + 
				row.Ectoparasites_ethanol + ';' + 
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
	       		saveAs(blob, "bcoming_cerfig_chauves_souris_capturees_guinea" + clock.now + ".csv");
	       		document.location.href="import_export.html?table=_bcoming_cerfig&type=bcoming_cerfig"; 
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
		
		
		

		 
		var res = alasql("SELECT N_identification, N_identification_mere, Date, Equipe, Site_region, Site_precis_de_capture, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Dans, Dans_autre, Lieu_de_capture, Proximite_du_village_ville, Methode_de_capture, Espece_identifiee, Type_de_chauve_souris, Famille, Genre, Espece, Taille_yeux, Couleur_pelage_dorsal, Couleur_pelage_ventral, Sexe, Age, Gestante, Lactante, Suitee, Sexe_jeune, Poids_jeune, N_ident_jeune, Remarques, Mesureur, Poids_g, L_totale_corps_mm, L_avant_bras_mm, L_queue_mm, L_metacarpe_3ieme_doigt_mm, Photo, Relachee_vivante, Mort_naturelle_carcasse_trouvee, Mort_due_a_la_capture_manip_euthanasie, Si_relae_marquage, Si_marquee_numero, Sang_papier_buvard, Ecouv_gorge_RNAl, Wing_punch_ethanol, Feces_RNAl, Urine_RNAl, Feces_et_urine_RNAl, Ecouv_rectal_RNAl, Ectoparasites_ethanol, Autres_echantillons_ou_remarques, Coeur_CO, Poumons_PO, Foie_FO, Rate_RA, Reins_RN, Intestins_INT, Testicule_TE, Ovaires_OV, Embryons_EM, Nombre_d_embryons, Organes_RNAl_autre, Username FROM ? ORDER BY Date", [tab_cerfig_chauves_souris_capturees_guinea] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addCerfig_chauves_souris_capturees_guineaRecord(row, false);
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
		
		var res = alasql("SELECT N_identification, N_identification_mere, Date, Equipe, Site_region, Site_precis_de_capture, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, Dans, Dans_autre, Lieu_de_capture, Proximite_du_village_ville, Methode_de_capture, Espece_identifiee, Type_de_chauve_souris, Famille, Genre, Espece, Taille_yeux, Couleur_pelage_dorsal, Couleur_pelage_ventral, Sexe, Age, Gestante, Lactante, Suitee, Sexe_jeune, Poids_jeune, N_ident_jeune, Remarques, Mesureur, Poids_g, L_totale_corps_mm, L_avant_bras_mm, L_queue_mm, L_metacarpe_3ieme_doigt_mm, Photo, Relachee_vivante, Mort_naturelle_carcasse_trouvee, Mort_due_a_la_capture_manip_euthanasie, Si_relae_marquage, Si_marquee_numero, Sang_papier_buvard, Ecouv_gorge_RNAl, Wing_punch_ethanol, Feces_RNAl, Urine_RNAl, Feces_et_urine_RNAl, Ecouv_rectal_RNAl, Ectoparasites_ethanol, Autres_echantillons_ou_remarques, Coeur_CO, Poumons_PO, Foie_FO, Rate_RA, Reins_RN, Intestins_INT, Testicule_TE, Ovaires_OV, Embryons_EM, Nombre_d_embryons, Organes_RNAl_autre, Username FROM ? ORDER BY Date", [tab_cerfig_chauves_souris_capturees_guinea] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addCerfig_chauves_souris_capturees_guineaRecord(row, true);
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
	






	


