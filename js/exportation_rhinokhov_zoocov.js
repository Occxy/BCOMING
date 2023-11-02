var fields = 
    			['Project', 'Sampling_Date', 'Animal_ID', 'Genus_Species', 'Province', 'District', 'Site', 
    			 'Specific_location', 'No', 'Sample_Type', 'Taxa', 'rtPCR_SARS-COV-2_E_gene', 'PCR_Quan_result', 'PCR_Watanabe_result',
    			 'Sex', 'Age-Status', 'Health_Status', 'Condition', 'FEV', 'OSV', 'OST',
    			 'RSV', 'RST', 'DBS', 'URV', 'URT', 'WBV', 'BSN', 'BCN', 'FA_mm', 'Weigth_g', 'Photo', 'Recorder_type', 
    			 'File_name', 'Kiv', 'KiT', 'SpV', 'SpT', 'LiV', 'LiT', 'LuV', 'LuT', 'HeV', 'HeT', 'BrV', 'BrT', 'UrV', 
    			 'UrT', 'Other', 'Username']


var fields_CSV_head =   'Project;Sampling_Date;Animal_ID;Genus_Species;Province;District;Site;' + 
						'Specific_location;No;Sample_Type;Taxa;rtPCR_SARS-COV-2_E_gene;PCR_Quan_result;PCR_Watanabe_result;' +
						'Sex;Age-Status;Health_Status;Condition;FEV;OSV;OST;' + 
						'RSV;RST;DBS;URV;URT;WBV;BSN;BCN;FA_mm;Weigth_g;Photo;Recorder_type;' +  
						'File_name;Kiv;KiT;SpV;SpT;LiV;LiT;LuV;LuT;HeV;HeT;BrV;BrT;UrV;' +  
						'UrT;Other;Username;\r\n';

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
	var DBrhinokhov_zoocov = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBrhinokhov_zoocov = new PouchDB('bcoming' + nom_table + debug);
};

var tab_rhinokhov_zoocov = new Array();
var tab = new Array();


DBrhinokhov_zoocov.allDocs({  		
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
   				
   				obj.Project = row.doc.Project
   				obj.Sampling_Date = row.doc.Sampling_Date 
   				obj.Animal_ID = row.doc.Animal_ID 
   				obj.Genus_Species = row.doc.Genus_Species 
   				obj.Province = row.doc.Province 
   				obj.District = row.doc.District 
   				obj.Site = row.doc.Site 
   				obj.Specific_location = row.doc.Specific_location
   				
   				obj.No= row.doc.No
   				obj.Sample_Type= row.doc.Sample_Type 
   				obj.Taxa= row.doc.Taxa 
   				obj['rtPCR_SARS-COV-2_E_gene']= row.doc['rtPCR_SARS-COV-2_E_gene']
   				obj.PCR_Quan_result= row.doc.PCR_Quan_result 
   				obj.PCR_Watanabe_result= row.doc.PCR_Watanabe_result
   				
   				obj.Sex = row.doc.Sex 
   				obj['Age-Status'] = row.doc['Age-Status']; 
   				obj.Health_Status = row.doc.Health_Status 
   				obj.Condition = row.doc.Condition
   				obj.FEV = row.doc.FEV 
   				obj.OSV = row.doc.OSV 
   				obj.OST = row.doc.OST  
   				obj.RSV = row.doc.RSV 
   				obj.RST = row.doc.RST 
   				obj.DBS = row.doc.DBS 
   				obj.URV = row.doc.URV 
   				obj.URT = row.doc.URT 
   				obj.WBV = row.doc.WBV 
   				obj.BSN = row.doc.BSN 
   				obj.BCN = row.doc.BCN 
   				obj.FA_mm = row.doc.FA_mm 
   				obj.Weigth_g = row.doc.Weigth_g 
   				obj.Photo = row.doc.Photo 
   				obj.Recorder_type = row.doc.Recorder_type 
   				obj.File_name = row.doc.File_name
   				obj.Kiv = row.doc.Kiv 
   				obj.KiT = row.doc.KiT  
   				obj.SpV = row.doc.SpV 
   				obj.SpT = row.doc.SpT 
   				obj.LiV = row.doc.LiV 
   				obj.LiT = row.doc.LiT 
   				obj.LuV = row.doc.LuV 
   				obj.LuT = row.doc.LuT 
   				obj.HeV = row.doc.HeV 
   				obj.HeT = row.doc.HeT 
   				obj.BrV = row.doc.BrV 
   				obj.BrT = row.doc.BrT 
   				obj.UrV = row.doc.UrV 
   				obj.UrT = row.doc.UrT 
				obj.Other = row.doc.Other
   				
 				
   				obj.Username = row.doc.Username 

   				tab_rhinokhov_zoocov.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBrhinokhov_zoocov.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addRhinoKhov_ZooCovRecord(row, selected) {
	
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
				row.Sampling_Date + ';' + 
				row.Animal_ID + ';' + 
				row.Genus_Species + ';' + 
				row.Province + ';' + 
				row.District + ';' + 
				row.Site + ';' + 
				row.Specific_location + ';' +
				
				row.No + ';' +
				row.Sample_Type + ';' +
				row.Taxa + ';' +
				row['rtPCR_SARS-COV-2_E_gene'] + ';' +
				row.PCR_Quan_result + ';' +
				row.PCR_Watanabe_result + ';' +
				
				row.Sex + ';' + 
				row['Age-Status'] + ';' + 
				row.Health_Status + ';' + 
				row.Condition + ';' +
				row.FEV + ';' + 
				row.OSV + ';' +
				row.OST + ';' +  
				row.RSV + ';' + 
				row.RST + ';' + 
				row.DBS + ';' + 
				row.URV + ';' + 
				row.URT + ';' + 
				row.WBV + ';' + 
				row.BSN + ';' + 
				row.BCN + ';' + 
				row.FA_mm + ';' + 
				row.Weigth_g + ';' + 
				row.Photo + ';' + 
				row.Recorder_type + ';' + 
				row.File_name + ';' +
				row.Kiv + ';' + 
				row.KiT + ';' +  
				row.SpV + ';' + 
				row.SpT + ';' + 
				row.LiV + ';' + 
				row.LiT + ';' + 
				row.LuV + ';' + 
				row.LuT + ';' + 
				row.HeV + ';' + 
				row.HeT + ';' + 
				row.BrV + ';' + 
				row.BrT + ';' + 
				row.UrV + ';' +
				row.UrT + ';' +
				row.Other + ';' +
				
				row.Username + ';\r\n'
				
		
			} else {	
				
				if (array_selected_fields.indexOf('Project') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Project;';
					}
					CSV_data = CSV_data + row.Project + ";"
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
				};	if (array_selected_fields.indexOf('District') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'District;';
					}
					CSV_data = CSV_data + row.District + ";"
				};
				if (array_selected_fields.indexOf('Site') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Site;';
					}
					CSV_data = CSV_data + row.Site + ";"
				};
				if (array_selected_fields.indexOf('Specific_location') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Specific_location;';
					}
					CSV_data = CSV_data + row.Specific_location + ";"
				};
				
				if (array_selected_fields.indexOf('No') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'No;';
					}
					CSV_data = CSV_data + row.No + ";"
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
				
				if (array_selected_fields.indexOf('Sex') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Sex;';
					}
					CSV_data = CSV_data + row.Sex + ";"
				};
				if (array_selected_fields.indexOf('Age-Status') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Age-Status;';
					}
					CSV_data = CSV_data + row['Age-Status'] + ";"
				};
																							 	

				if (array_selected_fields.indexOf('Health_Status') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Health_Status;';
					}
					CSV_data = CSV_data + row.Health_Status + ";"
				};
				if (array_selected_fields.indexOf('Condition') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Condition;';
					}
					CSV_data = CSV_data + row.Condition + ";"
				};
				if (array_selected_fields.indexOf('FEV') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'FEV;';
					}
					CSV_data = CSV_data + row.FEV + ";"
				};
				if (array_selected_fields.indexOf('OSV') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'OSV;';
					}
					CSV_data = CSV_data + row.OSV + ";"
				};
				if (array_selected_fields.indexOf('OST') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'OST;';
					}
					CSV_data = CSV_data + row.OST + ";"
				};
				if (array_selected_fields.indexOf('RSV') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'RSV;';
					}
					CSV_data = CSV_data + row.RSV + ";"
				};
				if (array_selected_fields.indexOf('RST') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'RST;';
					}
					CSV_data = CSV_data + row.RST + ";"
				};
				if (array_selected_fields.indexOf('DBS') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'DBS;';
					}
					CSV_data = CSV_data + row.DBS + ";"
				};
				if (array_selected_fields.indexOf('URV') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'URV;';
					}
					CSV_data = CSV_data + row.URV + ";"
				};
				if (array_selected_fields.indexOf('URT') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'URT;';
					}
					CSV_data = CSV_data + row.URT + ";"
				};
				if (array_selected_fields.indexOf('WBV') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'WBV;';
					}
					CSV_data = CSV_data + row.WBV + ";"
				};
				if (array_selected_fields.indexOf('BSN') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'BSN;';
					}
					CSV_data = CSV_data + row.BSN + ";"
				};
				if (array_selected_fields.indexOf('BCN') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'BCN;';
					}
					CSV_data = CSV_data + row.BCN + ";"
				};
				if (array_selected_fields.indexOf('FA_mm') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'FA_mm;';
					}
					CSV_data = CSV_data + row.FA_mm + ";"
				};
				if (array_selected_fields.indexOf('Weigth_g') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Weigth_g;';
					}
					CSV_data = CSV_data + row.Weigth_g + ";"
				};
				if (array_selected_fields.indexOf('Photo') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Photo;';
					}
					CSV_data = CSV_data + row.Photo + ";"
				};
				if (array_selected_fields.indexOf('Recorder_type') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Recorder_type;';
					}
					CSV_data = CSV_data + row.Recorder_type + ";"
				};
				if (array_selected_fields.indexOf('File_name') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'File_name;';
					}
					CSV_data = CSV_data + row.File_name + ";"
				};
				if (array_selected_fields.indexOf('Kiv') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Kiv;';
					}
					CSV_data = CSV_data + row.Kiv + ";"
				};
				if (array_selected_fields.indexOf('KiT') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'KiT;';
					}
					CSV_data = CSV_data + row.KiT + ";"
				};
				if (array_selected_fields.indexOf('SpV') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'SpV;';
					}
					CSV_data = CSV_data + row.SpV + ";"
				};
				if (array_selected_fields.indexOf('SpT') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'SpT;';
					}
					CSV_data = CSV_data + row.SpT + ";"
				};
				if (array_selected_fields.indexOf('LiV') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'LiV;';
					}
					CSV_data = CSV_data + row.LiV + ";"
				};
				if (array_selected_fields.indexOf('LiT') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'LiT;';
					}
					CSV_data = CSV_data + row.LiT + ";"
				};
				if (array_selected_fields.indexOf('LuV') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'LuV;';
					}
					CSV_data = CSV_data + row.LuV + ";"
				};
				if (array_selected_fields.indexOf('LuT') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'LuT;';
					}
					CSV_data = CSV_data + row.LuT + ";"
				};
				if (array_selected_fields.indexOf('HeV') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'HeV;';
					}
					CSV_data = CSV_data + row.HeV + ";"
				};
				if (array_selected_fields.indexOf('HeT') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'HeT;';
					}
					CSV_data = CSV_data + row.HeT + ";"
				};
				if (array_selected_fields.indexOf('BrV') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'BrV;';
					}
					CSV_data = CSV_data + row.BrV + ";"
				};
				if (array_selected_fields.indexOf('BrT') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'BrT;';
					}
					CSV_data = CSV_data + row.BrT + ";"
				};
				if (array_selected_fields.indexOf('UrV') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'UrV;';
					}
					CSV_data = CSV_data + row.UrV + ";"
				};
				if (array_selected_fields.indexOf('UrT') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'UrT;';
					}
					CSV_data = CSV_data + row.UrT + ";"
				};
				if (array_selected_fields.indexOf('Other') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Other;';
					}
					CSV_data = CSV_data + row.Other + ";"
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
	       		saveAs(blob, "rhinokhov_zoocov" + clock.now + ".csv");
			}	
			
	} 
			
	
}



window.onload = function() {
	$('#export_all_fields').click(function(){
		CSV_data = fields_CSV_head;
		
		var res = alasql("SELECT Project, Sampling_Date, Animal_ID, Genus_Species, Province, District, Site, Specific_location, [No], Sample_Type, Taxa, [rtPCR_SARS-COV-2_E_gene], PCR_Quan_result, PCR_Watanabe_result, Sex, [Age-Status], Health_Status, Condition, FEV, OSV, OST, RSV, RST, DBS, URV, URT, WBV, BSN, BCN, FA_mm, Weigth_g, Photo, Recorder_type, File_name, Kiv, KiT , SpV, SpT, LiV, LiT, LuV, LuT, HeV, HeT, BrV, BrT, UrV, UrT, Other, Username FROM ? ORDER BY Sampling_Date", [tab_rhinokhov_zoocov] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addRhinoKhov_ZooCovRecord(row, false);
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
		
		//var res = alasql("SELECT Project, Sampling_Date, Animal_ID, Genus_Species, Province, District, Site, Specific_location, Sex, [Age-Status], Health_Status, Condition, FEV, OSV, OST, RSV, RST, DBS, URV, URT, WBV, BSN, BCN, FA_mm, Weigth_g, Photo, Recorder_type, File_name, Kiv, KiT , SpV, SpT, LiV, LiT, LuV, LuT, HeV, HeT, BrV, BrT, UrV, UrT, Other, Username FROM ? ORDER BY Sampling_Date", [tab_rhinokhov_zoocov_animal] );
		var res = alasql("SELECT Project, Sampling_Date, Animal_ID, Genus_Species, Province, District, Site, Specific_location, [No], Sample_Type, Taxa, [rtPCR_SARS-COV-2_E_gene], PCR_Quan_result, PCR_Watanabe_result, Sex, [Age-Status], Health_Status, Condition, FEV, OSV, OST, RSV, RST, DBS, URV, URT, WBV, BSN, BCN, FA_mm, Weigth_g, Photo, Recorder_type, File_name, Kiv, KiT , SpV, SpT, LiV, LiT, LuV, LuT, HeV, HeT, BrV, BrT, UrV, UrT, Other, Username FROM ? ORDER BY Sampling_Date", [tab_rhinokhov_zoocov] );
	     			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addRhinoKhov_ZooCovRecord(row, true);
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


	
