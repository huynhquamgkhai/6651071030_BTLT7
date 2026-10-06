$(document).ready(function() {
    $('#btnRemove').click(function() {
        // Tìm và xóa option đang được chọn
        $('#colorSelect option:selected').remove();
    });
});