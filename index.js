
 //var real = Number.parseFloat(window.prompt('Digite o valor em real'))
 //var conversão = real/5
 //window.alert('O valor corresponde à ' + conversão + ' dólares' )
 
 function converter (){
     var txt = document.querySelector('input#txt')
     var txt = Number(txt.value)
     var res = document.querySelector('p#resposta')
     var rad = document.getElementsByName('radmoney')
     var moeda = ''
     //pra usarmos os radios precisaremos de uma varíavel que os represente pelo nome, e outra vazia que os represente individualmente
     if (rad[0].checked ){
         var dólar = txt / 5
        res.innerHTML = (` $${dólar} doláres`)
     } else if (rad[1].checked){
        var libra = txt / 7
        res.innerHTML = (`$${libra} libras`)
     } else if(rad[2].checked){
         var euro = txt / 5.7
         res.innerHTML = (`$${euro} euros`)
     } else {
         window.alert(' Por favor selecione uma moeda')
     }

 }