var west_nile_mosquitoes_field_samples_table = localStorage.getItem('west_nile_mosquitoes_field_samples_table');

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
			{ data: null, render: 'ID_F'},
			{ data: null, render: 'Date'},									
			{ data: null, render: 'Site'},
	        { data: null, render: 'Location'},
	        { data: null, render: 'Commune'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + west_nile_mosquitoes_field_samples_table + debug);
	} else {
		var DB = new PouchDB(west_nile_mosquitoes_field_samples_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new WestNileMosquitoes_field_samples(row.doc.ID_F, row.doc.Date, row.doc.Site, row.doc.Location, row.doc.Commune,  
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

function WestNileMosquitoes_field_samples(ID_F, Date, Site, Location, Commune, Action) {
	if (ID_F !== null) {
    	this._ID_F = ID_F; 
    } else {
    	this._ID_F = '';
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
    if (Location !== null) {
    	this._Location = Location;	
    } else {
    	this.Location = '';
    };
    if (Commune !== null) {
    	this._Commune = Commune;	
    } else {
    	this._Commune = '';
    };
    
    this._Action = Action;
    
    this.ID_F  = function () {
    	return this._ID_F;
    };
    
    this.Date = function() {
        return this._Date;
    };
    
    this.Site = function () {
        return this._Site;
    };	    

    this.Location = function() {
        return this._Location;
    };
    
    this.Commune = function() {
        return this._Commune;
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

