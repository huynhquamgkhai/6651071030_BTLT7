document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btnRemove');
    const select = document.getElementById('colorSelect');

    btn.addEventListener('click', function() {
        // Lấy vị trí (index) của tùy chọn đang được chọn
        const selectedIndex = select.selectedIndex;

        // Xóa tùy chọn nếu có lựa chọn hợp lệ
        if (selectedIndex !== -1) {
            select.remove(selectedIndex);
        }
    });
});