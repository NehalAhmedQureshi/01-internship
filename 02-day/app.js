
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

console.log("🚀 ~ user:", user) //? undefined

var user = 'nehal'
