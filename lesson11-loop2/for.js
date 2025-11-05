for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
        // if kiem tra neu la dong dau tien, dong cuoi cung, cot tien, cot cuoi cung thi ve ngoi sao
        // nguoc lai ve 2 dau cach la: &nbsp;&nbsp;
        if (i === 0 || i === 4 || j === 0 || j === 9) {
            document.write('* '); // HTML entity: &nbsp;
        } else {
            document.write('&nbsp;&nbsp;&nbsp;'); // HTML entity: &nbsp;
        }
    }
    document.write("<br>");
}
// ve hinh tam giac (top left)
for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
        document.write("*");
    }
    document.write("<br>");
}
// ve hinh tam giac (bottom left)
for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j++) {
        document.write("*");
    }
    document.write("<br>");
}