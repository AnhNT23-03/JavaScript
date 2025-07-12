// Ưu tiên
let diemToan = 9.5;
let diemVan = 8.75;

// tính điểm trung binh diemToan và diemVan
// let dtb = diemToan + diemVan / 2; // return is 13.875 lá sai

// tính điểm trung binh diemToan và diemVan dùng () để ưu tiên
let dtb = (diemToan + diemVan) / 2; // 9.125 đúng

// xuất dữ liệu
console.log(dtb);



// dùng ưu tiên right to left
let x = (y = 25);
console.log(x);

// dùng ưu tiên left to right
let c = 25 - 7 + 8 - 1;
console.log(c);