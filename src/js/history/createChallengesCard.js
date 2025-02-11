export function createChallengesCard(data) {
    return `
        <li class="history-challenges__item">
                <a class="history-challenges__link" href="#">${data.text}</a>
            </li>
    `
}