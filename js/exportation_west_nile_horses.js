var fields = 
	

    			['Date_prelevement', 'Nom', 'N_Sire', 'Organism', 'Sexe', 'Club', 'Lon', 'Lat', 'N_de_suivi', 'N_de_res', 'Essai', 'Resultat', 
    				'Confirmation', 'Resultat_conf', 'Seroconversion_prev', 'Changer_status', 'Essai_IgM', 'Resultat_IgM', 'Username'] 
    			 
    		


var fields_CSV_head =   'Date_prelevement;Nom;N_Sire;Organism;Sexe;Club;Lon;Lat;N_de_suivi;N_de_res;Essai;Resultat;' + 
						'Confirmation;Resultat_conf;Seroconversion_prev;Changer_status;Essai_IgM;Resultat_IgM;Username;\r\n';

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
	var DBwest_nile_horses = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBwest_nile_horses = new PouchDB('bcoming' + nom_table + debug);
};

var tab_west_nile_horses = new Array();
var tab = new Array();


DBwest_nile_horses.allDocs({  		
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
   				
   				
   				obj.Date_prelevement = row.doc.Date_prelevement 
   				obj.Nom = row.doc.Nom 
   				obj.N_Sire = row.doc.N_Sire 
   				obj.Organism = row.doc.Organism 
   				obj.Sexe = row.doc.Sexe 
   				obj.Club = row.doc.Club 
   				obj.Lon = row.doc.Lon 
   				obj.Lat = row.doc.Lat 
   				obj.N_de_suivi = row.doc.N_de_suivi 
   				obj.N_de_res = row.doc.N_de_res 
   				obj.Essai = row.doc.Essai  
   				obj.Resultat = row.doc.Resultat 
				obj.Confirmation = row.doc.Confirmation 
				obj.Resultat_conf = row.doc.Resultat_conf 
				obj.Seroconversion_prev = row.doc.Seroconversion_prev 
				obj.Changer_status = row.doc.Changer_status 
				obj.Essai_IgM = row.doc.Essai_IgM 
				obj.Resultat_IgM = row.doc.Resultat_IgM 
				obj.Username = row.doc.Username

   				tab_west_nile_horses.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBwest_nile_horses.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addWest_nile_horsesRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
			
				row.Date_prelevement + ';' + 
				row.Nom + ';' + 
				row.N_Sire + ';' + 
				row.Organism + ';' + 
				row.Sexe + ';' + 
				row.Club + ';' + 
				row.Lon + ';' + 
				row.Lat + ';' + 
				row.N_de_suivi + ';' + 
				row.N_de_res + ';' + 
				row.Essai + ';' +   
				row.Resultat + ';' + 
				row.Confirmation + ';' +  
				row.Resultat_conf + ';' + 
				row.Seroconversion_prev + ';' + 
				row.Changer_status + ';' + 
				row.Essai_IgM + ';' + 
				row.Resultat_IgM + ';' + 				
				
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
	       		saveAs(blob, "west_nile_horses" + clock.now + ".csv");
	       		document.location.href="import_export.html?table=_west_nile_horses&type=west_nile_horses"; 
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
		
		
		var res = alasql("SELECT Date_prelevement, Nom, N_Sire, Organism, Sexe, Club, Lon, Lat, N_de_suivi, N_de_res, Essai, Resultat, Confirmation, Resultat_conf, Seroconversion_prev, Changer_status, Essai_IgM, Resultat_IgM, Username FROM ? ORDER BY Date_prelevement", [tab_west_nile_horses] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addWest_nile_horsesRecord(row, false);
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
		
		var res = alasql("SELECT Date_prelevement, Nom, N_Sire, Organism, Sexe, Club, Lon, Lat, N_de_suivi, N_de_res, Essai, Resultat, Confirmation, Resultat_conf, Seroconversion_prev, Changer_status, Essai_IgM, Resultat_IgM, Username FROM ? ORDER BY Date_prelevement", [tab_west_nile_horses] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addWest_nile_horsesRecord(row, true);
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
	






	


