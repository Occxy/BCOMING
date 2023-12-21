var bcoming_merfi_guinea_table = localStorage.getItem('bcoming_merfi_guinea_table');

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
			{ data: null, render: 'Result_Id'},									
			{ data: null, render: 'Device_Name'},
	        { data: null, render: 'Surveyed_Date'},
	        { data: null, render: 'Surveyed_Time'},
	        { data: null, render: 'Surveyed'},
	        { data: null, render: 'End_Date'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + bcoming_merfi_guinea_table + debug);
	} else {
		var DB = new PouchDB(bcoming_merfi_guinea_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Bcoming_merfi_guinea(row.doc.Result_Id, row.doc.Device_Name, row.doc.Surveyed_Date, row.doc.Surveyed_Time, row.doc.Surveyed, row.doc.End_Date,
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

function Bcoming_merfi_guinea(Result_Id, Device_Name, Surveyed_Date, Surveyed_Time, Surveyed, End_Date, Action) {
    if (Result_Id !== null) {
    	this._Result_Id = Result_Id;
    } else {
    	this._Result_Id = '';
    };
    if (Device_Name !== null) {
    	this._Device_Name = Device_Name; 
    } else {
    	this._Device_Name = '';
    };
    if (Surveyed_Date !== null) {
    	this._Surveyed_Date = Surveyed_Date;	
    } else {
    	this._Surveyed_Date = '';
    };
    if (Surveyed_Time !== null) {
    	this._Surveyed_Time = Surveyed_Time;	
    } else {
    	this.Surveyed_Time = '';
    };
    if (Surveyed !== null) {
    	this._Surveyed = Surveyed;	
    } else {
    	this._Surveyed = '';
    };
    if (End_Date !== null) {
    	this._End_Date = End_Date;	
    } else {
    	this._End_Date = '';
    };
    
    this._Action = Action;
    		    
    this.Result_Id = function() {
        return this._Result_Id;
    };
        
    this.Device_Name  = function () {
    	return this._Device_Name;
    };
 
    this.Surveyed_Date = function () {
        return this._Surveyed_Date;
    };	    

    this.Surveyed_Time = function() {
        return this._Surveyed_Time;
    };
    
    this.Surveyed = function() {
        return this._Surveyed;
    };
    
    this.End_Date = function() {
        return this._End_Date;
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