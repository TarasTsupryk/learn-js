"use strict"
const user = {
     userName: 'Назар',
     colorGlas: 'синій'
}
   
console.log (`${user.userName} має ${user.colorGlas} колір очей `);
console.log ('while');
let x = 0;
while (x < 5) {
x++;
console.log (x);
}
console.log ('do/while');
let x2 = 0;
do {
x2++;
console.log (x2);
} while (x2 < 5)
{

}
console.log ('for');
for (let x3 = 0; x3 < 6; x3++) {
    console.log (x3);
}
console.log ('task');
let num = 8;
while (num) {
    console.log(num);
    num--;
}
console.log ('task2');
 let num2 = 0;
 while (num2 < 3) {
    console.log(`Число: ${num2}`);
     num2++;
  }
  console.log ('task3');
for1:for (let num3 = 0; num3 < 2; num++) {
    
    for (let size = 0; size = 1; size++) {
        console.log(size);
        break for1;
        
    }
}


