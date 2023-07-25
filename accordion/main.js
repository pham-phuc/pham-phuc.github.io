let acc = document.getElementsByClassName("accordion-header");
$('.accordion-item.active .accordion-body').slideToggle();
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      $(".accordion-body").slideUp();
      panel.style.display = "block";
    }
  });
}
