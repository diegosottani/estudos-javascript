function tabuada(){
    var numero = document.getElementById('numero').value
    var mensagem = document.getElementById('mensagem')
    
    if (numero == '' || numero == 0) {
        alert("Digite um número de 1 a 10!")
    }
    else{
        // Limpa tabuada
        mensagem.innerHTML = ''

        // Monta tabuada
        for (let index = 1; index <= 10; index++) {
            mensagem.innerHTML += `${numero} X ${index} = ${numero*index}<br>`                       
        }        
    }
}
