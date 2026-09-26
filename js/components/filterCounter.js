import { getProductsInfo } from "../utils/fetch.js";

export function filterCounter() {
  const typeFilterForm = document.querySelector(".catalog-form__list-col");
  const checkboxes = typeFilterForm.querySelectorAll(".custom-checkbox__field");

  const filterCounts = {
    pendant: 0,
    nightlights: 0,
    overhead: 0,
    point: 0,
    ceiling: 0,
    overhead: 0,
  };
  getProductsInfo().then((products) => {
    products.forEach((product) => {
      product.type.forEach((type) => {
        if (filterCounts.hasOwnProperty(type)) {
          filterCounts[type] += 1;
        } else {
          filterCounts[type] = 1;
        }
      });
    });
    checkboxes.forEach((checkbox) => {
      const checkboxType = checkbox.value;
      const counterElement = checkbox
        .closest(".custom-checkbox")
        .querySelector(".custom-checkbox__count");
  
      counterElement.textContent = filterCounts[checkboxType] || 0;
    });
  });  
}
