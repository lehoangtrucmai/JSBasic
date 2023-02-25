let vatly;
vatly = prompt("Nhập điểm môn vật lý");
let hoahoc;
hoahoc = prompt("Nhập điểm môn hóa học");
let sinhhoc;
sinhhoc = prompt("Nhập điểm môn sinh học");
console.log("Tổng điểm", parseInt(vatly)+parseInt(sinhhoc)+parseInt(hoahoc));
console.log("Điểm TB", (parseInt(vatly)+parseInt(sinhhoc)+parseInt(hoahoc))/3)

let celsius;
celsius = prompt("Nhập 1 số bất kì");
console.log("Fahrenheit",(9*parseInt(celsius)/5)+32)

let r;
let pi=3.14;
r = prompt("Nhập vào bán kính hình tròn");
console.log("Chu vi hình tròn",2*parseInt(r)*pi);
console.log("Diện tích hình tròn",pi*Math.pow(parseInt(r),2));