$(document).ready(function() {
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

    $('#jsstyle').click(function() {
        // Lấy chỉ số ngẫu nhiên
        const randomIndex = Math.floor(Math.random() * imagesList.length);
        const selectedImg = imagesList[randomIndex];

        // Tạo phần tử img bằng jQuery và chèn vào container
        const imgElement = $('<img>', {
            src: selectedImg.src,
            width: selectedImg.width,
            height: selectedImg.height,
            alt: 'Random Image'
        });

        // Xóa hình cũ và hiển thị hình mới
        $('#imgContainer').html(imgElement);
    });
});