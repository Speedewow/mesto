import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import DefaultCards from "../components/Card.js"
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWhithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards } from "../data/data.js";
import { formSettings } from "../form-settings/formSettings.js";
import {
    profilePopup,
    profileEditButton,
    profileName,
    profileInfo,
    profileNameInput,
    profileInfoInput,
    profileForm,
    profileSaveButton,
    cardAddButton,
    cardPopup,
    cardForm,
    cardSaveButton,
    imagePopup
}
from "../utils/utils.js";

function createCard(item) {
    const card = new DefaultCards(item, '.card-template', () => {
        imagePopups.openPopup({ name: item.name, link: item.link });
    });
    const cardElement = card.generateCard();
    return cardElement
};

const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            cardList.addItem(createCard(item));
        }
    },
    ".cards");
cardList.renderItems();

const imagePopups = new PopupWithImage(imagePopup);
imagePopups.setEventListeners();


const profileValidation = new FormValidator(formSettings, profileForm);
profileValidation.enableValidation();

const cardValidation = new FormValidator(formSettings, cardForm);
cardValidation.enableValidation();

const newProfile = new PopupWhithForm({
    popupSelector: profilePopup,
    handleFormSubmit: (formData) => {
        const userInfo = new UserInfo(formData);
        userInfo.setUserInfo(formData.name, formData.info);
    }
});
newProfile.setEventListeners();

const newCard = new PopupWhithForm({
    popupSelector: cardPopup,
    handleFormSubmit: (formData) => {
        cardList.addItem(createCard({ name: formData.name, link: formData.link }));
    }
})
newCard.setEventListeners();

profileEditButton.addEventListener("click", () => {
    const userInfo = new UserInfo({ name: profileName.textContent, info: profileInfo.textContent })
    profileNameInput.value = userInfo.getUserInfo().profileNameInput
    profileInfoInput.value = userInfo.getUserInfo().profileInfoInput
    newProfile.openPopup();
    profileValidation.resetValidation(profileSaveButton);

})

cardAddButton.addEventListener("click", () => {
    newCard.openPopup();
    cardValidation.resetValidation(cardSaveButton);
});