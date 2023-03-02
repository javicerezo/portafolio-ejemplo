(function (){
    // VARIABLES
    const body = document.querySelector('.js-body');
    const header = document.querySelector('.js-header');
    const cuadro = document.querySelector('.js-cuadro');
    const btnDarkmode = document.querySelector('.js-header__dark-mode');
    const btnBurger = document.querySelector('.js-header__burger i');
    const listaTrabajos = document.querySelector('.js-trabajos__ul');
    
    // EVENTOS SCROLL
    window.addEventListener('DOMContentLoaded', (() => {
        darkMode();
    }))
    //posiciones del cuadro amarillo y del header
    window.addEventListener('scroll', (e) => {
        if(window.scrollY == '0') {
            cuadro.children[0].classList.remove('c-cuadro__sup--mod');
            cuadro.children[1].classList.remove('c-cuadro__der--mod');
            cuadro.children[2].classList.remove('c-cuadro__inf--mod');
            cuadro.children[3].classList.remove('c-cuadro__izq--mod');

            header.classList.remove('c-header--mod');

            cuadro.children[2].children[0].classList.remove('c-cuadro__p--mod');
            cuadro.children[2].children[1].classList.add('c-cuadro__p--mod');
        } else {
            cuadro.children[0].classList.add('c-cuadro__sup--mod');
            cuadro.children[1].classList.add('c-cuadro__der--mod');
            cuadro.children[2].classList.add('c-cuadro__inf--mod');
            cuadro.children[3].classList.add('c-cuadro__izq--mod');
            
            header.classList.add('c-header--mod');
            
            cuadro.children[2].children[0].classList.add('c-cuadro__p--mod');
            cuadro.children[2].children[1].classList.remove('c-cuadro__p--mod');
        }
    })
// EVENTOS DE CLICK
    // cambio a modo oscuro
    btnDarkmode.addEventListener('click', (e) => {
        body.classList.toggle('darkmode');
    });
    //boton menu mobile
    btnBurger.addEventListener('click', (e) => {
        header.children[2].classList.toggle('c-header__nav--mod');
        btnBurger.classList.toggle('fa-xmark');
        btnBurger.classList.toggle('fa-bars');
    });
    // botones modales
    listaTrabajos.addEventListener('click', (e) => {
        let i = parseInt(e.target.getAttribute('value'));
        abrirModal(i);
    });


    // FUNCIONES 
    /* funcioón que detecta el modo oscuro de las preferencias del usuario y añade la clase darkmode al body para 
    poder cambiar imagenes de fondo, también está pendiente al cambio manual de las preferencias para hacer el cambio */
    function darkMode() {
        const consulta = window.matchMedia('(prefers-color-scheme: dark)');
        if (consulta.matches) {
            document.body.classList.add('darkmode');
        } else {
            document.body.classList.remove('darkmode');
        }
        consulta.addEventListener('change', () => {
            if (consulta.matches) {
                document.body.classList.add('darkmode');
            } else {
                document.body.classList.remove('darkmode');
            }
        })
    }

    function abrirModal (i) {
        console.log('estoy abriendo el modal'+i);
    }
    function cerrarModal (i) {
        console.log('cerrando el modal');
    }
})();