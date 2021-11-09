//Write a program to find the total sum of elements in an array.

const arr = [1, 2, 3, 4, 5, 6];
const  sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(sum);

// Custom function

let sumArr = 0;

function sumElement(array){
    array.forEach((x)=>{
        sumArr += x;
    });
    console.log(sumArr);
}
sumElement(arr);


