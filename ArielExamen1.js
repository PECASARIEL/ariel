int multiplo = 240;
console.log ("Los multiplos de " + multiplo + " son");
for (int x=1;x<multiplo;x++){
	if (esMultiplo(multiplo,x)){
		console.log(" " + x);