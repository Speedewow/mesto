const openPopup = document.querySelector(".profile__edit-button");
const closePopup = document.querySelector(".popup__toggle");
const popUp = document.querySelector(".popup");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const formElement = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

openPopup.addEventListener("click", function () {
  popUp.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

closePopup.addEventListener("click", function () {
  popUp.classList.remove("popup_opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popUp.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
