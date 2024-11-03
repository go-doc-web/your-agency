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
