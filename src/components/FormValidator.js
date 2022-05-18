export default class FormValidator {
    constructor(set, formElement) {
        this._formElement = formElement;
        this._formSelector = set.formSelector;
        this._inputSelector = set.inputSelector;
        this._submitButtonSelector = set.submitButtonSelector;
        this._inactiveButtonClass = set.inactiveButtonClass;
        this._inputErrorClass = set.inputErrorClass;
        this._errorClass = set.errorClass;
    };

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        };
    };

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonRemove(buttonElement) {
        buttonElement.classList.remove(this._inactiveButtonClass),
            buttonElement.removeAttribute("disabled");
    }

    _toggleButtonAdd(buttonElement) {
        buttonElement.classList.add(this._inactiveButtonClass),
            buttonElement.setAttribute("disabled", true);
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            this._toggleButtonAdd(buttonElement);
        } else {
            this._toggleButtonRemove(buttonElement);
        };
    };

    _setEventListeners = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    enableValidation() {
        this._formElement.addEventListener('submit', function(evt) {
            evt.preventDefault();
        });
        this._setEventListeners();
    };

    resetValidation(buttonElement) {
        this._inputList = this._formElement.querySelectorAll(".popup__input")
        this._inputList.forEach((inputElement) => {
            this._toggleButtonState(Array.from(this._inputList), buttonElement);
            this._hideInputError(inputElement);
        });
    }
};