$(function () {
     // Lấy các phần tử cần thiết
 const dropdownButton = document.getElementById('dropdownButton');
 const dropdownContent = document.querySelector('.dropdown-content');
 const dropdown = document.querySelector('.dropdown');

 // Mở hoặc đóng dropdown khi click vào nút
 dropdownButton.addEventListener('click', function() {
     dropdown.classList.toggle('open'); // Thêm hoặc xóa class 'open'
 });

 // Đóng dropdown khi người dùng chọn một mục
 const dropdownItems = dropdownContent.querySelectorAll('a');
 dropdownItems.forEach(item => {
     item.addEventListener('click', function(event) {
         event.preventDefault(); // Ngăn chặn hành vi mặc định (điều hướng)
         const selectedValue = item.textContent; // Lấy giá trị đã chọn
         dropdownButton.textContent = selectedValue; // Cập nhật text của button
         dropdown.classList.remove('open'); // Đóng dropdown
     });
 });

 // Đóng dropdown nếu click ra ngoài (tính năng bổ sung)
 document.addEventListener('click', function(event) {
     if (!dropdown.contains(event.target)) {
         dropdown.classList.remove('open');
     }
 });
});
