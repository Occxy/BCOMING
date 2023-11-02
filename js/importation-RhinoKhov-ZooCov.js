var rhinokhov_zoocov_lab = localStorage.getItem('rhinokhov_zoocov_lab');
var rhinokhov_zoocov_animal = localStorage.getItem('rhinokhov_zoocov_animal');

            
var lines_lab = rhinokhov_zoocov_lab.trim().split("\r\n");
var lines_lab_length = lines_lab.length;

var lines_animal = rhinokhov_zoocov_animal.trim().split("\r\n");
var lines_animal_length = lines_animal.length;

var tab_lab = new Array();
var tab_animal = new Array();

for (var i=1;i<lines_lab_length;i++) {
	var obj = new Object();
	var tab = lines_lab[i].split(";");
	
	obj.Project = tab[0];
	obj.No= tab[1];
	obj.Sampling_Date= tab[2];
	obj.Animal_ID= tab[3];
	obj.Sample_Type= tab[4];
	obj.Taxa= tab[5];
	obj.Genus_Species= tab[6];
	obj.Province= tab[7];
	obj['rtPCR_SARS-COV-2_E_gene']= tab[8];
	obj.PCR_Quan_result= tab[9];
	obj.PCR_Watanabe_result= tab[10];
	tab_lab.push(obj);
}

for (var i=1;i<lines_animal_length;i++) {
	var obj = new Object();
	var tab = lines_animal[i].split(";");
	
	obj.Project = tab[0];
	obj.Sampling_Date = tab[1]; 
	obj.Animal_ID = tab[2];
	obj.Genus_Species = tab[3]; 
	obj.Province = tab[4]; 
	obj.District = tab[5];
	obj.Site = tab[6];
	obj.Specific_location = tab[7];
	obj.Sex = tab[8]; 
	obj['Age-Status'] = tab[9]; 
	obj.Health_Status = tab[10]; 
	obj.Condition = tab[11];
	obj.FEV = tab[12];
	obj.OSV = tab[13];
	obj.OST = tab[14]; 
	obj.RSV = tab[15];
	obj.RST = tab[16];
	obj.DBS = tab[17]; 
	obj.URV = tab[18]; 
	obj.URT = tab[19]; 
	obj.WBV = tab[20]; 
	obj.BSN = tab[21];
	obj.BCN = tab[22]; 
	obj.FA_mm = tab[23];
	obj.Weigth_g = tab[24]; 
	obj.Photo = tab[25];
	obj.Recorder_type = tab[26];
	obj.File_name = tab[27];
	obj.Kiv = tab[28]; 
	obj.KiT = tab[29];  
	obj.SpV = tab[30];
	obj.SpT = tab[31];
	obj.LiV = tab[32]; 
	obj.LiT = tab[33]; 
	obj.LuV = tab[34];
	obj.LuT = tab[35]; 
	obj.HeV = tab[36];
	obj.HeT = tab[37]; 
	obj.BrV = tab[38]; 
	obj.BrT = tab[39];
	obj.UrV = tab[40];
	obj.UrT = tab[41]; 
	obj.Other = tab[42];
	obj.Username = localStorage.getItem('loginUsername');
	tab_animal.push(obj);
}

//Join the two arrays on the "Animal_ID" field
var joinedArray = tab_lab.reduce((result, labItem) => {
  var matchingAnimal = tab_animal.find(animalItem => animalItem.Animal_ID === labItem.Animal_ID);
  if (matchingAnimal) {
    result.push({ ...labItem, ...matchingAnimal });
  }
  return result;
}, []);

console.log(joinedArray);

var localDB = new PouchDB('bcoming_rhinokhov_zoocov');

var promises = joinedArray.map(function (item) {
	  // Use Animal_ID as the _id and store the entire item directly at the root of the document
	  var doc = {
	    _id: item.Animal_ID,
	    ...item  // Store the entire item directly at the root of the document
	  };
	  return localDB.put(doc);
	});

	// Wait for all put operations to complete
	Promise.all(promises)
	  .then(function (results) {
	    console.log('All documents added to the PouchDB database.');
	  })
	  .catch(function (err) {
	    console.error('Error adding documents to the PouchDB database: ' + err);
	  });
	
var remoteDBURL = 'https://database.ebo-sursy.eu/couchdb/bcoming_rhinokhov_zoocov';

// Replicate from the local PouchDB to the remote CouchDB
localDB.replicate.to(remoteDBURL)
  .on('complete', function () {
    console.log('Replication to remote database is complete.');
  })
  .on('error', function (err) {
    console.error('Error replicating to remote database: ' + err);
  });	





