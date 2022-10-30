// 검색창 요소 찾기
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// 검색창 요소를 클릭하면 실행
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
//페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector("header .badges");

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (this.windeow.scrollY > 500) {
    //배지요소 숨기기
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none",
    });
  } else {
    ///배지요소보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block",
    });
  }
});
