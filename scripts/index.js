const openProfilePopUp = document.querySelector(".profile__edit-button");
const closeProfilePopUp = document.querySelector(".profile-toggle");
const profilePopUp = document.querySelector(".profile-form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const formElement = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

function openPopup(popUpElement) {
    popUpElement.classList.add("popup_opened");
}

function closePopup(popUpElement) {
    popUpElement.classList.remove("popup_opened");
}

openProfilePopUp.addEventListener("click", () => {
    openPopup(profilePopUp);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});
closeProfilePopUp.addEventListener("click", () => {
    closePopup(profilePopUp);
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    profilePopUp.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);

// 5 sprint
// Added second PopUp

const cardPopUp = document.querySelector(".card-form");
const openCardPopUp = document.querySelector(".profile__button");
const closeCardPopUp = document.querySelector(".card-toggle");

openCardPopUp.addEventListener("click", () => {
    openPopup(cardPopUp);
});

closeCardPopUp.addEventListener("click", () => {
    closePopup(cardPopUp);
});

// Card Array from JS algorithm

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

const cardContainer = document.querySelector(".cards");
const createCard = (cardName, cardLink) => {
    const cardTemplate = document.querySelector(".card-template");
    const cardElement = cardTemplate.content
        .querySelector(".card")
        .cloneNode(true);
    cardElement.querySelector(".card__title").textContent = cardName;
    cardElement.querySelector(".card__image").src = cardLink;
    return cardElement;
};

const cards = initialCards.map((item) => {
    let cardName = item.name;
    let cardLink = item.link;
    return createCard(cardName, cardLink);
});

cardContainer.append(...cards);

// Added new card algorithm

const inputCardName = document.querySelector(".popup__input_type_card-name");
const inputCardLink = document.querySelector(".popup__input_type_card-link");
const cardForm = document.querySelector(".card__form");

const newCard = (name, link) => {
    cardContainer.prepend(createCard(name, link));
};

function handleCardFormSave(evt) {
    evt.preventDefault();
    let cardName = inputCardName.value;
    let cardLink = inputCardLink.value;
    cardPopUp.classList.remove("popup_opened");
    newCard(cardName, cardLink);
}

cardForm.addEventListener("submit", handleCardFormSave);

// Added cardDeleteButton

const cardDeleteButton = [
    ...document.querySelectorAll(".card__delete-button"),
].forEach((item) => {
    item.addEventListener("click", () => {
        item.parentElement.classList.add("card_deleted");
    });
});

// Added like algorithm

const cardLikeButton = [...document.querySelectorAll(".card__button")].forEach(
    (item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("card__button_active");
        });
    }
);

// Added PopupPhoto

const imagePopUp = document.querySelector(".popup-image");
const openImagePopUp = [...document.querySelectorAll(".card__image")].forEach(
    (item) => {
        item.addEventListener("click", () => {
            openPopup(imagePopUp);
            document.querySelector(".popup__image").src = item.getAttribute("src");
            document.querySelector(".popup__image-title").textContent = item.nextElementSibling.textContent;
        });
    }
);

const closeImagePopUp = [...document.querySelectorAll(".image-toggle")].forEach(
    (item) => {
        item.addEventListener("click", () => {
            closePopup(imagePopUp);
        });
    }
);