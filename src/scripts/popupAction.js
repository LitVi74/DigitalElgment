class PopupAction {
  constructor() {
    this.popup = undefined;
  }

  set popupElement(newPopup) {
    this.popup = newPopup;
  }

  showSuccessPopup(message) {
    this.popup.innerText = message;
    this.popup.classList.remove("popup_error");
    this.popup.classList.replace("popup_nonactive", "popup_active");
    this.popup.classList.add("popup_success");

    setTimeout(() => this.hidePopup(), 3000);
  }

  showErrorPopup(message) {
    this.popup.innerText = message;
    this.popup.classList.remove("popup_success");
    this.popup.classList.replace("popup_nonactive", "popup_active");
    this.popup.classList.add("popup_error");

    setTimeout(() => this.hidePopup(), 3000);
  }

  hidePopup() {
    this.popup.classList.replace("popup_active", "popup_nonactive");
  }
}

export default new PopupAction();
