// Solicitar al usuario 3 números y guardarlos en variables
const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
const numero3 = parseFloat(prompt("Ingrese el tercer número:"));

// Verificar si los números son iguales
if (numero1 === numero2 && numero2 === numero3) {
  console.log("Los números son iguales.");
} else {
  // Encontrar el número mayor, del centro y menor
  let mayor, centro, menor;

  if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
    if (numero2 >= numero3) {
      centro = numero2;
      menor = numero3;
    } else {
      centro = numero3;
      menor = numero2;
    }
  } else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
    if (numero1 >= numero3) {
      centro = numero1;
      menor = numero3;
    } else {
      centro = numero3;
      menor = numero1;
    }
  } else {
    mayor = numero3;
    if (numero1 >= numero2) {
      centro = numero1;
      menor = numero2;
    } else {
      centro = numero2;
      menor = numero1;
    }
  }

  
  console.log(`De mayor a menor: ${mayor}, ${centro}, ${menor}`);
  console.log(`De menor a mayor: ${menor}, ${centro}, ${mayor}`);
}
