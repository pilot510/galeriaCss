// JAVASCRIPT

const modoLuz = document.querySelector('.modoClaroBoton')

modoLuz.onclick = () => {
    document.body.classList.toggle('Claro');
    if (document.body.classList.contains('Claro')) {
        localStorage.setItem('modoClaro', 'true')
    } else {
        localStorage.setItem('modoClaro', 'false')
    };
};


if (localStorage.getItem('modoClaro') === 'true') {
    document.body.classList.add('Claro')
} else {
    document.body.classList.remove('Claro')
};



// do {
//     hola1 = parseInt(prompt(`Ingrese la contraseña:`))
// } while (hola1 !== 8487){
//     alert(`Contraseña correcta!`)
// }
