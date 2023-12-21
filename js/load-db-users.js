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
			{ data: null, render: 'email'},									
			{ data: null, render: 'username'},
			{ data: null, render: 'ComAcross'},
	        { data: null, render: 'RhinoKhov_Zoocov'},
	        { data: null, render: 'BComing_Cerfig'},
	        { data: null, render: 'Biodiv_Afreid'},
	        { data: null, render: 'Insula'},
	        { data: null, render: 'Surveillance_of_west_nile'},
	        { data: null, render: 'BComing_Merfi'},
	    ]/*,
	    language: {
            url: 'plug-ins/i18n/French.lang.json'
        }*/
	});
		
	if (localStorage.getItem('web') === 'oui') {
		var remote_couchdb = localStorage.getItem('remote_couchdb');
		var DB = new PouchDB(remote_couchdb + 'bcoming_username' + debug);
	} else {
		var DB = new PouchDB('bcoming_username' + debug);
	};	
  	DB.allDocs({
		include_docs: true,
		attachments: true
	}).then(function (result) {
		if (typeof(JSON.stringify(result)) != "undefined"){  
    		var dataTablesData = JSON.parse(JSON.stringify(result));
	    				    		
    		dataTablesData.rows.forEach(function(row){   
    			table.row.add(new Users(row.doc.email, row.doc.username, row.doc.projects, row.doc._id));
			});
	    	table.draw();	
	    	enable_li();
	    	enable_button();
		}
	}).catch(function (err) {
		console.log(err);
	}); 	
					
});

function Users(email, username, projects, id, Action) {
    if (email !== null) {
    	this._email = email;
    } else {
    	this._email = '';
    };
    if (username !== null) {
    	this._username = username; 
    } else {
    	this._username = '';
    };

    if ((projects !== null) && (projects !== undefined)) {
    	var codeProjectsArray = String(projects).split(',');
    	if (arrayIncludes(codeProjectsArray, String(2))) {
    		this._ComAcross = "<button id='unvalidate" + id + "-2' data-user=" + username + " data-id='" + id + "' class='btn btn-success btn-sm seebtn unvalidatebtn' data-title='Validated' data-toggle='modal' data-target='#unvalidatemodal' data-project='2'><span id='spanunvalidate" + id + "-2' class='fa fa-check'></span></button>";
		} else {
			this._ComAcross = "<button id='validate" + id + "-2' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='2'><span id='spanvalidate" + id + "-2' class='fa fa-close'></span></button>";
		}
    } else {
    	this._ComAcross = "<button id='validate" + id + "-2' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='2'><span id='spanvalidate" + id + "-2' class='fa fa-close'></span></button>";
    };
    
    if ((projects !== null) && (projects !== undefined)) {
    	var codeProjectsArray = String(projects).split(',');
    	if (arrayIncludes(codeProjectsArray, String(3))) {
    		this._RhinoKhov_Zoocov = "<button id='unvalidate" + id + "-3' data-user=" + username + " data-id='" + id + "' class='btn btn-success btn-sm seebtn unvalidatebtn' data-title='Validated' data-toggle='modal' data-target='#unvalidatemodal' data-project='3'><span id='spanunvalidate" + id + "-3' class='fa fa-check'></span></button>";
		} else {
			this._RhinoKhov_Zoocov = "<button id='validate" + id + "-3' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='3'><span id='spanvalidate" + id + "-3' class='fa fa-close'></span></button>";
		}
    } else {
    	this._RhinoKhov_Zoocov = "<button id='validate" + id + "-3' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='3'><span id='spanvalidate" + id + "-3' class='fa fa-close'></span></button>";
    };
    
    if ((projects !== null) && (projects !== undefined)) {
    	var codeProjectsArray = String(projects).split(',');
    	if (arrayIncludes(codeProjectsArray, String(4))) {
    		this._BComing_Cerfig = "<button id='unvalidate" + id + "-4' data-user=" + username + " data-id='" + id + "' class='btn btn-success btn-sm seebtn unvalidatebtn' data-title='Validated' data-toggle='modal' data-target='#unvalidatemodal' data-project='4'><span id='spanunvalidate" + id + "-4' class='fa fa-check'></span></button>";
		} else {
			this._BComing_Cerfig = "<button id='validate" + id + "-4' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='4'><span id='spanvalidate" + id + "-4' class='fa fa-close'></span></button>";
		}
    } else {
    	this._BComing_Cerfig = "<button id='validate" + id + "-4' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='4'><span id='spanvalidate" + id + "-4' class='fa fa-close'></span></button>";
    };
    
    if ((projects !== null) && (projects !== undefined)) {
    	var codeProjectsArray = String(projects).split(',');
    	if (arrayIncludes(codeProjectsArray, String(5))) {
    		this._Biodiv_Afreid = "<button id='unvalidate" + id + "-5' data-user=" + username + " data-id='" + id + "' class='btn btn-success btn-sm seebtn unvalidatebtn' data-title='Validated' data-toggle='modal' data-target='#unvalidatemodal' data-project='5'><span id='spanunvalidate" + id + "-5' class='fa fa-check'></span></button>";
		} else {
			this._Biodiv_Afreid = "<button id='validate" + id + "-5' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='5'><span id='spanvalidate" + id + "-5' class='fa fa-close'></span></button>";
		}
    } else {
    	this._Biodiv_Afreid = "<button id='validate" + id + "-5' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='5'><span id='spanvalidate" + id + "-5' class='fa fa-close'></span></button>";
    };

    if ((projects !== null) && (projects !== undefined)) {
    	var codeProjectsArray = String(projects).split(',');
    	if (arrayIncludes(codeProjectsArray, String(6))) {
    		this._Insula = "<button id='unvalidate" + id + "-6' data-user=" + username + " data-id='" + id + "' class='btn btn-success btn-sm seebtn unvalidatebtn' data-title='Validated' data-toggle='modal' data-target='#unvalidatemodal' data-project='6'><span id='spanunvalidate" + id + "-6' class='fa fa-check'></span></button>";
		} else {
			this._Insula = "<button id='validate" + id + "-6' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='6'><span id='spanvalidate" + id + "-6' class='fa fa-close'></span></button>";
		}
    } else {
    	this._Insula = "<button id='validate" + id + "-6' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='6'><span id='spanvalidate" + id + "-6' class='fa fa-close'></span></button>";
    };
    
    if ((projects !== null) && (projects !== undefined)) {
    	var codeProjectsArray = String(projects).split(',');
    	if (arrayIncludes(codeProjectsArray, String(7))) {
    		this._Surveillance_of_west_nile = "<button id='unvalidate" + id + "-7' data-user=" + username + " data-id='" + id + "' class='btn btn-success btn-sm seebtn unvalidatebtn' data-title='Validated' data-toggle='modal' data-target='#unvalidatemodal' data-project='7'><span id='spanunvalidate" + id + "-7' class='fa fa-check'></span></button>";
		} else {
			this._Surveillance_of_west_nile = "<button id='validate" + id + "-7' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='7'><span id='spanvalidate" + id + "-7' class='fa fa-close'></span></button>";
		}
    } else {
    	this._Surveillance_of_west_nile = "<button id='validate" + id + "-7' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='7'><span id='spanvalidate" + id + "-7' class='fa fa-close'></span></button>";
    };
    
    if ((projects !== null) && (projects !== undefined)) {
    	var codeProjectsArray = String(projects).split(',');
    	if (arrayIncludes(codeProjectsArray, String(8))) {
    		this._BComing_Merfi = "<button id='unvalidate" + id + "-8' data-user=" + username + " data-id='" + id + "' class='btn btn-success btn-sm seebtn unvalidatebtn' data-title='Validated' data-toggle='modal' data-target='#unvalidatemodal' data-project='8'><span id='spanunvalidate" + id + "-8' class='fa fa-check'></span></button>";
		} else {
			this._BComing_Merfi = "<button id='validate" + id + "-8' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='8'><span id='spanvalidate" + id + "-8' class='fa fa-close'></span></button>";
		}
    } else {
    	this._BComing_Merfi = "<button id='validate" + id + "-8' data-user=" + username + " data-id='" + id + "' class='btn btn-danger btn-sm seebtn validatebtn' data-title='Validate' data-toggle='modal' data-target='#validatemodal' data-project='8'><span id='spanvalidate" + id + "-8' class='fa fa-close'></span></button>";
    };
    		    
    this.email = function() {
        return this._email;
    };
        
    this.username  = function () {
    	return this._username;
    };
 
    this.ComAcross = function () {
        return this._ComAcross;
    };	    

    this.RhinoKhov_Zoocov = function () {
        return this._RhinoKhov_Zoocov;
    };
    
    this.BComing_Cerfig = function () {
        return this._BComing_Cerfig;
    };
    
    this.Biodiv_Afreid = function () {
        return this._Biodiv_Afreid;
    };
    
    this.Insula = function () {
        return this._Insula;
    };
    
    this.Surveillance_of_west_nile = function () {
        return this._Surveillance_of_west_nile;
    };
    
    this.BComing_Merfi = function () {
        return this._BComing_Merfi;
    };
}


function arrayIncludes(arr, value) {
    return arr.indexOf(value) !== -1;
}

function disable_button() {
	var button_add =  document.getElementById("button_add");
	button_add.classList.add("noclick");
};

function enable_button() {
	var button_add =  document.getElementById("button_add");
	button_add.classList.remove("noclick");
};

