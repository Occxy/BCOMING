var insula_av_inventories_wp1_table = localStorage.getItem('insula_av_inventories_wp1_table');

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
			{ data: null, render: 'Date'},
	        { data: null, render: 'Common_Name'},
	        { data: null, render: 'Scientific_Name'},
	        { data: null, render: 'Location_Code'},
	        { data: null, render: 'Location_Site'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + insula_av_inventories_wp1_table + debug);
	} else {
		var DB = new PouchDB(insula_av_inventories_wp1_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){  
    			table.row.add(new InsulaAVInventories_wp1(row.doc.Date, row.doc.Common_Name, row.doc.Scientific_Name, row.doc.Location_Code, row.doc.Location_Site,  
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

function InsulaAVInventories_wp1(Date, Common_Name, Scientific_Name, Location_Code, Location_Site, Action) {
    
    if (Date !== null) {
    	this._Date = Date; 
    } else {
    	this._Date = '';
    };
    if (Common_Name !== null) {
    	this._Common_Name = Common_Name;	
    } else {
    	this._Common_Name = '';
    };
    if (Scientific_Name !== null) {
    	this._Scientific_Name = Scientific_Name;	
    } else {
    	this.Scientific_Name = '';
    };
    if (Location_Code !== null) {
    	this._Location_Code = Location_Code;
    } else {
    	this._Location_Code = '';
    };
    if (Location_Site !== null) {
    	this._Location_Site = Location_Site;	
    } else {
    	this._Location_Site = '';
    };
    
    this._Action = Action;
        
    this.Date  = function () {
    	return this._Date;
    };
 
    this.Common_Name = function () {
        return this._Common_Name;
    };	    

    this.Scientific_Name = function() {
        return this._Scientific_Name;
    };
    
    this.Location_Code = function() {
        return this._Location_Code;
    };
    
    this.Location_Site = function() {
        return this._Location_Site;
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

