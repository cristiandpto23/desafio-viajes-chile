// JS BOOTSTRAP || Tooptips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// JQUERY
$(document).ready(function(){
    // Se añade a todos los elementos 'a' una función que se ejecuta con un click en ellos
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            // Prevenir conducta por defecto de 'a'
            event.preventDefault();
            var hash = this.hash;
            // el valor numérico dice los ms que se demora en llegar al destino
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){

            // añade hash (#) a la URL cuando se desplaza a un destino
            window.location.hash = hash;
            });
        } 
    });
});

// Se añade los elementos que se quieren modificar (selector id)
let nav = document.querySelector('#navbar');
// se añade un elemento que escucha el evento scroll mayor que 100
window.addEventListener('scroll', function() {
    if(window.scrollY > 100) {
        // si es mayor, se quita la clase bg-trasparent y se añade bg-dark
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-dark');
    } else {
        // caso contrario, se quita bg-dark y se añade bg-transparent
        nav.classList.remove('bg-dark');
        nav.classList.add('bg-transparent');
    }
})


