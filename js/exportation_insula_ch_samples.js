var fields = 
	

    			['Individus', 'Salive', 'Excrements', 'Sang', 'Biopsie', 'Espece', 'Site', 'Date', 'Note', 'Username'] 
    			 
    		


var fields_CSV_head =   'Individus;Salive;Excrements;Sang;Biopsie;Espece;Site;Date;Note;Username;\r\n';

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
	
	var DBinsula_ch_samples = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBinsula_ch_samples = new PouchDB('bcoming' + nom_table + debug);
};

var tab_insula_ch_samples = new Array();
var tab = new Array();


DBinsula_ch_samples.allDocs({  		
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
   				
   				obj.Individus = row.doc.Individus 
   				obj.Salive = row.doc.Salive  
   				obj.Excrements = row.doc.Excrements  
   				obj.Sang = row.doc.Sang  
   				obj.Biopsie = row.doc.Biopsie  
   				obj.Espece = row.doc.Espece  
   				obj.Site = row.doc.Site  
   				obj.Date = row.doc.Date 
   				obj.Note = row.doc.Note 
   				
   				
   				obj.Username = row.doc.Username 

   				tab_insula_ch_samples.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBinsula_ch_samples.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addInsula_ch_samplesRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
				row.Individus + ';' +  
				row.Salive + ';' +   
				row.Excrement + ';' +  
				row.Sang + ';' +   
				row.Biopsie  + ';' +   
				row.Espece + ';' +   
				row.Site + ';' +   
				row.Date + ';' +  
				row.Note + ';' +  
				
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
	       		saveAs(blob, "insula_ch_samples" + clock.now + ".csv");
	       		document.location.href="import_export.html?table=_insula_ch&type=insula_ch"; 
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
		
		var res = alasql("SELECT Individus, Salive, Excrements, Sang, Biopsie, Espece, Site, Date, Note, Username FROM ? ORDER BY date", [tab_insula_ch_samples] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addInsula_ch_samplesRecord(row, false);
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
		
		var res = alasql("SELECT Individus, Salive, Excrements, Sang, Biopsie, Espece, Site, Date, Note, Username FROM ? ORDER BY date", [tab_insula_ch_samples] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addInsula_ch_samplesRecord(row, true);
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
	






	


