function chargement_west_nile_humans() {
	showConnexionStatus();
	
    var option = searchParams.get('option');
    var table = searchParams.get('table');
    
    if ((option == 1) || (option == 2)) {
    	modifier(table, option);
    }
	//chargement_des_tables_de_reference(table, option);
}

function chargement_des_tables_de_reference(table, option) {
	
	//0 -> juste le chargement des tables de références
	//1 -> chargement des table de références et récupérations des infos du dernier ajout
	//2 -> chargement des table de références pour modification d'un enregistrement
	
	var remote_couchdb = localStorage.getItem('remote_couchdb');

	var debug;
	if (localStorage.getItem('debug') === null) {
		debug = '';
	} else {
		debug = localStorage.getItem('debug');
	};
		
	
	/*DB.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
	    	var paysTablesData = JSON.parse(JSON.stringify(result));
		    	
	    	paysTablesData.rows.forEach(function(row){   
	    		Pays.options[Pays.options.length] = new Option(row.doc.Pays, row.doc.Pays); 
	    	});		 

	    	//listeLieu_capture();
	    	
	    	if ((option == 1) || (option == 2)) {
				modifier(table, option);
	  		};
		
	    }
	}).catch(function (err) {
		console.log(err);
	});*/

	
}


function modifier(table, option) {
	
	var doc;
	if (option == 1) {
		doc = JSON.parse(localStorage.getItem('WestNileHumansTablesData'));
		
		function addValue(elementName, onchange) {
			var element = document.getElementById(elementName);
			element.value = doc[elementName];
			try {
				if (onchange) {
					element.onchange();
				}
			} catch(err) {
			};
		}
		
		/*var SamplingDate = new Date(doc.SamplingDate);
		$('#SamplingDate').datepicker('setDate', SamplingDate);
		addValue('Province');
		addValue('Site');*/

	} else {
	
		var id = localStorage.getItem('ID' + table);
		
		var debug;
		if (localStorage.getItem('debug') === null) {
			debug = '';
		} else {
			debug = localStorage.getItem('debug');
		};
		
		if (localStorage.getItem('web') === 'oui') {
			var remote_couchdb = localStorage.getItem('remote_couchdb');
			var DB = new PouchDB(remote_couchdb + 'bcoming' + table + debug);
		} else {
			var DB = new PouchDB('bcoming' + table + debug);
		};
		DB.allDocs({  		
				keys: [id],
			include_docs: true,
			attachments: true
		}).then(function (result) {
	
			// handle result
			if (typeof(JSON.stringify(result)) != "undefined"){  
				console.log(JSON.stringify(result.rows));
				
				function addValue(elementName, onchange) {
					var element = document.getElementById(elementName);
					element.value = result.rows[0].doc[elementName];
					try {
						if (onchange) {
							element.onchange();
						}
					} catch(err) {
					};
				}
				
				var dateString = result.rows[0].doc.Date_prelevement; // Format "jj/mm/aaaa", par exemple "21/08/2023"
				var dateParts = dateString.split('/');
				var day = parseInt(dateParts[0], 10);
				var month = parseInt(dateParts[1], 10);
				var year = parseInt(dateParts[2], 10);
				
				var stringDate = new Date(year, month - 1, day);
				
				//var stringDate = new Date(result.rows[0].doc.Date);
				
				
				$('.input-datepicker').datepicker({
		        	language: 'fr',
		        	autoclose: true
		      	});
				$('#Date_prelevement').datepicker('setDate', stringDate);
				
				addValue('Description');	

				addValue('Date_prelevement');
				addValue('Description');
				addValue('Organism');
				addValue('Age');
				addValue('Comunne');
				addValue('Colonne1');
				addValue('Lieu_prelevement');
				addValue('WNV_IgM_CNR');
				addValue('WNV_IgG_CNR');
				addValue('Autres_arboviroses');
				
				
				
					  
	    	};
	
		}).catch(function (err) {
			console.log(err);
		});
	}
}


