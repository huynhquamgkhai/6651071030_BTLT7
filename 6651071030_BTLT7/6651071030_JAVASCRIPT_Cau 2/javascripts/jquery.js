$(document).ready(function() {
    $('#form1').submit(function(event) {
        // Ngăn chặn form submit lại trang
        event.preventDefault();

        // Lấy giá trị Họ và Tên bằng jQuery
        const firstName = $('input[name="fname"]').val();
        const lastName = $('input[name="lname"]').val();

        // In ra console và thông báo
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        alert("Họ và tên: " + firstName + " " + lastName);
    });
});