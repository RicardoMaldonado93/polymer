const pass = document.createElement('template');

pass.innerHTML += `
    <input type='text' id='neoPass'>
`

class CustomPasswordElement extends HTMLElement{

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({'mode':'open'});
        this._shadowRoot.appendChild(pass.content.cloneNode(true));

        var ePass = this._shadowRoot.querySelector('#neoPass');
        var password = '';
        ePass.addEventListener('keypress', () =>{
            this.password += ePass.textContent;
            this.textContent = 
        })

    }
}