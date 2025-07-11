/* Giả sử bạn khai báo như sau :
let myString = "123";
let myNumber = 10;
console.log(myString);
    1 typeof trong JavaScript là một toán tử (operator) dùng để xác định kiểu dữ liệu của một giá trị hoặc biến.
    2 nhìn vào giá trị mình đang gán
console.log(typeof myString);
*/



// kiểu dữ liệu String
let myString = "Con dở hơi";
console.log(myString);
console.log(typeof myString);


// kiểu dữ liệu số
let soNguyen = 10;
let soThuc = 3.14;
console.log(soNguyen);
console.log(soThuc);
console.log(typeof soThuc);
console.log(typeof soNguyen);


// kiểu dữ liệu boolean
let check = false;
console.log(check);
console.log(typeof check);


// kiểu dữ liệu undefined
let diemToan;
console.log(diemToan);
console.log(typeof diemToan);


/* kiểu dữ liệu null
- Note với null :
    vd :
        let connect = null;
        console.log(typeof connect)

    bình thường kết quả trả về là null 
        return is null
    => tại sao lại là object
    => vì Đây là một “bug lịch sử” nổi tiếng của JavaScript. Khi JavaScript được tạo ra (năm 1995), cách lưu trữ giá trị trong bộ nhớ đã khiến null bị gán kiểu là object.
*/
let connect = null;
