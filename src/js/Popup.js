export class Popup {
    constructor (text) {
        this.bgBlock = document.getElementById('myPopup');
        this.textBlock = this.bgBlock.querySelector('.popup');

        this.textBlock.innerHTML = text;

        this.bgBlock.addEventListener('click', this.onClick);
    }

    show () {
        this.bgBlock.classList.add('active');
    }

    onClick () {
        this.classList.remove('active');
    }
}