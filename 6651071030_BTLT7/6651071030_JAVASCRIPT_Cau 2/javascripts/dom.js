document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form1');

    form.addEventListener('submit', function(event) {
        // Ngăn chặn form submit lại trang
        event.preventDefault();

        // Lấy giá trị Họ và Tên từ hai ô input
        const firstName = form.elements['fname'].value;
        const lastName = form.elements['lname'].value;

        // In ra console và thông báo
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        alert("Họ và tên: " + firstName + " " + lastName);
    });
});