import LetsTalkAction from "./letsTalkAction";

class ModalAction {
  constructor() {
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleCloseModal(event) {
    if (event.target === event.currentTarget) {
      LetsTalkAction.handleLetsTalkButtonClick();
    }
  }
}

export default new ModalAction();
