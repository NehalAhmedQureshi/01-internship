
// var user = 'nehal'
// var nehal = user
// nehal = 'arib'
// * example of primitive : non-mutable 
// console.log("🚀 ~ user:", user)  //? nehal
// console.log("🚀 ~ nehal:", nehal) //? arib


//  * example of non-primitive : mutable objects
// var obj = {user :'nehal'}
// var dpobj = obj

// dpobj.age =17.5 // ? modified original obj

// console.log("🚀 ~ obj~user:", obj.age) //? 17.5
// console.log("🚀 ~ dpobj~user:", dpobj.age) //? 17.5

// var arr = [2,4,3,4]
// var dparr = arr

// dparr.splice(0,0,'nehal') // ? modified original arr

// console.log(arr[0]); // ? nehal
// console.log(dparr[0]); // ? nehal

// var str = 'nehal'
// var dpstr = str

// dpstr = 'arib' // ? cann't modified original str

// console.log("🚀 ~ str:", str) //? nehal
// console.log("🚀 ~ dpstr:", dpstr)  //? arib

// * hoisting - Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope (global or local) during the compilation phase, before the code is executed. This means that you can use variables (created with var keyword) and functions before they are declared in the code.
// !Key Points about Hoisting:Only Declarations are Hoisted:
//! For variables, only the declaration (e.g., var x;) is hoisted, not the initialization (e.g., x = 5;).
//! Function declarations are hoisted in their entirety.
// !Different Behavior for var, let, and const:
// !var declarations are hoisted, and their value is set to undefined until the code assigns a value.
// !let and const are hoisted but are not initialized. Accessing them before their declaration results in a ReferenceError because they are in the "temporal dead zone" (TDZ).
//! Function Declarations:
// !Entire function declarations are hoisted, allowing them to be called before they appear in the code.


// user = 'nehal'

// console.log("🚀 ~ userz:", user) //? undefined
// let person = { name: "Alice", age: 30 };
// Object.seal(person);

// person.age = 31;  // This works
// delete person.name;  // This won't work
// console.log(person);  // Output: { name: "Alice", age: 31 }
// person.fname = 'doe'
// console.log(person.fname);
// let animal = {
//      speak: function() {
//        console.log("Animal makes a sound");
//      },
//      name:'abc'
//    };
   
//    let dog = Object.create(animal);
//    console.log("🚀 ~ dog:", dog)
//    dog.speak();  // Outp`ut: Animal makes a sound
//    let person = { name: "Alice", age: 25, city: "New York" };

// Object.entries(person).forEach(([key, value]) => {
//   console.log(key + ": " + value);  // Output: name: Alice, age: 25, city: New York
// });
// const array = ['nehal',0,'arslan',true]
// for (const key of array) {
//   console.log(key);
// }
// * for...in loop return keys or indexes as well as for of...loop return value
// const obj = {
//   name:'nehal',
//   age:'17'
// }
// array.forEach(element => {
//   console.log("🚀 ~ element:", element)
  
// });
// * for each is only for array , strings or array like objects
// console.log(array.reduce((accumulator , currentValue)=>{
//   return(accumulator+currentValue);
  
// },0))
const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// const iterator = colors.keys();
// console.log("🚀 ~ iterator:", iterator)
// for (const key of iterator) {
//   console.log(`${key}: ${colors[key]}`);
// }
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

// const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']
// console.log(Array.prototype.colors);
// console.log(colors.constructor(8,8,9))
// console.log(colors)
// colors.copyWithin()
// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 2);  // Copy elements from index 0 to 2 (not including 2) to index -2
// console.log(arr.every());  // Output: [1, 2, 3, 4, 1]
let arr = [1, 2, 3, 4, 5];
let result = arr.slice(1,-1);
console.log(result);
