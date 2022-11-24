class card extends HTMLElement {
    constructor () {
        //Sem este componente os metodos declarados lá 
        //em cima nao serao puxados (obrigatório)
        super();
        //Componente obrigatório
        this.shadow = this.attachShadow({mode:'open'});
        this.nome = 'Nome do Aluno'
        this.bgcolor = 'tomato'
        this.turma = 'sem turma'
        this.imagem = 'Sem Image'
    }

    static get observedAttributes(){
        return ['nome', 'bgcolor', 'turma', 'imagem']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue

        // if (nameAttr == 'nome') {
        //     this.nome = newValue
        // }else if(nameAttr == 'bgcolor'){
        //     this.bgcolor = newValue
        // }
    }
    connectedCallback () {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles () {
        const style = document.createElement('style')
        style.textContent = `
            .card{
                width: 200px;
                height: 200px;
                background-color: ${this.bgcolor};
                display: grid;
                grid-template-rows: 20% 60% 20%;
                place-items: center;
            }
            .card__titulo {
                color: #fff;
                font-size: 1.5rem;
            }
            .card__imagem {
                width: 60%;
                height: 100%;
                background-image: url(${this.imagem});
                background-size: cover;
                // background-repeat: no-repeat;
            }
            .card__turma {
                color: #fff;
                font-size: 1.5rem;
            }
        `
        return style
    }
    component () {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <div class="card__titulo">${this.nome}</div>
            <div class="card__imagem"></div>
            <div class="card__turma">${this.turma}</div>
        `
        return card
    }
}

//Para a web entender esse componente
customElements.define('card-aluno', card)

// const titulo = document.createElement('h1');
//         titulo.textContent = 'Nicolau';

//         this.shadow.appendChild(titulo)