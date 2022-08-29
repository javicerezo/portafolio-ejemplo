<?php 

function conectarDB() : mysqli {
    $db = mysqli_connect('localhost', 'root', '19871987', 'portafolio_javicerezo');
    if(!$db) {
        echo 'error en la conexión';
        exit;
    }
    return $db;
}