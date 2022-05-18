import { profileName, profileInfo } from "../utils/utils.js";

export default class UserInfo {
    getUserInfo() {
        const userInfo = {
            profileNameInput: profileName.textContent,
            profileInfoInput: profileInfo.textContent
        }
        return userInfo
    };

    setUserInfo(name, info) {
        profileName.textContent = name;
        profileInfo.textContent = info;
    };

}