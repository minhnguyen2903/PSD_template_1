//tim so chan
console.log("tong 10 so chan dau tien");
// let arr = [1,2,4,4,21,3,342,34,,453,2,345,23,4,2,2124,,1,24,345,235,346,456,46,567,324,53,452,34];
let i = 0;
let num = 0;
let tong = 0;
while(i < 10) {
  if(num % 2 == 0) {
    tong += num;
    i++;
  }
  num++;
}

console.log(tong);

console.log("-----------end--------------");

//////////////////////////////////////

//giai pt bac 2

ptBacHai(1,1,1);

console.log("giai phuong trinh bac 2");

let x1,x2;

function ptBacHai (a,b,c) {
  if(a > 0) {
    let delta = b*b - 4*a*c;
    console.log("delta = " + delta);
    if(delta > 0) {
      x1 = (-b + Math.sqrt(delta))/(2*a);
      x2 = (-b - Math.sqrt(delta))/(2*a);

      console.log("phuong trinh co 2 nghiem: x1= " + x1 + "   x2= " + x2);
    }
    if(delta == 0) {
      x1 = x2 = -b/(2*a);
      console.log("phuong trinh co nghiem kep x = " + x1);
    }

    if(delta < 0) {
      console.log("vo nghiem");
    }
  }
  else {
    console.log("that is wrong number");
  }
}

console.log("-----------end--------------");

/////////////////////////////////////

///tinh tong giai thua

console.log("Tinh tong giai thua");

tongGiaiThua(5);

function tongGiaiThua(n) {
  let sum = 0;

for(let i = 1; i <= n;i ++) {
  let giaiThua = 1;
  for(let j = 1; j <= i;j++) {
    giaiThua *= j;
  }
  sum += giaiThua;
}
console.log(sum);
}

console.log("-----------end--------------");

/////////////////////////////////


/////// Xu ly mang //////////////

let arr = [3,234,3,243,523,45,456,4,5656,77,56,678,3,24,123,4,56,5,67,876,88,345,123];
let arrClone = [...arr];

// xuat gia tri phan tu cua mang
console.log(arr);

//tim gia tri lon nhat cua mang
let arrMax = 0;

console.log(Math.max(...arr)); //#1
//#2
for(let i = 0; i < arr.length; i++) {
  if(arr[i] >= arrMax) arrMax = arr[i];
}
console.log("gia tri lon nhat cua mang: " + arrMax);

// so luong phan tu chan trong mang
let arrCount = 0;
arr.forEach(item => {
  if(item % 2 == 0) {
    arrCount++;
  }
});

console.log("so luong phan tu chan: " + arrCount);

// phan tu la so nguyen to
console.log("so nguyen to trong mang");
arr.forEach(item => {
  arrCount = 0;
  for(let i = 1; i < item/2; i++) {
    if(item % i == 0) {
      arrCount++;
    }
  }
  // console.log(item);
  // console.log(arrCount);
  if(arrCount == 1) {
    console.log(item);
  }
})


//sap xep mang thang dan
console.log("sap xep mang tang dan: ");
let temp = 0;
for(let i = 0; i < arrClone.length - 1; i++) {
  for(let j = i; j < arrClone.length; j++) {
    if(arrClone[i] > arrClone[j]) {
      temp = arrClone[i];
      arrClone[i] = arrClone[j];
      arrClone[j] = temp;
    }
  }
}

console.log(arrClone);


//tim phan tu
console.log("vi tri phan tu can tim trong mang:");
arrFill(3);
function arrFill(n) {
  for (const item in arr) {
    // console.log(item);
    if(arr[item] === n) {
      console.log(item);
    }
  }
}


var






