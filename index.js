console.log("hello world!")
// let number = 2
// // const name = "jac"
// number = 3
// let temp = number
// console.log(temp)
// number = 4
// temp = number
// console.log(temp)

//練習變數交換值
// let a = 10
// let b = 20

// btw = a
// a = b
// b = btw

// console.log(a ,b)

// == != && || 邏輯運算子
// let a = 10
// let b = 20
// console.log(a == 10)//等於 (true or false)
// console.log(a != 10)//不等於 (true or false)
// console.log(a == 10 && b == 20)//和 and (兩個都要正確)
// console.log(a == 10 || b == 10)//或 or (其中一個正確)

//----------------------------------------------------------
// // 算術運算子
// // + - * / %
// console.log(1 + 2)
// console.log(2 - 1)
// console.log(2 * 3)
// console.log(6 / 2)
// console.log(5 % 2)
//---------------------------------------------------------

// if (a == 10) {
//   console.log("a is 10")
// } else if (a == 11) {
//   console.log("a is 11")
// } else if (a == 15) {
//   console.log("a is 15")
// } else {
//   console.log("a is not equal 10 and 15")
// }


// for(let i = 0; i <= 10; i++ ){
//     console.log(i)
// }
// console.log("the loop end")

// let double = function(num1, num2){
//     return num2 * 2
// }

// let c = double(2, 3)
// console.log(c)

// let sayMyName = function (name){
    
// }

//--------------------------------------------------------
//1加到100後印出來
// let sum = 0; 

// for(let x = 1; x <= 100 ; x++){
//     sum = sum + x; 
// }

// console.log(sum); 
//--------------------------------------------------------
//判斷是否為閏年
// window.onload = function(){
//     console.log(document.querySelector("#year"))
//     document.querySelector("#year_btn").addEventListener("click", function(){
//         const year = parseInt(document.querySelector("#year").value) 
//         console.log(year)
//         let result = ""; // 用來存放判斷結果的變數

//         // 檢查輸入是否為有效的數字
//         if (isNaN(year)) {
//             result = "請輸入有效的年份！";
//         } else if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//             result = `${year} 是閏年！`;
//         } else {
//             result = `${year} 不是閏年。`;
//         }

//         document.querySelector("#answer").innerHTML = result;
//     })

// }
//---------------------------------------------------------------------------------------
//判斷是否為三角形
// const isTriangle = function(a, b, c){
//     // 檢查邊長是否都大於 0
//     if (a > 0 && b > 0 && c > 0) {
//         // 檢查任意兩邊之和是否大於第三邊
//         if (a + b > c && a + c > b && b + c > a) {
//             return true; // 如果所有條件都成立，回傳 true
//         }
//     }
//     return false; // 否則，回傳 false
// }

// console.log("3, 4, 5 是否為三角形？", isTriangle(3, 4, 5));

//----------------------------------------------------------------------------------------

// 計算 BMI
// const countBMI = function (height, weight) {
//  //步驟一:將身高轉換為公尺
//     const heightInMeters = height / 100;
//  //步驟二:體重 / 身高的平方(在這用**表達平方)
//     return weight / (heightInMeters ** 2);

// };

// console.log(countBMI(160, 55)); 

//------------------------------------------------------------------------------------------

//判斷大小的函式
// const whichIsBig = function(a, b) {
//     if (a > b) {
//         return a + " 比較大";
//     } else if (a == b) { 
//         return "一樣大";
//     } else {
//         return b + " 比較大";
//     }
// };

// console.log(whichIsBig(8, 4))

//---------------------------------------------------------------------

//用for迴圈做99乘法表

// const multiplicationTable = function() {
//     // 外層迴圈控制被乘數 (i)
//     for (let i = 1; i <= 9; i++) {
//         // 內層迴圈控制乘數 (j)
//         for (let j = 1; j <= 9; j++) {
//             // 計算結果
//             const result = i * j;
            
//             // 輸出格式： 1 * 1 = 1
//             console.log(`${i} * ${j} = ${result}`);
//         }
//     }
// };

// // 執行函式來印出九九乘法表
// multiplicationTable();

//---------------------------------------------------------------

//成績判斷
// 95-100 return A+
// 90-94 return A
// 80-89 return B
// 70-79 return C
// 0-69 return D
const checkScore = function (score) {
if (score >= 95 && score <= 100) {
        return "A+";
    } else if (score >= 90 && score <= 94) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 0 && score <= 69) {
        return "D";
    } else {
        return "無效的分數"; // 處理超出 0-100 範圍的分數
    }
}
console.log("分數 98 的成績是：", checkScore(98));  // 預期輸出: A+
console.log("分數 92 的成績是：", checkScore(92));  // 預期輸出: A
console.log("分數 85 的成績是：", checkScore(85));  // 預期輸出: B
console.log("分數 75 的成績是：", checkScore(75));  // 預期輸出: C
console.log("分數 60 的成績是：", checkScore(60));  // 預期輸出: D
console.log("分數 -5 的成績是：", checkScore(-5));  // 預期輸出: 無效的分數


