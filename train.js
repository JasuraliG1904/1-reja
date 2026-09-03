// 21-dars
// console.log("Jack Ma maslahatlari");
// const list = [
//   "yahshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
// //   else {
// //     callback(null, list[5]);
// //   }
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// maslahatBering(80, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

//22-dars

// define qismi
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
//   //   else {
// //     setTimeout(function () { async da core mod ishalamydi
// //       callback(null, list[5]);
// //     }, 5000);
// }

// call-1 then/catch sync func oqiydi keyin async niki
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");



// call-2 async/await
// async function run() {
//   let javob = await maslahatBering(20); //toliq javob olmaguncha keyingi qismga otmaydi
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();


// task A
// function countLetter(letter, word){
//   return word.split(letter).length - 1; 
// }
// console.log(countLetter("o", "boom"));

// task b

// let count = 0;

// function countDigits(parametr) {
//   let raqam = parametr.split(""); // 1talab ajratib oldim
//   console.log(raqam);

//   for (let i = 0; i < raqam.length; i++) {
//     if (raqam[i] !== " " && raqam[i] >= 0 && raqam[i] <= 9) {
//       count++;
//     }
//   }
//   console.log("Raqamlar soni:", count);
// }
// countDigits("1f5r66en");




// task c

function checkContent(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i]) === false) {
      return false;
    }
  }
  return true;
}

console.log(checkContent("mit", "tim"));
console.log(checkContent("labador", "barlador"));
console.log(checkContent("laba", "dora"));







