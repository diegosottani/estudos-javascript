function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    var msn = document.getElementById('mensagem')
    

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0 || passo <= 0){
        alert("Faltam dados!")
        msn.innerHTML = "Impossível contar" 
    }
    else{
        msn.innerHTML = "Contando "
        if(inicio < fim){
            //Contagem crescente
            for(var contador = inicio; contador <= fim; contador += passo){            
                msn.innerHTML += contador + " \u{1F449} "  // unicode emoji list U+1F449 -> transforma em \u{1F449}  
            }
        }
        else{
            //Contagem regressiva
            for(var contador = inicio; contador >= fim; contador -= passo){             
                msn.innerHTML += contador + " \u{1F449} "  // unicode emoji list U+1F449 -> transforma em \u{1F449}  
            }
            
        }
        msn.innerHTML += `\u{1F3C1}`
    }    
}
