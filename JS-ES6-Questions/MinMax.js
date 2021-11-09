//Write a function to find the maximum and minimum number from an array.

const array = [17,34,2,4,15,20,43,56];

let min = Math.min(...array);
let max = Math.max(...array);

console.log(`Minimum: ${min}, Maximum: ${max}`)

//Custom Function

const forLoopMinMax = (arr) => {
   // console.log(arr);

  let min = arr[0], max = arr[0]

  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    min = (value < min) ? value : min;
    max = (value > max) ? value : max;
  }
  console.log(`Minimum: ${min}, Maximum: ${max}`)

}

forLoopMinMax(array);