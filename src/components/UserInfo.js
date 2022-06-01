import { profileName, profileInfo, profileAvatar } from "../utils/utils.js";

export default class UserInfo {
    getUserInfo() {
        const userInfo = {
            profileNameInput: profileName.textContent,
            profileInfoInput: profileInfo.textContent
        }
        return userInfo
    };

    setUserAvatar(link) {
        profileAvatar.src = link
    };

    setUserInfo(name, info) {
        profileName.textContent = name;
        profileInfo.textContent = info;
    };

}