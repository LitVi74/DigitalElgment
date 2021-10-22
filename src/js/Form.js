import {Validator} from './Validator.js'

export class Form {
    constructor(formElem) {
        this.form = formElem;

        this.form.addEventListener('submit', this.onSubmit.bind(this));
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
        fetch(form.action, {
            method: "POST",
            body: formData
        })
            .then(this.showMessage('Your message successfully sent'))
            .catch(showMessage('Oops'));
    }
    
    showMessage(text) {
        alert(text);
    }

}