import "./main.scss";
import NavButtonAction from "./scripts/navButtonAction";
import LetsTalkAction from "./scripts/letsTalkAction";
import ModalFormAction from "./scripts/modalAction";

const navButton = document.getElementById("nav-button");
navButton.addEventListener("click", NavButtonAction.handleNavButtonClick);

const letsTalkButtons = document.getElementsByClassName("footer__lets-talk--button");
Array.from(letsTalkButtons).forEach((btn) => {
  btn.addEventListener("click", LetsTalkAction.handleLetsTalkButtonClick);
});

const modalForm = document.getElementById("letsTalkModal");
modalForm.addEventListener("click", ModalFormAction.handleCloseModal);
