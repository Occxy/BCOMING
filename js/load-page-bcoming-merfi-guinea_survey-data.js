function chargement_bcoming_merfi_guinea_survey_data() {
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
		
		 

	if ((option == 1) || (option == 2)) {
		modifier(table, option);
	};
	    	
	    	
		
	   

	
}


function modifier(table, option) {
	
	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('bcoming_merfi_guinea_survey_dataTablesData'));
		
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
				
				
				
				
				var dateString = result.rows[0].doc.Surveyed_Date; // Format "jj/mm/aaaa", par exemple "21/08/2023"
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
				$('#Surveyed_Date').datepicker('setDate', stringDate);
				
				addValue('Result_Id');
				addValue('Device_Name');
				
				//								Q1	Q2	Q3	Q4	Q5	Q6	Q7	Q8	Q9	Q10	Q11	Q12	Q13	Q14	Q15	Q16	Q17	Q9_2	Q10_2	Q11_2	Q12_2	Q13_2	Q14_2	Q15_2	Q16_2	Q17_2	Q9_3	Q10_3	Q11_3	Q12_3	Q13_3	Q14_3	Q15_3	Q16_3	Q17_3	Q9_4	Q10_4	Q11_4	Q12_4	Q13_4	Q14_4	Q15_4	Q16_4	Q17_4	Q9_5	Q10_5	Q11_5	Q12_5	Q13_5	Q14_5	Q15_5	Q16_5	Q17_5	Q9_6	Q10_6	Q11_6	Q12_6	Q13_6	Q14_6 	Q15_6	Q16_6	Q17_6	Q18	Q19	Q20	Q21	Q22	Q23	Q24	Q25	Q26	Q27	Q28	Q29	Q30	Q31	Q32	Q33	Q34	Q35	Q36	Q37	Q38	Q39	Q40	Q41	Q42	Q43	Q44	Q45	Q46	Q47	Q48	Q49	Q50	Q51	Q52	Q53	Q55	Q56	Q57	Q58	Q59	Q60	Q61	Q62	Q63	Q64	Q65	Q66	Q67	Q68	Q69	Q71	Q72	Q73	Q74	Q75	Q76	Q77	Q78	Q79	Q80	Q81	Q82	Q83	Q84	Q85	Q86	Q87	Q88	Q89	Q90	Q91	Q92	Q93	Q94	Q95	Q96	Q97	Q98	Q99	Q100	Q101	Q102	Q103	Q104	Q105	Q106	Q107	Q108	Q109	Q110	Q111	Q112	Q113	Q114	Q115	Q116	Q117	Q118	Q119	Q120	Q121	Q122	Q123	Q124	Q125	Q126	Q127	Q128	Q129	Q130	Q132	Q133	Q134	Q135	Q136	Q137	Q138	Q139	Q140	Q141	Q142	Q143	Q144	Q145	Q146	Q147	Q14	Q149	Q150	Q151	Q152	Q153	Q154	Q155	Q156	Q157	Q158	Q159	Q160

				addValue('Surveyed_Time');
				addValue('Surveyed');
				addValue('End_Date');
				addValue('Average_interview_time38_minutes');
				addValue('Location_Latitude');
				addValue('Location_Longitude');
				addValue('Location_Altitude');
				addValue('Location_Accuracy');
				addValue('Q1');
				addValue('Q2');
				addValue('Q3');
				addValue('Q4');
				addValue('Q5');
				addValue('Q6')
				addValue('Q7');
				addValue('Q8');
				addValue('Q9_1');
				addValue('Q10_1');
				addValue('Q11_1');
				addValue('Q12_1');
				addValue('Q13_1');
				addValue('Q14_1');
				addValue('Q15_1');
				addValue('Q16_1');
				addValue('Q17_1');
				addValue('Q15_1');
				addValue('Q16_1');
				addValue('Q17_1');
				addValue('Q9_2');
				addValue('Q10_2');
				addValue('Q11_2');
				addValue('Q12_2');
				addValue('Q13_2');
				addValue('Q14_2');
				addValue('Q15_2');
				addValue('Q16_2');
				addValue('Q17_2');
				addValue('Q9_3');
				addValue('Q10_3');
				addValue('Q11_3');
				addValue('Q12_3');
				addValue('Q13_3');
				addValue('Q14_3');
				addValue('Q15_3');
				addValue('Q16_3');
				addValue('Q17_3');
				addValue('Q9_4');
				addValue('Q10_4');
				addValue('Q11_4');
				addValue('Q12_4');
				addValue('Q13_4');
				addValue('Q14_4');
				addValue('Q15_4');
				addValue('Q16_4');
				addValue('Q17_4');
				addValue('Q9_5');
				addValue('Q10_5');
				addValue('Q11_5');
				addValue('Q12_5');
				addValue('Q13_5');
				addValue('Q14_5');
				addValue('Q15_5');
				addValue('Q16_5');
				addValue('Q17_5');
				addValue('Q9_6');
				addValue('Q10_6');
				addValue('Q11_6');
				addValue('Q12_6');
				addValue('Q13_6');
				addValue('Q14_6');
				addValue('Q15_6');
				addValue('Q16_6');
				addValue('Q17_6');
				addValue('Q18');
				addValue('Q19');
				addValue('Q20');
				addValue('Q21');
				addValue('Q22');
				addValue('Q23');
				addValue('Q24');
				addValue('Q25');
				addValue('Q26');
				addValue('Q27');
				addValue('Q28');
				addValue('Q29');
				addValue('Q30');
				addValue('Q31');
				addValue('Q32');
				addValue('Q33');
				addValue('Q34');
				addValue('Q35');
				addValue('Q36');
				addValue('Q37');
				addValue('Q38');
				addValue('Q39');
				addValue('Q40');
				addValue('Q41');
				addValue('Q42');
				addValue('Q43');
				addValue('Q44');
				addValue('Q45');
				addValue('Q46');
				addValue('Q47');
				addValue('Q48');
				addValue('Q49');
				addValue('Q50');
				addValue('Q51');
				addValue('Q52');
				addValue('Q53');
				addValue('Q55');
				addValue('Q56');
				addValue('Q57');
				addValue('Q58');
				addValue('Q59');
				addValue('Q60');
				addValue('Q61');
				addValue('Q62');
				addValue('Q63');
				addValue('Q64');
				addValue('Q65');
				addValue('Q66');
				addValue('Q67');
				addValue('Q68');
				addValue('Q69');
				addValue('Q71');
				addValue('Q72');
				addValue('Q73');
				addValue('Q74');
				addValue('Q75');
				addValue('Q76');
				addValue('Q77');
				addValue('Q78');
				addValue('Q79');
				addValue('Q80');
				addValue('Q81');
				addValue('Q82');
				addValue('Q83');
				addValue('Q84');
				addValue('Q85');
				addValue('Q86');
				addValue('Q87');
				addValue('Q88');
				addValue('Q89');
				addValue('Q90');
				addValue('Q91');
				addValue('Q92');
				addValue('Q93');
				addValue('Q94');
				addValue('Q95');
				addValue('Q96');
				addValue('Q97');
				addValue('Q98');
				addValue('Q99');
				addValue('Q100');
				addValue('Q101');
				addValue('Q102');
				addValue('Q103');
				addValue('Q104');
				addValue('Q105');
				addValue('Q106');
				addValue('Q107');
				addValue('Q108');
				addValue('Q109');
				addValue('Q110');
				addValue('Q111');
				addValue('Q112');
				addValue('Q113');
				addValue('Q114');
				addValue('Q115');
				addValue('Q116');
				addValue('Q117');
				addValue('Q118');
				addValue('Q119');
				addValue('Q120');
				addValue('Q121');
				addValue('Q122');
				addValue('Q123');
				addValue('Q124');
				addValue('Q125');
				addValue('Q126');
				addValue('Q127');
				addValue('Q128');
				addValue('Q129');
				addValue('Q130');
				addValue('Q132');
				addValue('Q133');
				addValue('Q134');
				addValue('Q135');
				addValue('Q136');
				addValue('Q137');
				addValue('Q138');
				addValue('Q139');
				addValue('Q140');
				addValue('Q141');
				addValue('Q142');
				addValue('Q143');
				addValue('Q144');
				addValue('Q145');
				addValue('Q146');
				addValue('Q147');
				addValue('Q148');
				addValue('Q149');
				addValue('Q150');
				addValue('Q151');
				addValue('Q152');
				addValue('Q153');
				addValue('Q154');
				addValue('Q155');
				addValue('Q156');
				addValue('Q157');
				addValue('Q158');
				addValue('Q159');
				addValue('Q160');
				/*addValue('Long_degre_dec_Piege');
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
				addValue('Organes_RNAl_autre');*/
				
				
				
					  
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


