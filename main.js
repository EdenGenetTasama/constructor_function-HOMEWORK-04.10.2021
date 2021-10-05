function getInfo(first, last, age, yearOfBirth) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.yearBirth = yearOfBirth;
}

const personOne = new getInfo("eden", "tasama", 24, 1996);
const personTwo = new getInfo("Yafit", "Samuel", 25, 1996);

console.log(personOne, personTwo);

/******************************************************************************************** */

// צור פונקציית בנאי של מוצר: שם, מחיר, הנחה, מערך תמונות(לינקים).

function Products(name, price, discount, arrayOfImg) {
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.arrayOfImg = arrayOfImg;
  this.update = function (key, value) {
    this[key] = value;
  };
}

let arrayOfProducts = [];

const productOne = new Products("book", 200, 20, [
  "https://cdn.pixabay.com/photo/2021/09/28/14/39/horse-6664660__340.jpg",
  "https://cdn.pixabay.com/photo/2017/12/31/13/49/barn-owl-3052382__340.jpg",
]);

const productTwo = new Products("phone", 1000, 10, [
  "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__340.jpg",
  "https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__340.jpg",
]);
const productThree = new Products("computer", 3000, 30, [
  "https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373__340.jpg",
  "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__340.jpg",
]);

arrayOfProducts.push(productOne, productTwo, productThree);
console.log(arrayOfProducts);

productOne.update("price", 50000);
console.log(productOne);

/*************************************************************** */
// צור מערך של רכבים(3 רכבים): דגם, מחיר, שנתון, מהירות ,
// פונקציית מאיץ(מוסיפה 10 למהירות),
//  פונקציית מאט(מורידה 10 מהמהירות) ללא שימוש בפונקציית בנאי.

// let arrayOfCars = [{
//     brand: "toyota",
//     price: 20000,
//     year :  2010,
//     fast: 120,
//     slowFunction : function() {
//         this.fast -= 15
//     },
//     fasterFunction : function() {
//         this.fast += 10
//     }
//     },
//     {   brand: "Suzuki",
//     price: 50000,
//     year :  2002,
//     fast: 190,
//     slowFunction : function() {
//         this.fast -= 15
//     },
//     fasterFunction : function() {
//         this.fast += 10

//     }},
//     {   brand: "mazda",
//     price: 10000,
//     year :  1990,
//     fast: 240,
//     slowFunction : function() {
//         this.fast -= 15
//     },
//     fasterFunction : function() {
//         this.fast += 10
//     }}]

//     arrayOfCars[2].fasterFunction();
//     console.log( arrayOfCars[2]);

// פונקצית בנאי

function CarateCarObject(brand, price, year, speed) {
  this.brand = brand;
  this.price = price;
  this.year = year;
  this.speed = speed;
  this.fasterFun = function () {
    this.speed += 15;
  };
  this.slowerFun = function () {
    this.speed -= 15;
  };
  this.update = function (key, value) {
    this[key] = value;
  };
}

const carOne = new CarateCarObject("toyota", 20000, 2010, 240);
const carTwo = new CarateCarObject("suzuki", 10000, 2021, 200);
const carThree = new CarateCarObject("mazda", 50000, 1996, 190);

carOne.update("year", 1800);

let arrayOfCarsTwo = [carOne, carTwo, carThree];

// console.log(arrayOfCarsTwo);

// arrayOfCarsTwo[0].slowerFun();
// console.log(arrayOfCarsTwo[0]);

/// /********************************************************************************************** *

//!צור פונקציית בנאי של משתמש: שם, אימייל, גיל, תמונת פרופיל(לינק).

function UserInfo(name, mail, age, profileImg) {
  if (typeof name == "string") {
    this.name = name;
    this.mail = mail;
    this.age = age;
    this.profileImg = profileImg;
    this.update = function (key, value) {
      this[key] = value;
    };
    this.render = function (element) {
      element.innerHTML = `<h1>${this.name}</h1> <p>${this.mail} , ${this.age}</p> <img src="${this.profileImg}">`;
    };
  } else {
    return null;
  }

  console.log(this.name);
}

// function UserInfo(name, mail, age, profileImg) {
//   if (typeof(name) != "string") {
//     return null;
//   }
//   this.name = name;
//   this.mail = mail;
//   this.age = age;
//   this.profileImg = profileImg;
//   this.update = function (key, value) {
//     this[key] = value;
//   };
//   this.render = function (element) {
//     element.innerHTML = `<h1>${this.name}</h1> <p>${this.mail} , ${this.age}</p> <img src="${this.profileImg}">`;
//   };
// {
// }

// console.log(this.name);
// };

const userOne = new UserInfo(
  "Eden",
  "eeeeeee@gmail.com",
  24,
  "https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg"
);

userOne.update("age", 25);

userOne.render(divElement);

console.log(userOne);

//!הוסף פונקציה לבנאי בשם render המקבל אלמנט עוטף ומציג את האובייקט על המסך.

//!צור מערך של כתבות: כותרת, מחבר, תאריך, פונקציית render - השתמש בבנאי על מנת ליצור אובייקט של כתבה
//!תרוץ על המערך ותציג את הכתבות על המסך

let arrayOfArticle = [];

function FunctionArticle({header, writer, date}) {
    this.header = header,
    this.writer = writer,
    this.date = date,
    this.render = function(element) {
      element.innerHTML = `<h1>${this.header}</h1> <p>${this.writer} , ${this.date}</p>`
      
    };
  ;
}


const bookOne = new FunctionArticle("eden", "eden","eden");
const bookTwo = new FunctionArticle("dddd","dddd","dddd");



arrayOfArticle.push(bookOne,bookTwo);
console.log(arrayOfArticle);

arrayOfArticle.forEach((item)=>{
item.render(divElementTwo);
})


