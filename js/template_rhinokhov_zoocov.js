


var fields_CSV_camacross =   
	'Project;Sampling_Date;Animal_ID;Genus_Species;Province;District;Site;Specific_location;No;Sample_Type;' +
	'Taxa;rtPCR_SARS-COV-2_E_gene;PCR_Quan_result;PCR_Watanabe_result;Sex;Age-Status;Health_Status;Condition;' +
	'FEV;OSV;OST;RSV;RST;DBS;URV;URT;WBV;BSN;BCN;FA_mm;Weigth_g;Photo;Recorder_type;File_name;Kiv;KiT;SpV;SpT;LiV;' +
	'LiT;LuV;LuT;HeV;HeT;BrV;BrT;UrV;UrT;Other;';


window.onload = function() {
	$('#button_download').click(function(){
	CSV_data = fields_CSV_camacross;
	var blob = new Blob(['\ufeff' + CSV_data], {type: "text/csv;charset=ISO-8859-1"});
	saveAs(blob, "RZ.csv");
	})

}