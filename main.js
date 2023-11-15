// 21 Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
// llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario
// deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
// guardar en una variable llamada numeroIngresado, y en cada intento deberás
// mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
// intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
// adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si
// usas mucho código repetido, mas adelante veraz como realizar este juego de manera
// mas eficiente
// let numeroIncognita = 5;

// let numeroIngresado = parseInt(
//    prompt("ingrese un numero del 1 al  10 para adivinar el numero")
// );

// if (numeroIncognita == numeroIngresado) {
//    console.log("felicitaciones adivinaste");
// } else if (numeroIngresado > numeroIncognita) {
//    console.log("numero ingresado es mayor vuelve a intentarlo");
//    let numeroIngresado2 = parseInt(
//       prompt("ingrese un numero del 1 al  10 para adivinar el numero, intento 2")
//    );
//    if (numeroIncognita == numeroIngresado2) {
//       console.log("felicitaciones adivinaste");
//    } else if (numeroIngresado2 > numeroIncognita) {
//       console.log("numero ingresado es mayor vuelve a intentarlo");
//       let numeroIngresado2 = parseInt(
//          prompt("ingrese un numero del 1 al  10 para adivinar el numero")
//       );

//       if (numeroIncognita == numeroIngresado2) {
//          console.log("felicitaciones adivinaste");
//       } else {
//          console.log(
//             " Perdiste, gracias por participar. Suerte ppara la proxima!"
//          );
//       }
//    }
// }
// if (numeroIncognita == numeroIngresado) {
//    console.log("felicitaciones adivinaste");
// } else if (numeroIngresado < numeroIncognita) {
//    console.log("numero ingresado es menor vuelve a intentarlo");
//    let numeroIngresado3 = parseInt(
//       prompt("ingrese un numero del 1 al  10 para adivinar el numero, intento 2")
//    );
//    if (numeroIncognita == numeroIngresado3) {
//       console.log("felicitaciones adivinaste");
//    } else if (numeroIngresado3 > numeroIncognita) {
//       console.log("numero ingresado es mayor vuelve a intentarlo");
//       let numeroIngresado3 = parseInt(
//          prompt("ingrese un numero del 1 al  10 para adivinar el numero")
//       );

//       if (numeroIncognita == numeroIngresado3) {
//          console.log("felicitaciones adivinaste");
//       } else {
//          console.log(" Perdiste, gracias por participar. Suerte para la proxima!");
//       }
//    }
// }

// . Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
//    años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
//    45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
//    preguntando si en realidad tiene esa edad.

// let edad = parseInt(prompt("ingrese su edad"));

// switch (true) {
//   case (edad <= 12):
//     console.log("Eres infante");
//     break;
//   case (edad >= 13 && edad <= 18):
//     console.log("Adolecente");
//     break;
//   case (edad >= 19 && edad <= 45):
//     console.log("Eres un mayor joven");
//     break;
//   case (edad > 45 && edad <= 100):
//     console.log("Eres un anciano");
//     break;
//   case (edad > 100):
//     console.log("en realidad tienes esa edad");
//     break;

//   default:
//     console.log(" No eres humano");
//     break;
// }

//    10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
//    jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
//    algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
//    trampa.

// ----------------------------- punto 1 boocles----------------------------------------
// let numero = 2
// for (let i =1; i <= 10; i++) {
//    const resultado = numero * - i;
//    console.log(numero +"x" + i + "=" + resultado);

// }
// let player1 = prompt(" JUGADOR 1ESCOJA  PIEDRA PAPEL O TIJERA")
// let player2 = prompt(" JUGADOR 2 ESCOJA PIEDRA PAPEL O TIJERA")
// let opcion1 = "piedra"
// let opcion2 = "papel"
// let opcion3 = "tijera"
// switch (true) {
//    case (player1 ==opcion1 && player2 ==opcion1):
//       console.log("empate")
//       break;
//    case (player1 == opcion2 && player2 == opcion1):
//       alert("jugador 1 ganador")
//       break;
//    case (player1 == opcion2 && player2 == opcion3):
//       alert("jugador 2 ganador")
//       break;
//    case (player1 == opcion3 && player2 == opcion2):
//       alert("jugador 1 ganador")
//       break;
//    case (player1 == opcion3 && player2 == opcion1):
//       alert("jugador 2 ganador")
//       break;
//    case (player1 == opcion3 && player2 == opcion3):
//       alert("Empate")
//       break;
//    case (player1 == opcion1 && player2 == opcion2):
//       alert("jugador 2 ganador")
//       break;;
//    case (player1 == opcion1 && player2 == opcion3):
//       alert("jugador 1 ganador")
//       break;
//    case (player1 == opcion1 && player2 == opcion1):
//       alert("jugadores empatados")
//       break;
//    default:
//       alert("algun jugador hizo trampa" + player1 + player2)
//       break;
// }

//    11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
//    por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de
//    color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol,
//    Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor:
//    Excelente elección, no lo teníamos pensado.

// let color = prompt("ingrese un color ");

// switch (color) {
//    case "Blanco":
//       alert("falta de color");
//       break;
//    case "Negro":

//       alert("falta de color");
//       break;

//    case "Verde":
//       alert("El color de la naturaleza");
//       break;

//    case "Azul ":
//       alert("El color del agua");
//       break;

//    case "Amarillo ":
//       alert("El color del sol");
//       break;

//    default:
//       console.log(" Excelente elección, no lo teníamos pensado.");
//       break;
// }

//    12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
//    Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
//    deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
//    elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
//    ERROR si el divisor ingresado fue 0.

// let numeroIngresado1 = prompt("ingrese un valor ")
// let numeroIngresado2 = prompt("ingrese un valor ")

// numeroIngresado1 = parseFloat(numeroIngresado1);
// numeroIngresado2 = parseFloat(numeroIngresado2);

// if (isNaN(numeroIngresado1) || isNaN(numeroIngresado2)) {
//     alert("Por favor, ingrese números válidos.");
// } else {
//     let resultado = numero1 + numero2;
//     alert("La suma de " + numeroIngresado1+ " y " + numeroIngresado2 + " es: " + resultado);
// }



//    13. Crear un programa que permita ingresar todos los datos de tu documento nacional de
//    identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
//    pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado
//    dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un
//    mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
//    mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.´ }
// let nombre = prompt("Ingrese su nombre:");
// let apellido = prompt("Ingrese su apellido:");
// let numeroDNI = prompt("Ingrese su número de DNI:");
// let fechaNacimiento = prompt("Ingrese su fecha de nacimiento:");


// let mensajeDatos = "Nombre: " + nombre + "\nApellido: " + apellido + "\nNúmero de DNI: " + numeroDNI + "\nFecha de nacimiento: " + fechaNacimiento;
// let confirmacion = confirm("Los datos ingresados son:\n\n" + mensajeDatos + "\n\n¿Son correctos?");


// if (confirmacion) {    
//     let dni = {
//         nombre: nombre,
//         apellido: apellido,
//         numeroDNI: numeroDNI,
//         fechaNacimiento: fechaNacimiento
//     };   
//     console.table(dni);
//     console.log("Registro exitoso. ¡Gracias por ingresar tus datos!");
// } else {   
//     console.log("Vuelva a intentarlo en 1 mes.");
// }
