var biodivafreid_locations_table = localStorage.getItem('biodivafreid_locations_table');

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
			{ data: null, render: 'location_code'},									
			{ data: null, render: 'location_name'},
	        { data: null, render: 'country'},
	        { data: null, render: 'province'},
	        { data: null, render: 'locality'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + biodivafreid_locations_table + debug);
	} else {
		var DB = new PouchDB(biodivafreid_locations_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new BiodivAfreid_locations(row.doc.location_code, row.doc.location_name, row.doc.country, row.doc.province, row.doc.locality,  
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

function BiodivAfreid_locations(location_code, location_name, country, province, locality, Action) {
    if (location_code !== null) {
    	this._location_code = location_code;
    } else {
    	this._location_code = '';
    };
    if (location_name !== null) {
    	this._location_name = location_name; 
    } else {
    	this._location_name = '';
    };
    if (country !== null) {
    	this._country = country;	
    } else {
    	this._country = '';
    };
    if (province !== null) {
    	this._province = province;	
    } else {
    	this.province = '';
    };
    if (locality !== null) {
    	this._locality = locality;	
    } else {
    	this._locality = '';
    };
    
    this._Action = Action;
    		    
    this.location_code = function() {
        return this._location_code;
    };
        
    this.location_name  = function () {
    	return this._location_name;
    };
 
    this.country = function () {
        return this._country;
    };	    

    this.province = function() {
        return this._province;
    };
    
    this.locality = function() {
        return this._locality;
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

