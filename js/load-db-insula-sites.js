var insula_sites_table = localStorage.getItem('insula_sites_table');

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
			

			{ data: null, render: 'Id_site'},									
			{ data: null, render: 'Sites_no'},
	        { data: null, render: 'Sites_proposes2'},
	        { data: null, render: 'Etat'},
	        { data: null, render: 'Lat'},
	        { data: null, render: 'Long'},
	        { data: null, render: 'Action'}
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + insula_sites_table + debug);
	} else {
		var DB = new PouchDB(insula_sites_table + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new InsulaAVSamples(row.doc.Id_site, row.doc.Sites_no, row.doc.Sites_proposes2, row.doc.Etat, row.doc.Lat, row.doc.Long,   
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
				
function InsulaAVSamples(Id_site, Sites_no, Sites_proposes2, Etat, Lat, Long, Action) {
    if (Id_site !== null) {
    	this._Id_site = Id_site;
    } else {
    	this._Id_site = '';
    };
    if (Sites_no !== null) {
    	this.Sites_no = Sites_no; 
    } else {
    	this.Sites_no = '';
    };
    if (Sites_proposes2 !== null) {
    	this._Sites_proposes2 = Sites_proposes2;	
    } else {
    	this._Sites_proposes2 = '';
    };
    if (Etat !== null) {
    	this._Etat = Etat;	
    } else {
    	this.Etat = '';
    };
    if (Lat !== null) {
    	this._Lat = Lat;	
    } else {
    	this._Lat = '';
    };
    if (Long !== null) {
    	this._Long = Long;	
    } else {
    	this._Long = '';
    };
    
    this._Action = Action;
    		    
    this.Id_site = function() {
        return this._Id_site;
    };
        
    this.Date  = function () {
    	return this.Lats_no;
    };
 
    this.Sites_proposes2 = function () {
        return this._Sites_proposes2;
    };	    

    this.Etat = function() {
        return this._Etat;
    };
    
    this.Lat = function() {
        return this._Lat;
    };
    
    this.Long = function() {
        return this._Long;
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

