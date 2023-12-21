var fields = 
	
	

    			['ID_FD', 'ID_FS', 'Group', 'Species', 'Sex', 'Individuals', 'Used_Individuals', 'Date_Used_Individuals', 'RNA_and_cDNA_plates_ANSES', 
    				'RNA_and_cDNA_well', 'RNA_and_cDNA_Id', 'Date', 'Year', 'Month', 'Day', 'Site', 'Location', 'Habitat', 'Colonne1', 'Observation', 
    				'Notes', 'Lat', 'Lon', 'Project_Study', 'Trap_method', 'Biotope', 'Username'] 
    			 
    		


var fields_CSV_head =   'ID_FD;ID_FS;Group;Species;Sex;Individuals;Used_Individuals;Date_Used_Individuals;RNA_and_cDNA_plates_ANSES;' + 
						'RNA_and_cDNA_well;RNA_and_cDNA_Id;Date;Year;Month;Day;Site;Location;Habitat;Colonne1;Observation;' +
						'Notes;Lat;Lon;Project_Study;Trap_method;Biotope;Username;\r\n';

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
	var DBwest_nile_mosquitoes_field_samples_diagnose = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBwest_nile_mosquitoes_field_samples_diagnose = new PouchDB('bcoming' + nom_table + debug);
};

var tab_west_nile_mosquitoes_field_samples_diagnose = new Array();
var tab = new Array();


DBwest_nile_mosquitoes_field_samples_diagnose.allDocs({  		
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
   				
   				obj.ID_FD = row.doc.ID_FD 
   				obj.ID_FS = row.doc.ID_FS 
   				obj._Group = row.doc.Group 
   				obj.Species = row.doc.Species 
   				obj.Sex = row.doc.Sex 
   				obj.Individuals = row.doc.Individuals
   				obj.Used_Individuals = row.doc.Used_Individuals 
   				obj.Date_Used_Individuals = row.doc.Date_Used_Individuals 
   				obj.RNA_and_cDNA_plates_ANSES = row.doc.RNA_and_cDNA_plates_ANSES 
   				obj.RNA_and_cDNA_well = row.doc.RNA_and_cDNA_well 
   				obj.RNA_and_cDNA_Id = row.doc.RNA_and_cDNA_Id 
   				obj.Date = row.doc.Date 
   				obj.Year = row.doc.Year
   				obj.Month = row.doc.Month 
   				obj.Day = row.doc.Day 
   				obj.Site = row.doc.Site 
   				obj.Location = row.doc.Location 
   				obj.Habitat = row.doc.Habitat
   				obj.Colonne1 = row.doc.Colonne1 
   				obj.Observation = row.doc.Observation
   				obj.Notes = row.doc.Notes.replace('"','') 
   				obj.Lat = row.doc.Lat 
   				obj.Lon = row.doc.Lon 
   				obj.Project_Study = row.doc.Project_Study 
   				obj.Trap_method = row.doc.Trap_method 
   				obj.Biotope = row.doc.Biotope

 
   				obj.Username = row.doc.Username

   				tab_west_nile_mosquitoes_field_samples_diagnose.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBwest_nile_mosquitoes_field_samples_diagnose.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addWest_nile_mosquitoes_field_samples_diagnoseRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
			
				row.ID_FD + ';' +
				row.ID_FS + ';' +
				row._Group + ';' +
				row.Species + ';' +
				row.Sex + ';' +
				row.Individuals + ';' +
				row.Used_Individuals + ';' +
				row.Date_Used_Individuals + ';' +
				row.RNA_and_cDNA_plates_ANSES + ';' +
				row.RNA_and_cDNA_well + ';' +
				row.RNA_and_cDNA_Id + ';' +
				row.Date + ';' +
				row.Year + ';' +
				row.Month + ';' +
				row.Day + ';' +
				row.Site + ';' +
				row.Location + ';' + 
				row.Habitat + ';' +
				row.Colonne1 + ';' +
				row.Observation + ';' +
				row.Notes + ';' +
				row.Lat + ';' +
				row.Lon + ';' +
				row.Project_Study + ';' +
				row.Trap_method + ';' +
				row.Biotope + ';' +
								
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
	       		saveAs(blob, "west_nile_mosquitoes_field_samples_diagnose" + clock.now + ".csv");
	       		document.location.href="import_export.html?table=_west_nile_mosquitoes_field_samples_diagnose&type=west_nile_mosquitoes_field_samples_diagnose"; 
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
		
		var res = alasql("SELECT ID_FD, ID_FS, _Group, Species, Sex, Individuals, Used_Individuals, Date_Used_Individuals, RNA_and_cDNA_plates_ANSES, RNA_and_cDNA_well, RNA_and_cDNA_Id, Date, Year, Month, Day, Site, Location, Habitat, Colonne1, Observation, Notes, Lat, Lon, Project_Study, Trap_method, Biotope, Username FROM ?", [tab_west_nile_mosquitoes_field_samples_diagnose] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addWest_nile_mosquitoes_field_samples_diagnoseRecord(row, false);
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
		
		var res = alasql("SELECT ID_FD, ID_FS, _Group, Species, Sex, Individuals, Used_Individuals, Date_Used_Individuals, RNA_and_cDNA_plates_ANSES, RNA_and_cDNA_well, RNA_and_cDNA_Id, Date, Year, Month, Day, Site, Location, Habitat, Colonne1, Observation, Notes, Lat, Lon, Project_Study, Trap_method, Biotope, Username FROM ?", [tab_west_nile_mosquitoes_field_samples_diagnose] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addWest_nile_mosquitoes_field_samples_diagnoseRecord(row, true);
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
	






	


