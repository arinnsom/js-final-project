export function openBasket() {
  const basketBtn = document.querySelector(".header__user-btn");
  const basketInner = document.querySelector(".basket");

  basketBtn.addEventListener("click", () => {
    basketInner.classList.toggle("basket--active");
  });
}

const catalogList = document.querySelector(".catalog__list");
const goodsOfDayList = document.querySelector('.day-products__list');
const basketList = document.querySelector(".basket__list");
const emptyBasket = document.querySelector(".basket__empty-block");
let counter = document.querySelector(".header__user-count");

let basketData = [];
counter.textContent = 0;

export function addProductToBasket() {
  catalogList.addEventListener("click", (event) => {
    if (event.target.classList.contains("product-card__add-btn")) {
      const product = event.target.closest(".product-card");

      const currentProduct = {
        id: product.dataset.id,
        image: product.querySelector(".product-card__img").src,
        name: product.querySelector(".product-card__title").textContent,
        price: product.querySelector(".product-card__price").textContent,
      };

      basketData.push(currentProduct);

      renderProductInBasket(currentProduct);
      updateBasketStatus();
    }
  });

  goodsOfDayList.addEventListener("click", (event) => {
    if (event.target.classList.contains("product-card__add-btn")) {
      const product = event.target.closest(".product-card");

      const currentProduct = {
        id: product.dataset.id,
        image: product.querySelector(".product-card__img").src,
        name: product.querySelector(".product-card__title").textContent,
        price: product.querySelector(".product-card__price").textContent,
      };

      basketData.push(currentProduct);

      renderProductInBasket(currentProduct);
      updateBasketStatus();
    }
  });
}

function updateBasketStatus() {
  counter.textContent = basketData.length;

  if (basketData.length > 0) {
    emptyBasket.style.display = "none";
  } else {
    emptyBasket.style.display = "block";
  }
}

function renderProductInBasket(item) {
  const basketItem = document.createElement("li");
  basketItem.classList.add("basket__item");

  basketItem.innerHTML = `
      <div class="basket__img">
          <img src="${item.image}" alt="Фотография товара" height="60" width="60">
      </div>
      <span class="basket__name">${item.name}</span>
      <span class="basket__price">${item.price}</span>
      <button class="basket__close" type="button">
      <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
          <use xlink:href="images/sprite.svg#icon-close"></use>
      </svg>
      </button>
      `;

  basketList.append(basketItem);

  const closeBtn = basketItem.querySelector(".basket__close");
  closeBtn.addEventListener("click", () => {
    const index = basketData.findIndex((product) => product.id === item.id);
    if (index !== -1) {
      basketData.splice(index, 1);
    }

    basketItem.remove();
    updateBasketStatus();
  });
}
