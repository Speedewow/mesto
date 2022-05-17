import { profileNameInput, profileInfoInput, profileName, profileInfo } from "./utils.js"

export default class UserInfo {
    constructor(data) {
        this._name = data.name;
        this._info = data.info;
    };

    getUserInfo() {
        profileNameInput.value = profileName.textContent;
        profileInfoInput.value = profileInfo.textContent;

    };

    setUserInfo() {
        profileName.textContent = profileNameInput.value;
        profileInfo.textContent = profileInfoInput.value;
    };

}