function display_random_image() {
    // 1. Khai báo mảng chứa danh sách các ảnh cùng thông số width, height tương ứng
    var images = [
        {
            src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
            width: "240",
            height: "160"
        },
        {
            src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
            width: "320",
            height: "195"
        },
        {
            src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
            width: "500",
            height: "343"
        }
    ];

    // 2. Chọn ngẫu nhiên một chỉ số từ 0 đến 2 bằng Math.random()
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];

    // 3. Tìm hoặc tạo khu vực chứa ảnh bên dưới nút bấm
    var container = document.getElementById("image-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "image-container";
        document.body.appendChild(container);
    }

    // 4. Tạo thẻ <img> mới và gán thuộc tính tương ứng
    var imgElement = document.createElement("img");
    imgElement.src = selectedImage.src;
    imgElement.width = selectedImage.width;
    imgElement.height = selectedImage.height;

    // 5. Xóa ảnh cũ (nếu có) và hiển thị ảnh mới
    container.innerHTML = "";
    container.appendChild(imgElement);
}