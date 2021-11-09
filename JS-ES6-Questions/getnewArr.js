// Use map() to multiply elements of arr = [1,2,3,4] with 2 to get this newArr = [2,4,6,8].

let a = [1, 2, 3, 4];
let b = a.map(x => x * 2); 

console.log(b);

// Custom function
let newArr = [];

function multiply(arr){
    
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index] * 2;
        newArr[index] = element;
    }

}

multiply(a);

console.log(newArr);