"use strict";

// var str = 'nehal-ahmed-qureshi'
// var spl = str.split('n')
// console.log("🚀 ~ spl:", spl) //? [ '', 'ehal-ahmed-qureshi' ]
// var str = '1234567890'
// var spl=str.slice(4,8)
// console.log("🚀 ~ spl:", spl)//?5678
// let text = "apple, banana, apple";
// let newText = text.replace(/apple/g, "orange");
// console.log(newText);  //? Output: "orange, banana, orange"
// let text = "apple, banana, apple";
// let newText = text.replace('apple', "orange");
// console.log(newText);  //? Output: "orange, banana, orange"
// let text = "hello, world";
// let titleText = text.charAt(0).toUpperCase() + text.slice(1);
// let upperText = text.charAt(0).toUpperCase() + text.slice(1,7) + text.charAt(7).toUpperCase() + text.slice(8)
// console.log("🚀 ~ upperText:", upperText) //?Hello World
// console.log(titleText);  //? Output: "Hello, world"
var text = "JavaScript"; // console.log(text.padStart(3, "0"));  //? Output: "005"
// console.log(text.padEnd(3, "0"));    //? Output: "500"
// console.log(text.padEnd(6, "0")); //?Output: "600000"
// function reverseString(text) {
//      var result = text.split('').reverse().join('')
//      console.log("🚀 ~ reverseString ~ result:", result)
//      return result
// }
// reverseString(text)
// const vowels = 'aeiou'
// function calcVowels(text){
//      var count = 0
//           for (let j = 0; j < text.length; j++) {
//                if (vowels.includes(text[j])) {
//                     ++count
//                }
//           }
//           return count
//      console.log('count =>',count);
// }
// const df = calcVowels('texat')
// console.log("🚀 ~ df:", df)
// *version 1 (not remove multiple space)
// function removeSpc(value){
//      console.log(value.split(' ').join(''));
// }
// *version 2 (fix remove multiple space)
// function removeSpc(value){
//      console.log(value.split(/\s+/).join(''));
// }
// removeSpc('dfdf dfdfd dfd   f')
// (
//      function(value){
//           var word = value.split(' ')
//           for (let i = 0; i < word.length; i++) {
//                word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1)
//           }
//           return word.join(' ')
//      }
// )('Hello Nehal')
// function isPalan(value){
//      console.log(value.split(' ').join('').toLowerCase());
//      console.log();
//      var reverseValue = value.split(' ').join('').split('').reverse().join('').toLowerCase()
//      if (value.split(' ').join('').toLowerCase() == reverseValue) {
//           return true
//      }else{
//           return false
//      }
// }
// const result = isPalan('A man a plan a canal Panama')
// console.log("🚀 ~ result:", result)
// function order(value){
//      var word = value.split(' ');
//      for (let i = 0; i < word.length; i++) {
//           word[i] = word[i].split('').reverse().join('')
//      }
//     return word.join(' ')
// }
// order('hello world')
// function nonRepeating(value){
//      var letter = value.toLowerCase().split('')
//      for (let i = 0; i < letter.length; i++) {
//           value = value.split(letter[i]).join()
//           if(letter[i].includes(value)){
//                console.log(letter[i]);
//           }else{
//                console.log(letter[i]);
//                return letter[i]
//           }
//      }
// }
// nonRepeating('Swiss')
// const regex = new RegExp('target', 'g')
// console.log("🚀 ~ regex:",typeof regex)

var str = '0123456789';
console.log(str.slice(2, 6));