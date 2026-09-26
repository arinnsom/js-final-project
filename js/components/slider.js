import { getProductsInfo } from "../utils/fetch.js";

function renderCard(product) {
  const card = document.createElement("li");
  card.classList.add("day-products__item", "swiper-slide");

  card.innerHTML = `
    <div class="product-card product-card--small">
        <div class="product-card__visual">
            <img class="product-card__img" src="${product.image}" height="344" width="290" alt="Изображение товара">
            <div class="product-card__more">
                <a href="#" class="product-card__link product-card__add-btn btn btn--icon" data-id="${product.id}">
                    <span class="btn__text">В корзину</span>
                    <svg width="24" height="24" aria-hidden="true">
                        <use xlink:href="images/sprite.svg#icon-basket"></use>
                    </svg>
                </a>
                 <a href="#" class="product-card__link btn btn--secondary">
                    <span class="btn__text">Подробнее</span>
                </a>
            </div>
        </div>
        <div class="product-card__info">
            <h2 class="product-card__title">${product.name}</h2>
            <span class="product-card__old">${product.price.old} ₽</span>
            <span class="product-card__price">${product.price.new} ₽</span>
        </div>
    </div>
    `;

  return card;
}

export function goodsOfDay() {
  const goodsOfDayList = document.querySelector(".day-products__list");
  goodsOfDayList.innerHTML = "";
  getProductsInfo().then((products) => {
    products.forEach((product) => {
      if (product.goodsOfDay) {
        const productCard = renderCard(product);
        goodsOfDayList.append(productCard);
      }
    });

    initSwiper();
  });
}

function initSwiper() {
  const swiper = new Swiper(".day-products__slider", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 4,
    spaceBetween: 40,

    navigation: {
      nextEl: ".day-products__navigation-btn--next",
      prevEl: ".day-products__navigation-btn--prev",
    },
  });
}
