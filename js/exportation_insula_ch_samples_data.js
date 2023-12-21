var fields = 
	
	

    			['Numero', 'Date', 'Site', 'Def_Site', 'Biotope', 'Observateur', 'Filet', 'Heure_capture', 'Taxon', 'Nom_sc', 
    			 'Sexe', 'Avant_bras', 'Doigt_5', 'Doigt_3', 'Pouce', 'Queue', 'Tibia', 'Pied', 'CM3', 'Poids', 'Taille_testicule', 
    			 'Taille_epididymes', 'Tunique_vaginale', 'Mammelle', 'Gestation', 'Glandes_taille', 
    			 'Glande_couleur', 'Epiphyses', 'Chin_spot', 'Usure_dent', 'Age_estime', 'Code_Individu', 'Username'] 
    			 
    		


var fields_CSV_head =   'Numero;Date;Site;Def_Site;Biotope;Observateur;Filet;Heure_capture;Taxon;Nom_sc;' + 
						'Sexe;Avant_bras;Doigt_5;Doigt_3;Pouce;Queue;Tibia;Pied;CM3;Poids;Taille_testicule;' +
						'Taille_epididymes;Tunique_vaginale;Mammelle;Gestation;Glandes_taille;' + 
						'Glande_couleur;Epiphyses;Chin_spot;Usure_dent;Age_estime;Code_Individu;Username;\r\n';

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
	
	var DBinsula_ch_samples_data = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBinsula_ch_samples_data = new PouchDB('bcoming' + nom_table + debug);
};

var tab_insula_ch_samples_data = new Array();
var tab = new Array();


DBinsula_ch_samples_data.allDocs({  		
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
   				
   				
   				obj.Numero = row.doc.Numero 
   				obj.Date = row.doc.Date 
   				obj.Site = row.doc.Site 
   				obj.Def_Site = row.doc.Def_Site 
   				obj.Biotope = row.doc.Biotope 
   				obj.Observateur = row.doc.Observateur 
   				obj.Filet = row.doc.Filet 
   				obj.Heure_capture = row.doc.Heure_capture 
   				obj.Taxon = row.doc.Taxon 
   				obj.Nom_sc = row.doc.Nom_sc 
   				obj.Sexe = row.doc.Sexe 
   				obj.Avant_bras = row.doc.Avant_bras 
   				obj.Doigt_5 = row.doc.Doigt_5 
   				obj.Doigt_3 = row.doc.Doigt_3 
   				obj.Pouce = row.doc.Pouce 
   				obj.Queue = row.doc.Queue 
   				obj.Tibia = row.doc.Tibia 
   				obj.Pied = row.doc.Pied 
   				obj.CM3 = row.doc.CM3 
   				obj.Poids = row.doc.Poids 
   				obj.Taille_testicule = row.doc.Taille_testicule 
   				obj.Taille_epididymes = row.doc.Taille_epididymes 
   				obj.Tunique_vaginale = row.doc.Tunique_vaginale 
   				obj.Mammelle = row.doc.Mammelle 
   				obj.Gestation = row.doc.Gestation 
   				obj.Glandes_taille = row.doc.Glandes_taille 
   				obj.Glande_couleur = row.doc.Glande_couleur 
   				obj.Epiphyses = row.doc.Epiphyses 
   				obj.Chin_spot = row.doc.Chin_spot 
   				obj.Usure_dent = row.doc.Usure_dent 
   				obj.Age_estime = row.doc.Age_estime 
   				obj.Code_Individu = row.doc.Code_Individu 
   				
   				
   				obj.Username = row.doc.Username 

   				tab_insula_ch_samples_data.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBinsula_ch_samples_data.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addInsula_ch_samples_dataRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
			    row.Numero + ';' + 
				row.Date + ';' + 
				row.Site + ';' + 
				row.Def_Site + ';' + 
				row.Biotope + ';' + 
				row.Observateur + ';' +  
				row.Filet + ';' + 
				row.Heure_capture + ';' + 
				row.Taxon + ';' +  
				row.Nom_sc + ';' +  
				row.Sexe + ';' +  
				row.Avant_bras + ';' +  
				row.Doigt_5 + ';' +  
				row.Doigt_3 + ';' +  
				row.Pouce + ';' + 
				row.Queue + ';' +  
				row.Tibia + ';' + 
				row.Pied + ';' + 
				row.CM3 + ';' +  
				row.Poids + ';' +  
				row.Taille_testicule + ';' +  
				row.Taille_epididymes + ';' +  
				row.Tunique_vaginale + ';' +  
				row.Mammelle + ';' +  
				row.Gestation + ';' + 
				row.Glandes_taille + ';' + 
				row.Glande_couleur + ';' +  
				row.Epiphyses + ';' + 
				row.Chin_spot + ';' +  
				row.Usure_dent + ';' + 
				row.Age_estime + ';' + 
				row.Code_Individu + ';' +  
				
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
	       		saveAs(blob, "insula_ch_samples_data" + clock.now + ".csv");
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
		
		var res = alasql("SELECT Numero, Date, Site, Def_Site, Biotope, Observateur, Filet, Heure_capture, Taxon, Nom_sc, Sexe, Avant_bras, Doigt_5, Doigt_3, Pouce, Queue, Tibia, Pied, CM3, Poids, Taille_testicule, Taille_epididymes, Tunique_vaginale, Mammelle, Gestation, Glandes_taille, Glande_couleur, Epiphyses, Chin_spot, Usure_dent, Age_estime, Code_Individu, Username FROM ? ORDER BY date", [tab_insula_ch_samples_data] );
		   			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addInsula_ch_samples_dataRecord(row, false);
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
		
		

		
		var res = alasql("SELECT Numero, Date, Site, Def_Site, Biotope, Observateur, Filet, Heure_capture, Taxon, Nom_sc, Sexe, Avant_bras, Doigt_5, Doigt_3, Pouce, Queue, Tibia, Pied, CM3, Poids, Taille_testicule, Taille_epididymes, Tunique_vaginale, Mammelle, Gestation, Glandes_taille, Glande_couleur, Epiphyses, Chin_spot, Usure_dent, Age_estime, Code_Individu, Username FROM ? ORDER BY date", [tab_insula_ch_samples_data] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addInsula_ch_samples_dataRecord(row, true);
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
	






	


