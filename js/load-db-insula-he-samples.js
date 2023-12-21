var insula_he_samples_table = localStorage.getItem('insula_he_samples_table');

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

disable_li();
disable_button();

var counter = 0;
var progressbar_count = 0;
var step = 0;
var width = 0;

$(document).ready(function() {			
		
	/*{
        orderable: false,
        className: 'select-checkbox',
        targets:   0
    },*/
	/*{ data: null, defaultContent: '' },*/
	/*,
        select: {
            style:    'os',
            selector: 'td:first-child'
        }
        */
	var table = $('#example').DataTable({
		/*columnDefs: [
			 { type: 'Date-eu', targets: 2 }
		],*/
		columns: [			
			{ data: null, render: 'Code'},				
			{ data: null, render: 'Date'},
	        { data: null, render: 'Poids_g'},
	        { data: null, render: 'Poids_avant_sechage'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + insula_he_samples_table + debug);
	} else {
		var DB = new PouchDB(insula_he_samples_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new InsulaHESamples(row.doc.Code, row.doc.Date, row.doc.Poids_g, row.doc.Poids_avant_sechage,  
    				"<td><button data-id='" + row.doc._id + "' class='btn btn-danger btn-sm deletebtn' data-title='Supprimer' data-toggle='modal' data-target='#deletemodal'><span class='fa fa-trash'></span></button>" +
                    "<button data-id='" + row.doc._id + "' class='btn btn-primary btn-sm modifybtn' data-title='Modifier'><span class='fa fa-pencil'></span></button>" +
                    "<button data-id='" + row.doc._id + "' class='btn btn-info btn-sm seebtn showbtn' data-title='Consulter'><span class='fa fa-search'></span></button>" +
                    "<input data-id=" + row.doc._id + " type='checkbox' class='chk'></td>"
	    		));
			});
	    	table.draw();	
	    	enable_li();
	    	enable_button();
		}
	}).catch(function (err) {
		console.log(err);
	}); 	
					
});

function InsulaHESamples(Code, Date, Poids_g, Poids_avant_sechage, Action) {
    if (Code !== null) {
    	this._Code = Code;
    } else {
    	this._Code = '';
    };
    if (Date !== null) {
    	this._Date = Date; 
    } else {
    	this._Date = '';
    };
    if (Poids_g !== null) {
    	this._Poids_g = Poids_g;	
    } else {
    	this._Poids_g = '';
    };
    if (Poids_avant_sechage !== null) {
    	this._Poids_avant_sechage = Poids_avant_sechage;	
    } else {
    	this.Poids_avant_sechage = '';
    };
    
    
    this._Action = Action;
    		    
    this.Code = function() {
        return this._Code;
    };
        
    this.Date  = function () {
    	return this._Date;
    };
 
    this.Poids_g = function () {
        return this._Poids_g;
    };	    

    this.Poids_avant_sechage = function() {
        return this._Poids_avant_sechage;
    };
    
    this.Action = function () {
        return this._Action;
    };
}

function disable_button() {
	var button_add =  document.getElementById("button_add");
	button_add.classList.add("noclick");
};

function enable_button() {
	var button_add =  document.getElementById("button_add");
	button_add.classList.remove("noclick");
};

