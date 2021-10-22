import {Validator} from './Validator.js'

export class Form {
    constructor(formElem) {
        this.form = formElem;

        this.form.addEventListener('submit', this.onSubmit);
    }

    onSubmit () {
        event.preventDefault();
        let childs =  this.elements;

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
    }
}