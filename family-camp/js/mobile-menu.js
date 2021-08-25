
class MobileMenu {
    constructor(){
        this.DOM = {};
        this.DOM.header = document.querySelector('header')
        this.DOM.btn = document.querySelector('.mobile-menu__btn-item');
        this.DOM.container = document.querySelector('.mobile-menu__contain');
        this._addEvent();
    }

    _toggle(){
        this.DOM.header.classList.toggle('toggle_header');
        this.DOM.container.classList.toggle('menu-open');
    }
    _addEvent(){
        this.DOM.btn.addEventListener('click',this._toggle.bind(this));
    }
}

new MobileMenu();