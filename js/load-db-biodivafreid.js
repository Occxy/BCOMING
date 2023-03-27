var camacross_table = localStorage.getItem('biodivafreid_table');

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
			 {  type: 'date-eu', targets: 1} 
		],
		columns: [			
			{ data: null, render: 'ua_id'},									
			{ data: null, render: 'date'},
	        { data: null, render: 'location'},
	        { data: null, render: 'sub_order'},
	        { data: null, render: 'genus_field'},
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
    			table.row.add(new BiodivAfreid(row.doc.ua_id, row.doc.date, row.doc.Location, row.doc.sub_order, row.doc.genus_field,  
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

function BiodivAfreid(ua_id, date, location, sub_order, genus_field, Action) {
    if (ua_id !== null) {
    	this._ua_id = ua_id;
    } else {
    	this._ua_id = '';
    };
    if (date !== null) {
    	this._date = date; 
    } else {
    	this._date = '';
    };
    if (location !== null) {
    	this._location = location;	
    } else {
    	this._location = '';
    };
    if (sub_order !== null) {
    	this._sub_order = sub_order;	
    } else {
    	this.sub_order = '';
    };
    if (genus_field !== null) {
    	this._genus_field = genus_field;	
    } else {
    	this._genus_field = '';
    };
    
    this._Action = Action;
    		    
    this.ua_id = function() {
        return this._ua_id;
    };
        
    this.date  = function () {
    	return this._date;
    };
 
    this.location = function () {
        return this._location;
    };	    

    this.sub_order = function() {
        return this._sub_order;
    };
    
    this.genus_field = function() {
        return this._genus_field;
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

