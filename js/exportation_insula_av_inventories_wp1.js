var fields = 
	

    			['Common_Name', 'Scientific_Name', 'Count', 'Location_Code', 'Location_Site', 'Latitude', 'Longitude', 'Date', 
    				'Time', 'Protocol', 'Duration_Min', 'Username'] 
    			 
    		


var fields_CSV_head =   'Common_Name;Scientific_Name;Count;Location_Code;Location_Site;Latitude;Longitude;Date;' +
						'Time;Protocol;Duration_Min;Username;\r\n';

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
	alert(remote_couchdb + 'bcoming' + nom_table + debug)
	var DBinsula_av_inventories_wp1 = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBinsula_av_inventories_wp1 = new PouchDB('bcoming' + nom_table + debug);
};

var tab_insula_av_inventories_wp1 = new Array();
var tab = new Array();


DBinsula_av_inventories_wp1.allDocs({  		
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
   				
   				
   				obj.Common_Name = row.doc.Common_Name 
   				obj.Scientific_Name = row.doc.Scientific_Name 
   				obj._Count = row.doc.Count 
   				obj.Location_Code = row.doc.Location_Code 
   				obj.Location_Site = row.doc.Location_Site 
   				obj.Latitude = row.doc.Latitude 
   				obj.Longitude = row.doc.Longitude 
   				obj.Date = row.doc.Date 
   				obj.Time = row.doc.Time 
   				obj.Protocol = row.doc.Protocol 
   				obj.Duration_Min = row.doc.Duration_Min
						
 			 
   				obj.Username = row.doc.Username 

   				tab_insula_av_inventories_wp1.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBinsula_av_inventories_wp1.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addInsula_av_inventories_wp1Record(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
			
				row.Common_Name + ';' +
				row.Scientific_Name + ';' +
				row._Count + ';' +
				row.Location_Code + ';' + 
				row.Location_Site + ';' +
				row.Latitude + ';' +
				row.Longitude + ';' +
				row.Date + ';' + 
				row.Time + ';' +
				row.Protocol + ';' +
				row.Duration_Min + ';' +
				
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
	       		saveAs(blob, "insula_av_inventories_wp1" + clock.now + ".csv");
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
			if (fields[i] == 'Count') {
				CSV_data = CSV_data + row['_Count'] + ";"
			} else {
				CSV_data = CSV_data + row[fields[i]] + ";"
			}
		};
	}
}



window.onload = function() {
	
	
	$('#export_all_fields').click(function(){
		CSV_data = fields_CSV_head;
		
		var res = alasql("SELECT Common_Name, Scientific_Name, _Count, Location_Code, Location_Site, Latitude, Longitude, Date, Time, Protocol, Duration_Min, Username FROM ? ORDER BY Date", [tab_insula_av_inventories_wp1] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addInsula_av_inventories_wp1Record(row, false);
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
		
		var res = alasql("SELECT Common_Name, Scientific_Name, _Count, Location_Code, Location_Site, Latitude, Longitude, Date, Time, Protocol, Duration_Min, Username FROM ? ORDER BY Date", [tab_insula_av_inventories_wp1] );
	       			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addInsula_av_inventories_wp1Record(row, true);
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
	






	


