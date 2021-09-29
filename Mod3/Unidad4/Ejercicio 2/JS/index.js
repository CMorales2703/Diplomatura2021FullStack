const mensaje = document.getElementById('textA');
const contador = document.getElementById('cantidad');

mensaje.addEventListener('input', function(cont) {
    const target = cont.target;    
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}`;
});