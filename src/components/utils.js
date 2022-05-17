const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileInfo = document.querySelector(".profile__subtitle");
const profilePopup = document.querySelector(".profile-popup");
const profileNameInput = profilePopup.querySelector(".profile-name-input");
const profileInfoInput = profilePopup.querySelector(".profile-info-input");
const profileForm = profilePopup.querySelector(".profile-form");
const profileSaveButton = profilePopup.querySelector(".popup__submit-button")
const cardAddButton = document.querySelector(".profile__button");
const cardPopup = document.querySelector(".card-popup");
const cardNameInput = cardPopup.querySelector(".card-name-input");
const cardLinkInput = cardPopup.querySelector(".card-link-input");
const cardForm = cardPopup.querySelector(".card-form");
const cardSaveButton = cardPopup.querySelector(".popup__submit-button")
const imagePopup = document.querySelector(".image-popup");
const image = imagePopup.querySelector(".popup__image");
const imageTitle = imagePopup.querySelector(".popup__image-title");

export {
    profileEditButton,
    profilePopup,
    profileName,
    profileInfo,
    profileNameInput,
    profileInfoInput,
    profileForm,
    profileSaveButton,
    cardAddButton,
    cardPopup,
    cardNameInput,
    cardLinkInput,
    cardForm,
    cardSaveButton,
    imageTitle,
    image,
    imagePopup
};