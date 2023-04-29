class LetsTalkAction {
  constructor() {
    this.isActive = false;
    this.modal = document.getElementById("letsTalkModal");

    this.handleLetsTalkButtonClick = this.handleLetsTalkButtonClick.bind(this);
  }

  handleLetsTalkButtonClick() {
    if (this.isActive) {
      this.modal.classList.remove("modal_active");
      this.modal.classList.add("modal_nonactive");
      document.body.style.overflowY = "auto";
      this.isActive = false;
    } else {
      this.modal.classList.add("modal_active");
      this.modal.classList.remove("modal_nonactive");
      document.body.style.overflowY = "hidden";
      this.isActive = true;
    }
  }
}

export default new LetsTalkAction();
