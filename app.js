///creacion de usuario
let nombre_usuario = prompt("Cree su nombre de usuario: ");
let contraseña_usuario = prompt("Cree su contraseña: ");
let nombre_ingreso;
let contraseña_ingreso;

while((nombre_usuario || contraseña_usuario) == "") {
    nombre_usuario = prompt("Ingrese algun valor de nombre de usuario: ");
    contraseña_usuario = prompt("Ingrese algun valor de contraseña: ");
}

alert("Bienvenido al sistema!!!");

///ingreso al sistema
let ingreso = prompt("Quiere ingresar al sistema?(S/N)");

if(ingreso == "S") {
    nombre_ingreso = prompt("Ingrese el usuario: ");
    if (nombre_ingreso != nombre_usuario) {
        alert("Usuario incorrecto");
    } else {
        contraseña_ingreso = prompt("Ingrese la contraseña: ");
        if(contraseña_ingreso != contraseña_usuario) {
            alert("Contraseña incorrecta");
        } else {
            alert("INGRESO ACEPTADO...")
        }
    }
}
    




