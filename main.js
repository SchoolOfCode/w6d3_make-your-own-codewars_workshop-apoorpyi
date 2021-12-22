/* 
👉 Write your kata here!
 
Check in an array if multiples of odd numbers are greater than multiples of even numbers.
You may assume the array will always contain positive integers and will not be empty.

Example: [1,2,3,4,5]
 1*3*5 > 2*4
 Odd wins. 15 is greater than 8

 [2,3,4,6,7]
 2*4*6 > 3*7
 Even wins(48 > 21)
 Even wins. 48 is greater than 21

[22]
Even wins. 22 is even

[19]
Odd wins. 19 is odd


*/


//👉 Write the function your CodeWarriors will start with below here:
/*Take an array of positive integers.
  Loop through the array to find if an element is odd or even.
  If its odd, multiply into oddTotal
  If its even, multiply into evenTotal
  Compare oddTotal with evenTotal
  Return "The greater multiple is ${*Total}"*/

export function isOddOrEvenMultipleWinner(arr) {
    //Write your solution here

    if (arr.length === 1){
      if (arr[0] % 2 === 0){
        return `Even wins. ${arr[0]} is even`;
      }else return `Odd wins. ${arr[0]} is odd`;
    }

    let oddTotal = 1;
    let evenTotal = 1;
    arr.forEach(num => {
      if (num % 2 === 0){
        evenTotal *= num;
      }else oddTotal *= num;
    });
    if (oddTotal > evenTotal) {
      return `Odd wins. ${oddTotal} is greater than ${evenTotal}`
    }else {
      return `Even wins. ${evenTotal} is greater than ${oddTotal}`
    }
}

const result = isOddOrEvenMultipleWinner([0]);
console.log(result)