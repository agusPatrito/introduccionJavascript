///creacion de usuario
let nombreUsuario = prompt("Cree su nombre de usuario: ");
let contraseñaUsuario = prompt("Cree su contraseña: ");
let nombreIngreso;
let contraseñaIngreso;
const cartelera = [];
console.log('Array cartelera creado', cartelera);
console.log('Cantidad de elementos en el array cartelera', cartelera.length);


while((nombreUsuario || contraseñaUsuario) == "") {
    nombreUsuario = prompt("Ingrese algun valor de nombre de usuario: ");
    contraseñaUsuario = prompt("Ingrese algun valor de contraseña: ");
}

alert("Bienvenido al sistema!!!");

///ingreso al sistema
let ingreso = prompt("Quiere ingresar al sistema?(S/N)");

if(ingreso == "S") {
    nombreIngreso = prompt("Ingrese el usuario: ");
    if (nombreIngreso != nombreUsuario) {
        alert("Usuario incorrecto");
    } else {
        contraseñaIngreso = prompt("Ingrese la contraseña: ");
        if(contraseñaIngreso != contraseñaUsuario) {
            alert("Contraseña incorrecta");
        } else {
            alert("INGRESO ACEPTADO...");
            validado = true;
        }
    }
}

function validarN() {
    let n = parseInt(prompt('Ingrese un valor: '),10);
    while (isNaN(n) || n > 3 || n < 0) {
        n = parseInt(prompt('INGRESE UN VALOR CORRECTO: '),10);
    } 
    return n;
}

function menuOpciones(n, array) {
    while(n != 0){
        alert('1-Buscar pelicula por nombre \
        2-Agregar pelicula\
        3-Modificar pelicula\ ');
        n = validarN(0,3);
        if(n == 1) {
            let nombrePelicula = prompt('Ingrese el nombre de la pelicula: ');
            const buscarNombre = array.filter((pelicula) => pelicula.nombre === nombrePelicula);
            buscarNombre.forEach((pelicula) => console.log(pelicula));   
        } else if(n == 2){
            let titulo = prompt('Ingrese el titulo de la pelicula: ');
            let año = prompt('Ingrese el año: ');
            let duracion = prompt('Ingrese la duracion: ');
            let director = prompt('Ingrese el director: ');
            let rating = prompt('Ingrese el rating: ');

            const nuevaPelicula = new Pelicula(titulo, año, duracion, director, rating);
            cartelera.push(nuevaPelicula);
            console.log(cartelera);

        }

        
    }
       
}
 
alert('1-Buscar pelicula por nombre \
    2-Agregar pelicula\
    3-Modificar pelicula\ ');
opc = validarN(0,3);
menuOpciones(opc, cartelera);

    






