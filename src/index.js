/**
 * const, let
 */

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数の再宣言";
// console.log(val1);

// let val2 = "let変数";
// // console.log(val2);

// const val4 = {
//   name: "akinori",
//   age: 44
// };
// val4.name = "あきのり";
// val4.address = "tokyo";
// //console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
//console.log(val5);

//const name = "akinori";
//const age = 44;
// 「私の名前は。。。です。年齢は。。v」

// 従来の方法
//const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
//console.log(message1);

// テンプレート文字列
//const message2 = `私の名前は${name}です。年齢は${age}です。`;
//console.log(message2);

/**
 * アロー関数
 */
//従来
//function func1(str){
//  return str;
//}
// const func1 = function(str){
//   return str;
// };
// //console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// // console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "akinori",
//   age: 44,
// };

// const message3 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message3);

// const { name, age } = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// const myProfile = ['akinori', 44];

// const message5 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message5);

// const [ name, age ] = myProfile;
// const message6 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message6);

/**
 * デフォルト値
 */
// const seyHello = (name = "akinori") => console.log(`こんにちは!${name}さん！`);
// seyHello("ryouta");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr8);

/**
 * map filter を使った配列の処理
 */
// const nameArr = ["田中", "佐藤", "あきのり"];
// for (let index = 0; index < nameArr.length; index++) {
//   //  console.log(nameArr[index]);
//   // console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));
//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "あきのり") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// 有る条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'true' : 'false';
// console.log(val1);

// const num = 1300;
// //console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? 'over 100' : 'under 100';
// }
// console.log(checkSum(50,60));

/**
 * 論理演算子の本当の意味をしろう && ||
 */

// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2) {
//   console.log("1か2がtrueになります");
// }
// if(flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
