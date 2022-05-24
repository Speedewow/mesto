export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._name = data.name;
        this._link = data.link;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardElement;
    }

    _getImage() {
        const cardImage = this._element.querySelector(".card__image");
        return cardImage;
    }

    _getLike() {
        this._element.querySelector(".card__button").classList.toggle("card__button_active");
    }

    _deleteCard() {
        this._element.remove();
    }

    _setEventListeners() {
        this._image.addEventListener('click', () => {
            this._handleCardClick();
        });
        this._element.querySelector(".card__button").addEventListener('click', () => {
            this._getLike();
        });
        this._element.querySelector(".card__delete-button").addEventListener('click', () => {
            this._deleteCard();
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._image = this._getImage();
        this._setEventListeners();
        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;
        return this._element;
    }
}