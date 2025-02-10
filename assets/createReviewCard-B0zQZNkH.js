function i(e){return`<li class="review-list__item">
                <div class="review-list__name">
                    <button class="review-list__button">${e.creator.name}</button>
                    <div class="review-list__line"></div>
                </div>
                <div class="review-list__wraper">
                    <img src="${e.creator.photo}" alt="avatar">
                    <p class="review-list__text"> ${e.description}</p>
                </div>
            </li>`}export{i as c};
