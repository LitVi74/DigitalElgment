import {Validator} from './Validator.js'
import {Popup} from './Popup.js'

export class Form {
    constructor(formElem) {
        this.form = formElem;

        if (this.form) {
            this.form.addEventListener('submit', this.onSubmit.bind(this));
            this.form.onclick = () => event.stopPropagation();
        }
    }

    onSubmit () {
        event.preventDefault();
        let childs = event.target.elements;

        let error = false;
        for(let i = 0; i < childs.length; i++) {
            let rulesList = childs[i].dataset.rule;
            if(!rulesList) {
                continue;
            }

            rulesList = rulesList.split(' ');

            let validator = new Validator(rulesList, childs[i]);

            if(!error&& !validator.result) {
                error = true;
            }
        }

        if(!error) this.sendForm(this.form);

    }

    sendForm (form) {
        let formData = new FormData(form);
        fetch(form.active, {
            method: "POST",
            body: formData
        })
            .then(response => this.showMessage('Your message successfully sent'))
            .then(result => {
                form.reset();
                if(form.parentNode){
                    form.parentNode.dispatchEvent(new Event('click')); 
                }
            })
            .catch(err => this.showMessage('<strong>Oops</strong><br>' + err));
    }
    
    showMessage(text) {
        let popup = new Popup(text);
        
        popup.show();
    }
}