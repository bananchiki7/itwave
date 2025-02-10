export function createReviewCard(data) {
    return `<li class="review-list__item">
                <div class="review-list__name">
                    <button class="review-list__button">${data.creator.name}</button>
                    <div class="review-list__line"></div>
                </div>
                <div class="review-list__wraper">
                    <img src="${data.creator.photo}" alt="avatar">
                    <p class="review-list__text"> ${data.description}</p>
                </div>
            </li>`;
}