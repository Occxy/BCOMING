var fields = 
    			['Project', 'No', 'Sampling_Date', 'Animal_ID', 'Sample_Type', 'Taxa', 'Genus_Species', 'Province', 
    			 'rtPCR_SARS-COV-2_E_gene', 'PCR_Quan_result', 'PCR_Watanabe_result', 'Username']


var fields_CSV_head =   'Project;No;Sampling_Date;Animal_ID;Sample_Type;Taxa;Genus_Species;Province;' + 
						'rtPCR_SARS-COV-2_E_gene;PCR_Quan_result;PCR_Watanabe_result;Username;\r\n';

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
	var DBrhinokhov_zoocov_lab = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBrhinokhov_zoocov_lab = new PouchDB('bcoming' + nom_table + debug);
};

var tab_rhinokhov_zoocov_lab = new Array();
var tab = new Array();


DBrhinokhov_zoocov_lab.allDocs({  		
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
   				
   												
   				obj.Project= row.doc.Project
   				obj.No= row.doc.No
   				obj.Sampling_Date= row.doc.Sampling_Date
   				obj.Animal_ID= row.doc.Animal_ID
   				obj.Sample_Type= row.doc.Sample_Type 
   				obj.Taxa= row.doc.Taxa 
   				obj.Genus_Species= row.doc.Genus_Species 
   				obj.Province= row.doc.Province 
   				obj['rtPCR_SARS-COV-2_E_gene']= row.doc['rtPCR_SARS-COV-2_E_gene']
   				obj.PCR_Quan_result= row.doc.PCR_Quan_result 
   				obj.PCR_Watanabe_result= row.doc.PCR_Watanabe_result
 				
   				obj.Username = row.doc.Username 

   				tab_rhinokhov_zoocov_lab.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBrhinokhov_zoocov_lab.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addRhinoKhov_ZooCov_labRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
				
			    row.Project + ';' +
				row.No + ';' +
				row.Sampling_Date + ';' +
				row.Animal_ID + ';' +
				row.Sample_Type + ';' +
				row.Taxa + ';' +
				row.Genus_Species + ';' +
				row.Province + ';' +
				row['rtPCR_SARS-COV-2_E_gene'] + ';' +
				row.PCR_Quan_result + ';' +
				row.PCR_Watanabe_result + ';' +
				
				row.Username + ';\r\n'
				
		
			} else {	
				
				if (array_selected_fields.indexOf('Project') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Project;';
					}
					CSV_data = CSV_data + row.Project + ";"
				};
				if (array_selected_fields.indexOf('No') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'No;';
					}
					CSV_data = CSV_data + row.No + ";"
				};
				if (array_selected_fields.indexOf('Sampling_Date') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sampling_Date;';
					}
					CSV_data = CSV_data + row.Sampling_Date + ";"
				};	
				if (array_selected_fields.indexOf('Animal_ID') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Animal_ID;';
					}
					CSV_data = CSV_data + row.Animal_ID + ";"
				};				
				if (array_selected_fields.indexOf('Sample_Type') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sample_Type;';
					}
					CSV_data = CSV_data + row.Sample_Type + ";"
				};	
				if (array_selected_fields.indexOf('Taxa') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Taxa;';
					}
					CSV_data = CSV_data + row.Taxa + ";"
				};	
				if (array_selected_fields.indexOf('Genus_Species') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Genus_Species;';
					}
					CSV_data = CSV_data + row.Genus_Species + ";"
				};
				if (array_selected_fields.indexOf('Province') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Province;';
					}
					CSV_data = CSV_data + row.Province + ";"
				};
				if (array_selected_fields.indexOf('rtPCR_SARS-COV-2_E_gene') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'rtPCR_SARS-COV-2_E_gene;';
					}
					CSV_data = CSV_data + row['rtPCR_SARS-COV-2_E_gene'] + ";"
				};
				if (array_selected_fields.indexOf('PCR_Quan_result') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'PCR_Quan_result;';
					}
					CSV_data = CSV_data + row.PCR_Quan_result + ";"
				};
				if (array_selected_fields.indexOf('PCR_Watanabe_result') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'PCR_Watanabe_result;';
					}
					CSV_data = CSV_data + row.PCR_Watanabe_result + ";"
				};	
				
				
				if (array_selected_fields.indexOf('Username') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Username;';
					}
					CSV_data = CSV_data + row.Username + ";"
				};
				
				
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
	       		saveAs(blob, "rhinokhov_zoocov_lab" + clock.now + ".csv");
			}	
			
	} 
			
	
}


window.onload = function() {
	$('#export_all_fields').click(function(){
		CSV_data = fields_CSV_head;
		
		var res = alasql("SELECT Project, [No], Sampling_Date, Animal_ID, Sample_Type, Taxa, Genus_Species, Province, [rtPCR_SARS-COV-2_E_gene], PCR_Quan_result, PCR_Watanabe_result, Username FROM ? ORDER BY Sampling_Date", [tab_rhinokhov_zoocov_lab] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addRhinoKhov_ZooCov_labRecord(row, false);
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
		
		var res = alasql("SELECT Project, [No], Sampling_Date, Animal_ID, Sample_Type, Taxa, Genus_Species, Province, [rtPCR_SARS-COV-2_E_gene], PCR_Quan_result, PCR_Watanabe_result, Username FROM ? ORDER BY Sampling_Date", [tab_rhinokhov_zoocov_lab] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addRhinoKhov_ZooCov_labRecord(row, true);
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


	
