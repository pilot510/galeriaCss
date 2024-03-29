// JAVASCRIPT

// -------- modoOscuro ---------- //

const modoLuz = document.querySelector('.modoClaroBoton');

modoLuz.onclick = () => {
    document.body.classList.toggle('Claro');
    if (document.body.classList.contains('Claro')) {
        localStorage.setItem('modoClaro', 'true')
    } else {
        localStorage.setItem('modoClaro', 'false')
    }
};


if (localStorage.getItem('modoClaro') === 'true') {
    document.body.classList.add('Claro')
} else {
    document.body.classList.remove('Claro')
};

// ------- contraseña ---------- //

function contraseña() {
    do {
        hola1 = parseInt(prompt(`Ingrese la contraseña`)
        )
    } while (hola1 !== 66959) {
        alert(`Contraseña correcta`)
        sessionStorage.setItem('contraseña', 'correcta')
    }
};

window.onload = () => {
    if (sessionStorage.getItem('contraseña') !== 'correcta') {
        contraseña()
    }
};
