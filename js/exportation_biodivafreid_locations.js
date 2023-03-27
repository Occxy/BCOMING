var fields = 
    			['location_code', 'sess_check', 'location_name', 'country', 'province', 'locality', 'site_details', 
    			 'latitude', 'lat_ns', 'longitude', 'long_ew', 'coord_source', 'gps_projection', 'gps_datum', 'coord_precision', 
    			 'altitude', 'alt_source', 'Mapgrid', 'habitat_Type', 'rodent_proofing', 'inside_cover', 'outside_cover', 'open_water', 
    			 'recent_rodent_control', 'pictures', 'habitat_remarks', 'Username']


var fields_CSV_head =   'location_code;sess_check;location_name;country;province;locality;site_details;' + 
						'latitude;lat_ns;longitude;long_ew;coord_source;gps_projection;gps_datum;coord_precision;' + 
						'altitude;alt_source;Mapgrid;habitat_Type;rodent_proofing;inside_cover;outside_cover;open_water;' + 
						'recent_rodent_control;pictures;habitat_remarks;Username;\r\n';

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
	var DBbiodivafreid_locations = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBbiodivafreid_locations = new PouchDB('bcoming' + nom_table + debug);
};

var tab_biodivafreid_locations = new Array();
var tab = new Array();


DBbiodivafreid_locations.allDocs({  		
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
   				
   												
   				obj.location_code = row.doc.location_code 
   				obj.sess_check = row.doc.sess_check 
   				obj.location_name = row.doc.location_name
   				obj.country = row.doc.country
   				obj.province = row.doc.province 
   				obj.locality = row.doc.locality
   				obj.site_details = row.doc.site_details 
   				obj.latitude = row.doc.latitude 
   				obj.lat_ns = row.doc.lat_ns 
   				obj.longitude = row.doc.longitude 
   				obj.long_ew = row.doc.long_ew 
   				obj.coord_source = row.doc.coord_source 
   				obj.gps_projection = row.doc.gps_projection 
   				obj.gps_datum = row.doc.gps_datum 
   				obj.coord_precision = row.doc.coord_precision 
   				obj.altitude = row.doc.altitude 
   				obj.alt_source = row.doc.alt_source 
   				obj.Mapgrid = row.doc.Mapgrid 
   				obj.habitat_Type = row.doc.habitat_Type 
   				obj.rodent_proofing = row.doc.rodent_proofing 
   				obj.inside_cover = row.doc.inside_cover 
   				obj.outside_cover = row.doc.outside_cover 
   				obj.open_water  = row.doc.open_water 
   				obj.recent_rodent_control = row.doc.recent_rodent_control 
   				obj.pictures = row.doc.pictures 
   				obj.habitat_remarks = row.doc.habitat_remarks
				
   				obj.Username = row.doc.Username 

   				tab_biodivafreid_locations.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBbiodivafreid_locations.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addBiodivAfreid_locationsRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
				row.location_code + ';' +
				row.sess_check + ';' +
				row.location_name + ';' +
				row.country + ';' +
				row.province + ';' +
				row.locality + ';' +
				row.site_details + ';' +
				row.latitude + ';' +
				row.lat_ns + ';' +
				row.longitude + ';' + 
				row.long_ew + ';' +
				row.coord_source + ';' +
				row.gps_projection + ';' +
				row.gps_datum + ';' + 
				row.coord_precision + ';' +
				row.altitude + ';' +
				row.alt_source + ';' +
				row.Mapgrid + ';' +
				row.habitat_Type + ';' +
				row.rodent_proofing + ';' +
				row.inside_cover + ';' +
				row.outside_cover + ';' +
				row.open_water + ';' +
				row.recent_rodent_control + ';' +
				row.pictures + ';' +
				row.habitat_remarks + ';' +
				
   				 
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
	       		saveAs(blob, "biodivafreid_locations" + clock.now + ".csv");
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

$('#export_all_fields').click(function(){
	CSV_data = fields_CSV_head;
	
	var res = alasql("SELECT location_code, sess_check, location_name, country, province, locality, site_details, latitude, lat_ns, longitude, long_ew, coord_source, gps_projection, gps_datum, coord_precision, altitude, alt_source, Mapgrid, habitat_Type, rodent_proofing, inside_cover, outside_cover, open_water, recent_rodent_control, pictures, habitat_remarks,  Username FROM ? ORDER BY date", [tab_biodivafreid_locations] );
    			
    var CS = JSON.stringify(res);
    			
    var obj_CS = JSON.parse(CS);
	 
    
    res.forEach(function(row){
    	//wait(10);
		//console.log(row.N_identification_CS)
    	
		//alert(count)
		if (count == i) {
			addBiodivAfreid_locationsRecord(row, false);
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
	
	var res = alasql("SELECT location_code, sess_check, location_name, country, province, locality, site_details, latitude, lat_ns, longitude, long_ew, coord_source, gps_projection, gps_datum, coord_precision, altitude, alt_source, Mapgrid, habitat_Type, rodent_proofing, inside_cover, outside_cover, open_water, recent_rodent_control, pictures, habitat_remarks,  Username FROM ? ORDER BY date", [tab_biodivafreid_locations] );
    			
    var CS = JSON.stringify(res);
    			
    var obj_CS = JSON.parse(CS);
	   
    
    res.forEach(function(row){
    	//wait(10);
		//console.log(row.N_identification_CS)
		//alert(count)
		if (count == i) {
			addBiodivAfreid_locationsRecord(row, true);
		}
		
		
	}).catch(function (err) {
		console.log(err);
	});
})

document.getElementById("add_selection_criteria").disabled = true;

var multiselect1 = document.getElementById("multiselect1");
for (var i = 0; i < fields.length; i++) {
	multiselect1.options[i] = new Option(fields[i], fields[i]);
};


	
