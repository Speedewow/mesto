import Popup from "./Popup.js";
export default class PopupWhithForm extends Popup {
    constructor(popupSelector, popupSubmit) {
        super(popupSelector);
        this._popupSubmit = popupSubmit;
    };

    _getInputValues() {
        const inputs = Array.from(this._popupSelector.querySelectorAll(".popup__input").value);
        return inputs;
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener("submit", this._popupSubmit);
    }

    closePopup() {
        super.closePopup();
        this._popupSelector.querySelector(".popup__form").reset();
    }
};