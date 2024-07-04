
var imgsPizza = [
    "./img/slice.png",
    "./img/rebanadaVaso.png",
    "./img/rebanadaCoca.png",
    // Agrega más URLs según sea necesario
]; 

var infosPizza = [
    "Rebanada de<br> Pizza <br><br><h1 class='enfasis_blan'> $33 MX</h1>",
    "Rebanada de Pizza + <br> vaso de refresco <br><br><h1 class='enfasis_blan'> $37 MX</h1>",
    "Rebanada de Pizza + <br> botella de refresco <br><br><h1 class='enfasis_blan'> $53 MX</h1>",

];

var pizza_back = document.getElementById("menuPizza-backward");
var pizza_next = document.getElementById("menuPizza-forward");

var indiceActual = 0;
var imgPizza  = document.getElementById("imgPizza");
var infoPizza = document.getElementById("infoPizza");

function nextPizza() {
    indiceActual = (indiceActual + 1) % imgsPizza.length;
    actualizarImagen();
}

function backPizza() {
    indiceActual = (indiceActual - 1 + imgsPizza.length) % imgsPizza.length;
    actualizarImagen();
    
}


function actualizarImagen() {
    imgPizza.style.opacity = 0;
    setTimeout(function() {
        imgPizza.src = imgsPizza[indiceActual];
        imgPizza.style.opacity = 1;
    }, 500);
    actualizarInfo();
}

function actualizarInfo(){
    infoPizza.style.opacity = 0;
    setTimeout(function() {
        infoPizza.innerHTML = infosPizza[indiceActual];
        infoPizza.style.opacity = 1;
    }, 500);
}

pizza_next.addEventListener("click", nextPizza);
pizza_back.addEventListener("click", backPizza);
actualizarImagen();


var pag1 = document.getElementById('btn_pag1');
var pag2 = document.getElementById('btn_pag2');

pag1.addEventListener("click", switchPizza);
pag2.addEventListener("click", switchPizzaAgain);

var div1 = document.getElementById('pizzas-grandes');
var div2 = document.getElementById('pizzas-rebanadas');

console.log("pizzas",div1.innerHTML);
console.log("rebas",div2.innerHTML);
var contenidoDiv1 = div1.innerHTML;
var contenidoDiv2 = div2.innerHTML;


  function switchPizza(){
    div1.classList.add('fade-out');

    setTimeout(function () {
        div1.innerHTML = contenidoDiv1;
        div1.classList.remove('fade-out');
        div1.classList.add('fade-in');
    }, 500); // Asegúrate de que el tiempo del timeout coincida con la duración de la transición en CSS

    // Desvanecer el segundo div inmediatamente para que aparezca suavemente después del cambio
    div2.classList.remove('fade-in');
  }

  function switchPizzaAgain(){
    div1.classList.add('fade-out');

    setTimeout(function () {
        div1.innerHTML=contenidoDiv2;
        div1.classList.remove('fade-out');
        div1.classList.add('fade-in');
    }, 500); // Asegúrate de que el tiempo del timeout coincida con la duración de la transición en CSS

    // Desvanecer el primer div inmediatamente para que aparezca suavemente después del cambio
    div2.classList.remove('fade-in');
  }

  function redirigir() {
    // Cambia la URL a la que quieres redirigir
    window.location.href = "content/restaurant7/about.html";
  }