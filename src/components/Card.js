export default class Card {
    constructor(data, cardSelector, handeleDeleteCard, handleAddLike, handleDeleteLike, handleCardClick) {
        this._cardSelector = cardSelector;
        this._handleDeleteCard = handeleDeleteCard;
        this._handleAddLike = handleAddLike;
        this._handleDeleteLike = handleDeleteLike;
        this._handleCardClick = handleCardClick;
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._likes = data.likes;
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

    _getLikeList() {
        this._element.querySelector(".card__like-counter").textContent = this._likes.length;
        if (this._likes.find(element => element._id === "f8d213fbf6ca8f17bbc87d9d") > 0) {
            this._element.querySelector(".card__button").classList.add("card__button_active");
        }
    }

    _getLike() {
        const id = this._id
        this._element.querySelector(".card__button").classList.add("card__button_active");
        this._handleAddLike(id)
            .then((arr) => {
                this._element.querySelector(".card__like-counter").textContent = arr.likes.length;
            })
            .catch(err => console.log(err));
    }

    _deleteLike() {
        const id = this._id
        this._element.querySelector(".card__button").classList.remove("card__button_active");
        this._handleDeleteLike(id)
            .then((arr) => {
                this._element.querySelector(".card__like-counter").textContent = arr.likes.length;
            })
            .catch(err => console.log(err));
    }

    _deleteCard() {
        const id = this._id
        this._handleDeleteCard(id)
            .then(() => {
                this._element.remove();
            })
            .catch(err => console.log(err));
    }

    _setEventListeners() {
        this._image.addEventListener('click', () => {
            this._handleCardClick();
        });
        this._element.querySelector(".card__button").addEventListener('click', () => {
            if (this._element.querySelector(".card__button").classList.contains("card__button_active")) {
                this._deleteLike()
            } else {
                this._getLike()
            }
        });
        this._element.querySelector(".card__delete-button").addEventListener('click', () => {
            this._deleteCard();
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._image = this._getImage();
        this._setEventListeners();
        this._getLikeList();
        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;
        return this._element;
    }
}