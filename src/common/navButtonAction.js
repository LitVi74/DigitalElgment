class NavButtonAction {
  constructor() {
    this.isActive = false;

    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
  }

  handleNavButtonClick(event) {
    if (this.isActive) {
      event.target.classList.remove("head__nav-button_active");
      this.isActive = false;
    } else {
      event.target.classList.add("head__nav-button_active");
      this.isActive = true;
    }
  }
}

const { handleNavButtonClick } = new NavButtonAction();
const navButton = document.getElementById("nav-button");

navButton.addEventListener("click", handleNavButtonClick);
