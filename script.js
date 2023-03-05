const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav');

    nav.classList.toggle('active');

    const active = nav.classList.contains('active');

    event.currentTarget.setAttribute('aria-expanded', 'active');

    if (active) {
        event.currentTarget.setAttribute('arial-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('arial-label', 'Abrir Menu');
    }
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// SLIDER SCRIPT

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if (count > 8) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}

// SLIDER SCRIPT

