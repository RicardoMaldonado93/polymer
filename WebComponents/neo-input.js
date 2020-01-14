const input = document.createElement('template');

input.innerHTML += `
    <input type='text' id='neoInput'>
`

class CustomInputElement extends HTMLElement{

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({'mode':'open'});
        this._shadowRoot.appendChild(input.content.cloneNode(true));
        
        var inp = this._shadowRoot.querySelector('#neoInput');
        inp.addEventListener('focusout',()=>{
            inp.value = inp.value.toUpperCase();
            console.log(inp.value.toUpperCase());
        })

    }
}

window.customElements.define('neoris-text',CustomInputElement);
