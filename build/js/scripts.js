// Custom Scripts
tabs;
function tabs(
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "flex"
) {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);
  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();
  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains(tabSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs(".tabs__header", ".tabs__header-item", ".tabs__content-item", "active");


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
    window.addEventListener("resize", () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove("active");
        burger.classList.remove("active");
        body.classList.remove("locked");
        roundedBtn.classList.remove("active");
      }
    });
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


const laptopscreen = window.matchMedia("(min-width:992px)");
// header

const logo = document.querySelector(".logo");
const menuItems = document.querySelectorAll(".menu__item");
const selectLang = document.querySelector(".select");

console.log(logo);
console.log(menuItems);

if (laptopscreen) {
  gsap.from(logo, {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: "elastic",
  });
  gsap.from(menuItems, {
    duration: 1,
    y: -30,
    opacity: 0,
    stagger: 0.25,

    ease: "back",
  });
  gsap.from(".rounded__btn", {
    duration: 1,
    y: -30,
    opacity: 0,

    delay: 1,
  });
  gsap.from(selectLang, {
    duration: 2,
    y: 100,
    opacity: 0,
  });

  gsap.fromTo(
    logo,
    {
      scale: 1.2,
    },
    {
      scale: 1,
      duration: 1.5,
      ease: "back",
      delay: 2.5,
    }
  );
}

