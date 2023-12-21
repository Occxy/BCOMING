var fields = 

    			['Date', 'Time', 'Individu_ID', 'Common_Name', 'Scientif_Name', 'Sex', 'Age_Adult_Juvenile', 
    			 'Weight_g', 'Size_mm', 'Site', 'Degradation_Y_N', 'Nombre_de_filets', 'Prelevement_Sanguin_B', 'Ecouvillon_Oral_OS', 
    			 'Ecouvillon_Cloacal_CS', 'Username'] 
    			 
    		


var fields_CSV_head =   'Date;Time;Individu_ID;Common_Name;Scientif_Name;Sex;Age_Adult_Juvenile;' +
						'Weight_g;Size_mm;Site;Degradation_Y_N;Nombre_de_filets;Prelevement_Sanguin_B;Ecouvillon_Oral_OS;' +  
						'Ecouvillon_Cloacal_CS;Username;\r\n';

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
	var DBinsula_av_samples = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBinsula_av_samples = new PouchDB('bcoming' + nom_table + debug);
};

var tab_insula_av_samples = new Array();
var tab = new Array();


DBinsula_av_samples.allDocs({  		
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
   				
   				obj.Date = row.doc.Date
   				obj.Time = row.doc.Time 
   				obj.Individu_ID = row.doc.Individu_ID 
   				obj.Common_Name = row.doc.Common_Name 
   				obj.Scientif_Name = row.doc.Scientif_Name 
   				obj.Sex = row.doc.Sex 
   				obj.Age_Adult_Juvenile = row.doc.Age_Adult_Juvenile 
   				obj.Weight_g = row.doc.Weight_g 
   				obj.Size_mm = row.doc.Size_mm
   				obj.Site = row.doc.Site 
   				obj.Degradation_Y_N = row.doc.Degradation_Y_N 
   				obj.Nombre_de_filets = row.doc.Nombre_de_filets 
   				obj.Prelevement_Sanguin_B = row.doc.Prelevement_Sanguin_B 
   				obj.Ecouvillon_Oral_OS = row.doc.Ecouvillon_Oral_OS
   				obj.Ecouvillon_Cloacal_CS = row.doc.Ecouvillon_Cloacal_CS 

   			 
   				obj.Username = row.doc.Username 

   				tab_insula_av_samples.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBinsula_av_samples.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addInsula_av_samplesRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
				row.Date + ';' +
				row.Time + ';' +
				row.Individu_ID + ';' +
				row.Common_Name + ';' + 
				row.Scientif_Name + ';' +
				row.Sex + ';' + 
				row.Age_Adult_Juvenile + ';' +
				row.Weight_g + ';' +
				row.Size_mm + ';' +
				row.Site + ';' +
				row.Degradation_Y_N + ';' +
				row.Nombre_de_filets + ';' +
				row.Prelevement_Sanguin_B + ';' +
				row.Ecouvillon_Oral_OS + ';' +
				row.Ecouvillon_Cloacal_CS + ';' + 
				
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
	       		saveAs(blob, "insula_av_samples" + clock.now + ".csv");
	       		document.location.href="import_export.html?table=_insula_av&type=insula_av"; 
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
		
		
		
		 
		var res = alasql("SELECT Date, Time, Individu_ID, Common_Name, Scientif_Name, Sex, Age_Adult_Juvenile, Weight_g, Size_mm, Site, Degradation_Y_N, Nombre_de_filets, Prelevement_Sanguin_B, Ecouvillon_Oral_OS, Ecouvillon_Cloacal_CS, Username FROM ? ORDER BY date", [tab_insula_av_samples] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addInsula_av_samplesRecord(row, false);
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
		
		var res = alasql("SELECT Date, Time, Individu_ID, Common_Name, Scientif_Name, Sex, Age_Adult_Juvenile, Weight_g, Size_mm, Site, Degradation_Y_N, Nombre_de_filets, Prelevement_Sanguin_B, Ecouvillon_Oral_OS, Ecouvillon_Cloacal_CS, Username FROM ? ORDER BY date", [tab_insula_av_samples] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addInsula_av_samplesRecord(row, true);
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
	






	


