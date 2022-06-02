export default class Card {
    constructor(data, cardSelector, handleAddLike, handleDeleteLike, currentId, confrimPopup, handleCardClick) {
        this._cardSelector = cardSelector;
        this._handleAddLike = handleAddLike;
        this._handleDeleteLike = handleDeleteLike;
        this._handleCardClick = handleCardClick;
        this._userId = currentId;
        this._deletePopup = confrimPopup;
        this._data = data
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

    _getLikeButton() {
        const cardLikeButton = this._element.querySelector(".card__button");
        return cardLikeButton;
    }

    _getDeleteButton() {
        const cardDeleteButton = this._element.querySelector(".card__delete-button");
        return cardDeleteButton;
    }

    _getLikeCounter() {
        const likeCounter = this._element.querySelector(".card__like-counter");
        return likeCounter;
    }

    _getLikeLenght(arr) {
        this._likeCounter.textContent = arr.likes.length;
    }

    _setStartSettings() {
        this._getLikeLenght(this._data)

        if (this._data.likes.some(element => element._id === this._userId)) {
            this._likeButton.classList.add("card__button_active");
        }
        if (this._data.owner._id !== this._userId) {
            this._deleteButton.remove();
        }

    }

    _addLike() {
        this._handleAddLike(this._data._id)
            .then((arr) => {
                this._likeButton.classList.add("card__button_active");
                this._getLikeLenght(arr)
            })
            .catch(err => console.log(err));
    }

    _deleteLike() {
        this._handleDeleteLike(this._data._id)
            .then((arr) => {
                this._likeButton.classList.remove("card__button_active");
                this._getLikeLenght(arr)
            })
            .catch(err => console.log(err));
    }

    _setEventListeners() {
        this._image.addEventListener('click', () => {
            this._handleCardClick();
        });
        this._likeButton.addEventListener('click', () => {
            if (this._likeButton.classList.contains("card__button_active")) {
                this._deleteLike()
            } else {
                this._addLike()
            }
        });
        this._deleteButton.addEventListener('click', () => {
            this._deletePopup()
        });

    }

    removeCard() {
        this._element.remove();
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.card__title').textContent = this._data.name;
        this._image = this._getImage();
        this._image.src = this._data.link;
        this._image.alt = this._data.name;
        this._likeButton = this._getLikeButton();
        this._deleteButton = this._getDeleteButton();
        this._likeCounter = this._getLikeCounter();
        this._setEventListeners();
        this._setStartSettings()
        return this._element;
    }
}