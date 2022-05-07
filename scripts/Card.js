const imagePopUp = document.querySelector(".image-popup");
const image = imagePopUp.querySelector(".popup__image");
const imageTitle = imagePopUp.querySelector(".popup__image-title");

import openPopup from "./index.js";

class Card {
    constructor(cardSelector) {
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardElement;
    }

    _getLike() {
        this._element.querySelector(".card__button").classList.toggle("card__button_active");
    }

    _deleteCard() {
        this._element.classList.add("card_deleted");
    }

    _handleOpenPopup() {
        image.src = this._link;
        imageTitle.textContent = this._name;
        image.alt = this._name;
        openPopup(imagePopUp);
    }

    _setEventListeners() {
        this._element.querySelector('.card__image').addEventListener('click', () => {
            this._handleOpenPopup();
        });
        this._element.querySelector(".card__button").addEventListener('click', () => {
            this._getLike();
        });
        this._element.querySelector(".card__delete-button").addEventListener('click', () => {
            this._deleteCard();
        });
    }
}

export default class DefaultCards extends Card {
    constructor(data, cardSelector) {
        super(cardSelector);
        this._name = data.name;
        this._link = data.link;
    }
    generateCard() {
        this._element = super._getTemplate();
        super._setEventListeners();
        this._element.querySelector('.card__image').src = this._link;
        this._element.querySelector('.card__image').alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;
        return this._element;
    }
}