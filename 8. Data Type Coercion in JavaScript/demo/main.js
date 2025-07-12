// Ép kiểu dữ liệu
// VD : Xuất dữ liệu thông báo cho người dùng nhập vào số a
let numBerA = prompt("Nhập hộ bố mày cái bumberA: ");
// làm sao biết khi nhập trong promt() là kiểu dữ liệu gì ?
console.log(typeof numBerA);
// tiếp theo thực hiện tính toán để (ép kiểu dữ liệu)
let numBerB = 10;
console.log(typeof numBerB);
// Vậy nếu ta lấy numBerA + numBerB thì như nào ?
let kq = numBerA + numBerB;
console.log(`Kết quả A + b = ${kq}`);
console.log(typeof kq);

// các phép tính khác
console.log(`A-B= %s`, numBerA - numBerB);
console.log(`A-B= %s`, numBerA * numBerB);
console.log(`A-B= %s`, numBerA / numBerB);
console.log(`A-B= %s`, numBerA % numBerB);

// ép kiểu dữ liệu người dùng nhập vào prompt ta use parseFloat và parseInt
// hiểu đơm giản như sau về parseFloat và parseInt
// nếu bạn viết trong prompt như này 120halo , 548belo ... thi nó là chuỗi hay số ?
// parseFloat và parseInt ép nó về 1 kiểu thống nhất là number or String
// parseInt ép về number
// parseFloat ép về String
// Lưu ý : parseInt/parseFloat chỉ xử lý chuỗi, không ép kiểu tùy ý như Number().
let numBerC = parseInt(prompt("Nhập hộ bố mày cái bumberC: "));
console.log(numBerC);
console.log(typeof numBerC);

// Hoặc đơn giản dùng hàm number() để ép --> kiểu number()
let numBerCc = Number(prompt("Nhập hộ bố mày cái bumberCc: "));
console.log(numBerCc);
console.log(typeof numBerCc);