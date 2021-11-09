//  Write a JavaScript program to sort the items of an array.

let numbers = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 , 3984723, 200, 400, 37864];

// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });
numbers.sort((a, b) => a - b);


console.log(numbers);