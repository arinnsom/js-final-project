import { burgerMenu } from "./components/burger.js";
import { locationChange } from "./components/location.js";
import { loadCards } from "./components/card.js";
import { filterCounter } from "./components/filterCounter.js";
import { filterByType, isInstock } from "./components/filterForm.js";
import { sortProducts } from "./components/sort.js";
import {
  openBasket,
  addProductToBasket,
} from "./components/basket.js";
import { openAccordion } from "./components/accordion.js";
import { goodsOfDay } from "./components/slider.js";
import { validateForm } from "./components/questionsForm.js";

window.addEventListener("DOMContentLoaded", () => {
  burgerMenu();
  locationChange();
  loadCards();
  filterCounter();
  filterByType();
  isInstock();
  sortProducts();
  openBasket();
  addProductToBasket();
  openAccordion();
  goodsOfDay();
  validateForm;
});
