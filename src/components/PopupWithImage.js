import Popup from "./Popup.js";
import { image, imageTitle } from "./utils.js"
export default class PopupWithImage extends Popup {
    constructor(popupSelector, data) {
        super(popupSelector);
        this._link = data.link;
        this._name = data.name;
    };

    openPopup() {
        super.openPopup();
        super.setEventListeners();
        image.src = this._link;
        imageTitle.textContent = this._name;
        image.alt = this._name;
    };
};