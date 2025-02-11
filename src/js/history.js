import { getChallengesList } from "./history/getChallengesList";
import { getHobbiesList } from "./history/getHobbiesList";
import { removeMainLoader } from "./universal/loaders/mainLoader";

getHobbiesList()
getChallengesList()

removeMainLoader();