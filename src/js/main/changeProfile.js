import { checkToken } from "../service/api";
import { changePage } from "../universal/changePage"

export async function changeProfile() {
    try {
        await checkToken()
        changePage("profile")
    } catch {
        changePage("authorization")
    }
}
