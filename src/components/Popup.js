export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    };

    openPopup() {
        this._popupSelector.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    };

    closePopup() {
        this._popupSelector.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    };

    _handleEscClose = (event) => {
        if (event.key === "Escape") {
            this.closePopup();
        };
    };

    setEventListeners() {
        this._popupSelector.addEventListener("mousedown", (event) => {
            if (event.target.classList.contains("popup__toggle") || event.target.classList.contains("popup") || event.target.classList.contains("popup__image-overlay")) {
                this.closePopup();
            };
        });
    };
};