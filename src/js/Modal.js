import {Form} from './Form.js'

export class Modal {
    constructor(selectors){
        this.modal = document.getElementById(selectors.modalID);
        this.btn = document.getElementById(selectors.btnID);

        this.form = new Form(this.modal.getElementsByTagName('form')[0]);

        if(this.btn) {
            this.btn.addEventListener('click', this.onBtnClick.bind(this, this.disableScrolling));
        }
        if(this.modal) {
            this.modal.addEventListener('click', this.onModalClick.bind(this, this.enableScrolling));
        }
        
    }

    onBtnClick (func) {
        this.preventDefault();
        this.modal.classList.add("active");

        this.scroll(func);
    }

    onModalClick (func) {
        this.preventDefault();
        this.modal.classList.remove("active");

        this.scroll(func);
    }

    scroll(func){
        let supportsPassive = false;
        try {
            window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function () { supportsPassive = true; } 
            }));
        } catch(e) {}

        const wheelOpt = supportsPassive ? { passive: false } : false;
        const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
        const keys = {37: 1, 38: 1, 39: 1, 40: 1};

        func.call(this, keys, wheelOpt, wheelEvent);
    }

    disableScrolling(keys, wheelOpt, wheelEvent){
        window.addEventListener('DOMMouseScroll', this.preventDefault, false); // older FF
        window.addEventListener(wheelEvent, this.preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', this.preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', this.preventDefaultForScrollKeys.bind(this, keys), false);
    }
    
    enableScrolling(keys, wheelOpt, wheelEvent){
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.removeEventListener(wheelEvent, this.preventDefault, wheelOpt); 
        window.removeEventListener('touchmove', this.preventDefault, wheelOpt);
        window.removeEventListener('keydown', this.preventDefaultForScrollKeys.bind(this, keys), false);
    }

    preventDefault() {
        event.preventDefault();
    }

    preventDefaultForScrollKeys(keys) {
        if (keys[event.keyCode]) {
            this.preventDefault(event);
            return false;
        }
    }
}