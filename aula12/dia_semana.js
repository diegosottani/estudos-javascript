var data = new Date()
var dia_semana = data.getDay()
/*
0 = Domingo
1 = Segunda
...
*/

function nome_dia(nome){
    return console.log(`Hoje é ${nome}`)
}

switch(dia_semana){
    case 1: 
        nome_dia('Segunda')
        break 
    case 2: 
        nome_dia('Terça')
        break
    case 3: 
        nome_dia('Quarta')
        break
    case 4: 
        nome_dia('Quinta')
        break
    case 5: 
        nome_dia('Sexta')
        break
    default: 
        nome_dia('Inválido')
        break
}