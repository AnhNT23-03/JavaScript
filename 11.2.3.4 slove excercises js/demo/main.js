// bài tập 4
// Yêu cầu người dùng nhập bán kính từ bàn phím
let r = Number(prompt("Nhập bán kính của đường tròn:")); // KIẾN THỨC NÀY NẰM TRONG BÀI 8
console.log(r);
console.log(typeof r);

// Tính chu vi và diện tích
let PI = Math.PI;
let chuVi1 =2 * 3.14 * r;
let dienTich1 =3.14 * r * r;

// in kết quả
console.log("Chu vi ="+ chuVi1);
console. log("Diện tích = " + dienTich1);




// bài tập 5 ==============================================================
// Yêu cầu người dùng nhập chiều dài và chiều rộng từ bàn phím
let a = Number (prompt ("Nhập chiều dai hình chữ nhật:"));
let b = Number (prompt ("Nhập chiều rộng hình chữ nhật:"));

// Tính chu vi và diện tích
let chuVi2 = (a + b) * 2;
let dienTich2 = a * b;

// In kết quả
console. log("Chu vi =" + chuVi2);
console. log("Diện tích = " + dienTich2);



// bài tập 6 ==============================================================
// Yêu cầu người dùng nhập điểm từ bàn phím
let diemToan = Number (prompt ( "Nhập điểm môn toán:"));
let diemVan = Number (prompt ( "Nhập điểm môn văn:"));
let diemAnh = Number (prompt ( "Nhập điếm môn anh:"));

// Tính điểm trung bình
let dtb = (diemAnh + diemToan + diemVan) / 3;

console.log("Điểm trung bình = " + dtb.toFixed(2));


/* dtb.toFixed(2) là gì ?
Trong đoạn mã trên của bạn, dtb.toFixed(2) là một phương thức của kiểu number trong JavaScript, dùng để 
làm tròn số thập phân và định dạng số thành chuỗi (string) với số chữ số thập phân cố định.

Giải thích chi tiết:
1.toFixed(n):
- Tác dụng: Làm tròn số và trả về một chuỗi (string) biểu diễn số đó với n chữ số sau dấu phẩy.
- Tham số:
    - n (bắt buộc): Số lượng chữ số thập phân muốn giữ lại.
        + Nếu n = 2 → giữ lại 2 chữ số thập phân (ví dụ: 8.666... → "8.67").
        + Nếu n = 0 → làm tròn thành số nguyên (ví dụ: "9").

    - Lưu ý:
        + Kết quả trả về là kiểu string, không phải number!
        + Nếu phần thập phân ít hơn n chữ số, JavaScript sẽ thêm số 0 vào cuối (ví dụ: 5.toFixed(3) → "5.000").

2. Ví dụ trong code của bạn:
        let dtb = (diemAnh + diemToan + diemVan) / 3; // Giả sử dtb = 8.666666...
        console.log("Điểm trung bình = " + dtb.toFixed(2)); // "Điểm trung bình = 8.67"
    - note:
        +dtb.toFixed(2) sẽ làm tròn 8.666... thành "8.67" (chuỗi).
        +Nếu không dùng .toFixed(2), kết quả in ra sẽ là một số dài như 8.666666666666668.

3. Một số ví dụ khác:
    let num1 = 3.14159;
    console.log(num1.toFixed(2)); // "3.14" (string)

    let num2 = 5;
    console.log(num2.toFixed(2)); // "5.00" (string)

    let num3 = 2.987;
    console.log(num3.toFixed(0)); // "3" (string)


5. ⚠️ Lưu ý quan trọng:
    - Không dùng .toFixed() để tính toán tiếp vì nó trả về chuỗi. 
    - Nếu cần tính toán, phải chuyển lại thành number bằng Number() hoặc parseFloat():
        let dtb = 8.666666;
        let formattedDtb = dtb.toFixed(2); // "8.67" (string)
        let newNumber = parseFloat(formattedDtb); // 8.67 (number)

    - Cách thay thế nếu muốn kết quả là number: Dùng Math.round() hoặc Number.EPSILON để làm tròn số mà vẫn giữ nguyên kiểu number:
        let dtb = 8.666666;
        let roundedDtb = Math.round(dtb * 100) / 100; // 8.67 (number)

6.Tóm lại:
    .toFixed(2) trong code của bạn giúp:
    ✅ Làm tròn điểm trung bình đến 2 chữ số thập phân.
    ✅ Định dạng đẹp khi in ra màn hình (ví dụ: "8.67" thay vì 8.666666666666668).
    ❌ Kết quả là string, không dùng để tính toán tiếp
*/