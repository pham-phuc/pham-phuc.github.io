document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll("nav ul li a"); // Chọn tất cả các mục menu
  const dropdownBtns = document.querySelectorAll(".dropbtn"); // Chọn tất cả menu dropdown
  const dropdownContents = document.querySelectorAll(".dropdown-content");

  navItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      // Kiểm tra nếu là dropdown, bỏ qua vì đã có xử lý riêng
      if (this.classList.contains("dropbtn")) return;

      // Xóa lớp active khỏi tất cả các mục menu
      navItems.forEach((el) => el.classList.remove("active"));

      // Thêm lớp active vào mục được nhấn
      this.classList.add("active");
    });
  });

  dropdownBtns.forEach((btn, index) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();

      // Xóa active khỏi tất cả menu chính
      navItems.forEach((el) => el.classList.remove("active"));

      // Xóa "active" khỏi tất cả dropdowns & ẩn chúng
      dropdownBtns.forEach((otherBtn, otherIndex) => {
        if (index !== otherIndex) {
          otherBtn.classList.remove("active");
          dropdownContents[otherIndex].classList.remove("show");
        }
      });

      // Toggle trạng thái cho menu dropdown được nhấn
      this.classList.toggle("active");
      dropdownContents[index].classList.toggle("show");
    });
  });

  // Đóng dropdown khi click ra ngoài
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
