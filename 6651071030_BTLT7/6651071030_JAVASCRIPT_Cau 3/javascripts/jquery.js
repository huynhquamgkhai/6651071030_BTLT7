$(document).ready(function() {$('#btnInsert').click(function() {
        // Đếm số hàng hiện tại
        const rowCount = $('#sampleTable tr').length + 1;

        // Tạo chuỗi HTML cho hàng mới
        const newRowHTML = `<tr><td>Row${rowCount} cell1</td><td>Row${rowCount} cell2</td></tr>`;

        // Thêm hàng mới vào cuối bảng bằng append
        $('#sampleTable').append(newRowHTML);
    });
});