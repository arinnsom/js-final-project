const validateForm = new JustValidate(".questions__form");
const modal = document.querySelector(".questions__modal");
const modalText = document.querySelector(".modal__text");
const modalClose = document.querySelector(".modal__close");

validateForm.addField("#name", [
  {
    rule: "required",
    errorMessage: "Введите ваше имя",
  },
  {
    rule: "minLength",
    value: 3,
    errorMessage: "Минимальное количество символов - 3",
  },
  {
    rule: "maxLength",
    value: 20,
    errorMessage: "Максимальное количество символов - 20",
  },
]);

validateForm.addField("#email", [
  {
    rule: "required",
    errorMessage: "Введите вашу почту",
  },
  {
    rule: "email",
    errorMessage: "Почта введена не верно",
  },
]);

validateForm.addField("#agree", [
  {
    rule: "required",
    errorMessage: "Согласие обязательно",
  },
]);

validateForm.onSuccess(async (event) => {
  const form = event.target;
  const formData = new FormData(form);
  try {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }

    modal.classList.add("questions__modal--active");
    modalText.textContent = "Благодарим за обращение!";
  } catch (error) {
    openErrorModal("Не удалось отправить обращение");
  }
});

function openErrorModal(message) {
  const modalError = document.querySelector(".questions__error");
  modalError.querySelector(".error__text").textContent = message;
  modalError.classList.add("questions__error--active");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("questions__modal--active");
});

export { validateForm };
