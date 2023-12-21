var fields = 
	
	

    			['Date_prelevement', 'Description', 'Espece', 'Type_d_enquete', 'Nom_demandeur', 'Nom_d_eleveur', 'Commune', 'N_de_suivi', 
    				'Essai', 'N_de_res', 'Resultat', 'Confirmation', 'Resultat_conf', 'Lon', 'Lat', 'Username'] 
    			 



var fields_CSV_head =   'Date_prelevement;Description;Espece;Type_d_enquete;Nom_demandeur;Nom_d_eleveur;Commune;N_de_suivi;' +  
						'Essai;N_de_res;Resultat;Confirmation;Resultat_conf;Lon;Lat;Username;\r\n';

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
	var DBwest_nile_chickens = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBwest_nile_chickens = new PouchDB('bcoming' + nom_table + debug);
};

var tab_west_nile_chickens = new Array();
var tab = new Array();


DBwest_nile_chickens.allDocs({  		
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
   				obj.Description = row.doc.Description 
   				obj.Espece = row.doc.Espece 
   				obj.Type_d_enquete = row.doc.Type_d_enquete 
   				obj.Nom_demandeur = row.doc.Nom_demandeur 
   				obj.Nom_d_eleveur = row.doc.Nom_d_eleveur 
   				obj.Commune = row.doc.Commune 
   				obj.N_de_suivi = row.doc.N_de_suivi 
   				obj.Essai = row.doc.Essai 
   				obj.N_de_res = row.doc.N_de_res 
   				obj.Resultat = row.doc.Resultat 
   				obj.Confirmation = row.doc.Confirmation 
   				obj.Resultat_conf = row.doc.Resultat_conf 
   				obj.Lon = row.doc.Lon 
   				obj.Lat = row.doc.Lat
   				obj.Username = row.doc.Username

   				tab_west_nile_chickens.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBwest_nile_chickens.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addWest_nile_chickensRecord(row, selected) {
	
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
				row.Description + ';' +
				row.Espece + ';' +
				row.Type_d_enquete + ';' +
				row.Nom_demandeur + ';' +
				row.Nom_d_eleveur + ';' + 
				row.Commune + ';' +
				row.N_de_suivi + ';' +
				row.Essai + ';' +
				row.N_de_res + ';' +
				row.Resultat + ';' +
				row.Confirmation + ';' +
				row.Resultat_conf + ';' +
				row.Lon + ';' +
				row.Lat + ';' +
							
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
	       		saveAs(blob, "west_nile_chickens" + clock.now + ".csv");
	       		document.location.href="import_export.html?table=_west_nile_chickens&type=west_nile_chickens"; 
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
		
		var res = alasql("SELECT Date_prelevement, Description, Espece, Type_d_enquete, Nom_demandeur, Nom_d_eleveur, Commune, N_de_suivi, Essai, N_de_res, Resultat, Confirmation, Resultat_conf, Lon, Lat, Username FROM ? ORDER BY Date_prelevement", [tab_west_nile_chickens] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addWest_nile_chickensRecord(row, false);
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
		
		var res = alasql("SELECT Date_prelevement, Description, Espece, Type_d_enquete, Nom_demandeur, Nom_d_eleveur, Commune, N_de_suivi, Essai, N_de_res, Resultat, Confirmation, Resultat_conf, Lon, Lat, Username FROM ? ORDER BY Date_prelevement", [tab_west_nile_chickens] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addWest_nile_chickensRecord(row, true);
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
	






	


