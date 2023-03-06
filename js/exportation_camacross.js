var fields = 
    			['SamplingDate', 'AnimalCode', 'Province', 'Site', 'Species', 'SampleType', 'SampleCode', 
    			 'Final_Result_for_Corona_Watanabe', 'Final_Result_for_Corona_Quan', 'Username']


var fields_CSV_head =   'SamplingDate;AnimalCode;Province;Site;Species;SampleType;SampleCode' + 
						'Final_Result_for_Corona_Watanabe;Final_Result_for_Corona_Quan;Username;\r\n';

/*var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

add_heading = true;
CSV_heading = '';
CSV_data = '';

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DBCameras_trap = new PouchDB(remote_couchdb + 'cameras_trap_astre_transvihmi_guinee' + debug);
} else {
	var DBCameras_trap = new PouchDB('cameras_trap_astre_transvihmi_guinee' + debug);
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DBCaraterisations = new PouchDB(remote_couchdb + 'caracterisations_grottes' + nom_table + debug);
} else {
	var DBCaraterisations = new PouchDB('caracterisations_grottes' + nom_table + debug);
};

var tab_Cameras_trap = new Array();
var tab = new Array();


DBCameras_trap.allDocs({  		
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
   				
				obj.Equipe = row.doc.Equipe 
   				obj.N_site = row.doc.N_site 
   				obj.Date = row.doc.Date 
   				obj.Pays = row.doc.Pays 
   				obj.Prefecture = row.doc.Prefecture 
   				obj['Sous-prefecture'] = row.doc['Sous-prefecture']
   				obj['Ville/village'] = row.doc['Ville/village']
   				obj.Site_capture = row.doc.Site_capture 
   				obj.Environnement = row.doc.Environnement 
   				obj.Latitude = row.doc.Latitude 
   				obj.Lat_degre_dec = row.doc.Lat_degre_dec 
   				obj.Longitude = row.doc.Longitude 
   				obj.Long_degre_dec = row.doc.Long_degre_dec 
   				obj.Proximite_village_km = row.doc.Proximite_village_km 
   				obj.Proximite_source_m = row.doc.Proximite_source_m 
   				obj.ID_camera_1 = row.doc.ID_camera_1 
   				obj.NumSD_inseree_1 = row.doc.NumSD_inseree_1
   				obj.NumSD_remplacee_1 = row.doc.NumSD_remplacee_1
   				obj.Date_debut_camera_1 = row.doc.Date_debut_camera_1
   				obj.Heure_debut_camera_1 = row.doc.Heure_debut_camera_1
   				obj.Changement_emplacement_camera_1 = row.doc.Changement_emplacement_camera_1
   				obj.Emplacement_camera_1 = row.doc.Emplacement_camera_1
   				obj.NumEntree_camera_1 = row.doc.NumEntree_camera_1
   				obj.Hauteur_camera_1 = row.doc.Hauteur_camera_1
   				obj.Support_camera_1 = row.doc.Support_camera_1
   				obj.Distance_camera_entree_1 = row.doc.Distance_camera_entree_1
   				obj.Presence_autre_camera_1 = row.doc.Presence_autre_camera_1
   				obj.Distance_camera_camera_1 = row.doc.Distance_camera_camera_1
   				obj.Changement_batterie_camera_1 = row.doc.Changement_batterie_camera_1
   				obj.ID_camera_2 = row.doc.ID_camera_2
   				obj.NumSD_inseree_2 = row.doc.NumSD_inseree_2
   				obj.NumSD_remplacee_2 = row.doc.NumSD_remplacee_2
   				obj.Date_debut_camera_2 = row.doc.Date_debut_camera_2
   				obj.Heure_debut_camera_2 = row.doc.Heure_debut_camera_2
   				obj.Changement_emplacement_camera_2 = row.doc.Changement_emplacement_camera_2
   				obj.Emplacement_camera_2 = row.doc.Emplacement_camera_2
   				obj.NumEntree_camera_2 = row.doc.NumEntree_camera_2
   				obj.Hauteur_camera_2 = row.doc.Hauteur_camera_2
   				obj.Support_camera_2 = row.doc.Support_camera_2
   				obj.Distance_camera_entree_2 = row.doc.Distance_camera_entree_2
   				obj.Presence_autre_camera_2 = row.doc.Presence_autre_camera_2
   				obj.Distance_camera_camera_2 = row.doc.Distance_camera_camera_2
   				obj.Changement_batterie_camera_2 = row.doc.Changement_batterie_camera_2
   				obj.ID_camera_3 = row.doc.ID_camera_3
   				obj.NumSD_inseree_3 = row.doc.NumSD_inseree_3
   				obj.NumSD_remplacee_3 = row.doc.NumSD_remplacee_3
   				obj.Date_debut_camera_3 = row.doc.Date_debut_camera_3
   				obj.Heure_debut_camera_3 = row.doc.Heure_debut_camera_3
   				obj.Changement_emplacement_camera_3 = row.doc.Changement_emplacement_camera_3
   				obj.Emplacement_camera_3 = row.doc.Emplacement_camera_3
   				obj.NumEntree_camera_3 = row.doc.NumEntree_camera_3
   				obj.Hauteur_camera_3 = row.doc.Hauteur_camera_3
   				obj.Support_camera_3 = row.doc.Support_camera_3
   				obj.Distance_camera_entree_3 = row.doc.Distance_camera_entree_3
   				obj.Presence_autre_camera_3 = row.doc.Presence_autre_camera_3
   				obj.Distance_camera_camera_3 = row.doc.Distance_camera_camera_3
   				obj.Changement_batterie_camera_3 = row.doc.Changement_batterie_camera_3
   				obj.ID_camera_4 = row.doc.ID_camera_4
   				obj.NumSD_inseree_4 = row.doc.NumSD_inseree_4
   				obj.NumSD_remplacee_4 = row.doc.NumSD_remplacee_4
   				obj.Date_debut_camera_4 = row.doc.Date_debut_camera_4
   				obj.Heure_debut_camera_4 = row.doc.Heure_debut_camera_4
   				obj.Changement_emplacement_camera_4 = row.doc.Changement_emplacement_camera_4
   				obj.Emplacement_camera_4 = row.doc.Emplacement_camera_4
   				obj.NumEntree_camera_4 = row.doc.NumEntree_camera_4
   				obj.Hauteur_camera_4 = row.doc.Hauteur_camera_4
   				obj.Support_camera_4 = row.doc.Support_camera_4
   				obj.Distance_camera_entree_4 = row.doc.Distance_camera_entree_4
   				obj.Presence_autre_camera_4 = row.doc.Presence_autre_camera_4
   				obj.Distance_camera_camera_4 = row.doc.Distance_camera_camera_4
   				obj.Changement_batterie_camera_4 = row.doc.Changement_batterie_camera_4
  				
   				obj.Username = row.doc.Username 

   				tab_Cameras_trap.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}
}).then(function () {
	
	
	
	//alert('i = '  + i)
	DBCaraterisations.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
				
			var tableData = JSON.parse(JSON.stringify(result));
				
			tableData.rows.forEach(function(row){   
	   			try {
	   				//tab[i] = new Array();
	   				var obj = new Object();
	   				obj.N_site = row.doc.N_site 
	   				obj.Date = row.doc.Date 
	   				obj.Equipe = row.doc.Equipe 
	   				obj.Pays = row.doc.Pays 
	   				obj.Prefecture = row.doc.Prefecture 
	   				obj['Sous-prefecture'] = row.doc['Sous-prefecture']
	   				obj['Ville/village'] = row.doc['Ville/village']
	   				obj.Site_capture = row.doc.Site_capture 
	   				obj.Environnement = row.doc.Environnement 
	   				obj.Latitude = row.doc.Latitude 
	   				obj.Lat_degre_dec = row.doc.Lat_degre_dec 
	   				obj.Longitude = row.doc.Longitude 
	   				obj.Long_degre_dec = row.doc.Long_degre_dec 
	   				obj.Proximite_village_km = row.doc.Proximite_village_km 
	   				obj.Proximite_source_m = row.doc.Proximite_source_m 
	   				tab.push(obj);
	   				//i++;	
	   				
	   			} catch(error) {
					console.log(error);
				};
			});	
				
	   	}
	}).then(function () {
		
		
		
		DBCameras_trap.info().then((infos) => {
			
			count = infos.doc_count;
			
			
			
			
			
			
			
		}).catch((error) => {
		});
		
		
	}).catch(function (err) {
	   	console.log(err);
	});

	
}).catch(function (err) {
   	console.log(err);
});

function addChauves_souris_capturees(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		if ((row.N_site == null) || (row.N_site == '')) {
			//console.log(row.NUM)
			
			if (row.Pays != null) {
				Pays = row.Pays; 
			} else {
				Pays = '';
			}			
			if (row.Prefecture != null) {
				Prefecture = row.Prefecture;
			} else {
				Prefecture = '';
			}
			if (row['Sous-prefecture'] != null) {
				Sous_prefecture = row['Sous-prefecture'];
			} else {
				Sous_prefecture = '';
			}
			if (row['Ville/village'] != null) {
				Ville_village = row['Ville/village'];
			} else {
				Ville_village = '';
			}
			if (row.Site_capture != null) {
				Site_capture = row.Site_capture;
			} else {
				Site_capture = '';
			}
			if (row.Environnement != null) {
				Environnement = row.Environnement;
			} else {
				Environnement = '';
			}
			if (row.Latitude != null) {
				Latitude = row.Latitude;
			} else {
				Latitude = '';
			}
			if (row.Lat_degre_dec != null) {
				Lat_degre_dec = row.Lat_degre_dec;
				Lat_degre_dec = Lat_degre_dec.replace('°', '');
				Lat_degre_dec = Lat_degre_dec.replace('.', ','); 
			} else {
				Lat_degre_dec = '';
			}
			if (row.Longitude != null) {
				Longitude = row.Longitude;
			} else {
				Longitude = '';
			}
			if (row.Long_degre_dec != null) {
				Long_degre_dec = row.Long_degre_dec;
				Long_degre_dec = Long_degre_dec.replace('°', '');
				Long_degre_dec = Long_degre_dec.replace('.', ',');
			} else {
				Long_degre_dec = '';
			}
			if (row.Proximite_village_km != null) {
				Proximite_village_km = row.Proximite_village_km;
				Proximite_village_km = Proximite_village_km.replace('.', ',');
			} else {
				Proximite_village_km = '';
			}
			if (row.Proximite_source_m != null) {
				Proximite_source_m = row.Proximite_source_m;
			} else {
				Proximite_source_m = '';
			}
			
			
		}
		
		
		if ((row.N_site != null) && (row.N_site != '')) {
			var N_site = row.N_site;
			
			var res = alasql('SELECT N_site, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m, COUNT(*) AS NbSite FROM ?  WHERE N_site == "' + N_site + '" GROUP BY N_site, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Latitude, Lat_degre_dec, Longitude, Long_degre_dec, Proximite_village_km, Proximite_source_m', [tab] );
			
			var site = JSON.stringify(res);
			
			var obj_site = JSON.parse(site);
			
			obj_site.forEach(function(row1){
				Pays = row1.Pays;
				Prefecture = row1.Prefecture;
				Sous_prefecture = row1['Sous-prefecture'];
				Ville_village = row1['Ville/village'];
				Site_capture = row1.Site_capture;
				Environnement = row1.Environnement;
				Latitude = row1.Latitude;
				if (row1.Lat_degre_dec != null) {
					Lat_degre_dec = row1.Lat_degre_dec;
					Lat_degre_dec = Lat_degre_dec.replace('°', '');
					Lat_degre_dec = Lat_degre_dec.replace('.', ',');
				} else {
					Lat_degre_dec = '';
				}
				Longitude = row1.Longitude;
				if (row1.Long_degre_dec != null) {
					Long_degre_dec = row1.Long_degre_dec;
					Long_degre_dec = Long_degre_dec.replace('°', '');
					Long_degre_dec = Long_degre_dec.replace('.', ',');
				} else {
					Long_degre_dec = '';
				}
				if (row1.Proximite_village_km != null) {
					Proximite_village_km = row1.Proximite_village_km;
					Proximite_village_km = Proximite_village_km.replace('.', ',')
				} else {
					Proximite_village_km = '';
				}
				Proximite_source_m = row1.Proximite_source_m;
				NbSite = row1.NbSite;
			});
		}
			
			
			
		
	    
		console.log(row.N_identification_CS);
		console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
				row.Equipe + ';' +
				row.N_site + ';' +
				Pays + ';' + 
				Prefecture + ';' + 
				Sous_prefecture + ';' +
				Ville_village + ';' +
				Site_capture + ';' +
				Environnement + ';' + 
				Latitude + ';' + 
				Lat_degre_dec + ';' + 
				Longitude + ';' + 
				Long_degre_dec + ';' +
				Proximite_village_km + ';' + 
				Proximite_source_m + ';' + 
				row.ID_camera_1 + ';' + 
				row.NumSD_inseree_1 + ';' + 
				row.NumSD_remplacee_1 + ';' + 
				row.Date_debut_camera_1 + ';' + 
				row.Heure_debut_camera_1 + ';' + 
				row.Changement_emplacement_camera_1 + ';' + 
				row.Emplacement_camera_1 + ';' + 
				row.NumEntree_camera_1 + ';' + 
				row.Hauteur_camera_1 + ';' + 
				row.Support_camera_1 + ';' + 
				row.Distance_camera_entree_1 + ';' + 
				row.Presence_autre_camera_1 + ';' + 
				row.Distance_camera_camera_1 + ';' + 
				row.Changement_batterie_camera_1 + ';' + 
				row.ID_camera_2 + ';' + 
				row.NumSD_inseree_2 + ';' + 
				row.NumSD_remplacee_2 + ';' + 
				row.Date_debut_camera_2 + ';' + 
				row.Heure_debut_camera_2 + ';' + 
				row.Changement_emplacement_camera_2 + ';' + 
				row.Emplacement_camera_2 + ';' + 
				row.NumEntree_camera_2 + ';' + 
				row.Hauteur_camera_2 + ';' + 
				row.Support_camera_2 + ';' + 
				row.Distance_camera_entree_2 + ';' + 
				row.Presence_autre_camera_2 + ';' + 
				row.Distance_camera_camera_2 + ';' + 
				row.Changement_batterie_camera_2 + ';' + 
				row.ID_camera_3 + ';' + 
				row.NumSD_inseree_3 + ';' + 
				row.NumSD_remplacee_3 + ';' + 
				row.Date_debut_camera_3 + ';' + 
				row.Heure_debut_camera_3 + ';' + 
				row.Changement_emplacement_camera_3 + ';' + 
				row.Emplacement_camera_3 + ';' + 
				row.NumEntree_camera_3 + ';' + 
				row.Hauteur_camera_3 + ';' + 
				row.Support_camera_3 + ';' + 
				row.Distance_camera_entree_3 + ';' + 
				row.Presence_autre_camera_3 + ';' + 
				row.Distance_camera_camera_3 + ';' + 
				row.Changement_batterie_camera_3 + ';' + 
				row.ID_camera_4 + ';' + 
				row.NumSD_inseree_4 + ';' + 
				row.NumSD_remplacee_4 + ';' + 
				row.Date_debut_camera_4 + ';' + 
				row.Heure_debut_camera_4 + ';' + 
				row.Changement_emplacement_camera_4 + ';' + 
				row.Emplacement_camera_4 + ';' + 
				row.NumEntree_camera_4 + ';' + 
				row.Hauteur_camera_4 + ';' + 
				row.Support_camera_4 + ';' + 
				row.Distance_camera_entree_4 + ';' + 
				row.Presence_autre_camera_4 + ';' + 
				row.Distance_camera_camera_4 + ';' + 
				row.Changement_batterie_camera_4 + ';' + 
				row.Username + ';\r\n'
		
			} else {	
				if (array_selected_fields.indexOf('Equipe') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Equipe;';
					}
					CSV_data = CSV_data + row.Equipe + ";"
				};
				if (array_selected_fields.indexOf('N_site') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'N_site;';
					}
					CSV_data = CSV_data + row.N_site + ";"
				};				
				if (array_selected_fields.indexOf('Prefecture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Prefecture;';
					}
					CSV_data = CSV_data + Prefecture + ";"
				};				
				if (array_selected_fields.indexOf('Sous-prefecture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sous-prefecture;';
					}
					CSV_data = CSV_data + Sous_prefecture + ";"
				};				
				if (array_selected_fields.indexOf('Ville_village') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Ville/village;';
					}
					CSV_data = CSV_data + Ville_village + ";"
				};
				if (array_selected_fields.indexOf('Site_capture') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Site_capture;';
					}
					CSV_data = CSV_data + Site_capture + ";"
				};
				if (array_selected_fields.indexOf('Environnement') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Environnement;';
					}
					CSV_data = CSV_data + Environnement + ";"
				};
				if (array_selected_fields.indexOf('Latitude') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Latitude;';
					}
					CSV_data = CSV_data + Latitude + ";"
				};
				if (array_selected_fields.indexOf('Lat_degre_dec') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Lat_degre_dec;';
					}
					CSV_data = CSV_data + Lat_degre_dec + ";"
				};
				if (array_selected_fields.indexOf('Longitude') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Longitude;';
					}
					CSV_data = CSV_data + Longitude + ";"
				};
				if (array_selected_fields.indexOf('Long_degre_dec') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Long_degre_dec;';
					}
					CSV_data = CSV_data + Long_degre_dec + ";"
				};
				if (array_selected_fields.indexOf('Proximite_village_km') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Proximite_village_km;';
					}
					CSV_data = CSV_data + Proximite_village_km + ";"
				};
				if (array_selected_fields.indexOf('Proximite_source_m') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Proximite_source_m;';
					}
					CSV_data = CSV_data + Proximite_source_m + ";"
				};
				if (array_selected_fields.indexOf('ID_camera_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_camera_1;';
					}
					CSV_data = CSV_data + row.ID_camera_1 + ";"
				};
				if (array_selected_fields.indexOf('NumSD_inseree_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumSD_inseree_1;';
					}
					CSV_data = CSV_data + row.NumSD_inseree_1 + ";"
				};
				if (array_selected_fields.indexOf('NumSD_remplacee_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumSD_remplacee_1;';
					}
					CSV_data = CSV_data + row.NumSD_remplacee_1 + ";"
				};
				if (array_selected_fields.indexOf('Date_debut_camera_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date_debut_camera_1;';
					}
					CSV_data = CSV_data + row.Date_debut_camera_1 + ";"
				};
				if (array_selected_fields.indexOf('Heure_debut_camera_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Heure_debut_camera_1;';
					}
					CSV_data = CSV_data + row.Heure_debut_camera_1 + ";"
				};
				if (array_selected_fields.indexOf('Changement_emplacement_camera_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Changement_emplacement_camera_1;';
					}
					CSV_data = CSV_data + row.Changement_emplacement_camera_1 + ";"
				};
				if (array_selected_fields.indexOf('Emplacement_camera_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Emplacement_camera_1;';
					}
					CSV_data = CSV_data + row.Emplacement_camera_1 + ";"
				};
				if (array_selected_fields.indexOf('NumEntree_camera_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumEntree_camera_1;';
					}
					CSV_data = CSV_data + row.NumEntree_camera_1 + ";"
				};
				if (array_selected_fields.indexOf('Hauteur_camera_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Hauteur_camera_1;';
					}
					CSV_data = CSV_data + row.Hauteur_camera_1 + ";"
				};
				if (array_selected_fields.indexOf('Support_camera_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Support_camera_1;';
					}
					CSV_data = CSV_data + row.Support_camera_1 + ";"
				};
				if (array_selected_fields.indexOf('Distance_camera_entree_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Distance_camera_entree_1;';
					}
					CSV_data = CSV_data + row.Distance_camera_entree_1 + ";"
				};
				if (array_selected_fields.indexOf('Presence_autre_camera_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_autre_camera_1;';
					}
					CSV_data = CSV_data + row.Presence_autre_camera_1 + ";"
				};
				if (array_selected_fields.indexOf('Distance_camera_camera_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Distance_camera_camera_1;';
					}
					CSV_data = CSV_data + row.Distance_camera_camera_1 + ";"
				};
				if (array_selected_fields.indexOf('Changement_batterie_camera_1') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Changement_batterie_camera_1;';
					}
					CSV_data = CSV_data + row.Changement_batterie_camera_1 + ";"
				};
				if (array_selected_fields.indexOf('ID_camera_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_camera_2;';
					}
					CSV_data = CSV_data + row.ID_camera_2 + ";"
				};
				if (array_selected_fields.indexOf('NumSD_inseree_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumSD_inseree_2;';
					}
					CSV_data = CSV_data + row.NumSD_inseree_2 + ";"
				};
				if (array_selected_fields.indexOf('NumSD_remplacee_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumSD_remplacee_2;';
					}
					CSV_data = CSV_data + row.NumSD_remplacee_2 + ";"
				};
				if (array_selected_fields.indexOf('Date_debut_camera_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date_debut_camera_2;';
					}
					CSV_data = CSV_data + row.Date_debut_camera_2 + ";"
				};
				if (array_selected_fields.indexOf('Heure_debut_camera_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Heure_debut_camera_2;';
					}
					CSV_data = CSV_data + row.Heure_debut_camera_2 + ";"
				};
				if (array_selected_fields.indexOf('Changement_emplacement_camera_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Changement_emplacement_camera_2;';
					}
					CSV_data = CSV_data + row.Changement_emplacement_camera_2 + ";"
				};
				if (array_selected_fields.indexOf('Emplacement_camera_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Emplacement_camera_2;';
					}
					CSV_data = CSV_data + row.Emplacement_camera_2 + ";"
				};
				if (array_selected_fields.indexOf('NumEntree_camera_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumEntree_camera_2;';
					}
					CSV_data = CSV_data + row.NumEntree_camera_2 + ";"
				};
				if (array_selected_fields.indexOf('Hauteur_camera_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Hauteur_camera_2;';
					}
					CSV_data = CSV_data + row.Hauteur_camera_2 + ";"
				};
				if (array_selected_fields.indexOf('Support_camera_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Support_camera_2;';
					}
					CSV_data = CSV_data + row.Support_camera_2 + ";"
				};
				if (array_selected_fields.indexOf('Distance_camera_entree_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Distance_camera_entree_2;';
					}
					CSV_data = CSV_data + row.Distance_camera_entree_2 + ";"
				};
				if (array_selected_fields.indexOf('Presence_autre_camera_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_autre_camera_2;';
					}
					CSV_data = CSV_data + row.Presence_autre_camera_2 + ";"
				};
				if (array_selected_fields.indexOf('Distance_camera_camera_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Distance_camera_camera_2;';
					}
					CSV_data = CSV_data + row.Distance_camera_camera_2 + ";"
				};
				if (array_selected_fields.indexOf('Changement_batterie_camera_2') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Changement_batterie_camera_2;';
					}
					CSV_data = CSV_data + row.Changement_batterie_camera_2 + ";"
				};
				if (array_selected_fields.indexOf('ID_camera_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_camera_3;';
					}
					CSV_data = CSV_data + row.ID_camera_3 + ";"
				};
				if (array_selected_fields.indexOf('NumSD_inseree_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumSD_inseree_3;';
					}
					CSV_data = CSV_data + row.NumSD_inseree_3 + ";"
				};
				if (array_selected_fields.indexOf('NumSD_remplacee_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumSD_remplacee_3;';
					}
					CSV_data = CSV_data + row.NumSD_remplacee_3 + ";"
				};
				if (array_selected_fields.indexOf('Date_debut_camera_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date_debut_camera_3;';
					}
					CSV_data = CSV_data + row.Date_debut_camera_3 + ";"
				};
				if (array_selected_fields.indexOf('Heure_debut_camera_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Heure_debut_camera_3;';
					}
					CSV_data = CSV_data + row.Heure_debut_camera_3 + ";"
				};
				if (array_selected_fields.indexOf('Changement_emplacement_camera_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Changement_emplacement_camera_3;';
					}
					CSV_data = CSV_data + row.Changement_emplacement_camera_3 + ";"
				};
				if (array_selected_fields.indexOf('Emplacement_camera_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Emplacement_camera_3;';
					}
					CSV_data = CSV_data + row.Emplacement_camera_3 + ";"
				};
				if (array_selected_fields.indexOf('NumEntree_camera_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumEntree_camera_3;';
					}
					CSV_data = CSV_data + row.NumEntree_camera_3 + ";"
				};
				if (array_selected_fields.indexOf('Hauteur_camera_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Hauteur_camera_3;';
					}
					CSV_data = CSV_data + row.Hauteur_camera_3 + ";"
				};
				if (array_selected_fields.indexOf('Support_camera_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Support_camera_3;';
					}
					CSV_data = CSV_data + row.Support_camera_3 + ";"
				};
				if (array_selected_fields.indexOf('Distance_camera_entree_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Distance_camera_entree_3;';
					}
					CSV_data = CSV_data + row.Distance_camera_entree_3 + ";"
				};
				if (array_selected_fields.indexOf('Presence_autre_camera_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_autre_camera_3;';
					}
					CSV_data = CSV_data + row.Presence_autre_camera_3 + ";"
				};
				if (array_selected_fields.indexOf('Distance_camera_camera_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Distance_camera_camera_3;';
					}
					CSV_data = CSV_data + row.Distance_camera_camera_3 + ";"
				};
				if (array_selected_fields.indexOf('Changement_batterie_camera_3') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Changement_batterie_camera_3;';
					}
					CSV_data = CSV_data + row.Changement_batterie_camera_3 + ";"
				};
				if (array_selected_fields.indexOf('ID_camera_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'ID_camera_4;';
					}
					CSV_data = CSV_data + row.ID_camera_4 + ";"
				};
				if (array_selected_fields.indexOf('NumSD_inseree_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumSD_inseree_4;';
					}
					CSV_data = CSV_data + row.NumSD_inseree_4 + ";"
				};
				if (array_selected_fields.indexOf('NumSD_remplacee_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumSD_remplacee_4;';
					}
					CSV_data = CSV_data + row.NumSD_remplacee_4 + ";"
				};
				if (array_selected_fields.indexOf('Date_debut_camera_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Date_debut_camera_4;';
					}
					CSV_data = CSV_data + row.Date_debut_camera_4 + ";"
				};
				if (array_selected_fields.indexOf('Heure_debut_camera_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Heure_debut_camera_4;';
					}
					CSV_data = CSV_data + row.Heure_debut_camera_4 + ";"
				};
				if (array_selected_fields.indexOf('Changement_emplacement_camera_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Changement_emplacement_camera_4;';
					}
					CSV_data = CSV_data + row.Changement_emplacement_camera_4 + ";"
				};
				if (array_selected_fields.indexOf('Emplacement_camera_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Emplacement_camera_4;';
					}
					CSV_data = CSV_data + row.Emplacement_camera_4 + ";"
				};
				if (array_selected_fields.indexOf('NumEntree_camera_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'NumEntree_camera_4;';
					}
					CSV_data = CSV_data + row.NumEntree_camera_4 + ";"
				};
				if (array_selected_fields.indexOf('Hauteur_camera_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Hauteur_camera_4;';
					}
					CSV_data = CSV_data + row.Hauteur_camera_4 + ";"
				};
				if (array_selected_fields.indexOf('Support_camera_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Support_camera_4;';
					}
					CSV_data = CSV_data + row.Support_camera_4 + ";"
				};
				if (array_selected_fields.indexOf('Distance_camera_entree_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Distance_camera_entree_4;';
					}
					CSV_data = CSV_data + row.Distance_camera_entree_4 + ";"
				};
				if (array_selected_fields.indexOf('Presence_autre_camera_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Presence_autre_camera_4;';
					}
					CSV_data = CSV_data + row.Presence_autre_camera_4 + ";"
				};
				if (array_selected_fields.indexOf('Distance_camera_camera_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Distance_camera_camera_4;';
					}
					CSV_data = CSV_data + row.Distance_camera_camera_4 + ";"
				};
				if (array_selected_fields.indexOf('Changement_batterie_camera_4') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Changement_batterie_camera_4;';
					}
					CSV_data = CSV_data + row.Changement_batterie_camera_4 + ";"
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
	       		saveAs(blob, "ebo-sursy" + clock.now + ".csv");
			}	
			
	} 
			
	
}*/

/*$('#export_all_fields').click(function(){
	CSV_data = fields_CSV_head;
	
	var res = alasql("SELECT Equipe, N_site, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Proximite_village_km, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, ID_camera_1, NumSD_inseree_1, NumSD_remplacee_1, Date_debut_camera_1, Heure_debut_camera_1, Changement_emplacement_camera_1, Emplacement_camera_1, NumEntree_camera_1, Hauteur_camera_1, Support_camera_1, Distance_camera_entree_1, Presence_autre_camera_1, Distance_camera_camera_1, Changement_batterie_camera_1, ID_camera_2, NumSD_inseree_2, NumSD_remplacee_2, Date_debut_camera_2, Heure_debut_camera_2, Changement_emplacement_camera_2, Emplacement_camera_2, NumEntree_camera_2, Hauteur_camera_2, Support_camera_2, Distance_camera_entree_2, Presence_autre_camera_2, Distance_camera_camera_2, Changement_batterie_camera_2, ID_camera_3, NumSD_inseree_3, NumSD_remplacee_3, Date_debut_camera_3, Heure_debut_camera_3, Changement_emplacement_camera_3, Emplacement_camera_3, NumEntree_camera_3, Hauteur_camera_3, Support_camera_3, Distance_camera_entree_3, Presence_autre_camera_3, Distance_camera_camera_3, Changement_batterie_camera_3, ID_camera_4, NumSD_inseree_4, NumSD_remplacee_4, Date_debut_camera_4, Heure_debut_camera_4, Changement_emplacement_camera_4, Emplacement_camera_4, NumEntree_camera_4, Hauteur_camera_4, Support_camera_4, Distance_camera_entree_4, Presence_autre_camera_4, Distance_camera_camera_4, Changement_batterie_camera_4, Username FROM ? ORDER BY ID_camera_1", [tab_Cameras_trap] );
    			
    var CS = JSON.stringify(res);
    			
    var obj_CS = JSON.parse(CS);
	 
    
    res.forEach(function(row){
    	//wait(10);
		console.log(row.N_identification_CS)
		//alert(count)
		if (count == i) {
			addChauves_souris_capturees(row, false);
		}
		
		
	}).catch(function (err) {
		console.log(err);
	});
})


$('#export_selected_fields').click(function(){
	var res = alasql("SELECT Equipe, N_site, Pays, Prefecture, [Sous-prefecture], [Ville/village], Site_capture, Environnement, Proximite_village_km, Lat_degre_dec, Latitude, Long_degre_dec, Longitude, ID_camera_1, NumSD_inseree_1, NumSD_remplacee_1, Date_debut_camera_1, Heure_debut_camera_1, Changement_emplacement_camera_1, Emplacement_camera_1, NumEntree_camera_1, Hauteur_camera_1, Support_camera_1, Distance_camera_entree_1, Presence_autre_camera_1, Distance_camera_camera_1, Changement_batterie_camera_1, ID_camera_2, NumSD_inseree_2, NumSD_remplacee_2, Date_debut_camera_2, Heure_debut_camera_2, Changement_emplacement_camera_2, Emplacement_camera_2, NumEntree_camera_2, Hauteur_camera_2, Support_camera_2, Distance_camera_entree_2, Presence_autre_camera_2, Distance_camera_camera_2, Changement_batterie_camera_2, ID_camera_3, NumSD_inseree_3, NumSD_remplacee_3, Date_debut_camera_3, Heure_debut_camera_3, Changement_emplacement_camera_3, Emplacement_camera_3, NumEntree_camera_3, Hauteur_camera_3, Support_camera_3, Distance_camera_entree_3, Presence_autre_camera_3, Distance_camera_camera_3, Changement_batterie_camera_3, ID_camera_4, NumSD_inseree_4, NumSD_remplacee_4, Date_debut_camera_4, Heure_debut_camera_4, Changement_emplacement_camera_4, Emplacement_camera_4, NumEntree_camera_4, Hauteur_camera_4, Support_camera_4, Distance_camera_entree_4, Presence_autre_camera_4, Distance_camera_camera_4, Changement_batterie_camera_4, Username FROM ? ORDER BY ID_camera_1", [tab_Cameras_trap] );
    			
    var CS = JSON.stringify(res);
    			
    var obj_CS = JSON.parse(CS);
	   
    
    res.forEach(function(row){
    	//wait(10);
		console.log(row.N_identification_CS)
		//alert(count)
		if (count == i) {
			addChauves_souris_capturees(row, true);
		}
		
		
	}).catch(function (err) {
		console.log(err);
	});
})*/

document.getElementById("add_selection_criteria").disabled = true;

var multiselect1 = document.getElementById("multiselect1");
for (var i = 0; i < fields.length; i++) {
	multiselect1.options[i] = new Option(fields[i], fields[i]);
};


	
