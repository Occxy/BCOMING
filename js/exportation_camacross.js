var fields = 
    			['SamplingDate', 'AnimalCode', 'Province', 'Site', 'Species', 'SampleType', 'SampleCode', 
    			 'Final_Result_for_Corona_Watanabe', 'Final_Result_for_Corona_Quan', 'Username']


var fields_CSV_head =   'SamplingDate;AnimalCode;Province;Site;Species;SampleType;SampleCode;' + 
						'Final_Result_for_Corona_Watanabe;Final_Result_for_Corona_Quan;Username;\r\n';

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
	var DBcamacross = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBcamacross = new PouchDB('bcoming' + nom_table + debug);
};

var tab_camacross = new Array();
var tab = new Array();


DBcamacross.allDocs({  		
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
   				
   												

   				obj.SamplingDate = row.doc.SamplingDate 
   				obj.AnimalCode = row.doc.AnimalCode
   				obj.Province = row.doc.Province 
   				obj.Site = row.doc.Site 
   				obj.Species = row.doc.Species 
   				obj.SampleType = row.doc.SampleType 
   				obj.SampleCode = row.doc.SampleCode
   				obj.Genus_Species = row.doc.Genus_Species 
   				obj.Final_Result_for_Corona_Watanabe = row.doc.Final_Result_for_Corona_Watanabe 
   				obj.Final_Result_for_Corona_Quan = row.doc.Final_Result_for_Corona_Quan 

  				
   				obj.Username = row.doc.Username 

   				tab_camacross.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBcamacross.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addCamAcrossRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
				row.SamplingDate + ';' +
   				row.AnimalCode + ';' +
   				row.Province + ';' +
   				row.Site + ';' +
   				row.Species + ';' +
   				row.SampleType + ';' + 
   				row.SampleCode + ';' +
   				row.Final_Result_for_Corona_Watanabe + ';' + 
   				row.Final_Result_for_Corona_Quan + ';' + 
				row.Username + ';\r\n'
				
		
			} else {	
				
				if (array_selected_fields.indexOf('SamplingDate') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'SamplingDate;';
					}
					CSV_data = CSV_data + row.SamplingDate + ";"
				};
				if (array_selected_fields.indexOf('AnimalCode') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'AnimalCode;';
					}
					CSV_data = CSV_data + row.AnimalCode + ";"
				};				
				if (array_selected_fields.indexOf('Province') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Province;';
					}
					CSV_data = CSV_data + row.Province + ";"
				};				
				if (array_selected_fields.indexOf('Site') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Site;';
					}
					CSV_data = CSV_data + row.Site + ";"
				};	
				if (array_selected_fields.indexOf('Species') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Species;';
					}
					CSV_data = CSV_data + row.Species + ";"
				};	
				if (array_selected_fields.indexOf('SampleType') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'SampleType;';
					}
					CSV_data = CSV_data + row.SampleType + ";"
				};
				if (array_selected_fields.indexOf('SampleCode') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'SampleCode;';
					}
					CSV_data = CSV_data + row.SampleCode + ";"
				};
				if (array_selected_fields.indexOf('Final_Result_for_Corona_Watanabe') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Final_Result_for_Corona_Watanabe;';
					}
					CSV_data = CSV_data + row.Final_Result_for_Corona_Watanabe + ";"
				};
				if (array_selected_fields.indexOf('Final_Result_for_Corona_Quan') > -1) {
					if (add_heading == true) {
						CSV_heading = CSV_heading + 'Final_Result_for_Corona_Quan;';
					}
					CSV_data = CSV_data + row.Final_Result_for_Corona_Quan + ";"
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
	       		saveAs(blob, "comacross" + clock.now + ".csv");
			}	
			
	} 
			
	
}



window.onload = function() {
	$('#export_all_fields').click(function(){
		CSV_data = fields_CSV_head;
		
		var res = alasql("SELECT SamplingDate, AnimalCode, Province, Site, Species, SampleType, SampleCode, Final_Result_for_Corona_Watanabe, Final_Result_for_Corona_Quan, Username FROM ? ORDER BY SamplingDate", [tab_camacross] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addCamAcrossRecord(row, false);
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
		
		var res = alasql("SELECT SamplingDate, AnimalCode, Province, Site, Species, SampleType, SampleCode, Final_Result_for_Corona_Watanabe, Final_Result_for_Corona_Quan, Username FROM ? ORDER BY SamplingDate", [tab_camacross] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addCamAcrossRecord(row, true);
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



	
