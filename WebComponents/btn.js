var btn = Object.create(HTMLButtonElement.prototype);

btn.createdCallback = function(){
    this.innerHTML = 'Hola Boton';
    this.style.color = 'blue';
    this.addEventListener('click',()=>{
        console.log("hola mundo")
    })
}

document.registerElement('neo-btn', {
    prototype : btn,
    extends : 'button'
})