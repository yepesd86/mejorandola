var peso;
var pesoEnMarte; //camelCase ( cuando se pone nombre con May)
var nombre
var apellido

alert("¿Quieres Saber Tu Peso en Marte?");
nombre = prompt("¿ Cuales es tu nombre?" , " ");
apellido = prompt("¿Cuál es tu apellido?" , " ");
peso = prompt("¿Cuál es tu peso en KG?" , "80");

peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

alert( nombre + apellido + "\n" + "Tu peso en Marte es: \n " + pesoEnMarte + " " +  "KG.")


// 	//alert:es una función
// 	//() parametros de la funcion
// 	// "" cadenas de texto
// var nombre = "juan";
// var apellido = "yepes";
// var edad = 28;
// alert(nombre + " " + apellido + "\n" + edad + "años.")