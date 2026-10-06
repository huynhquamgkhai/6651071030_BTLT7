function removecolor() {
    // 1. Lấy phần tử thẻ <select> bằng id "colorSelect"
    var selectBox = document.getElementById("colorSelect");

    // 2. Lấy chỉ số (index) của tùy chọn đang được chọn
    var selectedIndex = selectBox.selectedIndex;

    // 3. Kiểm tra nếu có mục đang được chọn (selectedIndex khác -1) thì thực hiện xóa
    if (selectedIndex !== -1) {
        selectBox.remove(selectedIndex);
    }
}