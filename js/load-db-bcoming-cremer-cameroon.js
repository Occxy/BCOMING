var bcoming_cremer_cameroon_table = localStorage.getItem('bcoming_cremer_cameroon_table');

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
		columnDefs: [
			 { type: 'formatted-num', targets: 0},
		],
		columns: [			
			{ data: null, render: 'CODE_rongeur'},									
			{ data: null, render: 'Date'},
	        { data: null, render: 'Equipe'},
	        { data: null, render: 'Region'},
	        { data: null, render: 'Village'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + bcoming_cremer_cameroon_table + debug);
	} else {
		var DB = new PouchDB(bcoming_cremer_cameroon_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Bcoming_cremer_cameroon_rodents(row.doc.CODE_rongeur, row.doc.Date, row.doc.Equipe, row.doc.Region, row.doc.Village,  
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

function Bcoming_cremer_cameroon_rodents(CODE_rongeur, Date, Equipe, Region, Village, Action) {
    if (CODE_rongeur !== null) {
    	this._CODE_rongeur = CODE_rongeur;
    } else {
    	this._CODE_rongeur = '';
    };
    if (Date !== null) {
    	this._Date = Date; 
    } else {
    	this._Date = '';
    };
    if (Equipe !== null) {
    	this._Equipe = Equipe;	
    } else {
    	this._Equipe = '';
    };
    if (Region !== null) {
    	this._Region = Region;	
    } else {
    	this.Region = '';
    };
    if (Village !== null) {
    	this._Village = Village;	
    } else {
    	this._Village = '';
    };
    
    this._Action = Action;
    		    
    this.CODE_rongeur = function() {
        return this._CODE_rongeur;
    };
        
    this.Date  = function () {
    	return this._Date;
    };
 
    this.Equipe = function () {
        return this._Equipe;
    };	    

    this.Region = function() {
        return this._Region;
    };
    
    this.Village = function() {
        return this._Village;
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

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"formatted-num-pre": function ( a ) {
		a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
		return parseFloat( a );
	},

	"formatted-num-asc": function ( a, b ) {
		return a - b;
	},

	"formatted-num-desc": function ( a, b ) {
		return b - a;
	}
} );