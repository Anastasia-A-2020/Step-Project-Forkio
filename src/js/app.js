const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".header__list");
const statisticBtnList = document.querySelector(".editor__list");
const staticBtns = document.querySelectorAll(".editor__button");
const statisticValues = document.querySelectorAll(".editor__count");

btn.addEventListener("click", () => {
  btn.classList.toggle("open-menu");
  menu.classList.toggle("menu-open");
});

statisticBtnList.addEventListener(
  "click",
  onStatisticBtnClick,
  statisticBtnList
);
window.addEventListener("load", showValue);

function onStatisticBtnClick(e) {
  if (e.target.tagName === "BUTTON") {
    const value = (
      (e.target.lastElementChild.textContent * 1000 + 1) /
      1000
    ).toFixed(3);
    const keyStor = e.target.dataset.action;
    saveStatistic(keyStor, value);
    e.target.lastElementChild.textContent = getStatic(keyStor);
  }
}

function saveStatistic(key, value) {
  localStorage.setItem(key, value);
}

function getStatic(key) {
  return localStorage.getItem(key);
}

function showValue() {
  for (let stat of staticBtns) {
    stat.lastElementChild.textContent =
      getStatic(stat.dataset.action) ?? stat.lastElementChild.textContent;
  }
}

// function numberWithCommas(x) {
//   return x.toString().replace(/(?=(\d{3})+(?!\d))/g, ",");
// }
