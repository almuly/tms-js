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
const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40,
    },
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54,
    },
    {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24,
    },
];

function SearchData(lastName) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].lastName.toLowerCase() === lastName.toLocaleLowerCase())
            return data[i];
    }


    return 'No results found for your request';
}

let result = SearchData('DaKOtA');
console.log(result);




