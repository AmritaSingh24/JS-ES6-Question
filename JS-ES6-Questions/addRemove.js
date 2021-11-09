// Write two functions to add and remove elements from an array.

let arr = [1,2,3,4];

function add (array){
    array.push(5, 6);
    console.log(array);
}
add(arr);

function removing (array){
    array.pop();
    console.log(array);
}
removing(arr);

