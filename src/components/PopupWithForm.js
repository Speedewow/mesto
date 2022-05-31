import Popup from "./Popup.js";
export default class PopupWhithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupSelector.querySelector(".popup__form");
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');

    };

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    };

    setEventListeners() {
        super.setEventListeners()
        this._popupSelector.addEventListener('submit', () => {
            this._handleFormSubmit(this._getInputValues());
        });
    }

    closePopup() {
        this._form.reset();
        super.closePopup();
    }
};