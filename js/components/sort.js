import { getProductsInfo } from "../utils/fetch.js";
import { renderCard } from "../components/card.js";

const sortCriteria = document.querySelector(".catalog__sort-select");

export function sortProducts() {
  sortCriteria.addEventListener("change", () => {
    getProductsInfo().then((products) => {
      if (sortCriteria.value === "rating-max") {
        const sortResult = products.sort((a, b) => b.rating - a.rating);
        renderCards(sortResult);
      }
      if (sortCriteria.value === "price-min") {
        const sortResult = products.sort((a, b) => a.price.new - b.price.new);
        renderCards(sortResult);
      }
      if (sortCriteria.value === "price-max") {
        const sortResult = products.sort((a, b) => b.price.new - a.price.new);
        renderCards(sortResult);
      }
    });
  });
}

function renderCards(arr) {
  const catalogList = document.querySelector(".catalog__list");
  catalogList.innerHTML = "";

  arr.forEach((element) => {
    const productCard = renderCard(element);
    catalogList.append(productCard);
  });
}
