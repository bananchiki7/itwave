import { setUserInfo } from "./profile/setUserInfo";
import { removeMainLoader } from "./universal/loaders/mainLoader";
import { removeRequestLoader, setRequestLoader } from "./universal/loaders/requestLoader";

setRequestLoader()

setUserInfo()

removeRequestLoader()
removeMainLoader();