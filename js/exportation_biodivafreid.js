var fields = 
    			['project_code', 'ua_id_pr', 'ua_id_nr', 'ua_id', 'date', 'location_code', 'session_code', 'Location', 'locses', 
    			 'Session_check', 'sub_order', 'genus_field', 'species_field', 'trap', 'trap_id', 'sex', 'sex_cond', 'weight_g', 'head_body_mm',
    			 'tail_mm', 'embryo_tot', 'ectopar_tot', 'capture_remarks', 'liver_LI', 'spleen_SP', 'kindney_KI', 'lung_LU', 'intestine_IN', 
    			 'uterus_UT', 'blood_BL', 'other_tissue_XX', 'eye_EY', 'TE', 'SP', 'KL', 'KD', 'LI', 'FC', 'LU', 'BL', 'TN', 'EY', 'ECTO', 'BR', 
    			 'FOET', 'URINE_WHATMAN', 'HI_FORMOL', 'CARCASS_FORMOL', 'Tongue_in_ethanol', 'Swab_Oral', 'Swab_Nasal', 'Swab_Anal', 
    			 'Swab_Urogenital', 'BAT_NUMBER1', 'Bat_Reproductive_status', 'Bat_Teeth', 'Bat_Bone_fusion', 'Bat_Age', 'Bat_Forearm_length_mm', 
    			 'Bat_Tibia_length_mm', 'Bat_Age_2', 'Bat_Urine', 'Bat_Faeces', 'Bat_Oral_swab', 'Bat_Wing_punch', 'Bat_Blood_filter_paper', 
    			 'Bat_ectoparasites', 'Livestock_Age', 'habitat', 'Username']


var fields_CSV_head =   'project_code;ua_id_pr;ua_id_nr;ua_id;date;location_code;session_code;Location;locses;' + 
						'Session_check;sub_order;genus_field;species_field;trap;trap_id;sex;sex_cond;weight_g;head_body_mm;' +
						'tail_mm;embryo_tot;ectopar_tot;capture_remarks;liver_LI;spleen_SP;kindney_KI;lung_LU;intestine_IN;' + 
						'uterus_UT;blood_BL;other_tissue_XX;eye_EY;TE;SP;KL;KD;LI;FC;LU;BL;TN;EY;ECTO;BR;' + 
						'FOET;URINE_WHATMAN;HI_FORMOL;CARCASS_FORMOL;Tongue_in_ethanol;Swab_Oral;Swab_Nasal;Swab_Anal;' + 
						'Swab_Urogenital;BAT_NUMBER1;Bat_Reproductive_status;Bat_Teeth;Bat_Bone_fusion;Bat_Age;Bat_Forearm_length_mm;' + 
						'Bat_Tibia_length_mm;Bat_Age_2;Bat_Urine;Bat_Faeces;Bat_Oral_swab;Bat_Wing_punch;Bat_Blood_filter_paper;' + 
						'Bat_ectoparasites;Livestock_Age;habitat;Username;\r\n';

var debug;
if (localStorage.getItem('debug') === null) {
	debug = '';
} else {
	debug = localStorage.getItem('debug');
};

add_heading = true;
CSV_heading = '';
CSV_data = '';

var array_selected_fields = [];

if (localStorage.getItem('web') === 'oui') {
	var remote_couchdb = localStorage.getItem('remote_couchdb');
	var DBbiodivafreid = new PouchDB(remote_couchdb + 'bcoming' + nom_table + debug);
} else {
	var DBbiodivafreid = new PouchDB('bcoming' + nom_table + debug);
};

var tab_biodivafreid = new Array();
var tab = new Array();


DBbiodivafreid.allDocs({  		
	include_docs: true,
	attachments: true
}).then(function (result) {
	// handle result
	if (typeof(JSON.stringify(result)) != "undefined"){  
		var tableData = JSON.parse(JSON.stringify(result));
		i = 0;
		tableData.rows.forEach(function(row){   
   			try {
   				//tab[i] = new Array();
   				var obj = new Object();
   				
   												
   				obj.project_code = row.doc.project_code 
   				obj.ua_id_pr = row.doc.ua_id_pr 
   				obj.ua_id_nr = row.doc.ua_id_nr 
   				obj.ua_id = row.doc.ua_id 
   				obj.date = row.doc.date 
   				obj.location_code = row.doc.location_code 
   				obj.session_code = row.doc.session_code 
   				obj.Location = row.doc.Location 
   				obj.locses = row.doc.locses 
   				obj.Session_check = row.doc.Session_check 
   				obj.sub_order = row.doc.sub_order 
   				obj.genus_field = row.doc.genus_field 
   				obj.species_field = row.doc.species_field 
   				obj.trap = row.doc.trap 
   				obj.trap_id = row.doc.trap_id 
   				obj.sex = row.doc.sex 
   				obj.sex_cond = row.doc.sex_cond 
   				obj.weight_g = row.doc.weight_g 
   				obj.head_body_mm = row.doc.head_body_mm
				obj.tail_mm = row.doc.tail_mm 
				obj.embryo_tot = row.doc.embryo_tot 
				obj.ectopar_tot = row.doc.ectopar_tot 
				obj.capture_remarks = row.doc.capture_remarks 
				obj.liver_LI = row.doc.liver_LI 
				obj.spleen_SP = row.doc.spleen_SP 
				obj.kindney_KI = row.doc.kindney_KI 
				obj.lung_LU = row.doc.lung_LU 
				obj.intestine_IN = row.doc.intestine_IN 
				obj.uterus_UT = row.doc.uterus_UT 
				obj.blood_BL = row.doc.blood_BL 
				obj.other_tissue_XX = row.doc.other_tissue_XX 
				obj.eye_EY = row.doc.eye_EY
				obj.TE = row.doc.TE 
				obj.SP = row.doc.SP 
				obj.KL = row.doc.KL 
				obj.KD = row.doc.KD 
				obj.LI = row.doc.LI 
				obj.FC = row.doc.FC 
				obj.LU = row.doc.LU 
				obj.BL = row.doc.BL 
				obj.TN = row.doc.TN 
				obj.EY = row.doc.EY 
				obj.ECTO = row.doc.ECTO 
				obj.BR = row.doc.BR 
				obj.FOET = row.doc.FOET 
				obj.URINE_WHATMAN = row.doc.URINE_WHATMAN 
				obj.HI_FORMOL = row.doc.HI_FORMOL 
				obj.CARCASS_FORMOL = row.doc.CARCASS_FORMOL 
				obj.Tongue_in_ethanol = row.doc.Tongue_in_ethanol 
				obj.Swab_Oral = row.doc.Swab_Oral 
				obj.Swab_Nasal = row.doc.Swab_Nasal 
				obj.Swab_Anal = row.doc.Swab_Anal 
				obj.Swab_Urogenital = row.doc.Swab_Urogenital 
				obj.BAT_NUMBER1 = row.doc.BAT_NUMBER1 
				obj.Bat_Reproductive_status = row.doc.Bat_Reproductive_status 
				obj.Bat_Teeth = row.doc.Bat_Teeth 
				obj.Bat_Bone_fusion = row.doc.Bat_Bone_fusion 
				obj.Bat_Age = row.doc.Bat_Age 
				obj.Bat_Forearm_length_mm = row.doc.Bat_Forearm_length_mm 
				obj.Bat_Tibia_length_mm = row.doc.Bat_Tibia_length_mm 
				obj.Bat_Age_2 = row.doc.Bat_Age_2 
				obj.Bat_Urine = row.doc.Bat_Urine 
				obj.Bat_Faeces = row.doc.Bat_Faeces 
				obj.Bat_Oral_swab = row.doc.Bat_Oral_swab 
				obj.Bat_Wing_punch = row.doc.Bat_Wing_punch 
				obj.Bat_Blood_filter_paper = row.doc.Bat_Blood_filter_paper 
				obj.Bat_ectoparasites = row.doc.Bat_ectoparasites 
				obj.Livestock_Age = row.doc.Livestock_Age 
				obj.habitat = row.doc.habitat 
				
   				obj.Username = row.doc.Username 

   				tab_biodivafreid.push(obj);
   				
   				i++;	
   				
   			} catch(error) {
				console.log(error);
			};
		});	
		//alert('i = '  + i)	
   	}

	
	
	
	
		
		
		
	DBbiodivafreid.info().then((infos) => {
		
		count = infos.doc_count;
		
		
		
		
		
		
		
		
	}).catch((error) => {
	});
		
		
	

	
}).catch(function (err) {
   	console.log(err);
});

function addBiodivAfreidRecord(row, selected) {
	
	console.log('ok');
	

	
	if (count > 0) {
		count--
		i--
		//console.log(count);
		
		//console.log(row.N_identification_CS);
		//console.log(row['NumFilet/piege']);
		
		if (!selected) { 	
			CSV_data = CSV_data +
				row.project_code + ';' +
				row.ua_id_pr + ';' +
				row.ua_id_nr + ';' +
				row.ua_id + ';' +
				row.date + ';' + 
				row.location_code + ';' +
				row.session_code + ';' +
				row.Location + ';' +
				row.locses + ';' + 
				row.Session_check + ';' +
				row.sub_order + ';' +
				row.genus_field + ';' + 
				row.species_field + ';' +
				row.trap + ';' +
				row.trap_id + ';' +
				row.sex + ';' +
				row.sex_cond + ';' +
				row.weight_g + ';' + 
				row.head_body_mm + ';' +
				row.tail_mm + ';' +
				row.embryo_tot + ';' +
				row.ectopar_tot + ';' +
				row.capture_remarks + ';' +
				row.liver_LI + ';' +
				row.spleen_SP + ';' +
				row.kindney_KI + ';' +
				row.lung_LU + ';' +
				row.intestine_IN + ';' +
				row.uterus_UT + ';' +
				row.blood_BL + ';' +
				row.other_tissue_XX + ';' +
				row.eye_EY + ';' +
				row.TE + ';' +
				row.SP + ';' +
				row.KL + ';' +
				row.KD + ';' +
				row.LI + ';' +
				row.FC + ';' +
				row.LU + ';' +
				row.BL + ';' +
				row.TN + ';' +
				row.EY + ';' +
				row.ECTO + ';' +
				row.BR + ';' +
				row.FOET + ';' +
				row.URINE_WHATMAN + ';' +
				row.HI_FORMOL + ';' +
				row.CARCASS_FORMOL + ';' +
				row.Tongue_in_ethanol + ';' +
				row.Swab_Oral + ';' +
				row.Swab_Nasal + ';' +
				row.Swab_Anal + ';' +
				row.Swab_Urogenital + ';' +
				row.BAT_NUMBER1 + ';' +
				row.Bat_Reproductive_status + ';' +
				row.Bat_Teeth + ';' +
				row.Bat_Bone_fusion + ';' +
				row.Bat_Age + ';' +
				row.Bat_Forearm_length_mm + ';' +
				row.Bat_Tibia_length_mm + ';' +
				row.Bat_Age_2 + ';' +
				row.Bat_Urine + ';' +
				row.Bat_Faeces + ';' +
				row.Bat_Oral_swab + ';' +
				row.Bat_Wing_punch + ';' +
				row.Bat_Blood_filter_paper + ';' +
				row.Bat_ectoparasites + ';' + 
				row.Livestock_Age + ';' +
				row.habitat + ';' +
   				 
				row.Username + ';\r\n'
				
		
			} else {	
				
				 add_selection_field(row)
				
				
				if (add_heading) {
					CSV_heading = CSV_heading + "\r\n";
					CSV_data = CSV_heading + CSV_data + "\r\n"
					add_heading = false;
				} else {
					CSV_data = CSV_data + "\r\n";
				}
			}
			
			console.log(count);
			if (count == 0) {
				var blob = new Blob(['\ufeff' + CSV_data], {type: "text/csv;charset=ISO-8859-1"});
	       		saveAs(blob, "biodivafreid_captures" + clock.now + ".csv");
	       		document.location.href="import_export.html?table=_biodivafreid&type=biodivafreid";
			}	
			
	} 
			
	
}

function add_selection_field(row) {
	for (var i=0; i < fields.length; i++) {
		if (array_selected_fields.indexOf(fields[i]) > -1) {
			if (add_heading == true) {
				CSV_heading = CSV_heading + fields[i] + ';';
			}
			CSV_data = CSV_data + row[fields[i]] + ";"
		};
	}
}




window.onload = function() {
	
	$('#export_all_fields').click(function(){
		CSV_data = fields_CSV_head;
		
		var res = alasql("SELECT project_code, ua_id_pr, ua_id_nr, ua_id, date, location_code, session_code, Location, locses, Session_check, sub_order, genus_field, species_field, trap, trap_id, sex, sex_cond, weight_g, head_body_mm, tail_mm, embryo_tot, ectopar_tot, capture_remarks, liver_LI, spleen_SP, kindney_KI, lung_LU, intestine_IN, uterus_UT, blood_BL, other_tissue_XX, eye_EY, TE, SP, KL, KD, LI, FC, LU, BL, TN, EY, ECTO, BR, FOET, URINE_WHATMAN, HI_FORMOL, CARCASS_FORMOL, Tongue_in_ethanol, Swab_Oral, Swab_Nasal, Swab_Anal, Swab_Urogenital, BAT_NUMBER1, Bat_Reproductive_status, Bat_Teeth, Bat_Bone_fusion, Bat_Age, Bat_Forearm_length_mm, Bat_Tibia_length_mm, Bat_Age_2, Bat_Urine, Bat_Faeces, Bat_Oral_swab, Bat_Wing_punch, Bat_Blood_filter_paper, Bat_ectoparasites, Livestock_Age, habitat,  Username FROM ? ORDER BY date", [tab_biodivafreid] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		 
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
	    	
			//alert(count)
			if (count == i) {
				addBiodivAfreidRecord(row, false);
			}
			
			
		}).catch(function (err) {
			console.log(err);
		});
	})


	$('#export_selected_fields').click(function(){
		
		array_selected_fields = [];
		array_selected_fields.length = 0;
		
		$('#multiselect1 :selected').each(function(i, sel){ 
			array_selected_fields.push($(sel).val()); 
			//alert($(sel).val())
		});
		
		var res = alasql("SELECT project_code, ua_id_pr, ua_id_nr, ua_id, date, location_code, session_code, Location, locses, Session_check, sub_order, genus_field, species_field, trap, trap_id, sex, sex_cond, weight_g, head_body_mm, tail_mm, embryo_tot, ectopar_tot, capture_remarks, liver_LI, spleen_SP, kindney_KI, lung_LU, intestine_IN, uterus_UT, blood_BL, other_tissue_XX, eye_EY, TE, SP, KL, KD, LI, FC, LU, BL, TN, EY, ECTO, BR, FOET, URINE_WHATMAN, HI_FORMOL, CARCASS_FORMOL, Tongue_in_ethanol, Swab_Oral, Swab_Nasal, Swab_Anal, Swab_Urogenital, BAT_NUMBER1, Bat_Reproductive_status, Bat_Teeth, Bat_Bone_fusion, Bat_Age, Bat_Forearm_length_mm, Bat_Tibia_length_mm, Bat_Age_2, Bat_Urine, Bat_Faeces, Bat_Oral_swab, Bat_Wing_punch, Bat_Blood_filter_paper, Bat_ectoparasites, Livestock_Age, habitat,  Username FROM ? ORDER BY date", [tab_biodivafreid] );
	    			
	    var CS = JSON.stringify(res);
	    			
	    var obj_CS = JSON.parse(CS);
		   
	    
	    res.forEach(function(row){
	    	//wait(10);
			//console.log(row.N_identification_CS)
			//alert(count)
			if (count == i) {
				addBiodivAfreidRecord(row, true);
			}
			
			
		}).catch(function (err) {
			console.log(err);
		});
	})
	
	$("#add_selection_criteria").attr("disabled", true);

	var $multiselect1 = $("#multiselect1");
	
	$.each(fields, function(index, value) {
		console.log(value);
		$multiselect1.append($("<option>").attr("value", value).text(value));
	});
	
	$multiselect1.multiSelect();
	
}



	
