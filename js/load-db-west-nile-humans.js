var west_nile_humans_table = localStorage.getItem('west_nile_humans_table');

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
	        { data: null, render: 'Age'},
	        { data: null, render: 'Colonne1'},
	        { data: null, render: 'Lieu_prelevement'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + west_nile_humans_table + debug);
	} else {
		var DB = new PouchDB(west_nile_humans_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new WestNileHumans(row.doc.Date_prelevement, row.doc.Description, row.doc.Age, row.doc.Colonne1, row.doc.Lieu_prelevement,  
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

function WestNileHumans(Date_prelevement, Description, Age, Colonne1, Lieu_prelevement, Action) {
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
    if (Age !== null) {
    	this._Age = Age;	
    } else {
    	this._Age = '';
    };
    if (Colonne1 !== null) {
    	this._Colonne1 = Colonne1;	
    } else {
    	this.Colonne1 = '';
    };
    if (Lieu_prelevement !== null) {
    	this._Lieu_prelevement = Lieu_prelevement;	
    } else {
    	this._Lieu_prelevement = '';
    };
    
    this._Action = Action;
    		    
    this.Date_prelevement = function() {
        return this._Date_prelevement;
    };
        
    this.Description  = function () {
    	return this._Description;
    };
 
    this.Age = function () {
        return this._Age;
    };	    

    this.Colonne1 = function() {
        return this._Colonne1;
    };
    
    this.Lieu_prelevement = function() {
        return this._Lieu_prelevement;
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

