var west_nile_chickens_table = localStorage.getItem('west_nile_chickens_table');

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
			{ data: null, render: 'Date_prelevement'},									
			{ data: null, render: 'Description'},
	        { data: null, render: 'Commune'},
	        { data: null, render: 'N_de_suivi'},
	        { data: null, render: 'N_de_res'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + west_nile_chickens_table + debug);
	} else {
		var DB = new PouchDB(west_nile_chickens_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new WestNileChickens(row.doc.Date_prelevement, row.doc.Description, row.doc.Commune, row.doc.N_de_suivi, row.doc.N_de_res,  
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

function WestNileChickens(Date_prelevement, Description, Commune, N_de_suivi, N_de_res, Action) {
    if (Date_prelevement !== null) {
    	this._Date_prelevement = Date_prelevement;
    } else {
    	this._Date_prelevement = '';
    };
    if (Description !== null) {
    	this._Description = Description; 
    } else {
    	this._Description = '';
    };
    if (Commune !== null) {
    	this._Commune = Commune;	
    } else {
    	this._Commune = '';
    };
    if (N_de_suivi !== null) {
    	this._N_de_suivi = N_de_suivi;	
    } else {
    	this.N_de_suivi = '';
    };
    if (N_de_res !== null) {
    	this._N_de_res = N_de_res;	
    } else {
    	this._N_de_res = '';
    };
    
    this._Action = Action;
    		    
    this.Date_prelevement = function() {
        return this._Date_prelevement;
    };
        
    this.Description  = function () {
    	return this._Description;
    };
 
    this.Commune = function () {
        return this._Commune;
    };	    

    this.N_de_suivi = function() {
        return this._N_de_suivi;
    };
    
    this.N_de_res = function() {
        return this._N_de_res;
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

