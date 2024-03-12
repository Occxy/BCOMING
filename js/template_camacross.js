

var fields_CSV_camacross =   
	'SamplingDate;AnimalCode;Province;Site;Species;SampleType;SampleCode;Final_Result_for_Corona_Watanabe;Final_Result_for_Corona_Quan;';


window.onload = function() {
	$('#button_download').click(function(){
	CSV_data = fields_CSV_camacross;
	var blob = new Blob(['\ufeff' + CSV_data], {type: "text/csv;charset=ISO-8859-1"});
	saveAs(blob, "CA.csv");
	})

}