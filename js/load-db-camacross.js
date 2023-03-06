var camacross_table = localStorage.getItem('camacross_table');

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
			{ data: null, render: 'SamplingDate'},									
			{ data: null, render: 'AnimalCode'},
	        { data: null, render: 'Province'},
	        { data: null, render: 'Site'},
	        { data: null, render: 'Species'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + camacross_table + debug);
	} else {
		var DB = new PouchDB(camacross_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Camacross(row.doc.SamplingDate, row.doc.AnimalCode, row.doc.Province, row.doc.Site, row.doc.Species,  
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

function Camacross(SamplingDate, AnimalCode, Province, Site, Species, Action) {
    if (SamplingDate !== null) {
    	this._SamplingDate = SamplingDate;
    } else {
    	this._SamplingDate = '';
    };
    if (AnimalCode !== null) {
    	this._AnimalCode = AnimalCode; 
    } else {
    	this._AnimalCode = '';
    };
    if (Province !== null) {
    	this._Province = Province;	
    } else {
    	this._Province = '';
    };
    if (Site !== null) {
    	this._Site = Site;	
    } else {
    	this.Site = '';
    };
    if (Species !== null) {
    	this._Species = Species;	
    } else {
    	this._Species = '';
    };
    
    this._Action = Action;
    		    
    this.SamplingDate = function() {
        return this._SamplingDate;
    };
        
    this.AnimalCode  = function () {
    	return this._AnimalCode;
    };
 
    this.Province = function () {
        return this._Province;
    };	    

    this.Site = function() {
        return this._Site;
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

