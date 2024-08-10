let arr = [1, 2, 3, 4, 5];

const print = function (el) {
  console.log(el);
};

arr.forEach(print);

//! or

arr.forEach((el) => {
  console.log(el);
});

let arrss = [
  { name: "rohit", marks: 93 },
  { age: 34, add: "aurangabad" },
];

arrss.forEach((el) => {
  console.log(el.name);
});

// ! map

let arroo = [1, 2, 3, 4];

let double = arroo.map((el) => {
  return el * 2;
});

console.log(double);

// ! or

let student = [
  { Name: "roshan", marks: 93 },
  { Name: "rohan", marks: 97 },
];

const gpa = student.map((el) => {
  return el.marks / 10;
});

console.log(gpa);

// ! filter

let aiis = [9, 3, 4, 6, 3, 7, 2, 7, 8, 4, 6, 5];

let even = aiis.filter((el) => {
  return el % 2 > 4;
});

console.log(even);

// ! every

console.log([2, 4].every((el) => el % 2 == 0));
console.log([2, 4, 1].every((el) => el % 2 == 0));

//! sume

console.log([2, 4, 6, 1].some((el) => el % 2 == 0));
console.log([9, 7, 9, 1].some((el) => el % 2 == 0));

// ! reducer

let netuNum = [1, 2, 3, 4, 5];

let final = netuNum.reduce((res, el) => {
  // console.log(res);
  return res + el;
});

console.log(final);

// ! find the maximum number of the array whit the help of reduce

let maxArr = [3, 4, 2, 6, 2, 9, 33, 7, 54];

let max = 0;

for (let i = 0; i < maxArr.length; i++) {
  if (max < maxArr[i]) {
    max = maxArr[i];
  }
}

console.log(max);

// ! whit tha help of reduce

let maxxArr = [3, 6, 3, 6, 25, 7, 84, 46, 53];

let maxx = maxxArr.reduce((res, el) => {
  if (res < el) {
    return el;
  } else {
    return res;
  }
});

console.log(maxx);

// ! practic question

// ? 1 check if all numbers in our array are multiples of 10 or Not

let mulArr = [20, 30, 50, 40];

let mul = mulArr.every((el) => el % 10 == 0);

if (mul == true) {
  console.log("All numbers in our array are multiples of 10");
} else {
  console.log("not multiples of 10");
}

// ? 2 create a function of find the min number in an array

const min = (minArr) => {
  let min = minArr.reduce((res, el) => {
    if (res > el) {
      return el;
    } else {
      return res;
    }
  });

  return min;
};

let minArr = [2, 5, 2, 7, 3, 7, 4];

console.log(min(minArr));

// ! default paramitar

function sum(a, b = 3) {
  return a + b;
}

console.log(sum(2, 4)); // a = 2, b = 4 == 6
console.log(sum(2)); // a = 2 , b = 3 == 5

function sums(a = 3, b) {
  return a + b;
}

console.log(sums(2, 5)); // a = 2, b=5 == 7
console.log(sums(3)); // a= 3 ,b = undifaine == Nan

// ? default paramitar ko hamesa last me likhate hai kuy ki ye by order hote hai

// ! spred

let spreArr = [2, 4, 6, 3, 6, 3];
console.log(2, 4, 6, 3, 6, 3); //same
//? or
console.log(...spreArr); //sab ko alg alg kar dega

console.log(
  Math.min(
    spreArr[0],
    spreArr[1],
    spreArr[2],
    spreArr[3],
    spreArr[4],
    spreArr[5]
  )
);
// ? or
console.log(Math.min(...spreArr));

spreArr.push(-3);

console.log(Math.min(...spreArr));

let str = "apnaCollege";
console.log(...str);

// !spread whit array literal

let arrlit = [2, 4, 6, 8];

// ? arr copy me bhi kam ata hai

let newarrlit = [...arrlit];

console.log(newarrlit);
newarrlit.push(10);
console.log(newarrlit);
console.log(arrlit);

let cahar = [..."hello"];
console.log(cahar);

let evens = [2, 4, 6, 8, 10];
let odds = [1, 3, 5, 7, 9];

let oddEven = [...evens, ...odds];
console.log(oddEven);

// ! spred whit Object

let obj = {
  email: "arvnd@gmail.com",
  pass: 2434,
};

let newObj = { ...obj, city: "aurangabad" };
console.log(newObj);

// ! chaining on arrray to Object;

let arrObj = [1, 2, 4, 5, 6];

// key me 0123 prit hoga

let object = { ...arrObj };
console.log(object); //Object { 0: 1, 1: 2, 2: 4, 3: 5, 4: 6 }

let strObj = { ..."hello" };
console.log(strObj); //Object { 0: "h", 1: "e", 2: "l", 3: "l", 4: "o" }

// ! rest =  funcion sum (...args){
// ! return args.reduce((sum , el) => sum+el);
// ! }

// ! rest ko ham function arguments ko arrays me change karne ke liye use karte hai taki array ka total method aply ho sake

function sum() {
  return arguments.reduce((sum, el) => sum + el);
}

// console.log(sum(2,4,6,4)); //error arguments.reduce is not a function

// useing rest

function sum(...args) {
  return args.reduce((sum, el) => sum + el);
}

console.log(sum(1, 3, 4, 5));

function mindd(msg, ...args) {
  console.log(msg);
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}

console.log(mindd("hello", 29, 5, 2, 5, 3, 3, 734));

// ! distructuring ka use ak array multipal value ko kisi or variabal me store karne ke liye use karte hai ex

// ? ex1
let dist = ["tony" ,"bruce" ,"peter" ,"steve","thor"];

let winner = dist[0];
let luser = dist[1];

console.log(winner);
console.log(luser);

//? ex2

let dist2 = ["tony" ,"bruce" ,"peter" ,"steve","thor"];

let [winner2 ,looser2] = dist2;

console.log(winner2);
console.log(looser2);

//? ex3

let dist3 = ["tony" ,"bruce" ,"peter" ,"steve","thor"];

let [winner3 , looser3 , ...other] = dist3;

console.log(winner3);
console.log(looser3);
console.log(other); // store in form of array [ "peter", "steve", "thor" ]

// ! Object distucturing

//? ex

const students = {
name:"amit",
class:9,
age:14,
subject:["hindi","english","math"],
username:"karan@123",
password:"1o3o03pe"
}

let {username,password,...others } = students;
console.log(username);
console.log(others); // object ki traha store hoga{ name: "amit", class: 9, age: 14, subject: (3) […] } 

// ? ex2 
const students2 = {
  name:"amit",
  class:9,
  age:14,
  subject:["hindi","english","math"],
  username:"karan@123",
  password:"1o3o03pe"
  }

  let {username:user, password:pass} = students2;

  console.log(user);
  console.log(pass);
  // ? console.log(username); //error username is not defined dikaye ga kyu ki key change kar diya hai
  
  //? ex3

  // const students3 = {
  //   name:"amit",
  //   class:9,
  //   age:14,
  //   subject:["hindi","english","math"],
  //   username:"karan@123",
  //   password:"1o3o03pe"
  //   }

  //   let {name:names, class:classs, city:place = "mumbai"} = students3;

  //   console.log(names);
  //   console.log(place);
    // ? console.log(city); //error city is not defined kyu ki city ki jagha par place kar diye hai

// ? parctic qustion 1
// ?Square and sum the array elements using the arrow function and then find the average of the array

  let arrsss = [2,5,3,4,2,3,3,];

  let square = arrsss.map((num) => num*num);
  console.log(square)
  let sumsss = square.reduce((sum,el) => sum+el);
  let avarage = sumsss/arr.length;
  console.log(avarage);


// ? parctic qustion 2
// ?Create a new array using the map function whose each element is equal to the original element plus 5.

let arrid = [39,3,4,7,7,4,454,455,];

let newarr = arrid.map((num) => num+5);
console.log(newarr);

// ? parctic qustion 3
//? Create a new array whose elements are in uppercase of words present in the original array

let wordArr = ["adam","peter","bruce","stevs"];

console.log(wordArr.map((el) => el.toUpperCase()));

function doubleds (...arg){
  let double = arg.map((ml) => ml*2);
  console.log(double);
}

doubleds(3,6,3,5,23,);

let doubleAndReturn = (arg ,...args) => [...arg,...args.map((mul) => mul*2)];

console.log(doubleAndReturn([2,3,5,6],3,5,6,7)); //Array(8) [ 2, 3, 5, 6, 6, 10, 12, 14 ]

// ? parctic qustion 3
//? . Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.


let mergeObjects = (object , mergeObjects) => ({...object,...mergeObjects});

console.log(mergeObjects({name:"arvind",sirName:"kumar"},{city:"noyda",sector:"33"}));