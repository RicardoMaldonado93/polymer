
var form = document.createElement('template')

 form.innerHTML += `
    <form action='#' method='get'>
        <input type='text' id='nombre'>
        <input type='text' id='apellido'>
        <select id='sexo'>
            <option value='F'>Femenino</option>
            <option value='M'>Masculino</option>
        </select>
        <button>Enviar</button>
    </form>
 `

 class AppForm extends HTMLElement{

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({'mode':'open'});
        this._shadowRoot.appendChild(form.content.cloneNode(true));
        console.log(this.shadowRoot)
        var btn = this._shadowRoot.querySelector('button');

        btn.addEventListener('click',() =>{
            console.log(this._shadowRoot.querySelector('#nombre').nodeValue);
        })
    }
 }

 window.customElements.define('neo-form',AppForm);