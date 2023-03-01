(function (){
    // VARIABLES
    const body = document.querySelector('.js-body');
    const header = document.querySelector('.js-header');
    const cuadro = document.querySelector('.js-cuadro');
    const btnDarkmode = document.querySelector('.js-header__dark-mode');
    const btnBurger = document.querySelector('.js-header__burger i');

    
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
        // // body.classList.toggle('darkmode');
        // console.log(window.matchMedia('(prefers-color-scheme)'));
        // console.log('cambiando matches');
        // window.matchMedia('(prefers-color-scheme): light')
        // console.log(window.matchMedia('(prefers-color-scheme)'));
    })
    btnBurger.addEventListener('click', (e) => {
        header.children[2].classList.toggle('c-header__nav--mod');
        btnBurger.classList.toggle('fa-xmark');
        btnBurger.classList.toggle('fa-bars');
    })

    // FUNCIONES 
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

})();