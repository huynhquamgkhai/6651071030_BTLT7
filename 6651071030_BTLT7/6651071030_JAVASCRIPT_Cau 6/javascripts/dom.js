document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btnCount');
    const select = document.getElementById('mySelect');

    btn.addEventListener('click', function() {
        // Lấy danh sách tất cả các phần tử option trong select
        const options = select.options;
        const count = options.length;

        // Lấy giá trị chuỗi của từng item
        let itemsList = [];
        for (let i = 0; i < count; i++) {
            itemsList.push(options[i].text);
        }

        // Hiển thị ra cửa sổ cảnh báo (alert)
        alert("Số lượng phần tử: " + count + "\nDanh sách các mục:\n" + itemsList.join("\n"));
    });
});