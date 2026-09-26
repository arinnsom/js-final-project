export function burgerMenu() {
  const burgerBtn = document.querySelector(".header__catalog-btn");
  const mainMenu = document.querySelector(".main-menu");
  const menuClose = document.querySelector(".main-menu__close");

  burgerBtn.addEventListener("click", () => {
    mainMenu.classList.add("main-menu--active");
  });

  document.addEventListener("click", handleOutsideClick);

  menuClose.addEventListener("click", () => {
    mainMenu.classList.remove("main-menu--active");
  });

  function handleOutsideClick(event) {
    if (
      event.target.closest(".main-menu__wrapper") ||
      event.target.closest(".header__catalog-btn")
    )
      return;

    mainMenu.classList.remove("main-menu--active");
  }
}
