import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js"
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWhithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api";
import { formSettings } from "../form-settings/formSettings.js";
import {
    profilePopup,
    profileEditButton,
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
    avatarSaveButton
}
from "../utils/utils.js";

const config = {
    link: "https://mesto.nomoreparties.co/v1/cohort-42",
    headers: {
        authorization: 'bb096a0b-7640-41d0-a2e7-bde23481c8f2',
        'Content-Type': 'application/json'
    }
}
const api = new Api(config)
api.getUserInfo()


api.getInitialCard()
    .then((items) => {
        const cardList = new Section({
                items,
                renderer: (item) => {
                    cardList.addItem(createCard(item));
                }
            },
            ".cards");
        cardList.renderItems();

        const newCard = new PopupWhithForm({
            popupSelector: cardPopup,
            handleFormSubmit: (formData) => {
                cardList.addItem(createCard({ name: formData.name, link: formData.link }));
            }
        })

        newCard.setEventListeners();
        cardAddButton.addEventListener("click", () => {
            newCard.openPopup();
            cardValidation.resetValidation(cardSaveButton);
        });

        cardAddButton.addEventListener("click", () => {
            newCard.openPopup();
            cardValidation.resetValidation(cardSaveButton);
        });
    })

.catch((err) => {
    console.log(err);
});


const createCard = item => {
    const card = new Card(item, '.card-template', deleteCard, addLike, deleteLike, () => {
        imagePopups.openPopup({ name: item.name, link: item.link });
    });
    api.createNewCard(item.name, item.link);
    const cardElement = card.generateCard();
    return cardElement
};

const newCard = container => {

}

const deleteCard = id => api.deleteCard(id);
const addLike = id => api.addLike(id);
const deleteLike = id => api.deleteLike(id);



const imagePopups = new PopupWithImage(imagePopup);
imagePopups.setEventListeners();


const profileValidation = new FormValidator(formSettings, profileForm);
profileValidation.enableValidation();

const cardValidation = new FormValidator(formSettings, cardForm);
cardValidation.enableValidation();

const avatarValidation = new FormValidator(formSettings, avatarForm);
avatarValidation.enableValidation();

const userInfo = new UserInfo();

const newProfile = new PopupWhithForm({
    popupSelector: profilePopup,
    handleFormSubmit: (formData) => {
        userInfo.setUserInfo(formData.name, formData.info);
        api.setUserInfo(formData.name, formData.info)
    }
});
newProfile.setEventListeners();



const newAvatar = new PopupWhithForm({
    popupSelector: avatarPopup,
    handleFormSubmit: (formData) => {
        api.createNewAvatar(formData.link);
    }
})
newAvatar.setEventListeners()

profileEditButton.addEventListener("click", () => {
    profileNameInput.value = userInfo.getUserInfo().profileNameInput
    profileInfoInput.value = userInfo.getUserInfo().profileInfoInput
    newProfile.openPopup();
    profileValidation.resetValidation(profileSaveButton);

})



avatarEditButton.addEventListener("click", () => {
    newAvatar.openPopup()
    avatarValidation.resetValidation(avatarSaveButton);
})