import { getProductsInfo } from "../utils/fetch.js";

export function renderCard(item) {
  const card = document.createElement("li");
  card.classList.add("catalog__item");

  card.innerHTML = `
    <div class="product-card ">
        <div class="product-card__visual">
            <img class="product-card__img" src="${item.image}" height="436" width="290" alt="Изображение товара">
            <div class="product-card__more">
                <button type="button" class="product-card__link product-card__add-btn btn btn--icon" data-id="${item.id}">
                    <span class="btn__text">В корзину</span>
                    <svg width="24" height="24" aria-hidden="true">
                        <use xlink:href="images/sprite.svg#icon-basket"></use>
                    </svg>
                </button>
                <a href="#" class="product-card__link btn btn--secondary">
                    <span class="btn__text">Подробнее</span>
                </a>
             </div>
        </div>
        <div class="product-card__info">
            <h2 class="product-card__title">${item.name}</h2>
            <span class="product-card__old">${item.price.old} ₽</span>
            <span class="product-card__price">${item.price.new} ₽</span>
        </div>
    </div>
  `;

  return card;
}

export function loadCards(arr) {
  const catalogList = document.querySelector(".catalog__list");
  catalogList.innerHTML = "";
  getProductsInfo().then((products) => {
    products.forEach((product) => {
      const productCard = renderCard(product);
      catalogList.append(productCard);
    });
  });
}
