export function openAccordion() {
  const accordionButtons = document.querySelectorAll(".accordion__btn");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      accordionButtons.forEach((btn) => {
        if (btn !== this) {
          btn.classList.remove("accordion__btn--active");
        }
      });

      this.classList.toggle("accordion__btn--active");
    });
  });
}
