const template = document.createElement('template');

template.innerHTML +=`
    <input type='text' id='input'>
`

class AppTextInput extends HTMLElement{
    constructor(){
        super();

        this._shadowRoot = this.attachShadow({'mode':'open'})
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        var input = this._shadowRoot.querySelector('#input')
        input.addEventListener('keyup',()=>{
            console.log(input.value)
        })
    }
}

window.customElements.define('neo-input',AppTextInput);