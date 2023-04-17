const texto = document.querySelector('#sinEncriptar');
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector('#desencriptar');
const resultado = document.querySelector('.textoNuevo');

console.log(resultado);
cargarEventListeners();

function cargarEventListeners() {

    btnEncriptar.addEventListener('click', validarTexto);
    btnDesencriptar.addEventListener('click', validarTexto);
   
}

function validarTexto(e){
    if (texto.value !== ''){
        if(e.target.id === 'encriptar') encriptar()
        else desencriptar()
        return;
    } else{
        alert('no')
    }
}

function encriptar(){
    let nuevoTexto = ''
    for(var i =0; i<texto.value.length;i++){
        switch (texto.value[i]) {
            case 'a':
                nuevoTexto += 'ai'
                break;
            case 'e':
                nuevoTexto += 'enter'
                break;
            case 'i':
                nuevoTexto += 'imes'
                break;
            case 'o':
                nuevoTexto += 'ober'
                break;
            case 'u':
                nuevoTexto += 'ufat'
                break;
            default:
                nuevoTexto += texto.value[i]
                break;
        }
    }
    mostrarResultado(nuevoTexto);
}

function desencriptar(){
    
}

function mostrarResultado(texto){
    limpiarHTML();
    nuevo = document.createElement('P');
    nuevo.textContent =texto;

    console.log(nuevo)
    resultado.appendChild(nuevo);

}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}