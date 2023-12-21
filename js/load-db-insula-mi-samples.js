var insula_mi_samples_table = localStorage.getItem('insula_mi_samples_table');

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
	        { data: null, render: 'Site'},
	        { data: null, render: 'Def_site'},
	        { data: null, render: 'Famille'},
	        { data: null, render: 'Species'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + insula_mi_samples_table + debug);
	} else {
		var DB = new PouchDB(insula_mi_samples_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   	
    			table.row.add(new InsulaCHSamples(row.doc.Code, row.doc.Date, row.doc.Site, row.doc.Def_site, row.doc.Famille, row.doc.Species,  
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

function InsulaCHSamples(Code, Date, Site, Def_site, Famille, Species, Action) {
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
    if (Site !== null) {
    	this._Site = Site;	
    } else {
    	this._Site = '';
    };
    if (Def_site !== null) {
    	this._Def_site = Def_site;	
    } else {
    	this._Def_site = '';
    };
    if (Famille !== null) {
    	this._Famille = Famille;	
    } else {
    	this._Famille = '';
    };
    if (Species !== null) {
    	this._Species = Species;	
    } else {
    	this._Species = '';
    };
    
    this._Action = Action;
    		    
    this.Code = function() {
        return this._Code;
    };
        
    this.Date  = function () {
    	return this._Date;
    };
 
    this.Site = function () {
        return this._Site;
    };	    
    
    this.Def_site = function() {
        return this._Def_site;
    };
    
    this.Famille = function () {
        return this._Famille;
    };	    
    
    this.Species = function() {
        return this._Species;
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

