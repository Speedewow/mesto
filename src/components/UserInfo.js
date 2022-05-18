import { profileName, profileInfo } from "../utils/utils.js";

export default class UserInfo {
    constructor(data) {
        this._name = data.name;
        this._info = data.info;
    };

    getUserInfo() {
        const userInfo = {
            profileNameInput: this._name,
            profileInfoInput: this._info
        }
        return userInfo
    };

    setUserInfo(name, info) {
        profileName.textContent = name;
        profileInfo.textContent = info;
    };

}