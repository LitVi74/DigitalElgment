class LetsTalkAction {
  constructor() {
    this.isActive = false;
    this.form = document.getElementById("letsTalkModal");

    this.handleLetsTalkButtonClick = this.handleLetsTalkButtonClick.bind(this);
  }

  handleLetsTalkButtonClick() {
    if (this.isActive) {
      this.form.classList.remove("modal_active");
      this.form.classList.add("modal_nonactive");
      document.body.style.overflow = "auto";
      this.isActive = false;
    } else {
      this.form.classList.add("modal_active");
      this.form.classList.remove("modal_nonactive");
      document.body.style.overflow = "hidden";
      this.isActive = true;
    }
  }
}

const { handleLetsTalkButtonClick } = new LetsTalkAction();

const letsTalkButtons = document.getElementsByClassName("footer__lets-talk--button");
Array.from(letsTalkButtons).forEach((btn) => {
  btn.addEventListener("click", handleLetsTalkButtonClick);
});

export default handleLetsTalkButtonClick;
