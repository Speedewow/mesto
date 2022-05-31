import Popup from "./Popup";

export default class PopupConfrim extends Popup {
    constructor({ popupSelector, handleDeleteCard }) {
        super(popupSelector)
        this._handleDeleteCard = handleDeleteCard;
    }

    getId(id) {
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleDeleteCard(id)
        });
    }
}