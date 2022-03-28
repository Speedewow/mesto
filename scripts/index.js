const openProfilePopUp = document.querySelector(".profile__edit-button");
const closeProfilePopUp = document.querySelector(".profile-toggle");
const profilePopUp = document.querySelector(".profile-form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const formElement = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const cardPopUp = document.querySelector(".card-form");
const openCardPopUp = document.querySelector(".profile__button");
const closeCardPopUp = document.querySelector(".card-toggle");

function openPopup(popUpElement) {
    popUpElement.classList.add("popup_opened");
};

function closePopup(popUpElement) {
    popUpElement.classList.remove("popup_opened");
};

openProfilePopUp.addEventListener("click", function() {
    openPopup(profilePopUp);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});
closeProfilePopUp.addEventListener("click", function() {
    closePopup(profilePopUp);
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    profilePopUp.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);

openCardPopUp.addEventListener("click", function() {
    openPopup(cardPopUp);
});

closeCardPopUp.addEventListener("click", function() {
    closePopup(cardPopUp);
});