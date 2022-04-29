const cardTemplate = document.querySelector(".card-template");
const cardPopUp = document.querySelector(".card-popup");
const cardContainer = document.querySelector(".cards");
const cardNameInput = cardPopUp.querySelector(".card-name-input");
const cardLinkInput = cardPopUp.querySelector(".card-link-input");
const cardForm = cardPopUp.querySelector(".card-form");
const cardSaveButton = cardPopUp.querySelector(".popup__submit-button")

const initialCards = [{
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];

const createCard = (cardName, cardLink) => {
    const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardLikeButton = cardElement.querySelector(".card__button");
    const cardDeleteButton = cardElement.querySelector(".card__delete-button");
    const cardTitle = cardElement.querySelector(".card__title");
    cardTitle.textContent = cardName;
    cardImage.src = cardLink;
    cardImage.alt = cardName;
    cardLikeButton.addEventListener("click", () => {
        cardLikeButton.classList.toggle("card__button_active");
    });
    cardDeleteButton.addEventListener("click", () => {
        cardElement.classList.add("card_deleted");
    });
    cardImage.addEventListener("click", () => {
        openPopup(imagePopUp);
        image.src = cardLink;
        imageTitle.textContent = cardName;
        image.alt = cardName;
    });
    return cardElement;
};


const cards = initialCards.map((card) => {
    return createCard(card.name, card.link);
});

cardContainer.append(...cards);

const newCard = (name, link) => {
    cardContainer.prepend(createCard(name, link));
};

function handleCardFormSave(evt) {
    evt.preventDefault();
    closePopup(cardPopUp);
    newCard(cardNameInput.value, cardLinkInput.value);
    cardForm.reset();
    cardSaveButton.setAttribute("disabled", true);
    cardSaveButton.classList.add("popup__submit-button_disabled");
};

cardForm.addEventListener("submit", handleCardFormSave);