const popUps = document.querySelectorAll(".popup");

const openProfilePopUp = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const profilePopUp = document.querySelector(".profile-popup");
const profileNameInput = profilePopUp.querySelector(".profile-name-input");
const profileJobInput = profilePopUp.querySelector(".profile-job-input");
const profileForm = profilePopUp.querySelector(".profile-form");
const profileSaveButton = profilePopUp.querySelector(".popup__submit-button")

const openCardPopUp = document.querySelector(".profile__button");
const cardContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector(".card-template");
const cardPopUp = document.querySelector(".card-popup");
const cardNameInput = cardPopUp.querySelector(".card-name-input");
const cardLinkInput = cardPopUp.querySelector(".card-link-input");
const cardForm = cardPopUp.querySelector(".card-form");
const cardSaveButton = cardPopUp.querySelector(".popup__submit-button")

const imagePopUp = document.querySelector(".image-popup");
const image = imagePopUp.querySelector(".popup__image");
const imageTitle = imagePopUp.querySelector(".popup__image-title");

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


function openPopup(popUpElement) {
    popUpElement.classList.add("popup_opened");
    document.addEventListener("keydown", closePopUpByEscape);
};

function closePopup(popUpElement) {
    popUpElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", closePopUpByEscape);
};

function closePopUpByEscape(event) {
    if (event.key === "Escape") {
        const opendedPopUp = document.querySelector(".popup_opened");
        closePopup(opendedPopUp);
    };
};

popUps.forEach((popUp) => {
    popUp.addEventListener("mousedown", (event) => {
        if (event.target.classList.contains("popup__toggle") || event.target.classList.contains("popup"))
            closePopup(popUp);
    });
});

openProfilePopUp.addEventListener("click", () => {
    profileNameInput.value = profileName.textContent;
    profileJobInput.value = profileJob.textContent;
    openPopup(profilePopUp);
    profileSaveButton.removeAttribute("disabled");
    profileSaveButton.classList.remove("popup__submit-button_disabled");
});

openCardPopUp.addEventListener("click", () => {
    openPopup(cardPopUp);
});


function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileJob.textContent = profileJobInput.value;
    closePopup(profilePopUp);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

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