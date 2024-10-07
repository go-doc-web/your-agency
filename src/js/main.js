// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const roundedBtn = document.querySelector(".rounded__btn");

  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      roundedBtn.classList.add("active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      roundedBtn.classList.remove("active");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  //   window.addEventListener("resize", () => {
  //     if (window.innerWidth > 991.98) {
  //       menu.classList.remove("active");
  //       burger.classList.remove("active");
  //       body.classList.remove("locked");
  //       roundedBtn.classList.remove("active");
  //     }
  //   });
}
burgerMenu();

//select
let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");
  let selectElements = document.querySelectorAll(".select");
  let selectArrow = document.querySelector(".select__icon");
  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });
  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
    selectArrow.classList.toggle("select__icon--rotate");
  }

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest(".select");
    let textCurrent = this.closest(".select").querySelector(".select__current");
    textCurrent.innerText = text;
    select.classList.remove("is-active");
    selectArrow.classList.remove("select__icon--rotate");
  }

  document.addEventListener("click", (e) => {
    selectElements.forEach((select) => {
      if (!select.contains(e.target)) {
        select.classList.remove("is-active");
        selectArrow.classList.remove("select__icon--rotate");
      }
    });
  });
};
select();
