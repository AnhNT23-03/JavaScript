// khai báo và khởi tạo biến
let soA = 25;
let soB = 5;

// Các cách xuất dữ liệu với biến trong js
// cách 1 : Dùng toán tử + để nối chuỗi với biến , phải chủ động thêm dấu cách
console.log("Căn bậc hai của " + soA + " là: " + soA);

// cách 2 : Dùng nhiều tham số, ngăn cách bằng dấu phẩy , tự cách thêm dấu cách
console.log("Căn bậc hai của", soA, "là:", soA);

// cách 3 : Dùng Template Literals (ES6) - Chuỗi mẫu, Sử dụng backtick ` thay vì dấu nháy.
console.log(`Căn bậc hai của ${soA} là: ${soB}`);

// cách 4 : Format string với %s, %s là placeholder (vị trí thay thế), được thay bằng các tham số tiếp theo. Tương tự trong JAVA
console.log(`Căn bậc hai của %s là: %s`, soA, soB);








// Luyện tập :
let a = 4,
    b = 3,
    kq = a * b;
// xuất kết quả ra màn hình console.log theo 4 cách trên"
// C1 :
console.log("Kết quả: " + a + " nhân với " + b + " bằng " + kq);
// c2
console.log("Kết quả:", a, "nhân với", b, "bằng", kq);
// c3
console.log(`Kết quả: ${a} nhân với ${b} bằng ${kq}`);
// c4
console.log(`Kết quả: %s nhân với %s băng %s`, a, b, kq);