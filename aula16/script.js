// Variáveis Globais
let valores = []
let numero = document.querySelector('input#numero')
let lista = document.querySelector('select#aviso')
let saida = document.querySelector('div#saida')

// Adiciona os números na lista
function adicionar() {   
    if (ehValido(numero.value)) {        
        if(ehNovo()){
            valores.push(Number(numero.value))
            listar(Number(numero.value))
            saida.innerHTML = ''
        }else{
            alert("O número já existe na lista!")
        }        
    }else{
        alert('Digite um número entre 1 e 100!')
    }
    numero.value = ''
    numero.focus()
}

// Verifica se o número digitado está entre 1 e 100
function ehValido(n) {
    if(Number(n) >= 1 && Number(n) <= 100 ){
        return true
    }else{
        return false
    }
}

// Verifica se o número já existe na array
function ehNovo(){
    if(valores.indexOf(Number(numero.value)) == -1){
        return true
    }else{
        return false
    }
}

// Lista os valores da array
function listar(n) {
    l = document.createElement('option')
    l.innerHTML = `Número adicionado: ${n}`
    lista.appendChild(l)
}    

// Realiza ações após completar a lista
function finalizar() {
    let soma = 0
    let maior = valores[0]
    let menor = valores[0]
    for (let pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior) {
            maior = valores[pos]    
        }
        if (valores[pos] < menor) {
            menor = valores[pos]
        }
    }
    saida.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.<p>`
    saida.innerHTML +=`<p>O maior valor informado foi ${maior}.</p>`
    saida.innerHTML +=`<p>O menor valor informado foi ${menor}.</p>`
    saida.innerHTML +=`<p>Somando todos os valores, temos ${soma}.</p>`
    saida.innerHTML +=`<p>A média dos valores cadastrados é ${soma/valores.length}.</p>`
}