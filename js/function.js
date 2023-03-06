var errors = new Array();

function showConnexionStatus() {
	var led = document.getElementById("led");
	var p_led = document.getElementById("p_led");
	
	if (navigator.onLine) {
    	led.className = "led-green";
    	p_led.innerHTML = "Online";
    } else {
    	led.className = "led-red";
    	p_led.innerHTML = "Offline";
    }	
}

function logged_only() {	
	//if (sessionStorage["login"] == null) {
	if (localStorage.getItem('login') != null) {
		var date1 = new Date();
		if (localStorage.getItem('date') != date1.getDate().toString() + date1.getMonth().toString()){
    		window.location = 'login.html';
		}
	} else {
		window.location = 'login.html';
	}
}

String.prototype.shuffle = function() {
	var parts = this.split('');
	for (var i = 0, len = parts.length; i < len; i++) {
		var j = Math.floor( Math.random() * ( i + 1 ) );
	    var temp = parts[i];
	    parts[i] = parts[j];
	    parts[j] = temp;
	}
	return parts.join('');
};

function str_random(count){
	var alphabet = "0123456789azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN";
	//return substr(str_shuffle(str_repeat($alphabet, $length)), 0, $length);
	alphabet = alphabet.repeat(count);
	//return alphabet;
	alphabet = alphabet.shuffle();
	return alphabet.substr(0, 60);
}

String.prototype.toDate = function(format)
{
	var normalized      = this.replace(/[^a-zA-Z0-9]/g, '-');
	var normalizedFormat= format.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
	var formatItems     = normalizedFormat.split('-');
	var dateItems       = normalized.split('-');

	var monthIndex  = formatItems.indexOf("mm");
	var dayIndex    = formatItems.indexOf("dd");
	var yearIndex   = formatItems.indexOf("yyyy");
	var hourIndex     = formatItems.indexOf("hh");
	var minutesIndex  = formatItems.indexOf("ii");
	var secondsIndex  = formatItems.indexOf("ss");

	var today = new Date();

	var year  = yearIndex>-1  ? dateItems[yearIndex]    : today.getFullYear();
	var month = monthIndex>-1 ? dateItems[monthIndex]-1 : today.getMonth()-1;
	var day   = dayIndex>-1   ? dateItems[dayIndex]     : today.getDate();

	var hour    = hourIndex>-1      ? dateItems[hourIndex]    : today.getHours();
	var minute  = minutesIndex>-1   ? dateItems[minutesIndex] : today.getMinutes();
	var second  = secondsIndex>-1   ? dateItems[secondsIndex] : today.getSeconds();

	return new Date(year,month,day,hour,minute,second);
};

function showAlertFlash(){	
	if (sessionStorage.getItem("flash") != null) {
		var value = JSON.parse(sessionStorage.getItem("flash"));
  		if (sessionStorage["flash"]){
			document.write("<div class='alert alert-block alert-" + value.type + " mb-0'>" + value.message + "</div>");
	     	sessionStorage.removeItem("flash");
  		};
	}; 	
};

function addAlertFlash(type, message){
	var data={	
		type: type,
	    message : message
	};			    	
	var val = JSON.stringify(data);
	sessionStorage.setItem("flash", val);
};

function showErrors(){
	if (localStorage.getItem('errors') != null) {
   		var errors = JSON.parse(localStorage.getItem('errors'));
   		if(errors.length > 0){
	   		document.write("<div class='alert alert-danger mb-0'>" +
	    					"<p>Vous n'avez pas rempli le formulaire correctement</p>" + 
	    					"<ul>");
	    					
	    					for (var i = 0; i < errors.length; i ++ ){
	    						document.write("<li>"+ errors[i] + "</li>");
	     					}
	    					
	    					document.write("</ul>" + 
	    			     "</div>");
	    }
   		localStorage.removeItem('errors');
	};
};

function addErrors(error){
	errors.push(error);
	localStorage.setItem('errors', JSON.stringify(errors));
};

function disable_li() {
	
	$('li').each(function() {
		var id = this.id
		if (id !== '') {
			noclick_li(id);
		};
	});
		
	function noclick_li(li) {
		var component_li =  document.getElementById(li);
		component_li.classList.add("noclick");
	};
};

function enable_li() {
	
	var code_equipe = localStorage.getItem('code_equipe');
	var nom_pays = localStorage.getItem('nom_pays');
	
	$('li').each(function() {
		var id = this.id;
		var name = this.getAttribute('name');
		var attribut_pays = this.getAttribute('pays');
		
		if (name === '10') {
			click_li(id);
		} else if ((id !== '') && (localStorage.getItem('debug') !== null)) {
			click_li(id);
		} else if ((id !== '') && (name === code_equipe)) {
			click_li(id);
			
		}
		
		if ((nom_pays !== 'tous') && (attribut_pays != null)) {
			if ((id !== '') && (attribut_pays !== nom_pays)) {
				unclick_li(id);
			}
		}
		
		console.log(id.substr(0,18))
		
		if (((nom_pays == 'guinee') || (nom_pays == 'tous')) && (code_equipe == '1') && (id.indexOf('astre_transvihmi') > -1)) {
			click_li(id);
		}
		
		
		
	});
	
	$('div').each(function() {
		
		//var id = this.id;
		var attribut_pays = this.getAttribute('pays');
		if ((nom_pays !== 'tous') && (attribut_pays != null)) {
			if (attribut_pays !== nom_pays) {
				//var component_div =  document.getElementById(id);
				(this).style.display = "none";
			};
		}
	});
		
	function click_li(li) {
		var component_li =  document.getElementById(li);
		component_li.classList.remove("noclick");

	};
	
	function unclick_li(li) {
		var component_li =  document.getElementById(li);
		component_li.classList.add("noclick");
	}
	
	if (code_equipe == '20') {
		var component_li =  document.getElementById('li_sauvegarde');
		component_li.style.display='block';
	}
};

function show_infos() {
	var code_equipe = localStorage.getItem('code_equipe');
	if (code_equipe == 20) {
		$('div').each(function() {
			var name = this.getAttribute('name');
			if ((name === '1') ||
				(name === '2') ||
				(name === '3') ||
				(name === '4') ||
				(name === '5') ||
				(name === '6')) {
		       	//var elem = this;
		       	//elem.style.display="block";
		       	this.style.display="block";
		       };
		});
	} else {
		$('div').each(function() {
			var name = this.getAttribute('name');
			var id = this.getAttribute('id');
			if (name === code_equipe) {
		       	//var elem = this;
		       	//elem.style.display="block";
		       	this.style.display="block";
		    };
		    if (((nom_pays == 'guinee') || (nom_pays == 'tous')) && (code_equipe == '1') 
		    		&& ((id == 'astre_transvihmi_chauves_souris_capturees') || (id == 'astre_transvihmi_chauves_non_invasives') || (id == 'astre_transvihmi_faune')) ) {
		    	this.style.display="block";
			}
		});
	}
};