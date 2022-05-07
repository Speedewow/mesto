import FormValidator from "./FormValidator.js";
import DefaultCards from "./Card.js";

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
const cardPopUp = document.querySelector(".card-popup");
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

const formSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const profileValidation = new FormValidator(formSettings, profileForm);
const cardValidation = new FormValidator(formSettings, cardForm);

export default function openPopup(popUpElement) {
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
    profileValidation.enableValidation();
});

openCardPopUp.addEventListener("click", () => {
    openPopup(cardPopUp);
    cardValidation.enableValidation();
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileJob.textContent = profileJobInput.value;
    closePopup(profilePopUp);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((item) => {
    const card = new DefaultCards(item, '.card-template');
    const cardElement = card.generateCard();
    cardContainer.append(cardElement);
});

function handleCardFormSave(evt) {
    evt.preventDefault();
    closePopup(cardPopUp);
    const card = new DefaultCards({ name: cardNameInput.value, link: cardLinkInput.value }, '.card-template');
    const cardElement = card.generateCard();
    cardContainer.prepend(cardElement);
    cardForm.reset();
    cardSaveButton.setAttribute("disabled", true);
    cardSaveButton.classList.add("popup__submit-button_disabled");
};

cardForm.addEventListener("submit", handleCardFormSave);