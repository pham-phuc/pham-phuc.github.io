document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll("nav ul li a");
  const dropdownBtns = document.querySelectorAll(".dropbtn");
  const dropdownContents = document.querySelectorAll(".dropdown-content");

  navItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      if (this.classList.contains("dropbtn")) return;
      navItems.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });

  dropdownBtns.forEach((btn, index) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      navItems.forEach((el) => el.classList.remove("active"));
      dropdownBtns.forEach((otherBtn, otherIndex) => {
        if (index !== otherIndex) {
          otherBtn.classList.remove("active");
          dropdownContents[otherIndex].classList.remove("show");
        }
      });
      this.classList.toggle("active");
      dropdownContents[index].classList.toggle("show");
    });
  });
  document.addEventListener("click", function (event) {
    if (
      ![...dropdownBtns, ...dropdownContents].some((el) =>
        el.contains(event.target)
      )
    ) {
      dropdownBtns.forEach((btn) => btn.classList.remove("active"));
      dropdownContents.forEach((content) => content.classList.remove("show"));
    }
  });
});
