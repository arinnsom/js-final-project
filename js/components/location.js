export function locationChange() {
  const locationBtn = document.querySelector(".location__city");
  const locationCity = document.querySelectorAll(".location__sublink");
  const cityName = document.querySelector(".location__city-name");

  locationBtn.addEventListener("click", () => {
    locationBtn.classList.toggle("location__city--active");
  });

  locationCity.forEach((el) => {
    el.addEventListener("click", () => {
      cityName.textContent = el.textContent;
      locationBtn.classList.remove("location__city--active");
    });
  });
}
