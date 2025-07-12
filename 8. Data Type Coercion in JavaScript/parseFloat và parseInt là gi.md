trong js để ép kiểu thì sử dụng parseFloat và parseInt vậy nó là gì và ý nghĩa ra sao ?

Trong JavaScript, parseFloat() và parseInt() là hai hàm dùng để ép kiểu (chuyển đổi) một giá trị sang kiểu số (number). 
Chúng có cách hoạt động và mục đích sử dụng khác nhau:

1. parseInt()
- Mục đích: Chuyển đổi một chuỗi (string) thành một số nguyên (integer).
- Cú pháp: parseInt(string, radix);
        - string: Giá trị cần chuyển đổi.
        - radix (tùy chọn, mặc định là 10): Hệ cơ số (2 - 36). Ví dụ:
            + 10 → hệ thập phân.
            + 2 → hệ nhị phân.
            + 16 → hệ hexa.
- Cách hoạt động:
    - Đọc từ trái sang phải, dừng lại khi gặp ký tự không phải số.
    - Bỏ qua khoảng trắng ở đầu.
    - Nếu ký tự đầu tiên không phải số hoặc dấu +/-, trả về NaN.

    - Ví dụ:
        parseInt("123");      // 123 (số nguyên)
        parseInt("123.45");   // 123 (bỏ phần thập phân)
        parseInt("10px");     // 10 (bỏ "px")
        parseInt("FF", 16);   // 255 (chuyển hexa → thập phân)
        parseInt("Hello");    // NaN (không thể chuyển đổi)

2. parseFloat()
- Mục đích: Chuyển đổi một chuỗi thành số thực (floating-point number).
- Cú pháp: parseFloat(string);
    - Cách hoạt động:
        + Đọc từ trái sang phải, dừng khi gặp ký tự không phải số hoặc dấu chấm thập phân.
        + Nhận diện dấu chấm (.) nhưng bỏ qua dấu phân cách khác (ví dụ: ,).

    Ví dụ:
        parseFloat("123.45");    // 123.45 (số thực)
        parseFloat("123.45.67"); // 123.45 (dừng ở dấu chấm thứ hai)
        parseFloat("10.5kg");    // 10.5 (bỏ "kg")
        parseFloat("ABC");       // NaN (không thể chuyển đổi)

3. ⚠️ Lưu ý quan trọng:
- Nếu chuỗi bắt đầu bằng số nhưng chứa ký tự không phải số, hàm sẽ lấy phần số đầu tiên.
- Nếu chuỗi không chứa số hợp lệ, kết quả là NaN (Not a Number).
- Khác với Number():
    Number("123.45");    // 123.45 (tương tự parseFloat)
    Number("10px");      // NaN (parseInt trả về 10)

4. Khi nào dùng parseInt vs parseFloat?
    + Dùng parseInt khi cần lấy phần nguyên (ví dụ: đơn vị pixel "100px").
    + Dùng parseFloat khi cần lấy cả phần thập phân (ví dụ: giá tiền "19.99$").

========================================================================================================================
Phần 2: như vậy là nếu tôi muốn "hello" thành number thì dùng parseInt và nếu muốn "hello" là string thì parseFloat ???
        Không phải vậy! Cả parseInt() và parseFloat() đều chỉ dùng để chuyển đổi chuỗi (string) sang số (number).

1. Nếu bạn muốn chuyển "hello" thành số:
- Kết quả sẽ là NaN (Not a Number) vì "hello" không chứa ký tự số hợp lệ.
    parseInt("hello");    // NaN
    parseFloat("hello");  // NaN

Lưu ý:
    parseInt và parseFloat chỉ hoạt động khi chuỗi bắt đầu bằng số (hoặc dấu +/-).

Ví dụ:
    parseInt("123hello"); // 123 (lấy phần số đầu)
    parseFloat("3.14abc"); // 3.14 (lấy phần số đầu)

2. Nếu bạn muốn "hello" vẫn là chuỗi (string):
    - Không cần dùng parseInt/parseFloat, vì "hello" đã là chuỗi rồi.
    - Nếu muốn kiểm tra một biến có phải chuỗi không, dùng typeof:

    javascrit
    let text = "hello";
    console.log(typeof text); // "string"

3. Phân biệt rõ hơn:
    Hàm	Mục đích	Ví dụ	                            Kết quả
    parseInt()	    Chuyển chuỗi → số nguyên	        parseInt("123.45")	123
    parseFloat()	Chuyển chuỗi → số thực	            parseFloat("123.45")	123.45
    Number()	    Chuyển bất kỳ giá trị nào → số	    Number("123")	123
    String()	    Chuyển bất kỳ giá trị nào → chuỗi	String(123)	"123"


4. ⚠️ Lưu ý quan trọng:
- parseInt/parseFloat chỉ xử lý chuỗi, không ép kiểu tùy ý như Number().
- Nếu muốn giữ nguyên chuỗi, không cần làm gì cả:
    let message = "hello";
    console.log(message); // Vẫn là "hello" (string)

- Ví dụ tổng hợp javascript:
    // Chuyển chuỗi số → number
    parseInt("100");      // 100 (number)
    parseFloat("100.5");  // 100.5 (number)

    // Chuỗi không phải số → NaN
    parseInt("hello");    // NaN
    parseFloat("world");  // NaN

    // Giữ nguyên chuỗi
    let text = "hello";
    console.log(text);    // "hello" (string)

    // Ép kiểu khác:
    String(100);          // "100" (string)
    Number("123");        // 123 (number)

5. Tóm lại:
    Muốn "hello" thành số? → Dùng parseInt/parseFloat nhưng kết quả là NaN.
    Muốn "hello" vẫn là chuỗi? → Không cần làm gì, nó đã là chuỗi rồi!