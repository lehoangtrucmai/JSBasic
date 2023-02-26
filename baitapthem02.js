let x;
x = prompt("Nhập vào 1 số");
let y;
y = prompt("Nhập vào 1 số");
let xx=parseInt(x);
let yy=parseInt(y);
console.log("Tổng",xx+yy);
console.log("Hiệu",xx-yy);
console.log("Tích",xx*yy);
console.log("Thương",xx/yy);

let a;
a = prompt("Cạnh 1"); 
let b;
b = prompt("Cạnh 2");
let aa = parseInt(a);
let bb = parseInt(b);
console.log("Chu vi hình chữ nhật",(aa+bb)*2);
console.log("Diện tích hình chữ nhật",aa*bb);

let namsinh;
namsinh = prompt("Nhập vào năm sinh");
let namsinhcuaban = parseInt(namsinh);
console.log("Tuổi", 2023-namsinhcuaban);


 let m = prompt("Nhập vào số thứ 3 số bất kỳ");
    console.log("Chữ số hàng trăm",m.slice(0,1));
    console.log("Chữ số hàng chục",m.slice(1,2));
    console.log("Chữ số hàng đơn vị",m.slice(2,3));


 
 let n = prompt("Nhập vào 4 chữ số bất kỳ");
     n = n.split("");
     n.reverse();
     n = n.join("");
     console.log(n);









