//Timer De Tostión

var centesimas = 0;
var segundos = 0;
var minutos = 0;
function inicio() {
	control = setInterval(cronometro,10);
	document.getElementById("iniciob").disabled = true;
    document.getElementById("parar").disabled = false;
	document.getElementById("reinicio").disabled = false;
    document.getElementById("cambiot").disabled = false;
}

function reinicio() {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = "00";
	document.getElementById("ventilacion").innerHTML = "Primera Ventilacion";
    document.getElementById("parar").disabled = true;
	document.getElementById("iniciob").disabled = false;
	document.getElementById("reinicio").disabled = true;
}
function parar() {
	clearInterval(control);
	document.getElementById("parar").disabled = true;
    document.getElementById("iniciob").disabled = false;
    document.getElementById("reincio").disabled = true;
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if (segundos>=4){
		document.getElementById("ventilacion").innerHTML = "Segunda Ventilacion";
	}
	if (segundos>=8){
		document.getElementById("ventilacion").innerHTML = "Tercera Ventilacion";
	}
	if (segundos>=12){
		document.getElementById("ventilacion").innerHTML = "Cuarta Ventilacion";
	}
}