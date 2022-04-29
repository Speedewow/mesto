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
const cardPopUp = document.querySelector(".card-popup");

const imagePopUp = document.querySelector(".image-popup");
const image = imagePopUp.querySelector(".popup__image");
const imageTitle = imagePopUp.querySelector(".popup__image-title");




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