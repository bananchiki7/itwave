export function createChallengeCard(data) {
    return ` <li class="challenge-form__item">
            <a class="challenge-form__link" href="#">${data.creator.name}</a>
                <label class="challenge-form__label">
                <input class="challenge-form__input" type="checkbox">
                <span class="challenge-form__input-decor"></span>
                ${data.text}</label>
            <div class="challenge-form__line"></div>
    </li>`
}