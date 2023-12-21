function chargement_des_donnees_bcoming_merfi_guinea_survey_data() {
	showConnexionStatus();
	
    var table = searchParams.get('table');

    chargement_des_donnees(table);
}

function chargement_des_donnees(table) {
	
	var id = localStorage.getItem('ID_bcoming' + table);

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
					
			function showValue(elementName) {
				
				var element = document.getElementById(elementName + '_value');
				element.innerHTML = result.rows[0].doc[elementName];
				element.style.color = "red";
			}
			
			showValue('Username');
											
			showValue('Result_Id');
			showValue('Device_Name');
			showValue('Surveyed_Date');
			showValue('Surveyed_Time');
			showValue('End_Date');
			showValue('Average_interview_time38_minutes');
			showValue('Surveyed');
			showValue('Location_Latitude');
			showValue('Location_Longitude');
			showValue('Location_Altitude');
			showValue('Location_Accuracy');
			showValue('Q1');
			showValue('Q2');
			showValue('Q3');
			showValue('Q4');
			showValue('Q5');
			showValue('Q6');
			showValue('Q7');
			showValue('Q8');
			showValue('Q9_1');
			showValue('Q10_1');
			showValue('Q11_1');
			showValue('Q12_1');
			showValue('Q13_1');
			showValue('Q14_1');
			showValue('Q15_1');
			showValue('Q16_1');
			showValue('Q17_1');
			showValue('Q9_2');
			showValue('Q10_2');
			showValue('Q11_2');
			showValue('Q12_2');
			showValue('Q13_2');
			showValue('Q14_2');
			showValue('Q15_2');
			showValue('Q16_2');
			showValue('Q17_2');
			showValue('Q9_3');
			showValue('Q10_3');
			showValue('Q11_3');
			showValue('Q12_3');
			showValue('Q13_3');
			showValue('Q14_3');
			showValue('Q15_3');
			showValue('Q16_3');
			showValue('Q17_3');
			showValue('Q9_4');
			showValue('Q10_4');
			showValue('Q11_4');
			showValue('Q12_4');
			showValue('Q13_4');
			showValue('Q14_4');
			showValue('Q15_4');
			showValue('Q16_4');
			showValue('Q17_4');
			showValue('Q9_5');
			showValue('Q10_5');
			showValue('Q11_5');
			showValue('Q12_5');
			showValue('Q13_5');
			showValue('Q14_5');
			showValue('Q15_5');
			showValue('Q16_5');
			showValue('Q17_5');
			showValue('Q9_6');
			showValue('Q10_6');
			showValue('Q11_6');
			showValue('Q12_6');
			showValue('Q13_6');
			showValue('Q14_6');
			showValue('Q15_6');
			showValue('Q16_6');
			showValue('Q17_6');
			showValue('Q18');
			showValue('Q19');
			showValue('Q20');
			showValue('Q21');
			showValue('Q22');
			showValue('Q23');
			showValue('Q24');
			showValue('Q25');
			showValue('Q26');
			showValue('Q27');
			showValue('Q28');
			showValue('Q29');
			showValue('Q30');
			showValue('Q31');
			showValue('Q32');
			showValue('Q33');
			showValue('Q34');
			showValue('Q35');
			showValue('Q36');
			showValue('Q37');
			showValue('Q38');
			showValue('Q39');
			showValue('Q40');
			showValue('Q41');
			showValue('Q42');
			showValue('Q43');
			showValue('Q44');
			showValue('Q45');
			showValue('Q46');
			showValue('Q47');
			showValue('Q48');
			showValue('Q49');
			showValue('Q50');
			showValue('Q51');
			showValue('Q52');
			showValue('Q53');
			showValue('Q55');
			showValue('Q56');
			showValue('Q57');
			showValue('Q58');
			showValue('Q59');
			showValue('Q60');
			showValue('Q61');
			showValue('Q62');
			showValue('Q63');
			showValue('Q64');
			showValue('Q65');
			showValue('Q66');
			showValue('Q67');
			showValue('Q68');
			showValue('Q69');
			showValue('Q71');
			showValue('Q72');
			showValue('Q73');
			showValue('Q74');
			showValue('Q75');
			showValue('Q76');
			showValue('Q77');
			showValue('Q78');
			showValue('Q79');
			showValue('Q80');
			showValue('Q81');
			showValue('Q82');
			showValue('Q83');
			showValue('Q84');
			showValue('Q85');
			showValue('Q86');
			showValue('Q87');
			showValue('Q88');
			showValue('Q89');
			showValue('Q90');
			showValue('Q91');
			showValue('Q92');
			showValue('Q93');
			showValue('Q94');
			showValue('Q95');
			showValue('Q96');
			showValue('Q97');
			showValue('Q98');
			showValue('Q99');
			showValue('Q100');
			showValue('Q101');
			showValue('Q102');
			showValue('Q103');
			showValue('Q105');
			showValue('Q105');
			showValue('Q106');
			showValue('Q107');
			showValue('Q108');
			showValue('Q109');
			showValue('Q110');
			showValue('Q111');
			showValue('Q112');
			showValue('Q113');
			showValue('Q114');
			showValue('Q115');
			showValue('Q116');
			showValue('Q117');
			showValue('Q118');
			showValue('Q119');
			showValue('Q120');
			showValue('Q121');
			showValue('Q122');
			showValue('Q123');
			showValue('Q124');
			showValue('Q125');
			showValue('Q126');
			showValue('Q127');
			showValue('Q128');
			showValue('Q129');
			showValue('Q130');			
			showValue('Q132');
			showValue('Q133');
			showValue('Q134');
			showValue('Q135');
			showValue('Q136');
			showValue('Q137');
			showValue('Q138');
			showValue('Q139');
			showValue('Q140');
			showValue('Q141');
			showValue('Q142');
			showValue('Q143');
			showValue('Q144');
			showValue('Q145');			
			showValue('Q146');
			showValue('Q147');
			showValue('Q148');
			showValue('Q149');
			showValue('Q150');
			showValue('Q151');
			showValue('Q152');
			showValue('Q153');
			showValue('Q154');
			showValue('Q155');
			showValue('Q156');
			showValue('Q157');
			showValue('Q158');
			showValue('Q159');			
			showValue('Q160');
						
			
			
					  
		}
	    	
	}).catch(function (err) {
			console.log(err);
	});
}



