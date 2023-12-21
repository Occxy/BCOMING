var import_table = localStorage.getItem('import_table'); 
var file = localStorage.getItem('file_import');

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};



var valid_field = 
	['Result_Id', 'Device_Name', 'Surveyed_Date', 'Surveyed_Time', 'Surveyed', 'End_Date', 'Average_interview_time38_minutes', 
	 'Location_Latitude', 'Location_Longitude', 'Location_Altitude', 'Location_Accuracy', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 
	 'Q9_1', 'Q10_1', 'Q11_1', 'Q12_1', 'Q13_1', 'Q14_1', 'Q15_1', 'Q16_1', 'Q17_1', 'Q9_2', 'Q10_2', 'Q11_2', 'Q12_2', 'Q13_2', 'Q14_2', 'Q15_2', 'Q16_2', 
	 'Q17_2', 'Q9_3', 'Q10_3', 'Q11_3', 'Q12_3', 'Q13_3', 'Q14_3', 'Q15_3', 'Q16_3', 'Q17_3', 'Q9_4', 'Q10_4', 'Q11_4', 'Q12_4', 'Q13_4', 
	 'Q14_4', 'Q15_4', 'Q16_4', 'Q17_4', 'Q9_5', 'Q10_5', 'Q11_5', 'Q12_5', 'Q13_5', 'Q14_5', 'Q15_5', 'Q16_5', 'Q17_5', 'Q9_6', 'Q10_6', 
	 'Q11_6', 'Q12_6', 'Q13_6', 'Q14_6', 'Q15_6', 'Q16_6', 'Q17_6', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22', 'Q23', 'Q24', 'Q25', 'Q26', 'Q27', 
	 'Q28', 'Q29', 'Q30', 'Q31', 'Q32', 'Q33', 'Q34', 'Q35', 'Q36', 'Q37', 'Q38', 'Q39', 'Q40', 'Q41', 'Q42', 'Q43', 'Q44', 'Q45', 'Q46', 
	 'Q47', 'Q48', 'Q49', 'Q50', 'Q51', 'Q52', 'Q53', 'Q55', 'Q56', 'Q57', 'Q58', 'Q59', 'Q60', 'Q61', 'Q62', 'Q63', 'Q64', 'Q65', 'Q66', 'Q67', 
	 'Q68', 'Q69', 'Q71', 'Q72', 'Q73', 'Q74', 'Q75', 'Q76', 'Q77', 'Q78', 'Q79', 'Q80', 'Q81', 'Q82', 'Q83', 'Q84', 'Q85', 'Q86', 'Q87', 'Q88', 
	 'Q89', 'Q90', 'Q91', 'Q92', 'Q93', 'Q94', 'Q95', 'Q96', 'Q97', 'Q98', 'Q99', 'Q100', 'Q101', 'Q102', 'Q103', 'Q104', 'Q105', 'Q106', 'Q107', 
	 'Q108', 'Q109', 'Q110', 'Q111', 'Q112', 'Q113', 'Q114', 'Q115', 'Q116', 'Q117', 'Q118', 'Q119', 'Q120', 'Q121', 'Q122', 'Q123', 'Q124', 
	 'Q125', 'Q126', 'Q127', 'Q128', 'Q129', 'Q130', 'Q132', 'Q133', 'Q134', 'Q135', 'Q136', 'Q137', 'Q138', 'Q139', 'Q140', 'Q141', 'Q142', 
	 'Q143', 'Q144', 'Q145', 'Q146', 'Q147', 'Q148', 'Q149', 'Q150', 'Q151', 'Q152', 'Q153', 'Q154', 'Q155', 'Q156', 'Q157', 'Q158', 'Q159', 'Q160'];


//45596819
var field = [];
var data = [];
            //45563504
var lines = file.trim().split("\n");
var lines_length = lines.length;
var tab = new Array();

var tab_max = 0;
var progressbar_count = 0;
var step = 0;
var width = 0;

var rowContent_length;

var i = 0;

var myTab = new Array();

var rowContent = [];


var row = 0;

importation();

function importation() {
	disable_li();
	disable_button();
	
	if (lines_length > 1) {
	
		var row = 0;
		
		field = lines[0].trim().split(";");
		rowContent_length = field.length;
		
		//verif valid template
		if (fields_is_valid()) {
			
			//if (is_only_one_country()) {
			
				tab_max = lines_length-1;
				
				for (var line = 1; line < lines_length; line++) {
					
					rowContent = lines[line].trim().split(";");
					//console.log(rowContent[0]);
					fill_tab_datas_MerfiGuineaSurveyData(line);
				};
			/*} else {
				failure_fields("Le fichier d'importation ne doit concerner qu'un seul et même pays !");
			};	*/
			
		} else {
			failure_fields("Vérifier que les noms des champs sont valides et bien placés !");
		};	
	};
}

function fields_is_valid() {
	for (var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
		if (field[rowCountContent] != valid_field[rowCountContent]) {
			console.log(field[rowCountContent] + '-' + valid_field[rowCountContent]);	
			if (field[rowCountContent] != '') {
				return false;
			}			
		};
	};
	return true;
};

function is_only_one_country() {
	
	var i_pays = 2;

	
	var rowContent = lines[1].trim().split(";");
	var country = rowContent[i_pays]; 
	
	for (var line = 2; line < lines_length; line++) {
		rowContent = lines[line].trim().split(";");
		if (rowContent[i_pays] != country) {
			return false;
		};
	};
	return true;
};

function fill_tab_datas_MerfiGuineaSurveyData(file_line) {
	
	
	tab[file_line] = new Array();
	
	for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
		tab[file_line][rowCountContent] = rowContent[rowCountContent];
		
	};
	
	if (file_line == lines_length - 1) {
		show_progress_bar();
		
		progressbar_count = Math.round(lines_length / 20);
		step = 100 / progressbar_count; 
		step = step / 2;
		width = 0;
		
		/*if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + import_table + debug);
		} else {
			var DB = new PouchDB(import_table + debug);
		};*/
				
		var row = []; 
		row.length = lines_length;
		
		search_N_identification_Recursif_MerfiGuineaSurveyData(/*DB,*/ lines_length-1, 0, -1, '', row);
	};
};

function search_N_identification_Recursif_MerfiGuineaSurveyData(/*localDB,*/ i, j, k, N_site, row) {
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'bcoming' + import_table + debug);
	} else {
		var DB = new PouchDB('bcoming' + import_table + debug);
	};
	
	if (i > 0) {

		if (typeof tab[i] !== "undefined") {
			
			
			Result_Id = tab[i][0];
			
			DB.find({
		       	selector: {Result_Id: Result_Id}
			}).then(function (result) {
		    	
		    	if (result.docs.length > 0) {
		    		move();
		    		row++;
		    		//if (record_change_bat_capturees(result, rowContent_length)) {
		    			var id = result.docs[0]._id;
		    			
		    		
		    			
		    			put_with_id_MerfiGuineaSurveyData(id, i);
		    			
		    			for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
							var rowContent = tab[i][rowCountContent]
							//addValueInTableReferenceMissions(rowCountContent, rowContent);
		    			};
						
						//addEspeceInTableReferenceBatCapturees(i);
		    			
		    			search_N_identification_Recursif_MerfiGuineaSurveyData(i-1);
		    			//addEspeceInTableReferenceBatCapturees(i);
		    			
				    /*} else {
		    			search_N_identification_Recursif_CS(i-1);
				    };*/
		    	} else {
		    		
		    		var new_doc = {};
		    		
		    		/*var numero_individu_string = extraireNombre(N_identification_CS);
		    		var numero_individu = Number(numero_individu_string);*/
		    		
		    		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
						var name_field = field[rowCountContent];
						
						/*if ((rowCountContent == 2) && (tab[i][rowCountContent] == "Guinee")) {
							var rowContent = 'Guinée'
						} else {*/
							var rowContent = tab[i][rowCountContent]
						//}
						//var rowContent = tab[/*numero_individu*/i][rowCountContent]
						
						console.log(name_field + ' : ' + rowContent)
						
						
						//trim pour Famille/Genre/Espèce
						/*if (rowCountContent > 17 && rowCountContent < 27) {
							if ((rowCountContent === 18) || (rowCountContent === 21) || (rowCountContent === 24)) {
								new_doc[name_field] = rowContent.trim().toUpperCase();
							} else {
								new_doc[name_field] = rowContent.trim();	
							};
						} else {*/
							new_doc[name_field] = rowContent;
							
							//addValueInTableReferenceMissions(rowCountContent, rowContent);
						//};
					};
					
					//addEspeceInTableReferenceBatCapturees(i);
					
					var id = uuid();
					new_doc._id = id;
					new_doc.Username = localStorage.getItem('loginUsername');
					
					
					put_new_id_MerfiGuineaSurveyData(new_doc/*, i*/);
					
					move();
					row++;
					
					search_N_identification_Recursif_MerfiGuineaSurveyData(/*localDB, */i-1);
		    		
		    	}
		    }).catch(function (err) {
		       	console.log(err);
		    });
			
			console.log("full - " + i);
		} else {
			console.log("empty - " + i);
			move();
			row++;
			
			search_N_identification_Recursif_MerfiGuineaSurveyData(/*localDB, */i-1);
			
		};
	} else {
		
		synchronizeMerfiGuineaSurveyData();
		/*if (localStorage.getItem('web') !== 'oui') {
			synchronizeEspece('espece');
		}*/
	};
};

function put_with_id_MerfiGuineaSurveyData(id, i) {
	
	var sN_identification;
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'bcoming' + import_table + debug);
	} else {
		var DB = new PouchDB('bcoming' + import_table + debug);
	};
	DB.get(id).then(function (doc) {
		
		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
			var name_field = field[rowCountContent];
			
			/*if ((rowCountContent == 2) && (tab[i][rowCountContent] == "Guinee")) {
				var rowContent = 'Guinée'
			} else {*/
				var rowContent = tab[i][rowCountContent]
			
			//}
			
			//addValueInTableReferenceBatCapturees(rowCountContent, rowContent);
						
			//trim pour Famille/Genre/Espèce
			/*if (rowCountContent > 17 && rowCountContent < 27) {	
				if ((rowCountContent === 18) || (rowCountContent === 21) || (rowCountContent === 24)) {
					doc[name_field] = rowContent.trim().toUpperCase();
				} else {
					doc[name_field] = rowContent.trim();	
				};
			} else {*/
				
				doc[name_field] = rowContent;
			//};
				doc.Username = localStorage.getItem('loginUsername');
				

		};
		
		//addEspeceInTableReferenceBatCapturees(i);
		
		return DB.put(doc).then(function () {
			return DB.get(id).then(function () {
				/*if (i == tab_max) {
					if (navigator.onLine) {
						synchronizeMerfiGuineaSurveyData();
					};
				};*/
				//search_N_identification_Recursif_MerfiGuineaSurveyData(/*localDB, */i-1)
			});
		});
	}).catch(function (err) {
       	console.log(err);
       	console.log('error ' + id);
    });
};

function put_new_id_MerfiGuineaSurveyData(doc/*, i*/) {
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'bcoming' + import_table + debug);
	} else {
		var DB = new PouchDB('bcoming' + import_table + debug);
		
	};
	DB.put(doc).then(function () {
		console.log(doc);
	});
};

function synchronizeMerfiGuineaSurveyData() {
	
	//alert('synchronizeBatNoninvasives');
	
	
	if (localStorage.getItem('web') !== 'oui') {
		var localDB = new PouchDB('bcoming' + import_table + debug);
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var remoteDB = new PouchDB(remote_couchdb + 'bcoming' + import_table + debug, {skip_setup: true});
		localDB.sync(remoteDB, {batch_size: 20}).on('complete', (info) => {              
			hide_progress_bar();
			enable_li();
			enable_button();
			success();
		}).on('change', (change) => {
			move_2();
		}).on('error', function (err) {
			alert('alert ' + import_table + ': ' + JSON.stringify(err));
			window.location = 'login.html';
		});
	} else {
		hide_progress_bar();
		enable_li();
		enable_button();
		success();
	}
	
	
		
	console.log('synchronized !');
};


function record_exists(result) {
    var doc = result.docs[0];
	var num_string = extraireNombre(result.docs[0].AnimalCode);
	if (num_string !== null) {
		return true
	} else {
		return false
	};
};



function extraireNombre(str) { 
	return str.match(/[0-9]+/g)
};

function move() {
	i++;
	if (i == 20) { 
		var bar = document.getElementById("myBar");
    	width = width + step;
    	bar.style.width = width + '%';
    	i = 0;
    };
};

function move_2() {
    var elem = document.getElementById("myBar");
    width = width + step;
    elem.style.width = width + '%';
};

function hide_progress_bar() {		
	var elem = document.getElementById("child");
	elem.style.display = "none";
};

function show_progress_bar() {		
	var elem = document.getElementById("child");
	elem.style.display="block";
	var label =  document.getElementById("progress_label");
	label.innerHTML = 'Importation des données...';
};

function success() {
	var elem = document.getElementById("success_label");
	elem.style.display = "block";
	var label =  document.getElementById("success");
	label.style.color = "green";
	label.innerHTML = 'Successful file import!';
};

function failure_fields(msg) {
	var elem = document.getElementById("success_label");
	elem.style.display = "block";
	var label =  document.getElementById("success");
	label.style.color = "red";
	label.innerHTML = msg;
	enable_li();
	enable_button();
};

function hide_success() {	
	var elem = document.getElementById("success_label");
	elem.style.display = "none";
};

function disable_button() {
	var button_open =  document.getElementById("button_open");
	button_open.classList.add("noclick");
	var button_download =  document.getElementById("button_download");
	button_download.classList.add("noclick");
};

function enable_button() {
	var button_open =  document.getElementById("button_open");
	button_open.classList.remove("noclick");
	var button_download =  document.getElementById("button_download");
	button_download.classList.remove("noclick");
};




