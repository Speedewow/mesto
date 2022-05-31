import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupConfrim from "../components/PopupConfrim.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWhithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api";
import { formSettings } from "../form-settings/formSettings.js";
import { config } from "../config/config";
import {
    profilePopup,
    profileEditButton,
    profileNameInput,
    profileInfoInput,
    profileAvatar,
    profileName,
    profileInfo,
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
}
from "../utils/utils.js";

function createCard(item) {
    const card = new Card(item, '.card-template', addLike, deleteLike,
        () => {
            popupConfrim.openPopup();
            popupConfrim.getId(item._id);
        },
        () => {
            imagePopups.openPopup({ name: item.name, link: item.link });
        });
    const cardElement = card.generateCard();
    return cardElement
};

function renderLoading(isLoading, button, defaultText) {
    if (isLoading) {
        button.textContent = "Сохранение..."
    } else {
        button.textContent = defaultText
    }
};

const api = new Api(config);

api.getUserInfo()
    .then((data) => {
        profileAvatar.src = data.avatar;
        profileName.textContent = data.name;
        profileInfo.textContent = data.about
    })
    .catch((err) =>
        console.log(err)
    );

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
    })
    .catch((err) =>
        console.log(err)
    );

const deleteCard = id => api.deleteCard(id);

const addLike = id => api.addLike(id);

const deleteLike = id => api.deleteLike(id);

const popupConfrim = new PopupConfrim({
    popupSelector: confrimPopup,
    handleDeleteCard: (id) => {
        renderLoading(true, confrimSaveButton)
        deleteCard(id)
            .catch(err => console.log(err))
            .finally(() => {
                location.reload()
                renderLoading(false, confrimSaveButton, "Да")
            })
    }
});
popupConfrim.setEventListeners();

const newCard = new PopupWhithForm({
    popupSelector: cardPopup,
    handleFormSubmit: (formData) => {
        renderLoading(true, cardSaveButton)
        api.createNewCard(formData.name, formData.link)
            .then((data) => cardContainer.prepend(createCard(data)))
            .catch((err) => console.log(err))
            .finally(() => {
                newCard.closePopup();
                renderLoading(false, cardSaveButton, "Создать")
            })
    }
})
newCard.setEventListeners();

const newProfile = new PopupWhithForm({
    popupSelector: profilePopup,
    handleFormSubmit: (formData) => {
        renderLoading(true, profileSaveButton)
        userInfo.setUserInfo(formData.name, formData.info);
        api.setUserInfo(formData.name, formData.info)
            .catch((err) => console.log(err))
            .finally(() => {
                newProfile.closePopup();
                renderLoading(false, profileSaveButton, "Сохранить")
            });
    }
})
newProfile.setEventListeners();

const newAvatar = new PopupWhithForm({
    popupSelector: avatarPopup,
    handleFormSubmit: (formData) => {
        renderLoading(true, avatarSaveButton)
        api.createNewAvatar(formData.link)
            .then((link) => profileAvatar.src = link.avatar)
            .catch((err) => console.log(err))
            .finally(() => {
                newAvatar.closePopup();
                renderLoading(false, avatarSaveButton, "Сохранить")
            });
    }
})
newAvatar.setEventListeners();

const imagePopups = new PopupWithImage(imagePopup);
imagePopups.setEventListeners();

const profileValidation = new FormValidator(formSettings, profileForm);
profileValidation.enableValidation();

const cardValidation = new FormValidator(formSettings, cardForm);
cardValidation.enableValidation();

const avatarValidation = new FormValidator(formSettings, avatarForm);
avatarValidation.enableValidation();

const userInfo = new UserInfo();

cardAddButton.addEventListener("click", () => {
    newCard.openPopup();
    cardValidation.resetValidation(cardSaveButton);
});

cardAddButton.addEventListener("click", () => {
    newCard.openPopup();
    cardValidation.resetValidation(cardSaveButton);
});

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