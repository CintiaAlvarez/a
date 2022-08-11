// const saludar = () => {
//  alert("hola");
// };

// let boton = document.getElementById("saludar");

// let contador : number = 0;

// const contarClicks = () => {
// contador++;
// alert("Hiciste" + contador + " clicks");
// };

// boton.addEventListener("click", contarClicks);

let input = document.getElementById("input");
let result = document.getElementById("result");

const escribir = () => {
  result.innerHTML = input.value;
  console.log(input.value.lenght);
};

input.addEventListener("input", escribir);
