var map_table = localStorage.getItem('map_table'); 

//disable_li();

var interface_publique;
var obj_interface_publique;

var counter = 0;
var progressbar_count = 0;
var step = 0;
var width = 0;


var mapConfig = {
    init: {
        addMarker: true,
        addDraw: true,
        addTrack: true,
        addCoordinates: true,
    },
    draw: {
        drawType: null,
        activeDraw: null,
        hasActiveDraw: false,
        highlightList: [],
        highlightStyle: null
    },
    track: null,
    layers: {
        marker: null,
        draw: null,
        track: null
    }
};
	
var _lat, _lng;
var marker_list = [];
var marker_list_2 = [];

var markers = [];

/*var id = '' 
var newid = '';
var count_id = 0;
var lastLat = '';
var lastLong = '';
var lastLat = '';
var lastLong = '';
var lastDate = '';
var lastFamille = '';
var lastGenre = '';
var lastEspece = '';
var lastSamples = '';
var lastCadre = '';*/

var resWest_nile_horses;

var centerCoords = { lat: 16.2650, lng: -61.5510 };

//Options de la carte
var mapOptions = {
zoom: 10, // Niveau de zoom initial
center: centerCoords // Position centrale de la carte (Guadeloupe)
};

var infowindow = null;
var map = new google.maps.Map(document.getElementById('map'), mapOptions);


function attachSecretMessage(marker, secretMessage) {
	marker.addListener('click', function() {
		if (infowindow) {
			infowindow.close();
		}
		infowindow = new google.maps.InfoWindow({
			content: secretMessage,
			//pixelOffset: new google.maps.Size(100,100)
			//disableAutoPan: true
		});
		infowindow.open(marker.get('map'), marker,{anchor: marker, map, shouldFocus:false});
	});
	
	google.maps.event.addListener(map, 'click', function() {
		if (infowindow) {
			infowindow.close();
		}
	});
	
}

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB = new PouchDB(remote_couchdb + 'bcoming_west_nile_horses' + debug);
} else {
	var DB = new PouchDB('bcoming_west_nile_horses' + debug);
};


var tab = new Array();

function getYear (str) {
    var year = (/\b\d{4}\b/).exec(str);
  return year === null ? 'Now' : year[0];
}

DB.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {
	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
			
		var tableData = JSON.parse(JSON.stringify(result));
			
		tableData.rows.forEach(function(row){   
   			try {
   				var obj = new Object();
   				obj.Nom  = row.doc.Nom.trim() ;
   				//obj._Count = parseInt(row.doc.Count);    				
   				obj.Club = row.doc.Club.trim() ;	
   				obj.Lon = row.doc.Lon.trim() ;
   				obj.Lat = row.doc.Lat.trim() ;
   				
   				tab.push(obj);
   				
   			} catch(error) {
				console.log(error);
			};
		});	
			
   	}
}).then(function () {
	
	
		    		
		
	
	resWest_nile_horses = alasql('SELECT Lon, Lat, Club, Nom,  COUNT(*) AS _Count FROM ? GROUP BY  Lon, Lat, Club, Nom ORDER BY Lon, Lat, Club, Nom', [tab]);
	console.log(resWest_nile_horses);

	var groupedData = {};

	resWest_nile_horses.forEach(function(entry) {
	    var nom = entry.Nom;
	    var club = entry.Club;
	    var latitude = entry.Lat;
	    var longitude = entry.Lon;
	    var count = entry._Count;

	    var key = latitude + '_' + longitude + '_' + nom + '_' + club;

	    if (!(key in groupedData)) {
	        groupedData[key] = 0;
	    }

	    groupedData[key] += parseInt(count);
	});

	console.log(groupedData);
	
	var contentString = '';
	var lat_lng = '';
	var lastInfoWindow = null;
	
	for (var key in groupedData) {
		
	    var coords = key.split('_');
	    var lat = parseFloat(coords[0]);
	    var lng = parseFloat(coords[1]);
	    
	    
	    var nom = coords[2];
	    var club = coords[3];
	    
	    //alert('"'+lat_lng+'" === ' + coords[0]+coords[1] + '"')
	    if ((contentString  != '') && (lat_lng != coords[0]+'_'+coords[1])) {
	    	
	    	console.log(lat_lng)
	    	var lastcoords = lat_lng.split('_');
	    	
	    	/*var sites = resWest_nile_horses.filter(site => parseFloat(site.Lat) === parseFloat(lastcoords[0]) && parseFloat(site.Long) === parseFloat(lastcoords[1]));
	    	if (sites.length > 0) {
	    	    // Utilisez les sites trouvés pour créer les bulles
	    	    sites.forEach(site => {
	    	        siteTitle = site.Site_nom + '/' + site.Lat + '/' + site.Long;
	    	        // Utilisez siteTitle pour créer les bulles
	    	    });
	    	} else {
	    	    console.log('Aucun site correspondant trouvé');
	    	}*/
	    	
		    var last_coords = lat_lng.split('_');
		    var marker = new google.maps.Marker({
		        position: new google.maps.LatLng(parseFloat(last_coords[0]), parseFloat(last_coords[1])),
		        map: map,
		        opacity: 0.5
		    });

		    var infowindow = new google.maps.InfoWindow({
		    	content: '<div style="background-color: lightgreen; color: dark;"><strong>' + lastClub + '</strong><br>' + contentString + '</div>'
		 	});

		    function createMarkerListener(marker, infowindow) {
		        marker.addListener('click', function() {
		            if (lastInfoWindow) {
		                lastInfoWindow.close();
		            }
		            infowindow.open(map, marker);
		            lastInfoWindow = infowindow;
		        });
		    }

		    createMarkerListener(marker, infowindow);

		    marker.setMap(map);
	 	   
	    	contentString = '';
	    }
	    
	    var bgColorClass = (Object.keys(groupedData).indexOf(key) % 2 === 0) ? 'even-bg' : 'odd-bg';

	    
	    contentString += '<div class="' + bgColorClass + '">';
	    contentString += '<p>Nom: ' + nom + ', Test count: ' + groupedData[key] + '</p>';
	    contentString += '</div>';

	   

	    
	    
	    lat_lng =  coords[0]+'_'+coords[1]
	    lastClub = coords[3];
	}
	
	// Ajout du contenu de la dernière bulle si elle existe
	if (contentString !== '') {
		
		var lastcoords = lat_lng.split('_');
    	var siteTitle = '';
    	
    	/*var sites = resWest_nile_horses.filter(site => parseFloat(site.Lat) === parseFloat(lastcoords[0]) && parseFloat(site.Long) === parseFloat(lastcoords[1]));
    	if (sites.length > 0) {
    	    // Utilisez les sites trouvés pour créer les bulles
    	    sites.forEach(site => {
    	        siteTitle = site.Site_nom + '/' + site.Lat + '/' + site.Long;
    	        // Utilisez siteTitle pour créer les bulles
    	    });
    	} else {
    	    console.log('Aucun site correspondant trouvé');
    	}*/
    	
	    var last_coords = lat_lng.split('_');
	    var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(parseFloat(last_coords[0]), parseFloat(last_coords[1])),
	        map: map,
	        opacity: 0.5
	    });

	    var infowindow = new google.maps.InfoWindow({
	    	content: '<div style="background-color: lightgreen; color: dark;"><strong>' + lastClub + '</strong><br>' + contentString + '</div>'
	 	});

	    function createMarkerListener(marker, infowindow) {
	        marker.addListener('click', function() {
	            if (lastInfoWindow) {
	                lastInfoWindow.close();
	            }
	            infowindow.open(map, marker);
	            lastInfoWindow = infowindow;
	        });
	    }

	    createMarkerListener(marker, infowindow);

	    marker.setMap(map);
	}	
	
})	   	
	   	
	   	 	
	
	   	

function isFloat(n) {
    return n === +n && n !== (n|0);
}

function addSamples(row) {
	
	var tab = new Array();
	tab[0] = addSample(row, 'Blood');
	
	var samples = '';
	for (i=0;i<tab.length;i++) {
		if (tab[i] !== '') {
			if (samples !== '') {
				samples = samples + ', ' + tab[i];
			} else {
				samples = tab[i];
			}
		}
	}
	return samples;
}

function addSample(row, field) {
	try {
		var floatField = parseFloat(row[field])
		if (floatField > 0) {
			var s = field + ' : ' + row[field];
			return s;
		} else {
			var s = '';
			return s;
		}
	} catch(error) {
		console.error(error);
		var s = '';
		return s;
	}
}
