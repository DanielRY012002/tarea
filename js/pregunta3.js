var nombre=prompt("Nombre: "),edad=parseFloat(prompt("Edad: ")),salario=parseFloat(prompt("Salario: ")),nuevosalario=0;
if (edad<16) {
    document.write("Lo sentimos usted no tiene edad para trabajar");
} else {
    alert("Bienvenido: ",nombre)
    if(edad>=19&&edad<=50) {
        alert("Felicitaciones usted tiene una bonifacion de 5%");
        salario+=(salario*0.05);
    }else if(edad>=51&&edad<=60){
        alert("Felicitaciones usted tiene una bonifacion de 10%");
        salario+=(salario*0.1);
    }else if(edad>60){
        alert("Felicitaciones usted tiene una bonifacion de 45%");
        salario+=(salario*0.15);
    }
    document.write("Salario: ",salario);
}