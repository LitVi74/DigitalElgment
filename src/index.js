import "./main.scss";
import NavButtonAction from "./scripts/navButtonAction";
import LetsTalkAction from "./scripts/letsTalkAction";
import ModalAction from "./scripts/modalAction";
import ModalFormAction from "./scripts/modalFormAction";

const navButton = document.getElementById("nav-button");
navButton.addEventListener("click", NavButtonAction.handleNavButtonClick);

const letsTalkButtons = document.getElementsByClassName("footer__lets-talk--button");
Array.from(letsTalkButtons).forEach((btn) => {
  btn.addEventListener("click", LetsTalkAction.handleLetsTalkButtonClick);
});

const modalForm = document.getElementById("letsTalkModal");
modalForm.addEventListener("click", ModalAction.handleCloseModal);

const form = modalForm.getElementsByTagName("form")[0];
ModalFormAction.formElement = form;
form.addEventListener("submit", ModalFormAction.handleFormSubmit);
