function insert_Row() {
    // 1. Lấy bảng bằng id "sampleTable"
    var table = document.getElementById("sampleTable");

    // 2. Chèn một hàng mới vào cuối bảng (-1 đại diện cho vị trí cuối cùng)
    var newRow = table.insertRow(-1);

    // 3. Chèn 2 ô (cell) mới vào hàng vừa tạo
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // 4. Gán nội dung tương ứng cho từng ô
    cell1.textContent = "New cell1";
    cell2.textContent = "New cell2";
}