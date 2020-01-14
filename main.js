// Задание №1
// let manager;
// let currentUser;
// let name;
// name = 'Вася';
// currentUser = name;
// console.log(currentUser);

//Задание №2
// let name = "Вася";
// console.log( `hello ${1}` );
// console.log( `hello ${"name"}` );
// console.log( `hello ${name}` );

//Задание №3
// console.log( " \n \n" - 2 );
// console.log(6 / "3");
// console.log( "2" * "3");
// console.log( 7 / 0 );
// console.log( 4 + 5 + "px");
// console.log( "" + 3 + 0);
// console.log( "" - 4 + 0);
// console.log( "!" + 2 + 5);
// console.log( "1" - 2);
// console.log( "3px" - 2);
// console.log( "  -9  " + 5);
// console.log( "  -9  " - 5);
// console.log( null + 1);
// console.log(undefined + 1);

//Задание №4
// console.log(2 > 4);
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(false == 0);
// console.log(false == "");
// console.log(false === "");
//
// //Задание №5
// let animal = {
//     type:'dog',
//     weight: 40
// };
// animal.color = 'aquamarin';
// animal.speed = 64;
// delete animal.weight;
// animal.color = 'silver';
// console.log(animal);


//lesson 3
// const data = [
//     {
//         firstName: 'Ashton',
//         lastName: 'Kutcher',
//         age: 42,
//     },
//     {
//         firstName: 'Bradley',
//         lastName: 'Pitt',
//         age: 56,
//     },
//     {
//         firstName: 'Hannah',
//         lastName: 'Dakota',
//         age: 26,
//     },
// ];
//
// function SearchData(lastName) {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].lastName.toLowerCase() === lastName.toLowerCase())
//
//             return data[i];
//
//     }
//
//
//     return 'No results found for your request';
// }
//
// let input = document.getElementById('info');
//
// input.addEventListener("keyup", function (event) {
//     let result = SearchData(event.target.value);
//     if (typeof (result) === 'object') {
//         let field = '';
//         for (let key in result) {
//             field += key + ': ' + result[key] + '<br>'
//         }
//         document.getElementById('output').innerHTML = field;
//
//     } else {
//         document.getElementById('output').innerHTML = result;
//
//     }
//
// });


//lesson 4
//4.1

// function  min (a,b) {
//     if (a < b) {
//         return a;
//     } else{
//         return b;
//     }
// }
// function  max (a,b) {
//     if (a < b) {
//         return b;
//     } else{
//         return a;
//     }
// }
//
// function getMin(a,b) {
//     return a > b ? b : a;
// }
// function getMax(a,b) {
//     return a > b ? a : b;
// }
// alert(min(6,8));

//******************************************************************************
//4.2
// let arr = [12, 50, 1, 11, 20, 100, 53, 65, 90, 66, 0, 0, 300];
// let newArr = [];
//
// function IsArr(arr) {
//     arr.forEach(function (item, index, array) {
//         if (item == 0) {
//             newArr.push('zero')
//         } else if (item % 100 == 0) {
//             newArr.push(item / 100 + 'zerozero')
//         } else if (item % 10 == 0) {
//             newArr.push(item / 10 + 'zero')
//         } else {
//             newArr.push(item)
//         }
//
//     });
// }
//
// IsArr(arr);
// alert(newArr);

//*******************************************************************************

// let k = arr.length;
// for  (let i = 0; i < k; i++) {
//     if (i % 10 == 0) {
//         return newArr.splice(i,0,`${i/10 + 'zero'}`)
//     }
//     ;
// }
//*******************************************************************************


// //classwork 4
// let palindrom = 'rhjn'
//
// function IsPalindrom() {
//     let ArrPalindrom = palindrom.split('');
//     ArrPalindrom = ArrPalindrom.reverse().join('');
//     if (palindrom == ArrPalindrom) {
//         return 'УРА!';
//     } else {
//         return 'Увы:(';
//
//     }
// }
//
// alert(IsPalindrom());
//*******************************************************************************

// homework5.1

// function sum(x){
//     return function(y){
//         return x + y
//     }
// }
//
// console.log(sum(5)(2));
//*******************************************************************************

// homework5.2
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

function changeColor(element) {

    for (let i = 0; i <= colors.length;) {

        return function () {
            element.style.color = colors[i];
            i++;
            if(i > colors.length){
                i = 0;
            }

        }
    }

}

text1.onclick = changeColor(text1);
text2.onclick = changeColor(text2);
text3.onclick = changeColor(text3);
//*******************************************************************************

