function openLoader() {
   document.getElementById('loader_main').style.display = "block";
   setTimeout(function(){ document.getElementById('loader_main').style.display = "none";}, 1000);
}

function alertt(){

	var isLoader = confirm("Parsutit datus?");
	if(isLoader==true){
		alert("Tiek izpildita darbiba...");
		alert("Dati ir parsutiti!!");
	}else{
		alert("Dati netiks parsutiti!!!");
	}
}
