import Popup from "./Popup";

export default class PopupConfrim extends Popup {
    constructor(popupSelector) {
        super(popupSelector)

    }

    handler(handleDeleteCard) {
        this._handleDeleteCard = handleDeleteCard;
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleDeleteCard()
            this.closePopup()

        });
    }
}