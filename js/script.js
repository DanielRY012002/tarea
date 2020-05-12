var opcion=prompt("opcion: ")
switch (parseFloat(opcion)) {
    case 1:
        x=parseFloat(prompt("N1: "))
        y=parseFloat(prompt("N2: "))
        document.write("suma: ",x+y);   
        break;
    case 2:
        x=parseFloat(prompt("N1: "))
        y=parseFloat(prompt("N2: "))
        document.write("resta: ",x-y);
        break;
    case 3:
        x=parseFloat(prompt("N1: "))
        y=parseFloat(prompt("N2: "))
        document.write("multiplicacion: ",x*y);
        break;
    case 4:
        x=parseFloat(prompt("N1: "))
        y=parseFloat(prompt("N2: "))
        if (y>0) {
            document.write("division: ",x/y);   
        } else {
            document.write("Indefinido")
        }
        break;
    case 5:
        x=parseFloat(prompt("N1: "))
        document.write("Raiz cubica: ",Math.pow(x,1/3));
        break;
    case 6:
        x=parseFloat(prompt("N1: "))
        var total=1
        for (i=1; i<=x; i++) {
            total = total * i; 
        }
        document.write("factorial: ",total)
        break;
    case 7:
        x=parseFloat(prompt("base: "))
        y=parseFloat(prompt("exponente: "))
        document.write("potencia: ",Math.pow(x,y));
        break;
    default:document.write("x_X ERROR x_x")
        break;
}