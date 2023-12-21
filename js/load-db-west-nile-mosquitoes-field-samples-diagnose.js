var west_nile_mosquitoes_field_samples_diagnose_table = localStorage.getItem('west_nile_mosquitoes_field_samples_diagnose_table');

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
			 { type: 'date-eu', targets: 2 }
		],*/
		columns: [	
			{ data: null, render: 'ID_FD'},
			{ data: null, render: 'ID_FS'},									
			{ data: null, render: 'Species'},
	        { data: null, render: 'Individuals'},
	        { data: null, render: 'Date'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + west_nile_mosquitoes_field_samples_diagnose_table + debug);
	} else {
		var DB = new PouchDB(west_nile_mosquitoes_field_samples_diagnose_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new WestNileMosquitoes_field_samples_diagnose(row.doc.ID_FD, row.doc.ID_FS, row.doc.Species, row.doc.Individuals, row.doc.Date,  
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

function WestNileMosquitoes_field_samples_diagnose(ID_FD, ID_FS, Species, Individuals, Date, Action) {
	if (ID_FD !== null) {
    	this._ID_FD = ID_FD; 
    } else {
    	this._ID_FD = '';
    };
    if (ID_FS !== null) {
    	this._ID_FS = ID_FS;
    } else {
    	this._ID_FS = '';
    };
    if (Species !== null) {
    	this._Species = Species;	
    } else {
    	this._Species = '';
    };
    if (Individuals !== null) {
    	this._Individuals = Individuals;	
    } else {
    	this.Individuals = '';
    };
    if (Date !== null) {
    	this._Date = Date;	
    } else {
    	this._Date = '';
    };
    
    this._Action = Action;
    
    this.ID_FD  = function () {
    	return this._ID_FD;
    };
    
    this.ID_FS = function() {
        return this._ID_FS;
    };
    
    this.Species = function () {
        return this._Species;
    };	    

    this.Individuals = function() {
        return this._Individuals;
    };
    
    this.Date = function() {
        return this._Date;
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

