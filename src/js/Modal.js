import {Form} from './Form.js'

export class Modal {
    constructor(selectors){
        this.modal = document.getElementById(selectors.modalID);
        this.btn = document.getElementById(selectors.btnID);

        this.form = new Form(this.modal.getElementsByTagName('form')[0]);

        this.btn.addEventListener('click', this.onClick.bind(this, 'flex', this.disableScrolling));
        this.modal.addEventListener('click', this.onClick.bind(this, 'none', this.enableScrolling));
    }

    onClick (display, func) {
        this.modal.style.display = display;  
        
        let scroll = func;
        scroll();
    }

    disableScrolling(){
        let x=window.scrollX;
        let y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
    }
    
    enableScrolling(){
        window.onscroll=function(){};
    }
}