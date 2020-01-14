const email = document.createElement('template');

email.innerHTML += `
    <input type='text' id='neoEmail'>
`

class CustomEmailElement extends HTMLElement{

    constructor(){ 
        super();

        this._shadowRoot = this.attachShadow({'mode':'open'});
        this._shadowRoot.appendChild(email.content.cloneNode(true));

        var eInput = this._shadowRoot.querySelector('#neoEmail');
        eInput.addEventListener('keyup', () =>{
            let expresion = /(^[0-9a-zA-Z]{4,})@[0-9a-zA-Z]+\.[com]{3,}$/gm;
            // console.log("es valido ", expresion.test(eInput.value));

            if(!expresion.test(eInput.value))
                this.setAttribute('value',"correo no valido")
            else if(!expresion.test(eInput.value))
                this.setAttribute('value',eInput.value);
            
        })

     }
     set attr(val){ eInput.setAttribute(val),param}
}

window.customElements.define('neoris-email',CustomEmailElement);