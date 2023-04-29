class FormValidation {
  constructor() {
    this.email = /^\w+@\w+.\w{1,4}$/;
    this.required = /^\w+/;
  }

  checkRule(rules, value) {
    return rules.reduce((isValid, rule) => isValid && this[rule].test(value), true);
  }
}

export default new FormValidation();
