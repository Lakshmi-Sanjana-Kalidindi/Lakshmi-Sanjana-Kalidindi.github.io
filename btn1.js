const readMoreBtn1 = document.querySelector(".read-more-btn-one");
const text1 = document.querySelector(".textone");

readMoreBtn1.addEventListener("click", (e) => {
  text1.classList.toggle("show-more-one");
  if (readMoreBtn1.innerText === "Read More") {
    readMoreBtn1.innerText = "Read Less";
  } else {
    readMoreBtn1.innerText = "Read More";
  }
});