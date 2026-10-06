function js_style() {
    // 1. Lấy phần tử có id="text" bằng document.getElementById
    var textElement = document.getElementById("text");

    // 2. Thay đổi định dạng CSS trực tiếp qua thuộc tính style
    textElement.style.fontSize = "24px";
    textElement.style.fontFamily = "Arial";
    textElement.style.color = "red";
}