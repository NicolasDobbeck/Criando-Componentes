'use strict'

import './card-aluno.js'

const fetchApiAlunos = async function () {
    const url = `https://testeleonid.herokuapp.com/alunos`
    const response = await fetch(url);
    const data = await response.json()

    return data
}

const alunos = await fetchApiAlunos();
console.log(alunos);

alunos.forEach(item => {
    const container = document.querySelector('.container')
    const card = document.createElement('card-aluno')
    
    card.setAttribute('nome', item.nome)
    card.setAttribute('turma', item.turma)
    card.setAttribute('imagem', item.foto)

    if (item.status == 'aprovado') 
        card.setAttribute('bgcolor', 'green')
    else if(item.status == 'desistente')
        card.setAttribute('bgcolor', '#FFD200')
    else if (item.status == 'reprovado')
        card.setAttribute('bgcolor', 'red')

    container.appendChild(card)
    
});