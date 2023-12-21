var insula_ch_samples_data_table = localStorage.getItem('insula_ch_samples_data_table');

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
			{ data: null, render: 'Code_Individu'},									
			{ data: null, render: 'Date'},
	        { data: null, render: 'Taxon'},
	        { data: null, render: 'Nom_sc'},
	        { data: null, render: 'Site'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + insula_ch_samples_data_table + debug);
	} else {
		var DB = new PouchDB(insula_ch_samples_data_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new InsulaAVSamples_data(row.doc.Code_Individu, row.doc.Date, row.doc.Taxon, row.doc.Nom_sc, row.doc.Site,  
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

function InsulaAVSamples_data(Code_Individu, Date, Taxon, Nom_sc, Site, Action) {
    if (Code_Individu !== null) {
    	this._Code_Individu = Code_Individu;
    } else {
    	this._Code_Individu = '';
    };
    if (Date !== null) {
    	this._Date = Date; 
    } else {
    	this._Date = '';
    };
    if (Taxon !== null) {
    	this._Taxon = Taxon;	
    } else {
    	this._Taxon = '';
    };
    if (Nom_sc !== null) {
    	this._Nom_sc = Nom_sc;	
    } else {
    	this.Nom_sc = '';
    };
    if (Site !== null) {
    	this._Site = Site;	
    } else {
    	this._Site = '';
    };
    
    this._Action = Action;
    		    
    this.Code_Individu = function() {
        return this._Code_Individu;
    };
        
    this.Date  = function () {
    	return this._Date;
    };
 
    this.Taxon = function () {
        return this._Taxon;
    };	    

    this.Nom_sc = function() {
        return this._Nom_sc;
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

