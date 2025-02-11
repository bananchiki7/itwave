export function createHobbiesCard(data) {
    return `
        <li class="history-hobbies__item">
                <a class="history-hobbies__link" href="#">${data.name}</a>
            </li>
    `
}