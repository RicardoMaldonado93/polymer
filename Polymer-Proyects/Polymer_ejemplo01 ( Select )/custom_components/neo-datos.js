class NeoDato extends Polymer.Element {

    //constructor que es el primer punto  cuando se inicializa el objeto
    constructor() {
        super();
    }

    static get is() { return 'neo-datos' }

    static get template() {
        return Polymer.html`

//          1) el tag dom-repeat permite renderizar componentes de forma dinamica
//          2) asignamos a items nuestro atributo personas  
//          3) indicamos al template que es un tipo dom-repeat y le asignamos nuestro atributo a items
//          4) indicamos que vamos a recorrer cada elemento de personas con el tag de items y mostraremos la propiedad name del mismo

        <select>
            <dom-repeat items="[[personas]]">
                <template is="dom-repeat" items="[[personas]]">
                    <option value="[[item.nombre]]">[[item.nombre]]</option>
                </template>
            </dom-repeat>
        </select>

        
    `;
    }

    static get properties() {
        return {
            nombre: String,
            fechaNacimiento: String,
            personas:Array, //lugar en donde se van a guardar todas las personas que nos brinda el servicio de swapi
        }
    }

    //LifeCycle 
    connectedCallback() {
        // verificamos que el elemento / propiedades se hayan cread
        // y trabajo ble...

        super.connectedCallback();

    }

    ready() {
        super.ready();
        console.log('ejecutaste ameo?')

        fetch('https://swapi.co/api/people/?format=json'
            // invocamos a un API
        ).then(response => response.json()
            // Obtenemos el resueltado
        ).then(data => {

            //si usamos this sin setearla a una variable vamos a acceder a todas las propiedades, metodos, funciones, etc 
            var me = this; 

            //instancio la propiedad personas, sino ocurrira un error de undefined
            this.personas = []

            //recorro la lista de elementos optenidos para poder interactuar con cada uno de forma individual
            data.results.forEach(element => {
                //guardamos los resultados por name en el atributo personas
                me.personas.push({nombre:element.name})
                
            });

            //comprobamos en la consola que el array haya quedado como corresponse
            console.log('array de personas', me.personas)

        }
            // trabajamos con el resultado 
            // obteneos los valores
        ).catch(error => {
            console.log(error);
        }
            // si se rompio por algo atrapamos la exception!
        )
    }






}

window.customElements.define(NeoDato.is, NeoDato);