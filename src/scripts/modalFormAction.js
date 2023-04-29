import FormValidation from "./formValidation";
import LetsTalkAction from "./letsTalkAction";

class ModalFormAction {
  constructor() {
    this.form = undefined;

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  set formElement(newForm) {
    this.form = newForm;
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const children = this.form.elements;

    let hasError = false;
    Array.from(children).forEach((child) => {
      const rulesList = child.dataset.rule?.split(" ");

      if (!rulesList?.length) {
        return;
      }

      const isValid = FormValidation.checkRule(rulesList, child.value);

      if (!isValid) {
        hasError = true;
        child.classList.add("error-field");
        return;
      }

      child.classList.remove("error-field");
    });

    if (!hasError) {
      this.sendForm();
    }
  }

  sendForm() {
    const formData = new FormData(this.form);
    fetch(this.form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("server error");
        }

        console.log("Your message successfully sent");
      })
      .then(() => {
        this.form.reset();
        LetsTalkAction.handleLetsTalkButtonClick();
      })
      .catch((err) => console.log(err.message));
  }
}

export default new ModalFormAction();
