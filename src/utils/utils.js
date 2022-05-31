const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileInfo = document.querySelector(".profile__subtitle");
const profileAvatar = document.querySelector(".profile__image");
const profilePopup = document.querySelector(".profile-popup");
const profileNameInput = profilePopup.querySelector(".profile-name-input");
const profileInfoInput = profilePopup.querySelector(".profile-info-input");
const profileForm = profilePopup.querySelector(".profile-form");
const profileSaveButton = profilePopup.querySelector(".popup__submit-button")
const cardAddButton = document.querySelector(".profile__button");
const cardPopup = document.querySelector(".card-popup");
const cardForm = cardPopup.querySelector(".card-form");
const cardSaveButton = cardPopup.querySelector(".popup__submit-button")
const imagePopup = document.querySelector(".image-popup");
const avatarEditButton = document.querySelector(".profile__avatar-edit-button");
const avatarPopup = document.querySelector(".avatar-popup");
const avatarForm = avatarPopup.querySelector(".avatar-form");
const avatarSaveButton = avatarPopup.querySelector(".popup__submit-button");
const confrimPopup = document.querySelector(".confrim-popup");
const confrimSaveButton = confrimPopup.querySelector(".popup__submit-button");
const cardContainer = document.querySelector(".cards");




export {
    profileEditButton,
    profilePopup,
    profileName,
    profileInfo,
    profileAvatar,
    profileNameInput,
    profileInfoInput,
    profileForm,
    profileSaveButton,
    cardAddButton,
    cardPopup,
    cardForm,
    cardSaveButton,
    imagePopup,
    avatarEditButton,
    avatarPopup,
    avatarForm,
    avatarSaveButton,
    confrimPopup,
    confrimSaveButton,
    cardContainer
};