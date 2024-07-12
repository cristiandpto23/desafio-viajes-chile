$(document).ready(function(){
    // Se añade a todos los elementos 'a' una función que se ejecuta con un click en ellos
    $("a").on('click', function(event) {

    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        // el valor numérico dice los ms que se demora en llegar al destino
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
    } // End if
    });
});

/* $(window).on('scroll', function() {
    // Se añade o se quita la clase 'bg-dark' al elemento 'nav' si la posición del scroll es mayor a 0
        if(window.scrollY > 0) {
            console.log(scrollY);
            $('#navbar').addClass('dark-mode');
        }
    }
        
); */

// Se añade los elementos que se quieren modificar (selector id)
let nav = document.querySelector('#navbar', '#navbarTogglerDemo02');
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




    

