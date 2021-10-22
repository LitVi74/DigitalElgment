import {Form} from './Form.js'

export class Modal {
    constructor(selectors){
        this.modal = document.getElementById(selectors.modalID);
        this.btn = document.getElementById(selectors.btnID);

        this.form = new Form(this.modal.getElementsByTagName('form')[0]);

        this.btn.addEventListener('click', this.onClick.bind(this.modal, 'flex'));
        this.modal.addEventListener('click', this.onClick.bind(this.modal, 'none'));
    }

    onClick (display) {
        this.style.display = display;
    }
}