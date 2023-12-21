var fields = 
	


    			['ID_F', 'Date', 'Trap_method', 'Site', 'Location', 'Commune', 'Country', 'Landscape', 'Habitat', 'Breeding_site', 
    				'Lat', 'Lon', 'Project_Study', 'Collector', 'Notes', 'Username'] 
    			 
    		


var fields_CSV_head =   'ID_F;Date;Trap_method;Site;Location;Commune;Country;Landscape;Habitat;Breeding_site;' +   
						'Lat;Lon;Project_Study;Collector;Notes;Username;\r\n';

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
	var DBwest_nile_mosquitoes_field_samples = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBwest_nile_mosquitoes_field_samples = new PouchDB('bcoming' + nom_table + debug);
};

var tab_west_nile_mosquitoes_field_samples = new Array();
var tab = new Array();


DBwest_nile_mosquitoes_field_samples.allDocs({  		
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
   				
   				obj.ID_F = row.doc.ID_F    				
   				obj.Date = row.doc.Date 
   				obj.Trap_method = row.doc.Trap_method 
   				obj.Site = row.doc.Site 
   				obj.Location = row.doc.Location 
   				obj.Commune = row.doc.Commune 
   				obj.Country = row.doc.Country 
   				obj.Landscape = row.doc.Landscape 
   				obj.Habitat = row.doc.Habitat 
   				obj.Breeding_site = row.doc.Breeding_site
   				obj.Lat = row.doc.Lat 
   				obj.Lon = row.doc.Lon 
   				obj.Project_Study = row.doc.Project_Study 
   				obj.Collector = row.doc.Collector 
   				obj.Notes = row.doc.Notes
 
   				obj.Username = row.doc.Username

   				tab_west_nile_mosquitoes_field_samples.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBwest_nile_mosquitoes_field_samples.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addWest_nile_mosquitoes_field_samplesRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
			
				row.ID_F + ';' +   				
				row.Date + ';' + 
				row.Trap_method + ';' + 
				row.Site + ';' +
				row.Location + ';' + 
				row.Commune + ';' +
				row.Country + ';' +
				row.Landscape + ';' +
				row.Habitat + ';' +
				row.Breeding_site + ';' +
				row.Lat + ';' + 
				row.Lon + ';' + 
				row.Project_Study + ';' +
				row.Collector + ';' +
				row.Notes + ';' +
				
				
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
	       		saveAs(blob, "west_nile_mosquitoes_field_samples" + clock.now + ".csv");
	       		document.location.href="import_export.html?table=_west_nile_mosquitoes_field_samples&type=west_nile_mosquitoes_field_samples"; 
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
		
		var res = alasql("SELECT ID_F, Date, Trap_method, Site, Location, Commune, Country, Landscape, Habitat, Breeding_site, Lat, Lon, Project_Study, Collector, Notes, Username FROM ? ORDER BY Date_prelevement", [tab_west_nile_mosquitoes_field_samples] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addWest_nile_mosquitoes_field_samplesRecord(row, false);
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
		
		var res = alasql("SELECT ID_F, Date, Trap_method, Site, Location, Commune, Country, Landscape, Habitat, Breeding_site, Lat, Lon, Project_Study, Collector, Notes, Username FROM ? ORDER BY Date_prelevement", [tab_west_nile_mosquitoes_field_samples] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addWest_nile_mosquitoes_field_samplesRecord(row, true);
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
	






	


