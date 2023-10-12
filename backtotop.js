var backToTopButton = document.getElementById("backToTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




// Lấy danh sách tất cả các nút "Reply" trong trang
const replyButtons = document.querySelectorAll(".showReply");

// Lặp qua từng nút "Reply" và thêm sự kiện click cho mỗi nút
replyButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Tìm phần tử .form-reply trong cùng một phần tử cha
        const formReply = button.parentElement.parentElement.nextElementSibling;

        // Kiểm tra trạng thái hiển thị của .form-reply
        if (formReply.style.display === "block") {
            formReply.style.display = "none"; // Ẩn nếu đã hiển thị
        } else {
            formReply.style.display = "block"; // Hiển thị nếu đã ẩn
        }
    });
});
