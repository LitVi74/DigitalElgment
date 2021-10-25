export class Validator {
    constructor(rulesList, elem) {
        const RULES = {
            email: /^\w{1,}@\w{1,}.\w{1,}$/,
            required: /^\w{1,}/,
        }

        this.result = true;

        for(let i = 0; i < rulesList.length; i++) {
            let rule = rulesList[i];

            if(!RULES[rule].test(elem.value)) {
                this.result = false;
                elem.classList.add("error");

                break;
            }
        }

        if (this.result) elem.classList.remove("error");
    }
}