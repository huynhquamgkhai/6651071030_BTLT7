$(document).ready(function() {
    $('#btnCount').click(function() {
        const options = $('#mySelect option');
        const count = options.length;

        // Duyệt qua từng option để lấy nội dung text
        let itemsList = [];
        options.each(function() {
            itemsList.push($(this).text());
        });

        // Hiển thị ra cửa sổ cảnh báo (alert)
        alert("Số lượng phần tử: " + count + "\nDanh sách các mục:\n" + itemsList.join("\n"));
    });
});