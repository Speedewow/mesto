const popUp = document.querySelectorAll(".popup");

const openProfilePopUp = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const profilePopUp = document.querySelector(".profile-popup");
const profileNameInput = profilePopUp.querySelector(".profile-name-input");
const profileJobInput = profilePopUp.querySelector(".profile-job-input");
const profileForm = profilePopUp.querySelector(".profile-form");

const openCardPopUp = document.querySelector(".profile__button");
const cardContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector(".card-template");
const cardPopUp = document.querySelector(".card-popup");
const cardNameInput = cardPopUp.querySelector(".card-name-input");
const cardLinkInput = cardPopUp.querySelector(".card-link-input");
const cardForm = cardPopUp.querySelector(".card-form");


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
}

function closePopup(popUpElement) {
    popUpElement.classList.remove("popup_opened");
}

popUp.forEach((popup) => {
    popup.addEventListener("click", (event) => {
        if (event.target.classList.contains("popup__toggle"))
            closePopup(popup);
    })
})

openProfilePopUp.addEventListener("click", () => {
    openPopup(profilePopUp);
    profileNameInput.value = profileName.textContent;
    profileJobInput.value = profileJob.textContent;
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
    cardElement.querySelector(".card__title").textContent = cardName;
    cardElement.querySelector(".card__image").src = cardLink;
    cardElement.querySelector(".card__image").alt = cardName;
    cardElement.addEventListener("click", (event) => {
        if (event.target.classList.contains("card__delete-button")) {
            event.target.parentElement.classList.add("card_deleted");
        };
        if (event.target.classList.contains("card__button")) {
            event.target.classList.toggle("card__button_active");
        };
        if (event.target.classList.contains("card__image")) {
            openPopup(imagePopUp);
            image.src = event.target.getAttribute("src");
            imageTitle.textContent = event.target.nextElementSibling.textContent;
            image.alt = event.target.nextElementSibling.textContent;
        };
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
}

cardForm.addEventListener("submit", handleCardFormSave);