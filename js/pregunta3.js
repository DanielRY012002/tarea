var nombre=prompt("Nombre: "),edad=parseFloat(prompt("Edad: ")),salario=parseFloat(prompt("Salario: ")),nuevosalario=0;
if (edad<16) {
    document.write("Lo sentimos usted no tiene edad para trabajar");
} else {
    document.write("Bienvenido: ",nombre);
    if(edad>=19&&edad<=50) {
        nuevosalario=salario+(salario*0.05);
    }else if(edad>=51&&edad<=60){
        nuevosalario=salario+(salario*0.1);
    }else{
        nuevosalario=salario+(salario*0.15);
    }
}
document.write("Salario: ",nuevosalario);