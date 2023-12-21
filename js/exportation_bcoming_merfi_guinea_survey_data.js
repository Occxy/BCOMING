var fields = 
	
	['Result_Id', 'Device_Name', 'Surveyed_Date', 'Surveyed_Time', 'Surveyed', 'End_Date', 'Average_interview_time38_minutes', 
	  'Location_Latitude', 'Location_Longitude', 'Location_Altitude', 'Location_Accuracy', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 
	  'Q8', 'Q9_1', 'Q10_1', 'Q11_1', 'Q12_1', 'Q13_1', 'Q14_1', 'Q15_1', 'Q16_1', 'Q17_1', 'Q9_2', 'Q10_2', 'Q11_2', 'Q12_2', 'Q13_2', 
	  'Q14_2', 'Q15_2', 'Q16_2', 'Q17_2', 'Q9_3', 'Q10_3', 'Q11_3', 'Q12_3', 'Q13_3', 'Q14_3', 'Q15_3', 'Q16_3', 'Q17_3', 'Q9_4', 'Q10_4', 
	  'Q11_4', 'Q12_4', 'Q13_4', 'Q14_4', 'Q15_4', 'Q16_4', 'Q17_4', 'Q9_5', 'Q10_5', 'Q11_5', 'Q12_5', 'Q13_5', 'Q14_5', 'Q15_5', 'Q16_5',
	  'Q17_5', 'Q9_6', 'Q10_6', 'Q11_6', 'Q12_6', 'Q13_6', 'Q14_6', 'Q15_6', 'Q16_6', 'Q17_6', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22', 'Q23', 
	  'Q24', 'Q25', 'Q26', 'Q27', 'Q28', 'Q29', 'Q30', 'Q31', 'Q32', 'Q33', 'Q34', 'Q35', 'Q36', 'Q37', 'Q38', 'Q39', 'Q40', 'Q41', 'Q42',
	  'Q43', 'Q44', 'Q45', 'Q46', 'Q47', 'Q48', 'Q49', 'Q50', 'Q51', 'Q52', 'Q53', 'Q55', 'Q56', 'Q57', 'Q58', 'Q59', 'Q60', 'Q61', 'Q62', 
	  'Q63', 'Q64', 'Q65', 'Q66', 'Q67', 'Q68', 'Q69', 'Q71', 'Q72', 'Q73', 'Q74', 'Q75', 'Q76', 'Q77', 'Q78', 'Q79', 'Q80', 'Q81', 'Q82', 
	  'Q83', 'Q84', 'Q85', 'Q86', 'Q87', 'Q88', 'Q89', 'Q90', 'Q91', 'Q92', 'Q93', 'Q94', 'Q95', 'Q96', 'Q97', 'Q98', 'Q99', 'Q100', 'Q101',
	  'Q102', 'Q103', 'Q104', 'Q105', 'Q106', 'Q107', 'Q108', 'Q109', 'Q110', 'Q111', 'Q112', 'Q113', 'Q114', 'Q115', 'Q116', 'Q117', 'Q118',
	  'Q119', 'Q120', 'Q121', 'Q122', 'Q123', 'Q124', 'Q125', 'Q126', 'Q127', 'Q128', 'Q129', 'Q130', 'Q132', 'Q133', 'Q134', 'Q135', 'Q136',
	  'Q137', 'Q138', 'Q139', 'Q140', 'Q141', 'Q142', 'Q143', 'Q144', 'Q145', 'Q146', 'Q147', 'Q148', 'Q149', 'Q150', 'Q151', 'Q152', 'Q153',
	  'Q154', 'Q155', 'Q156', 'Q157', 'Q158', 'Q159', 'Q160', 'Username'] 
    			 



var fields_CSV_head =   'Result_Id;Device_Name;Surveyed_Date;Surveyed_Time;Surveyed;End_Date;Average_interview_time38_minutes;' + 
						'Location_Latitude;Location_Longitude;Location_Altitude;Location_Accuracy;Q1;Q2;Q3;Q4;Q5;Q6;Q7;' + 
						'Q8;Q9_1;Q10_1;Q11_1;Q12_1;Q13_1;Q14_1;Q15_1;Q16_1;Q17_1;Q9_2;Q10_2;Q11_2;Q12_2;Q13_2;' + 
						'Q14_2;Q15_2;Q16_2;Q17_2;Q9_3;Q10_3;Q11_3;Q12_3;Q13_3;Q14_3;Q15_3;Q16_3;Q17_3;Q9_4;Q10_4;' + 
						'Q11_4;Q12_4;Q13_4;Q14_4;Q15_4;Q16_4;Q17_4;Q9_5;Q10_5;Q11_5;Q12_5;Q13_5;Q14_5;Q15_5;Q16_5;' +
						'Q17_5;Q9_6;Q10_6;Q11_6;Q12_6;Q13_6;Q14_6;Q15_6;Q16_6;Q17_6;Q18;Q19;Q20;Q21;Q22;Q23;' + 
						'Q24;Q25;Q26;Q27;Q28;Q29;Q30;Q31;Q32;Q33;Q34;Q35;Q36;Q37;Q38;Q39;Q40;Q41;Q42;' +
						'Q43;Q44;Q45;Q46;Q47;Q48;Q49;Q50;Q51;Q52;Q53;Q55;Q56;Q57;Q58;Q59;Q60;Q61;Q62;' + 
						'Q63;Q64;Q65;Q66;Q67;Q68;Q69;Q71;Q72;Q73;Q74;Q75;Q76;Q77;Q78;Q79;Q80;Q81;Q82;' + 
						'Q83;Q84;Q85;Q86;Q87;Q88;Q89;Q90;Q91;Q92;Q93;Q94;Q95;Q96;Q97;Q98;Q99;Q100;Q101;' +
						'Q102;Q103;Q104;Q105;Q106;Q107;Q108;Q109;Q110;Q111;Q112;Q113;Q114;Q115;Q116;Q117;Q118;' +
						'Q119;Q120;Q121;Q122;Q123;Q124;Q125;Q126;Q127;Q128;Q129;Q130;Q132;Q133;Q134;Q135;Q136;' +
						'Q137;Q138;Q139;Q140;Q141;Q142;Q143;Q144;Q145;Q146;Q147;Q148;Q149;Q150;Q151;Q152;Q153;' +
						'Q154;Q155;Q156;Q157;Q158;Q159;Q160;Username;\r\n';

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
	var DBbcoming_merfi_survey_data = new PouchDB(remote_couchdb + 'bcoming_merfi_guinea_survey_data' + debug);
} else {
	var DBbcoming_merfi_survey_data = new PouchDB('bcoming_merfi_guinea_survey_data' + debug);
};

var tab_bcoming_merfi_survey_data = new Array();
var tab = new Array();


DBbcoming_merfi_survey_data.allDocs({  		
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
   				
   				obj.Result_Id = row.doc.Result_Id; 
				obj.Device_Name = row.doc.Device_Name; 
				obj.Surveyed_Date = row.doc.Surveyed_Date; 
				obj.Surveyed_Time = row.doc.Surveyed_Time; 
				obj.Surveyed = row.doc.Surveyed; 
				obj.End_Date = row.doc.End_Date; 
				obj.Average_interview_time38_minutes = row.doc.Average_interview_time38_minutes; 
			  	obj.Location_Latitude = row.doc.Location_Latitude;
			  	obj.Location_Longitude = row.doc.Location_Longitude;
			  	obj.Location_Altitude = row.doc.Location_Altitude;
			  	obj.Location_Accuracy = row.doc.Location_Accuracy;
			  	obj.Q1 = row.doc.Q1;
			  	obj.Q2 = row.doc.Q2;
			  	obj.Q3 = row.doc.Q3;
			  	obj.Q4 = row.doc.Q4;
			  	obj.Q5 = row.doc.Q5;
			  	obj.Q6 = row.doc.Q6;
			  	obj.Q7 = row.doc.Q7;
			  	obj.Q8 = row.doc.Q8; 
				obj.Q9_1 = row.doc.Q9_1; 
				obj.Q10_1 = row.doc.Q10_1;
				obj.Q11_1 = row.doc.Q11_1;
				obj.Q12_1 = row.doc.Q12_1; 
				obj.Q13_1 = row.doc.Q13_1; 
				obj.Q14_1 = row.doc.Q14_1; 
				obj.Q15_1 = row.doc.Q15_1; 
				obj.Q16_1 = row.doc.Q16_1; 
				obj.Q17_1 = row.doc.Q17_1; 
				obj.Q9_2 = row.doc.Q9_2; 
				obj.Q10_2 = row.doc.Q10_2; 
				obj.Q11_2 = row.doc.Q11_2; 
				obj.Q12_2 = row.doc.Q12_2; 
				obj.Q13_2 = row.doc.Q13_2;
				obj.Q14_2 = row.doc.Q14_2;
				obj.Q15_2 = row.doc.Q15_2; 
				obj.Q16_2 = row.doc.Q16_2; 
				obj.Q17_2 = row.doc.Q17_2;
				obj.Q9_3 = row.doc.Q9_3; 
				obj.Q10_3 = row.doc.Q10_3; 
				obj.Q11_3 = row.doc.Q11_3; 
				obj.Q12_3 = row.doc.Q12_3; 
				obj.Q13_3 = row.doc.Q13_3; 
				obj.Q14_3 = row.doc.Q14_3; 
				obj.Q15_3 = row.doc.Q15_3; 
				obj.Q16_3 = row.doc.Q16_3; 
				obj.Q17_3 = row.doc.Q17_3; 
				obj.Q9_4 = row.doc.Q9_4; 
				obj.Q10_4 = row.doc.Q10_4; 
				obj.Q11_4 = row.doc.Q11_4; 
				obj.Q12_4 = row.doc.Q12_4;
				obj.Q13_4 = row.doc.Q13_4; 
				obj.Q14_4 = row.doc.Q14_4; 
				obj.Q15_4 = row.doc.Q15_4; 
				obj.Q16_4 = row.doc.Q16_4; 
				obj.Q17_4 = row.doc.Q17_4; 
				obj.Q9_5 = row.doc.Q9_5; 
				obj.Q10_5 = row.doc.Q10_5; 
				obj.Q11_5 = row.doc.Q11_5; 
				obj.Q12_5 = row.doc.Q12_5; 
				obj.Q13_5 = row.doc.Q13_5; 
				obj.Q14_5 = row.doc.Q14_5; 
				obj.Q15_5 = row.doc.Q15_5; 
				obj.Q16_5 = row.doc.Q16_5; 
				obj.Q17_5 = row.doc.Q17_5; 
				obj.Q9_6 = row.doc.Q9_6; 
				obj.Q10_6 = row.doc.Q10_6; 
				obj.Q11_6 = row.doc.Q11_6; 
				obj.Q12_6 = row.doc.Q12_6; 
				obj.Q13_6 = row.doc.Q13_6; 
				obj.Q14_6 = row.doc.Q14_6; 
				obj.Q15_6 = row.doc.Q15_6; 
				obj.Q16_6 = row.doc.Q16_6; 
				obj.Q17_6 = row.doc.Q17_6; 
				obj.Q18 = row.doc.Q18;
				obj.Q19 = row.doc.Q19; 
				obj.Q20 = row.doc.Q20;
				obj.Q21 = row.doc.Q21; 
				obj.Q22 = row.doc.Q22; 
				obj.Q23 = row.doc.Q23; 
				obj.Q24 = row.doc.Q24; 
				obj.Q25 = row.doc.Q25; 
				obj.Q26 = row.doc.Q26; 
				obj.Q27 = row.doc.Q27; 
				obj.Q28 = row.doc.Q28; 
				obj.Q29 = row.doc.Q29;
				obj.Q30 = row.doc.Q30; 
				obj.Q31 = row.doc.Q31; 
				obj.Q32 = row.doc.Q32;
				obj.Q33 = row.doc.Q33;
				obj.Q34 = row.doc.Q34;
				obj.Q35 = row.doc.Q35;
				obj.Q36 = row.doc.Q36;
				obj.Q37 = row.doc.Q37;
				obj.Q38 = row.doc.Q38;
				obj.Q39 = row.doc.Q39;
				obj.Q40 = row.doc.Q40;
				obj.Q41 = row.doc.Q41;
				obj.Q42 = row.doc.Q42; 
				obj.Q43 = row.doc.Q43; 
				obj.Q44 = row.doc.Q44; 
				obj.Q45 = row.doc.Q45; 
				obj.Q46 = row.doc.Q46; 
				obj.Q47 = row.doc.Q47; 
				obj.Q48 = row.doc.Q48; 
				obj.Q49 = row.doc.Q49; 
				obj.Q50 = row.doc.Q50; 
				obj.Q51 = row.doc.Q51;
				obj.Q52 = row.doc.Q52; 
				obj.Q53 = row.doc.Q53; 
				obj.Q55 = row.doc.Q55; 
				obj.Q56 = row.doc.Q56; 
				obj.Q57 = row.doc.Q57; 
				obj.Q58 = row.doc.Q58; 
				obj.Q59 = row.doc.Q59; 
				obj.Q60 = row.doc.Q60; 
				obj.Q61 = row.doc.Q61; 
				obj.Q62 = row.doc.Q62; 
				obj.Q63 = row.doc.Q63; 
				obj.Q64 = row.doc.Q64; 
				obj.Q65 = row.doc.Q65; 
				obj.Q66 = row.doc.Q66; 
				obj.Q67 = row.doc.Q67; 
				obj.Q68 = row.doc.Q68; 
				obj.Q69 = row.doc.Q69; 
				obj.Q71 = row.doc.Q71; 
				obj.Q72 = row.doc.Q72; 
				obj.Q73 = row.doc.Q73; 
				obj.Q74 = row.doc.Q74; 
				obj.Q75 = row.doc.Q75; 
				obj.Q76 = row.doc.Q76; 
				obj.Q77 = row.doc.Q77; 
				obj.Q78 = row.doc.Q78;
				obj.Q79 = row.doc.Q79; 
				obj.Q80 = row.doc.Q80; 
				obj.Q81 = row.doc.Q81; 
				obj.Q82 = row.doc.Q82; 
				obj.Q83 = row.doc.Q83; 
				obj.Q84 = row.doc.Q84; 
				obj.Q85 = row.doc.Q85; 
				obj.Q86 = row.doc.Q86; 
				obj.Q87 = row.doc.Q87; 
				obj.Q88 = row.doc.Q88; 
				obj.Q89 = row.doc.Q89; 
				obj.Q90 = row.doc.Q90; 
				obj.Q91 = row.doc.Q91; 
				obj.Q92 = row.doc.Q92; 
				obj.Q93 = row.doc.Q93; 
				obj.Q94 = row.doc.Q94; 
				obj.Q95 = row.doc.Q95; 
				obj.Q96 = row.doc.Q96; 
				obj.Q97 = row.doc.Q97; 
				obj.Q98 = row.doc.Q98; 
				obj.Q99 = row.doc.Q99; 
				obj.Q100 = row.doc.Q100; 
				obj.Q101 = row.doc.Q101; 
				obj.Q102 = row.doc.Q102; 
				obj.Q103 = row.doc.Q103; 
				obj.Q104 = row.doc.Q104; 
				obj.Q105 = row.doc.Q105; 
				obj.Q106 = row.doc.Q106; 
				obj.Q107 = row.doc.Q107; 
				obj.Q108 = row.doc.Q108; 
				obj.Q109 = row.doc.Q109; 
				obj.Q110 = row.doc.Q110;
				obj.Q111 = row.doc.Q111;
				obj.Q112 = row.doc.Q112; 
				obj.Q113 = row.doc.Q113; 
				obj.Q114 = row.doc.Q114; 
				obj.Q115 = row.doc.Q115; 
				obj.Q116 = row.doc.Q116; 
				obj.Q117 = row.doc.Q117; 
				obj.Q118 = row.doc.Q118; 
				obj.Q119 = row.doc.Q119; 
				obj.Q120 = row.doc.Q120;
				obj.Q121 = row.doc.Q121;
				obj.Q122 = row.doc.Q122;
				obj.Q123 = row.doc.Q123;
				obj.Q124 = row.doc.Q124; 
				obj.Q125 = row.doc.Q125; 
				obj.Q126 = row.doc.Q126; 
				obj.Q127 = row.doc.Q127; 
				obj.Q128 = row.doc.Q128; 
				obj.Q129 = row.doc.Q129; 
				obj.Q130 = row.doc.Q130; 
				obj.Q132 = row.doc.Q132; 
				obj.Q133 = row.doc.Q133; 
				obj.Q134 = row.doc.Q134;
				obj.Q135 = row.doc.Q135; 
				obj.Q136 = row.doc.Q136; 
				obj.Q137 = row.doc.Q137; 
				obj.Q138 = row.doc.Q138; 
				obj.Q139 = row.doc.Q139; 
				obj.Q140 = row.doc.Q140; 
				obj.Q141 = row.doc.Q141; 
				obj.Q142 = row.doc.Q142; 
				obj.Q143 = row.doc.Q143;
				obj.Q144 = row.doc.Q144; 
				obj.Q145 = row.doc.Q145; 
				obj.Q146 = row.doc.Q146; 
				obj.Q147 = row.doc.Q147; 
				obj.Q148 = row.doc.Q148; 
				obj.Q149 = row.doc.Q149; 
				obj.Q150 = row.doc.Q150; 
				obj.Q151 = row.doc.Q151; 
				obj.Q152 = row.doc.Q152; 
				obj.Q153 = row.doc.Q153; 
				obj.Q154 = row.doc.Q154; 
				obj.Q155 = row.doc.Q155; 
				obj.Q156 = row.doc.Q156; 
				obj.Q157 = row.doc.Q157; 
				obj.Q158 = row.doc.Q158; 
				obj.Q159 = row.doc.Q159; 
				obj.Q160 = row.doc.Q160;
				
   				obj.Username = row.doc.Username 

   				tab_bcoming_merfi_survey_data.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBbcoming_merfi_survey_data.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addBcoming_merfi_survey_dataRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
			
				row.Result_Id + ';' + 
				row.Device_Name + ';' + 
				row.Surveyed_Date + ';' +
				row.Surveyed_Time + ';' + 
				row.Surveyed + ';' + 
				row.End_Date + ';' + 
				row.Average_interview_time38_minutes + ';' +
			  	row.Location_Latitude + ';' +
			  	row.Location_Longitude + ';' +
			  	row.Location_Altitude + ';' +
			  	row.Location_Accuracy + ';' +
			  	row.Q1 + ';' +
			  	row.Q2 + ';' +
			  	row.Q3 + ';' +
			  	row.Q4 + ';' +
			  	row.Q5 + ';' +
			  	row.Q6 + ';' +
			  	row.Q7 + ';' +
			  	row.Q8 + ';' + 
				row.Q9_1 + ';' + 
				row.Q10_1 + ';' +
				row.Q11_1 + ';' +
				row.Q12_1 + ';' + 
				row.Q13_1 + ';' + 
				row.Q14_1 + ';' + 
				row.Q15_1 + ';' + 
				row.Q16_1 + ';' + 
				row.Q17_1 + ';' + 
				row.Q9_2 + ';' + 
				row.Q10_2 + ';' + 
				row.Q11_2 + ';' + 
				row.Q12_2 + ';' + 
				row.Q13_2 + ';' +
				row.Q14_2 + ';' +
				row.Q15_2 + ';' + 
				row.Q16_2 + ';' + 
				row.Q17_2 + ';' +
				row.Q9_3 + ';' + 
				row.Q10_3 + ';' + 
				row.Q11_3 + ';' + 
				row.Q12_3 + ';' + 
				row.Q13_3 + ';' + 
				row.Q14_3 + ';' + 
				row.Q15_3 + ';' + 
				row.Q16_3 + ';' +
				row.Q17_3 + ';' + 
				row.Q9_4 + ';' + 
				row.Q10_4 + ';' +
				row.Q11_4 + ';' +
				row.Q12_4 + ';' +
				row.Q13_4 + ';' + 
				row.Q14_4 + ';' + 
				row.Q15_4 + ';' + 
				row.Q16_4 + ';' + 
				row.Q17_4 + ';' + 
				row.Q9_5 + ';' + 
				row.Q10_5 + ';' + 
				row.Q11_5 + ';' + 
				row.Q12_5 + ';' + 
				row.Q13_5 + ';' +
				row.Q14_5 + ';' + 
				row.Q15_5 + ';' + 
				row.Q16_5 + ';' +
				row.Q17_5 + ';' +
				row.Q9_6 + ';' + 
				row.Q10_6 + ';' + 
				row.Q11_6 + ';' + 
				row.Q12_6 + ';' + 
				row.Q13_6 + ';' + 
				row.Q14_6 + ';' + 
				row.Q15_6 + ';' +
				row.Q16_6 + ';' + 
				row.Q17_6 + ';' + 
				row.Q18 + ';' +
				row.Q19 + ';' + 
				row.Q20 + ';' +
				row.Q21 + ';' + 
				row.Q22 + ';' + 
				row.Q23 + ';' + 
				row.Q24 + ';' + 
				row.Q25 + ';' +
				row.Q26 + ';' + 
				row.Q27 + ';' + 
				row.Q28 + ';' +
				row.Q29 + ';' +
				row.Q30 + ';' + 
				row.Q31 + ';' + 
				row.Q32 + ';' +
				row.Q33 + ';' +
				row.Q34 + ';' +
				row.Q35 + ';' +
				row.Q36 + ';' +
				row.Q37 + ';' +
				row.Q38 + ';' +
				row.Q39 + ';' +
				row.Q40 + ';' +
				row.Q41 + ';' +
				row.Q42 + ';' + 
				row.Q43 + ';' + 
				row.Q44 + ';' +
				row.Q45 + ';' + 
				row.Q46 + ';' +
				row.Q47 + ';' + 
				row.Q48 + ';' + 
				row.Q49 + ';' + 
				row.Q50 + ';' + 
				row.Q51 + ';' +
				row.Q52 + ';' + 
				row.Q53 + ';' + 
				row.Q55 + ';' + 
				row.Q56 + ';' + 
				row.Q57 + ';' + 
				row.Q58 + ';' + 
				row.Q59 + ';' + 
				row.Q60 + ';' + 
				row.Q61 + ';' + 
				row.Q62 + ';' + 
				row.Q63 + ';' + 
				row.Q64 + ';' + 
				row.Q65 + ';' + 
				row.Q66 + ';' + 
				row.Q67 + ';' + 
				row.Q68 + ';' + 
				row.Q69 + ';' + 
				row.Q71 + ';' + 
				row.Q72 + ';' + 
				row.Q73 + ';' + 
				row.Q74 + ';' + 
				row.Q75 + ';' + 
				row.Q76 + ';' + 
				row.Q77 + ';' + 
				row.Q78 + ';' +
				row.Q79 + ';' + 
				row.Q80 + ';' + 
				row.Q81 + ';' + 
				row.Q82 + ';' + 
				row.Q83 + ';' + 
				row.Q84 + ';' + 
				row.Q85 + ';' + 
				row.Q86 + ';' + 
				row.Q87 + ';' + 
				row.Q88 + ';' + 
				row.Q89 + ';' + 
				row.Q90 + ';' + 
				row.Q91 + ';' + 
				row.Q92 + ';' + 
				row.Q93 + ';' + 
				row.Q94 + ';' + 
				row.Q95 + ';' + 
				row.Q96 + ';' + 
				row.Q97 + ';' + 
				row.Q98 + ';' + 
				row.Q99 + ';' + 
				row.Q100 + ';' + 
				row.Q101 + ';' + 
				row.Q102 + ';' + 
				row.Q103 + ';' + 
				row.Q104 + ';' + 
				row.Q105 + ';' + 
				row.Q106 + ';' + 
				row.Q107 + ';' + 
				row.Q108 + ';' + 
				row.Q109 + ';' + 
				row.Q110 + ';' +
				row.Q111 + ';' +
				row.Q112 + ';' + 
				row.Q113 + ';' + 
				row.Q114 + ';' + 
				row.Q115 + ';' + 
				row.Q116 + ';' + 
				row.Q117 + ';' + 
				row.Q118 + ';' + 
				row.Q119 + ';' + 
				row.Q120 + ';' +
				row.Q121 + ';' +
				row.Q122 + ';' +
				row.Q123 + ';' +
				row.Q124 + ';' + 
				row.Q125 + ';' + 
				row.Q126 + ';' + 
				row.Q127 + ';' + 
				row.Q128 + ';' + 
				row.Q129 + ';' + 
				row.Q130 + ';' + 
				row.Q132 + ';' + 
				row.Q133 + ';' + 
				row.Q134 + ';' +
				row.Q135 + ';' + 
				row.Q136 + ';' + 
				row.Q137 + ';' + 
				row.Q138 + ';' + 
				row.Q139 + ';' + 
				row.Q140 + ';' + 
				row.Q141 + ';' + 
				row.Q142 + ';' + 
				row.Q143 + ';' +
				row.Q144 + ';' + 
				row.Q145 + ';' + 
				row.Q146 + ';' + 
				row.Q147 + ';' + 
				row.Q148 + ';' + 
				row.Q149 + ';' + 
				row.Q150 + ';' + 
				row.Q151 + ';' + 
				row.Q152 + ';' + 
				row.Q153 + ';' + 
				row.Q154 + ';' + 
				row.Q155 + ';' + 
				row.Q156 + ';' +
				row.Q157 + ';' + 
				row.Q158 + ';' + 
				row.Q159 + ';' + 
				row.Q160 + ';' +
			
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
	       		saveAs(blob, "bcoming_merfi_survey_data" + clock.now + ".csv");
	       		document.location.href="import_export.html?table=_bcoming_merfi_guinea_survey_data&type=bcoming_merfi_guinea_survey_data"; 
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
		
		
		

		 
		var res = alasql("SELECT Result_Id, Device_Name, Surveyed_Date, Surveyed_Time, Surveyed, End_Date, Average_interview_time38_minutes, Location_Latitude, Location_Longitude, Location_Altitude, Location_Accuracy, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9_1, Q10_1, Q11_1, Q12_1, Q13_1, Q14_1, Q15_1, Q16_1, Q17_1, Q9_2, Q10_2, Q11_2, Q12_2, Q13_2, Q14_2, Q15_2, Q16_2, Q17_2, Q9_3, Q10_3, Q11_3, Q12_3, Q13_3, Q14_3, Q15_3, Q16_3, Q17_3, Q9_4, Q10_4, Q11_4, Q12_4, Q13_4, Q14_4, Q15_4, Q16_4, Q17_4, Q9_5, Q10_5, Q11_5, Q12_5, Q13_5, Q14_5, Q15_5, Q16_5, Q17_5, Q9_6, Q10_6, Q11_6, Q12_6, Q13_6, Q14_6, Q15_6, Q16_6, Q17_6, Q18, Q19, Q20, Q21, Q22, Q23, Q24, Q25, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33, Q34, Q35, Q36, Q37, Q38, Q39, Q40, Q41, Q42, Q43, Q44, Q45, Q46, Q47, Q48, Q49, Q50, Q51, Q52, Q53, Q55, Q56, Q57, Q58, Q59, Q60, Q61, Q62, Q63, Q64, Q65, Q66, Q67, Q68, Q69, Q71, Q72, Q73, Q74, Q75, Q76, Q77, Q78, Q79, Q80, Q81, Q82, Q83, Q84, Q85, Q86, Q87, Q88, Q89, Q90, Q91, Q92, Q93, Q94, Q95, Q96, Q97, Q98, Q99, Q100, Q101, Q102, Q103, Q104, Q105, Q106, Q107, Q108, Q109, Q110, Q111, Q112, Q113, Q114, Q115, Q116, Q117, Q118, Q119, Q120, Q121, Q122, Q123, Q124, Q125, Q126, Q127, Q128, Q129, Q130, Q132, Q133, Q134, Q135, Q136, Q137, Q138, Q139, Q140, Q141, Q142, Q143, Q144, Q145, Q146, Q147, Q148, Q149, Q150, Q151, Q152, Q153, Q154, Q155, Q156, Q157, Q158, Q159, Q160, Username FROM ? ORDER BY Surveyed_Date", [tab_bcoming_merfi_survey_data] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addBcoming_merfi_survey_dataRecord(row, false);
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
		
		var res = alasql("SELECT Result_Id, Device_Name, Surveyed_Date, Surveyed_Time, Surveyed, End_Date, Average_interview_time38_minutes, Location_Latitude, Location_Longitude, Location_Altitude, Location_Accuracy, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9_1, Q10_1, Q11_1, Q12_1, Q13_1, Q14_1, Q15_1, Q16_1, Q17_1, Q9_2, Q10_2, Q11_2, Q12_2, Q13_2, Q14_2, Q15_2, Q16_2, Q17_2, Q9_3, Q10_3, Q11_3, Q12_3, Q13_3, Q14_3, Q15_3, Q16_3, Q17_3, Q9_4, Q10_4, Q11_4, Q12_4, Q13_4, Q14_4, Q15_4, Q16_4, Q17_4, Q9_5, Q10_5, Q11_5, Q12_5, Q13_5, Q14_5, Q15_5, Q16_5, Q17_5, Q9_6, Q10_6, Q11_6, Q12_6, Q13_6, Q14_6, Q15_6, Q16_6, Q17_6, Q18, Q19, Q20, Q21, Q22, Q23, Q24, Q25, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33, Q34, Q35, Q36, Q37, Q38, Q39, Q40, Q41, Q42, Q43, Q44, Q45, Q46, Q47, Q48, Q49, Q50, Q51, Q52, Q53, Q55, Q56, Q57, Q58, Q59, Q60, Q61, Q62, Q63, Q64, Q65, Q66, Q67, Q68, Q69, Q71, Q72, Q73, Q74, Q75, Q76, Q77, Q78, Q79, Q80, Q81, Q82, Q83, Q84, Q85, Q86, Q87, Q88, Q89, Q90, Q91, Q92, Q93, Q94, Q95, Q96, Q97, Q98, Q99, Q100, Q101, Q102, Q103, Q104, Q105, Q106, Q107, Q108, Q109, Q110, Q111, Q112, Q113, Q114, Q115, Q116, Q117, Q118, Q119, Q120, Q121, Q122, Q123, Q124, Q125, Q126, Q127, Q128, Q129, Q130, Q132, Q133, Q134, Q135, Q136, Q137, Q138, Q139, Q140, Q141, Q142, Q143, Q144, Q145, Q146, Q147, Q148, Q149, Q150, Q151, Q152, Q153, Q154, Q155, Q156, Q157, Q158, Q159, Q160, Username FROM ? ORDER BY Surveyed_Date", [tab_bcoming_merfi_survey_data] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addBcoming_merfi_survey_dataRecord(row, true);
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
	






	


