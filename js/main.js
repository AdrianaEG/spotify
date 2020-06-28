const $contenedorAvatar = document.querySelector('.contenedor-avatar');
const $menuCuenta = document.querySelector('.menu-cuenta');
const $artistasPlayslists = document.querySelectorAll(".contenedor-artista-playslist");

$contenedorAvatar.onclick = function(e){
    e.preventDefault();
    mostrarOcultarMenu();
}

function mostrarOcultarMenu(){
    if($menuCuenta.classList.contains('oculto')){//si menú está oculto...
        $menuCuenta.classList.remove('oculto');
        $menuCuenta.classList.add('visible');
    }
    else{// si está visible...
        $menuCuenta.classList.remove('visible');
        $menuCuenta.classList.add('oculto');
    }
}
