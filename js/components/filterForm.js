import { renderCard } from "../components/card.js";
import { getProductsInfo } from "../utils/fetch.js";

const typeFilterForm = document.querySelector(".catalog-form__list-col");
const checkboxes = typeFilterForm.querySelectorAll(".custom-checkbox__field");
const radioBtns = document.querySelectorAll(".custom-radio");

getProductsInfo().then((products) => {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const filteredProducts = filterByType(products);
      renderCards(filteredProducts);
    });
  });
});

export function filterByType(products) {
  const checkedTypes = Array.from(
    document.querySelectorAll(".custom-checkbox__field:checked")
  ).map((checkbox) => checkbox.value);

  if (checkedTypes.length === 0) {
    return products;
  }

  return products.filter((product) =>
    product.type.some((type) => checkedTypes.includes(type))
  );
}

export function isInstock() {
  getProductsInfo().then((products) => {
    radioBtns.forEach((radio) => {
      radio.addEventListener("change", (event) => {

        const filterValue = event.target.value;
        let filteredProducts;

        if (filterValue === "instock") {
          filteredProducts = products.filter((product) => {
            const amounts = Object.values(product.availability);

            return amounts.some((amount) => amount > 0);
          });
        } else {
          filteredProducts = products;
        }

        renderCards(filteredProducts);
      });
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
