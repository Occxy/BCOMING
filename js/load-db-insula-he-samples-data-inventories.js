var insula_he_samples_data_inventories_table = localStorage.getItem('insula_he_samples_data_inventories_table');

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
			{ data: null, render: 'Code'},									
			{ data: null, render: 'Date'},
	        { data: null, render: 'Site_nom'},
	        { data: null, render: 'Genre'},
	        { data: null, render: 'Sp'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + insula_he_samples_data_inventories_table + debug);
	} else {
		var DB = new PouchDB(insula_he_samples_data_inventories_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new InsulaCHSamples_data_inventories(row.doc.Code, row.doc.Date, row.doc.Site_nom, row.doc.Genre, row.doc.Sp, 
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

function InsulaCHSamples_data_inventories(Code, Date, Site_nom, Genre, Sp, Action) {
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
    if (Site_nom !== null) {
    	this._Site_nom = Site_nom;	
    } else {
    	this._Site_nom = '';
    };
    if (Genre !== null) {
    	this._Genre = Genre;	
    } else {
    	this._Genre = '';
    };
    if (Sp !== null) {
    	this._Sp = Sp;	
    } else {
    	this._Sp = '';
    };
    
    this._Action = Action;
    		    
    this.Code = function() {
        return this._Code;
    };
        
    this.Date  = function () {
    	return this._Date;
    };
 
    this.Site_nom = function () {
        return this._Site_nom;
    };	    
    
    this.Genre = function() {
        return this._Genre;
    };
    
    this.Sp = function() {
        return this._Sp;
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

