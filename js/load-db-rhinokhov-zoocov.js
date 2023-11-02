var rhinokhov_zoocov_table = localStorage.getItem('rhinokhov_zoocov_table');

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
            { data: null, render: 'Sampling_Date'},									
			{ data: null, render: 'Animal_ID'},
	        { data: null, render: 'Genus_Species'},
	        { data: null, render: 'Province'},
	        { data: null, render: 'Site'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + rhinokhov_zoocov_table + debug);
	} else {
		var DB = new PouchDB(rhinokhov_zoocov_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new RhinoKhov_ZooCov(row.doc.Sampling_Date, row.doc.Animal_ID, row.doc.Genus_Species, row.doc.Province, row.doc.Site,  
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



function RhinoKhov_ZooCov(Sampling_Date, Animal_ID, Genus_Species, Province, Site, Action) {
    if (Sampling_Date !== null) {
    	this._Sampling_Date = Sampling_Date;
    } else {
    	this._Sampling_Date = '';
    };
    if (Animal_ID !== null) {
    	this._Animal_ID = Animal_ID; 
    } else {
    	this._Animal_ID = '';
    };
    if (Genus_Species !== null) {
    	this._Genus_Species = Genus_Species;	
    } else {
    	this._Genus_Species = '';
    };
    if (Province !== null) {
    	this._Province = Province;	
    } else {
    	this.Province = '';
    };
    if (Site !== null) {
    	this._Site = Site;	
    } else {
    	this._Site = '';
    };
    
    this._Action = Action;
    		    
    this.Sampling_Date = function() {
        return this._Sampling_Date;
    };
        
    this.Animal_ID  = function () {
    	return this._Animal_ID;
    };
 
    this.Genus_Species = function () {
        return this._Genus_Species;
    };	    

    this.Province = function() {
        return this._Province;
    };
    
    this.Site = function() {
        return this._Site;
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

