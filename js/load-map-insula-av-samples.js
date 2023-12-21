var map_table = localStorage.getItem('map_table'); 

disable_li();

var interface_publique;
var obj_interface_publique;

var counter = 0;
var progressbar_count = 0;
var step = 0;
var width = 0;

var map;
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

var id = '' 
var newid = '';
var count_id = 0;
var lastLat = '';
var lastLong = '';
var lastLatitude = '';
var lastLongitude = '';
var lastDate = '';
var lastFamille = '';
var lastGenre = '';
var lastEspece = '';
var lastSamples = '';
var lastCadre = '';

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
	   				obj.Def_Site = row.doc.Def_Site ; 
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
		var resInsula_av_samples = alasql('SELECT Site, Def_Site, COUNT(*) AS count_av_samples FROM ? GROUP BY Site, Def_Site', [tab2] );
		console.log(resInsula_av_samples)
		var query = `
		    SELECT 
		        resInsula_sites.Lat, 
		        resInsula_sites.Long, 
		        resInsula_sites.Sites_proposes2, 
		        resInsula_sites.Etat, 
		        resInsula_sites.Id_site,  
		        resInsula_av_samples.Site, 
		        resInsula_av_samples.Def_Site, 
		        resInsula_av_samples.count_av_samples 
		    FROM ? AS resInsula_sites
		    INNER JOIN ? AS resInsula_av_samples ON 
				UPPER(
				    REPLACE(
				        REPLACE(
				            REPLACE(
				                REPLACE(resInsula_sites.Sites_proposes2, 'à', 'a'), 'é', 'e'), 'ï', 'i'), 'ô', 'o')
				) = UPPER(
				    REPLACE(
				        REPLACE(
				            REPLACE(
				                REPLACE(resInsula_av_samples.Site, 'à', 'a'), 'é', 'e'), 'ï', 'i'), 'ô', 'o')
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
				                REPLACE(resInsula_av_samples.Def_Site, 'à', 'a'), 'é', 'e'), 'ï', 'i'), 'ô', 'o')
				);
		`;
		
		var joinedResult = alasql(query, [resInsula_sites, resInsula_av_samples]);
		
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
		
		var fisrt_lat_lng = false;
		var first_lat, first_lng;
		
		
		
	   	//dataTablesData.rows.forEach(function(row){ 
		obj_interface_publique.forEach(function(row, index){
				
	   		try {	
	   			
	   			
	   			if (index === (obj_interface_publique.length -1)) {
	   				
	   				Lat = lastLat.replace(',', '.');
	   				_lat = parseFloat(Lat);
		   				
	   				Long = lastLong.replace(',', '.');
		   			/*lng_dir = Longitude;
		   		    
				    /*if (lng_dir == "W") {
		   				Long = lastLong;*/
		   				_lng = parseFloat(Long);		    					
		   			/*} else if ((lng_dir == "E") || (lng_dir == ""))  {
		   				Long = lastLong;
		   				lng = 0 - parseFloat(Long);
				    };*/
				    
				    lastLat = row.Lat;
					lastLong = row.Long;
   					//lastLatitude = row.lat_ns;
   					//lastLongitude = row.long_ew;
   					lastId_site = row.Id_site;
	   				/*lastDate = row.Date;
	   				lastFamille = row.Famille;
	   				lastGenre = row.Genre;
	   				lastEspece = row.Espece;
	   				lastTaxonomie = lastFamille + ' ' + lastGenre + ' ' + lastEspece;
	   				lastSamples = addSamples(row) + '<br>';
	   				lastCadre = lastCadre + '<br>' + '----------' + '<br>' +
	   				            lastDate + '<br>' + lastTaxonomie + '<br>' + lastSamples + '<br>'*/
	   				
		   	        // This is the last one.
	   				if ((isFloat(_lat)) && (isFloat(_lng))) {
						marker_list.push(new ol.Feature({
		  	           		geometry: new ol.geom.Point(ol.proj.fromLonLat([_lng, _lat])),
		  	           		datas: lastCadre,
		  	           	    Id_site: lastId_site,
		  	           		lat: lastLat /*+ lastLatitude*/,
		  	           		lng: lastLong + lastLongitude
		  	           		//espece : espece
		  		       	}));
					};
		   	    }
	   			
	   			
	  			
	   			//obj[row.doc.Lat] = row.doc.Lat;
	   			
	   			var Lat = row/*.doc*/.Lat;
	   			
	   			//var element = {}, tab = [];
	   			
	   			
	   			//alert(Lat.replace(',', '.');
	   			   			
	   			//var Latitude = row/*.doc*/.lat_ns;
	   			var Long = row/*.doc*/.Long;
	   			//var Longitude = row/*.doc*/.long_ew;
	   			
	   			
	   			
	   			newid = row.Lat + row.Long;
	   			newid = newid.replace(/,/g, '');
	   			//newid = newid.replace(',', '');
	   			//newid = newid.replace('-', '');
	   			newid = newid.replace(' ', '');
	   			newid = newid.replace('.', '');
	   			
	   			if (id !== newid) {
	   				
			     	id = row.Lat + row.Long;
	   				id = id.replace(/,/g, '');
	   	   			//id = id.replace(',', '');
	   	   			//id = id.replace('-', '');
	   	   			id = id.replace(' ', '');
	   	   			id = id.replace('.', '');
	   	   			
	   	   			count_id++;
					console.log(newid + '-' + id);
					console.log(count_id);
					
					console.log(lastCadre);
					if ((lastLat !== '') && (lastLong !== '')/* && (Longitude !== '') && (Latitude !== '')*/) {
						
						lastLat = lastLat.replace(',', '.');
		   				_lat = parseFloat(Lat);
			   				
		   				lastLong = lastLong.replace(',', '.');
			   			/*lng_dir = lastLongitude;
			   			lat_dir = lastLatitude;
			   			
			   			if (lat_dir == "N") {
			   				Lat = lastLat;
			   				lat = parseFloat(Lat);		    					
			   			} else if ((lat_dir == "S") || (lat_dir == ""))  {
			   				Lat = lastLat;
			   				lat = 0 - parseFloat(Lat);
					    };
					    
					    if (lng_dir == "E") {
			   				Long = lastLong;
			   				lng = parseFloat(Long);		    					
			   			} else if ((lng_dir == "W") || (lng_dir == ""))  {
			   				Long = lastLong;
			   				lng = 0 - parseFloat(Long);
					    };*/
			   			
			   			_lat = parseFloat(Lat);
			   			_lng = parseFloat(Long);
					    	
					   	console.log('lat : ' + _lat);
					   	console.log('lng : ' + _lng);
					   	
			   				
						if ((isFloat(_lat)) && (isFloat(_lng))) {
							
							marker_list.push(new ol.Feature({
			  	           		geometry: new ol.geom.Point(ol.proj.fromLonLat([_lng, _lat])),
			  	           		datas: lastCadre,
			  	           	    Id_site: lastId_site,
			  	           		lat: lastLat + lastLatitude, //+ lastLatitude,
			  	           		lng: lastLong + lastLongitude,
			  	           	    //+ lastLongitude
			  	           		//espece : espece
			  		       	}));
							
							console.log(lastId_site)
							
							
							if (!fisrt_lat_lng) {
								first_lat = _lat;
								first_lng = _lng;	
								fisrt_lat_lng = true;
							};
						};
					};
		   			
					lastLat = row.Lat;
	   				lastLong = row.Long;
	   				//lastLatitude = row.lat_ns;
	   				//lastLongitude = row.long_ew;
	   				lastId_site = row.Id_site;
	   				/*lastDate = row.Date;
					lastFamille = row.Famille;
	   				lastGenre = row.Genre;
	   				lastEspece = row.Espece;
	   				lastTaxonomie = lastFamille + ' ' + lastGenre + ' ' + lastEspece;
					lastSamples =  addSamples(row) + '\n';
					/*console.log(lastDate);
					console.log(lastFamille  + ' ' + lastGenre + ' ' + lastEspece);
					console.log(lastSamples);*/
					lastCadre = lastDate + '<br>' + lastTaxonomie + '<br>' + lastSamples + '<br>'
					
	   			} else {
	   				if (id != '') {
	   					//if (lastFamille  + ' ' + lastGenre + ' ' + lastEspecerow.Lat != row.Famille_terrain + ' ' + row.Genre_terrain + ' ' + row.Espece_terrain) {
	   					
	   						lastLat = row.Lat;
	   						lastLong = row.Long;
		   					//lastLatitude = row.lat_ns;
		   					//lastLongitude = row.long_ew;
		   					lastId_site = row.Id_site;
			   				/*lastDate = row.Date;
			   				lastFamille = row.Famille;
			   				lastGenre = row.Genre;
			   				lastEspece = row.Espece;
			   				lastTaxonomie = lastFamille + ' ' + lastGenre + ' ' + lastEspece;
			   				lastSamples = addSamples(row) + '<br>'/*String(row.Blood)*/;
			   				/*console.log(lastDate);
			   				console.log(lastFamille  + ' ' + lastGenre + ' ' + lastEspece);
			   				console.log(lastSamples);*/
			   				lastCadre = lastCadre + '<br>' + '----------' + '<br>' +
			   				            lastDate + '<br>' + lastTaxonomie + '<br>' + lastSamples + '<br>'
			   				//console.log(lastCadre);         
			   			//}
	   				}
	   				id = row.Lat + row.Long;
	   				id = id.replace(/,/g, ''); 
	   	   			//id = id.replace(',', '');
	   	   			//id = id.replace('-', '');
	   	   			id = id.replace(' ', '');
	   	   			id = id.replace('.', '');
	   	   			
			   	   	
	   			}
					
	   			/*element.id = id;
	   			element.Lat = Lat;
	   			tab.push(element);
	   			
	   			var id_value = tab.id;*/
	   			
	   			//var espece = row.Famille_terrain + ' ' +	row.Genre_terrain + ' ' + row.Espece_terrain;
	   			//var sampled_individuals = row.Sampled_individuals;
				//Samples = addSamples(row);
				//var date = row.Date;
	   				
	   			
		   				
			}catch(err) {
			};	    	
		});		
	   		
	
	
	   	var mapMarkerLayer = new ol.layer.Vector({
	   		source: new ol.source.Vector({
	   			features: marker_list
	   	    }),
	   	    style: new ol.style.Style({
	   		      		image: new ol.style.Icon(({
	   		      			scale: 0.7,
	   		           		rotateWithView: false,
	   		           		anchor: [0.5, 1],
	   		           		anchorXUnits: 'fraction',
	   		           		anchorYUnits: 'fraction',
	   		           		opacity: 1,
	   		        		src: 'img/marker.png'
	   		        	}))
	   				})
	   	});
	   	
	   	var mapMarkerLayer2 = new ol.layer.Vector({
	   		source: new ol.source.Vector({
	   			features: marker_list_2
	   	    }),
	   	    style: new ol.style.Style({
	   		      		image: new ol.style.Icon(({
	   		      			scale: 0.7,
	   		           		rotateWithView: false,
	   		           		anchor: [0.5, 1],
	   		           		anchorXUnits: 'fraction',
	   		           		anchorYUnits: 'fraction',
	   		           		opacity: 1,
	   		        		src: 'img/marker2.png'
	   		        	}))
	   				})
	   	});
				
	   	map = new ol.Map({
	   	    target: 'map',
	   	    layers: [
	   	        new ol.layer.Tile({
	   	            source: new ol.source.OSM(),
	   	        })
	   	    ],
	   	    view: new ol.View({
	   	        center: ol.proj.fromLonLat([first_lng, first_lat]),
	   	        zoom: 10
	   	    })
	   	});
	   	    
	   	map.addLayer(mapMarkerLayer);
	   	//map.addLayer(mapMarkerLayer2);
	   	mapConfig.layers.marker = mapMarkerLayer;
	   	 	
	
	   	var container = document.getElementById('popup');
		var closer = document.getElementById('popup-closer');
		var content = document.getElementById('popup-content');
		   	
		closer.onclick = function() {
			overlay.setPosition(undefined);
		   	closer.blur();
		   	return false;
		};
	
		var overlay = new ol.Overlay({
			element: container,
			autoPan: true,
			autoPanAnimation: {
				duration: 250
			}
		});
		   	
		map.addOverlay(overlay)
		
		var datasLabel = document.getElementById('datas');
					
		map.on('singleclick', function(evt) {
			var name = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
				datasLabel.innerHTML = feature.get('datas');
				return feature.get('Id_site') + '\r' + feature.get('lat') + '\r' + feature.get('lng') /*+ '\r' +*/
					   //feature.get('espece');
				//return feature.get('datas')
				
		    });
		    var coordinate = evt.coordinate;
		    content.innerHTML = name;
		      overlay.setPosition(coordinate);
		    });
		   	
		    map.on('pointermove', function(evt) {
		    	 map.getTargetElement().style.cursor = map.hasFeatureAtPixel(evt.pixel) ? 'pointer' : '';
		    });
	
	   	 	
		    enable_li();
		    
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
