document.addEventListener('DOMContentLoaded', function() {
    // Danh sách hình ảnh cùng kích thước tương ứng
    const imagesList = [
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

    const btn = document.getElementById('jsstyle');
    const container = document.getElementById('imgContainer');

    btn.addEventListener('click', function() {
        // Lấy chỉ số ngẫu nhiên từ 0 đến imagesList.length - 1
        const randomIndex = Math.floor(Math.random() * imagesList.length);
        const selectedImg = imagesList[randomIndex];

        // Tạo thẻ img và gán các thuộc tính
        const imgElement = document.createElement('img');
        imgElement.src = selectedImg.src;
        imgElement.width = selectedImg.width;
        imgElement.height = selectedImg.height;
        imgElement.alt = "Random Image";

        // Xóa hình ảnh cũ (nếu có) và hiển thị hình mới
        container.innerHTML = '';
        container.appendChild(imgElement);
    });
});