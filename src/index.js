import "./index.css";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import DefaultCards from "./components/Card.js"
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWhithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import { initialCards } from "./components/data.js";
import { formSettings } from "./components/formSettings.js";
import {
    profilePopup,
    profileEditButton,
    profileName,
    profileInfo,
    profileForm,
    profileSaveButton,
    cardAddButton,
    cardPopup,
    cardNameInput,
    cardLinkInput,
    cardForm,
    cardSaveButton,
    imagePopup
}
from "./components/utils.js";

function createCard(data) {
    const cardList = new Section({
        items: data,
        renderer: (item) => {
            const card = new DefaultCards(item, '.card-template', () => {
                const imagePopups = new PopupWithImage(imagePopup, item);
                imagePopups.openPopup();
            });
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
        }
    }, ".cards");
    cardList.renderItems();
};

createCard(initialCards);

const profileValidation = new FormValidator(formSettings, profileForm);
profileValidation.enableValidation();

const cardValidation = new FormValidator(formSettings, cardForm);
cardValidation.enableValidation();

const userInfo = new UserInfo({ name: profileName.textContent, info: profileInfo.textContent })

const newProfile = new PopupWhithForm(profilePopup, () => {
    userInfo.setUserInfo();
    newProfile.closePopup();

});
newProfile.setEventListeners();

const newCard = new PopupWhithForm(cardPopup, () => {
    createCard([{ name: cardNameInput.value, link: cardLinkInput.value }]);
    newCard.closePopup();
});
newCard.setEventListeners();

profileEditButton.addEventListener("click", () => {
    userInfo.getUserInfo();
    newProfile.openPopup();
    profileValidation.toggleButtonRemove(profileSaveButton);
})

cardAddButton.addEventListener("click", () => {
    newCard.openPopup();
    cardValidation.toggleButtonAdd(cardSaveButton);
});