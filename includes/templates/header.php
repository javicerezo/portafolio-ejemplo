<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Junior FrontEnd - El portfolio de Javi Cerezo</title>
    <meta name="description" content="Portfolio profesional web">
    <link rel="shortcut icon" href="build/img/favicon-transp.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preload" href="build/css/app.css" as="style">
    <link rel="stylesheet" href="build/css/app.css">
</head>

<body>
    <!-- HEADER -->
    <header>
        <div class="contenedor__menu posicion_a">
            <div class="menu__izq">
                <button class="darkmode" id="darkmode">
                    <picture>
                        <source srcset="build/img/favicon-transp.webp" type="image/webp">
                        <source srcset="build/img/favicon-transp.png" type="image/png">
                        <img loading="lazy" src="build/img/favicon-transp.png" class="img__darkmode" alt="icono modo oscuro">
                    </picture>
                    <span><i class="fa-solid fa-sun"></i></span>
                    <span><i class="fa-solid fa-moon"></i></span>
                </button>
                <!-- <img class="img__menu" src="img/favicon-transp.png" alt=""> -->
                <p class="titulo__menu"> El Portfolio de < JaviCerezo >
                </p>
            </div>
            <input type="checkbox" id="check__menu">
            <label for="check__menu" class="icono_m">
                <i class="fa-solid fa-bars"></i>
            </label>
            <label for="check__menu" class="icono_x">
                <i class="fa-solid fa-xmark"></i>
            </label>
            <ul class="menu__der">
                <li><a href="#" value="0" class="color_negro">SOBRE MÍ</a></li>
                <li><a href="#" value="1">PORTFOLIO</a></li>
                <li><a href="#" value="2">CONTACTO</a></li>
            </ul>
        </div>
    </header>