$(document).ready(function() {
    $('#linkForm').submit(function(event) {
        event.preventDefault(); // Ngăn form load lại trang

        let url = $('#linkInput').val().trim();

        // Kiểm tra ô input trống
        if (!url) {
            alert('Vui lòng nhập đường link!');
            return;
        }

        // Tự động thêm protocol https:// nếu thiếu
        if (!/^https?:\/\//i.test(url)) {
            url = 'https://' + url;
        }

        // Hiển thị dialog xác nhận
        const isConfirm = confirm('Bạn có muốn chuyển đến đường link: ' + url + ' không?');

        // Nếu nhấn OK thì chuyển hướng
        if (isConfirm) {
            window.location.href = url;
        }
    });
});