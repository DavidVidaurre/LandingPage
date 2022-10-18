const btnVolverArriba = document.getElementById('btnVolverArriba');

// Aparecer el botón para volver a arriba
window.onscroll = () => {
    if (window.scrollY >= 200) {
        btnVolverArriba.style.right = '10px';
    } else {
        btnVolverArriba.style.right = '-50px';
    }
}

btnVolverArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
    })
})