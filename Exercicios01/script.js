function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var dia = data.getHours()
    msg.innerHTML = `Agora são <strong>${dia}</strong> horas`
    if(dia >= 6 && dia <= 12){
        img.alt = "Imagem Manhã"
        document.body.style.background = '#e2cd9f'
    }
    else if(dia > 12 && dia <= 18){
        img.alt = "Imagem Tarde"
        document.body.style.background = 'rgb(70, 142, 236)'
    }
    else if (dia > 18 && dia <= 24){
        img.alt = "Imagem Noite"
        document.body.style.background = '#b9846f'
    }
    else{
        img.alt = "Imagem Madrugada"
        document.body.style.background = 'grey'
    }    
}