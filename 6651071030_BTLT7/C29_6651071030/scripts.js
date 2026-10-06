function getFormvalue(event) {
    // Ngăn chặn trang web bị tải lại (reload) sau khi submit form
    if (event) {
        event.preventDefault();
    }

    // Lấy đối tượng form bằng document.getElementById
    var form = document.getElementById("form1");

    // Lấy giá trị của 2 ô input theo thuộc tính name
    var fname = form.elements["fname"].value;
    var lname = form.elements["lname"].value;

    // Hiển thị ra hộp thoại alert theo đúng định dạng
    alert("Họ và tên: " + fname + " " + lname);

    // Trả về false để hỗ trợ ngăn chặn submit form trên các trình duyệt cũ
    return false;
}