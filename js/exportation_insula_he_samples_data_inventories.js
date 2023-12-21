var fields = 
	


    			['Quadrat', 'Note', 'Genre', 'Sp', 'Recouv', 'Site_ID', 'Site_nom', 'Code', 'Lat', 'Long', 'Date', 'Username'] 
    			 
    		


var fields_CSV_head =   'Quadrat;Note;Genre;Sp;Recouv;Site_ID;Site_nom;Code;Lat;Long;Date;Username;\r\n';

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
	var DBinsula_he_samples_data_inventories = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBinsula_he_samples_data_inventories = new PouchDB('bcoming' + nom_table + debug);
};

var tab_insula_he_samples_data_inventories = new Array();
var tab = new Array();


DBinsula_he_samples_data_inventories.allDocs({  		
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
   				
   				obj.Quadrat = row.doc.Quadrat 
   				obj.Note = row.doc.Note 
   				obj.Genre = row.doc.Genre 
   				obj.Sp = row.doc.Sp 
   				obj.Recouv = row.doc.Recouv 
   				obj.Site_ID = row.doc.Site_ID 
   				obj.Site_nom = row.doc.Site_nom 
   				obj.Code = row.doc.Code 
   				obj.Lat = row.doc.Lat 
   				obj.Long = row.doc.Long 
   				obj.Date = row.doc.Date
   				
   				
   				obj.Username = row.doc.Username 

   				tab_insula_he_samples_data_inventories.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBinsula_he_samples_data_inventories.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addInsula_he_samples_data_inventoriesRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
			
			    row.Quadrat + ';' +
				row.Note + ';' +
				row.Genre + ';' +
				row.Sp + ';' +
				row.Recouv + ';' +
				row.Site_ID + ';' + 
				row.Site_nom + ';' +
				row.Code + ';' +
				row.Lat + ';' +
				row.Long + ';' +
				row.Date + ';' +
				
				
				
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
	       		saveAs(blob, "insula_he_samples_data_inventories" + clock.now + ".csv");
	       		document.location.href="import_export.html?table=_insula_he&type=insula_he"; 
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
		
		
		
		 
		var res = alasql("SELECT Quadrat, Note, Genre, Sp, Recouv, Site_ID, Site_nom, Code, Lat, Long, Date, Username FROM ? ORDER BY Date", [tab_insula_he_samples_data_inventories] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addInsula_he_samples_data_inventoriesRecord(row, false);
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
		
		var res = alasql("SELECT Quadrat, Note, Genre, Sp, Recouv, Site_ID, Site_nom, Code, Lat, Long, Date, Username FROM ? ORDER BY Date", [tab_insula_he_samples_data_inventories] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addInsula_he_samples_data_inventoriesRecord(row, true);
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
	






	


