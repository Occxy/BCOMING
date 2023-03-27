var import_table = localStorage.getItem('import_table'); 
var file = localStorage.getItem('file_import');

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};


var valid_field = 
	['project_code', 'ua_id_pr', 'ua_id_nr', 'ua_id', 'day', 'month', 'year', 'location_code', 'session_code', 'Location', 'locses', 'Session_check', 'sub_order', 'genus_field', 'species_field', 'trap', 'trap_id', 'sex', 'sex_cond', 'weight_g', 'head_body_mm', 'tail_mm', 'embryo_tot', 'ectopar_tot', 'capture_remarks', 'liver_LI', 'spleen_SP', 'kindney_KI', 'lung_LU', 'intestine_IN', 'uterus_UT', 'blood_BL', 'other_tissue_XX', 'eye_EY', 'TE', 'SP', 'KL', 'KD', 'LI', 'FC', 'LU', 'BL', 'TN', 'EY', 'ECTO', 'BR', 'FOET', 'URINE_WHATMAN', 'HI_FORMOL', 'CARCASS_FORMOL', 'Tongue_in_ethanol', 'Swab_Oral', 'Swab_Nasal', 'Swab_Anal', 'Swab_Urogenital', 'BAT_NUMBER1', 'Bat_Reproductive_status', 'Bat_Teeth', 'Bat_Bone_fusion', 'Bat_Age', 'Bat_Forearm_length_mm', 'Bat_Tibia_length_mm', 'Bat_Age_2', 'Bat_Urine', 'Bat_Faeces', 'Bat_Oral_swab', 'Bat_Wing_punch', 'Bat_Blood_filter_paper', 'Bat_ectoparasites', 'Livestock_Age', 'habitat'];



var field = [];
var data = [];
            
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
					fill_tab_datas_BiodivAfreid(line);
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

function fill_tab_datas_BiodivAfreid(file_line) {
	
	
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
		
		search_N_identification_Recursif_BiodivAfreid(/*DB,*/ lines_length-1, 0, -1, '', row);
	};
};

function search_N_identification_Recursif_BiodivAfreid(/*localDB,*/ i, j, k, N_site, row) {
	
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'bcoming' + import_table + debug);
	} else {
		var DB = new PouchDB('bcoming' + import_table + debug);
	};
	
	if (i > 0) {

		if (typeof tab[i] !== "undefined") {
			
			
			ua_id = tab[i][1];
			
			DB.find({
		       	selector: {ua_id: ua_id}
			}).then(function (result) {
		    	
		    	if (result.docs.length > 0) {
		    		move();
		    		row++;
		    		//if (record_change_bat_capturees(result, rowContent_length)) {
		    			var id = result.docs[0]._id;
		    			
		    		
		    			
		    			put_with_id_BiodivAfreid(id, i);
		    			
		    			for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
							var rowContent = tab[i][rowCountContent]
							//addValueInTableReferenceMissions(rowCountContent, rowContent);
		    			};
						
						//addEspeceInTableReferenceBatCapturees(i);
		    			
		    			search_N_identification_Recursif_BiodivAfreid(i-1);
		    			//addEspeceInTableReferenceBatCapturees(i);
		    			
				    /*} else {
		    			search_N_identification_Recursif_CS(i-1);
				    };*/
		    	} else {
		    		
		    		var new_doc = {};
		    		
		    		/*var numero_individu_string = extraireNombre(N_identification_CS);
		    		var numero_individu = Number(numero_individu_string);*/
		    		
		    		var day = '';
		    		var month = '';
		    		var year = '';
		    		var date = '';
		    		
		    		for(var rowCountContent = 0; rowCountContent < rowContent_length; rowCountContent++) {
						var name_field = field[rowCountContent];
						
						if  (rowCountContent == 4) {
							if (tab[i][rowCountContent].length == '1') {
								day = '0' + tab[i][rowCountContent];	
							} else {
								day = tab[i][rowCountContent];
							}
			    		} else 	if (rowCountContent == 5) {
			    			if (tab[i][rowCountContent].length == '1') {
								month = '0' + tab[i][rowCountContent];	
							} else {
								month = tab[i][rowCountContent];
							}
			    		} else if (rowCountContent == 6) {
							year = tab[i][rowCountContent];
							if (day != '') {
								date = year + '/' + month + '/' + day;
							}
						}   else {
							var rowContent = tab[i][rowCountContent]
						}
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
						if (rowCountContent == 6) {
							new_doc['date'] = date;
							//alert(date);
						} else if ((rowCountContent != 4) && (rowCountContent != 5)) {
							new_doc[name_field] = rowContent;
						}
							
							//addValueInTableReferenceMissions(rowCountContent, rowContent);
						//};
					};
					
					//addEspeceInTableReferenceBatCapturees(i);
					
					var id = uuid();
					new_doc._id = id;
					new_doc.Username = localStorage.getItem('loginUsername');
					
					
					put_new_id_BiodivAfreid(new_doc/*, i*/);
					
					move();
					row++;
					
					search_N_identification_Recursif_BiodivAfreid(/*localDB, */i-1);
		    		
		    	}
		    }).catch(function (err) {
		       	console.log(err);
		    });
			
			console.log("full - " + i);
		} else {
			console.log("empty - " + i);
			move();
			row++;
			
			search_N_identification_Recursif_BiodivAfreid(/*localDB, */i-1);
			
		};
	} else {
		
		synchronizeBiodivAfreid();
		/*if (localStorage.getItem('web') !== 'oui') {
			synchronizeEspece('espece');
		}*/
	};
};

function put_with_id_BiodivAfreid(id, i) {
	
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
						synchronizeCamAcross();
					};
				};*/
				//search_N_identification_Recursif_CamAcross(/*localDB, */i-1)
			});
		});
	}).catch(function (err) {
       	console.log(err);
       	console.log('error ' + id);
    });
};

function put_new_id_BiodivAfreid(doc/*, i*/) {
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

function synchronizeBiodivAfreid() {
	
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
	label.innerHTML = 'Importation du fichier réussie !';
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




