//valor dar moedas
var dólar = 5

//elementos
var valordousuário = document.getElementById('ct1');
parseFloat(valordousuário.value);

var botão = document.getElementsByClassName('botão')
botão.addEventListener('click', converter);

function converter(){
    console.log(valordousuário)
}
