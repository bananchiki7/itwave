import { getHobbies } from "../service/api";

export async function hobbyList(event) {
    const li = event.target.closest(".hobbies__item")
    const id = li.dataset.id
    
    const data = await getHobbies(id);
    console.log(data);
    
}

function getHobby() {
    return `
     <li class="sport-list__item">
                <div class="sport-list__info">
                    <h2 class="sport-list__title">Футбол</h2>
                    <p class="sport-list__text">В давнину для гри у футбол використовували м'ячі виготовлені зі сечових
                        міхурів свійських тварин, але такий «м'яч» дуже швидко псувався. Перший гумовий м'яч з'явився
                        1855 року завдяки ще...</p>
                </div>
                <div class="sport-list__visual">
                    <img class="sport-list__picture" src="" alt="">
                    <button class="sport-list__button">зберегти</button>
                </div>
            </li>
    `
}