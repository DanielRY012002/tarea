alert("Calcula el factorial de un número pedido por teclado");
var x=parseFloat(prompt("N1: ")),total=1;
for (i=1; i<=x; i++) {
    total = total * i; 
}
document.write("Factorial: ",total);
