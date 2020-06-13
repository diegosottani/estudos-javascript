function verificar(){
    var data = new Date()
    var ano = data.getFullYear() 
    var nasc = document.getElementById('nasc').value
    var mensagem = document.querySelector('div#mensagem')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')    
    if(nasc > ano || nasc.length == 0){
       alert('Digite um ano válido')
    }
    else{
        var res = ano - Number(nasc)
        var sexo = document.getElementsByName('radsex')
        var genero = ''

        if(sexo[0].checked){
            genero = "homem"
            img.setAttribute('src', 'homem.jpg')
            img.setAttribute('alt', 'fotoHomem')            
       }
       else{
            genero = "mulher"
            img.setAttribute('src', 'mulher.jpg')
            img.setAttribute('alt','fotoMulher')
       }
       mensagem.style.textAlign = 'center'
       mensagem.innerHTML = `Detectamos ${genero} com ${res} anos`    
       mensagem.appendChild(img)   
    } 
}