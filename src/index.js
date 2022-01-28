import "./styles.css";

/**
 * const, let 等の変数宣言
 *
 */

var var1 = "変数";

console.log(var1);

// function func_1(str) {
//   return str;
// }

const func_1 = function (str) {
  return str;
};
console.log(func_1("ai"));

// アロー関数
const func_2 = (str) => {
  return str;
};

console.log(func_2("func_2"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

// 下記はfunc3と一緒
const func4 = (num1, num2) => num1 + num3;

// 分割代入
const myPorfile = {
  name: "なまえ",
  age: 30
};

const messsage1 = `名前は${myPorfile.name}です。年齢は${myPorfile.age}です。`;
console.log(messsage1);

// 上記からname,age を取り出す
const { name, age } = myPorfile;
const messsage2 = `名前は${name}です。年齢は${age}です。`;
console.log(messsage2);

// 分割代入配列

const amyPorfile = ["なまえ", 30];

const messsage3 = `名前は${amyPorfile[0]}です。年齢は${amyPorfile[1]}です。`;
console.log(messsage3);

const [name1, age1] = amyPorfile;
const messsage4 = `名前は${name1}です。年齢は${age1}です。`;
console.log(messsage3);

// 引数のデフォルト値 セットしていない場合はundefined
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}`);
sayHello();

// スプレッド構文
// ... ドット3つを書く構文

/// 配列の展開
const arry1 = [1, 2];
console.log(arry1);
// ドットの後に配列を記載すると,1、2と順番に記載する
console.log(...arry1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arry1[0], arry1[1]);
// スプレッド構文
sumFunc(...arry1);

// まとめる
const arry2 = [1, 2, 3, 4, 5];
const [num1_1, num2_2, ...arry3] = arry2;
console.log(num1_1);
console.log(num2_2);
console.log(arry3);

// 配列のコピーや結合
const arr1 = [10, 20];
const arr2 = [30, 40];
// arr1 のコピー
const arr3 = [...arr1];
console.log(arr3);
// 結合
const arr4 = [...arr1, ...arr2];
console.log(arr4);

// イコールでコピー.これは参照渡しとなるためarr5 の値を変更するとarr1も変更される
const arr5 = arr1;
console.log(arr5);

// mapやfilterを使った配列処理

const nameArr = ["たなか", "やまだ", "すずき"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name) => console.log(name));

// filter
const numArr = [1, 2, 3, 4, 5];
// 奇数を取得する
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

nameArr.map((name, index) => console.log(`${index}は${name}`));

/**
 * 三項演算子
 */

const sval1 = 1 > 0 ? "trueです" : "falseです";
console.log(sval1);

const snum = 1300;
console.log(snum.toLocaleString());

const formattedNum =
  typeof snum === "number" ? snum.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

// 関数の return に三項演算子
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲です。";
};
console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知る
 */
//　一般的な使い方
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2にはtrueになります");
}

if (flag1 && flag2) {
  console.log("1も2もtrueになります");
}

const num_f = null;
const fee = num_f || "金額未設定です。";
console.log(fee);

// && は左側が true なら右側を返す
const num_f2 = 100;
const fee2 = num_f2 && "何か設定されました";
console.log(fee2);
