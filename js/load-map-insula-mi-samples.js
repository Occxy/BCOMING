var map_table = localStorage.getItem('map_table'); 

//disable_li();

var interface_publique;
var obj_interface_publique;

var counter = 0;
var progressbar_count = 0;
var step = 0;
var width = 0;

var centerCoords = { lat: 16.2650, lng: -61.5510 };

//Options de la carte
var mapOptions = {
zoom: 10, // Niveau de zoom initial
center: centerCoords // Position centrale de la carte (Guadeloupe)
};

var infowindow = null;
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

var latitude;
var longitude;

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB = new PouchDB(remote_couchdb + 'bcoming_insula_sites' + debug);
} else {
	var DB = new PouchDB('bcoming_insula_sites' + debug);
};

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DB2 = new PouchDB(remote_couchdb + map_table + debug);
} else {
	var DB2 = new PouchDB(map_table + debug);
};

var tab = new Array();
var tab2 = new Array();

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
   				//tab[i] = new Array();
   				var obj = new Object();
   				obj.Lat  = row.doc.Lat ;
   				//obj.lat_ns  = row.doc.lat_ns ;
   				obj.Long = row.doc.Long ; 
   				//obj.long_ew = row.doc.long_ew ;
   				obj.Id_site = row.doc.Id_site;
   				
   				obj.Sites_proposes2 = row.doc.Sites_proposes2;	
   				obj.Etat = row.doc.Etat;	

   				/*obj.Lat = row.doc.Lat;
   				obj.Latitude = row.doc.Latitude;
   				obj.Long = row.doc.Long;
   				obj.Longitude = row.doc.Longitude;
   				var date = row.doc.Date;
   				obj.Date = getYear(date);
   				obj.Famille = row.doc.Famille;
   				obj.Genre = row.doc.Genre;
   				obj.Espece = row.doc.Espece;
   				obj.Collecte_sang_DBS = row.doc.Collecte_sang_DBS;*/
   				tab.push(obj);
   				//i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
			
   	}
}).then(function () {
	
	DB2.allDocs({  		
		include_docs: true,
		attachments: true
	}).then(function (result) {
		// handle result
		if (typeof(JSON.stringify(result)) != "undefined"){  
				
			var tableData = JSON.parse(JSON.stringify(result));
				
			tableData.rows.forEach(function(row){   
	   			try {
	   				//tab[i] = new Array();
	   				var obj = new Object();	

	   				obj.Site  = row.doc.Site ;
	   				//obj.lat_ns  = row.doc.lat_ns ;
	   				obj.Def_site = row.doc.Def_site ; 
	   				obj.Species = row.doc.Species ; 
	   				//obj.long_ew = row.doc.long_ew ; 
	   				//obj.Dataset = 2;
	   				/*obj.Lat = row.doc.Lat;
	   				obj.Latitude = row.doc.Latitude;
	   				obj.Long = row.doc.Long;
	   				obj.Longitude = row.doc.Longitude;
	   				var date = row.doc.Date;
	   				obj.Date = getYear(date);
	   				obj.Famille = row.doc.Famille;
	   				obj.Genre = row.doc.Genre;
	   				obj.Espece = row.doc.Espece;
	   				obj.Collecte_sang_DBS = row.doc.Collecte_sang_DBS;*/
	   				tab2.push(obj);
	   				//i++;	
	   				
	   			} catch(error) {
					console.log(error);
				};
			});	
				
	   	}
	}).then(function () {
		    		
		var tabOut = new Array();
		
		//var resBlood = alasql('SELECT Lat, Latitude, Long, Longitude, Date, Famille, Genre, Espece, COUNT(*) AS Blood FROM ? WHERE (Collecte_sang_DBS = "Oui") GROUP BY Lat, Latitude, Long, Longitude, Long, Date, Famille, Genre, Espece', [tab] );
		var resInsula_sites = alasql('SELECT Lat, Long, Id_site, Sites_proposes2, Etat  FROM ? GROUP BY Lat, Long, Id_site, Sites_proposes2, Etat', [tab] );
		console.log(resInsula_sites)
		var resInsula_mi_samples = alasql('SELECT Site, Def_site, Species, COUNT(*) AS count_mi_samples FROM ? GROUP BY Site, Def_site, Species', [tab2] );
		console.log(resInsula_mi_samples)
		var query = `
		    SELECT 
		        resInsula_sites.Lat, 
		        resInsula_sites.Long, 
		        resInsula_sites.Sites_proposes2, 
		        resInsula_sites.Etat, 
		        resInsula_sites.Id_site,  
		        resInsula_mi_samples.Site, 
		        resInsula_mi_samples.Def_site, 
		        resInsula_mi_samples.Species,
		        resInsula_mi_samples.count_mi_samples
		    FROM ? AS resInsula_sites
		    INNER JOIN ? AS resInsula_mi_samples ON 
				UPPER(
				    REPLACE(
				        REPLACE(
				            REPLACE(
				                REPLACE(resInsula_sites.Sites_proposes2, 'à', 'a'), 'é', 'e'), 'ï', 'i'), 'ô', 'o')
				) = UPPER(
				    REPLACE(
				        REPLACE(
				            REPLACE(
				           		REPLACE(
				                	REPLACE(resInsula_mi_samples.Site, 'à', 'a'), 'é', 'e'), 'ï', 'i'), 'ô', 'o'), ' ', '_')
				) AND 
				UPPER(
				    REPLACE(
				        REPLACE(
				            REPLACE(
				                REPLACE(resInsula_sites.Etat, 'à', 'a'), 'é', 'e'), 'ï', 'i'), 'ô', 'o')
				) = UPPER(
				    REPLACE(
				        REPLACE(
				            REPLACE(
				            	REPLACE(
				                	REPLACE(resInsula_mi_samples.Def_site, 'à', 'a'), 'é', 'e'), 'ï', 'i'), 'ô', 'o'), ' ', '_')
				)
				ORDER BY resInsula_mi_samples.Site ASC, resInsula_mi_samples.Def_site ASC, resInsula_mi_samples.Species ASC
		`;
		
		var joinedResult = alasql(query, [resInsula_sites, resInsula_mi_samples]);
		
		
		console.log(joinedResult)
		for (var j=0;j<joinedResult.length;j++) {
			tabOut.push(joinedResult[j]);
		}
		
		interface_publique = JSON.stringify(joinedResult);
		/*var tabInterfacePublique = new Array();
		for (var j=0;j<resOut.length;j++) {
			tabInterfacePublique.push(resOut[j]);
		}
		
		var resInterfacePublique = alasql('SELECT Lat, Long, Date, Famille_terrain, Genre_terrain, Espece_terrain, COUNT(*) AS Sampled_individuals FROM ? GROUP BY Lat, Long, Date, Famille_terrain, Genre_terrain, Espece_terrain', [tabInterfacePublique] );
		console.log(resInterfacePublique)*/
	
		//localStorage['interface_publique'] = JSON.stringify(resOut);
		
		/*CSV = 'photo;Lat;Long;Scientific name;' +
		  'Sampled individuals;Samples;Date\r\n';	*/
	
		obj_interface_publique = JSON.parse(interface_publique);
		
		var groupedData = {};

		joinedResult.forEach(function(entry) {
		    
		    latitude = entry.Lat;
		    longitude = entry.Long;
		    var species = entry.Species;
		    var count = entry.count_mi_samples;

		    var key = latitude + '_' + longitude + '_' + species;

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
		    var species = coords[2];
		    
		    
		    
		    //alert('"'+lat_lng+'" === ' + coords[0]+coords[1] + '"')
		    if ((contentString  != '') && (lat_lng != coords[0] + '_' + coords[1])) {
		    	
		    	var lastcoords = lat_lng.split('_');
		    	var siteTitle = '';
		    	
		    	var sites = resInsula_sites.filter(site => parseFloat(site.Lat) === parseFloat(lastcoords[0]) && parseFloat(site.Long) === parseFloat(lastcoords[1]));
		    	if (sites.length > 0) {
		    	    // Utilisez les sites trouvés pour créer les bulles
		    	    sites.forEach(site => {
		    	        siteTitle = site.Sites_proposes2 + '/' + site.Etat + '/' + site.Id_site;
		    	        // Utilisez siteTitle pour créer les bulles
		    	    });
		    	} else {
		    	    console.log('Aucun site correspondant trouvé');
		    	}
		    	
		    	console.log(lat_lng)
		    	 var last_coords = lat_lng.split('_');
		    	 var marker = new google.maps.Marker({
		 	        position: new google.maps.LatLng(parseFloat(last_coords[0]), parseFloat(last_coords[1])),
		 	        map: map,
		 	        opacity: 0.5
		 	    });

		 	    var infowindow = new google.maps.InfoWindow({
		 	    	content: '<div style="background-color: lightgreen; color: dark;"><strong>' + siteTitle + '</strong><br>' + contentString + '</div>'
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

		 	    // Appel de la fonction avec les marqueurs et les infobulles
		 	    createMarkerListener(marker, infowindow);
		 	    
		 	   marker.setMap(map);
		 	   
		    	contentString = '';
		    }
		    
		    var bgColorClass = (Object.keys(groupedData).indexOf(key) % 2 === 0) ? 'even-bg' : 'odd-bg';

		    
		    contentString += '<div class="' + bgColorClass + '">';
		    contentString += '<p>Species: ' + species + ', Count: ' + groupedData[key] + '</p>';
		    contentString += '</div>';

		   

		    
		    
		    lat_lng =  lat + '_' + lng;
		}	
		
		
		// Ajout du contenu de la dernière bulle si elle existe
		if (contentString !== '') {
			
			var lastcoords = lat_lng.split('_');
	    	var siteTitle = '';
	    	
	    	var sites = resInsula_sites.filter(site => parseFloat(site.Lat) === parseFloat(lastcoords[0]) && parseFloat(site.Long) === parseFloat(lastcoords[1]));
	    	if (sites.length > 0) {
	    	    // Utilisez les sites trouvés pour créer les bulles
	    	    sites.forEach(site => {
	    	        siteTitle = site.Sites_proposes2 + '/' + site.Etat + '/' + site.Id_site;
	    	        // Utilisez siteTitle pour créer les bulles
	    	    });
	    	} else {
	    	    console.log('Aucun site correspondant trouvé');
	    	}
	    	
		    var last_coords = lat_lng.split('_');
		    var marker = new google.maps.Marker({
		        position: new google.maps.LatLng(parseFloat(last_coords[0]), parseFloat(last_coords[1])),
		        map: map,
		        opacity: 0.5
		    });

		    var infowindow = new google.maps.InfoWindow({
		    	content: '<div style="background-color: lightgreen; color: dark;"><strong>' + siteTitle + '</strong><br>' + contentString + '</div>'
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
	   	
	});	

});	

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
