var bcoming_guinea_table = localStorage.getItem('bcoming_guinea_table');

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
	
	$.extend($.fn.dataTableExt.oSort, {
        "formatted-num-pre": function ( a ) {
            // Extract numeric part from the string
            var numericPart = a.match(/\d+$/);
            return numericPart ? parseInt(numericPart[0], 10) : 0;
        },
        "formatted-num-asc": function ( a, b ) {
            return a - b;
        },
        "formatted-num-desc": function ( a, b ) {
            return b - a;
        }
    });       
    
    var table = $('#example').DataTable({
        columnDefs: [
             { type: 'formatted-num', targets: 0},
        ],
        columns: [            
            { data: 'N_identification'},                                    
            { data: 'Date'},
            { data: 'Equipe'},
            { data: 'Site_region'},
            { data: 'Site_precis_de_capture'},
            { data: 'Action'}
        ]
    });
        
    if (localStorage.getItem('web') === 'oui') {
        var remote_couchdb = localStorage.getItem('remote_couchdb');
        var DB = new PouchDB(remote_couchdb + bcoming_guinea_table + debug);
    } else {
        var DB = new PouchDB(bcoming_guinea_table + debug);
    };    
    DB.allDocs({
        include_docs: true,
        attachments: true
    }).then(function (result) {
        if (typeof(JSON.stringify(result)) != "undefined"){  
            var dataTablesData = JSON.parse(JSON.stringify(result));
                                
            dataTablesData.rows.forEach(function(row){   
                table.row.add(new Bcoming_guinea(row.doc.N_identification, row.doc.Date, row.doc.Equipe, row.doc.Site_region, row.doc.Site_precis_de_capture,  
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

function Bcoming_guinea(N_identification, Date, Equipe, Site_region, Site_precis_de_capture, Action) {
    this._N_identification = N_identification || '';
    this._Date = Date || '';
    this._Equipe = Equipe || '';
    this._Site_region = Site_region || '';
    this._Site_precis_de_capture = Site_precis_de_capture || '';
    this._Action = Action;
            
    this.N_identification = function() {
        return this._N_identification;
    };
        
    this.Date  = function () {
        return this._Date;
    };
 
    this.Equipe = function () {
        return this._Equipe;
    };    

    this.Site_region = function () {
        return this._Site_region;
    };
    
    this.Site_precis_de_capture = function () {
        return this._Site_precis_de_capture;
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


