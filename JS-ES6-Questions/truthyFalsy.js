// Write a JavaScript function to retrieve falsy and truthy values from all elements in an array.

let array = [NaN, 0, 15, false, -22, undefined, 47, null];

function countTruthy (arrayList){
    let truthy = [], falsy= [];
    for (let value of arrayList){
        if(value){
            truthy.push(value)
        } else {
            falsy.push(value)
        }
    }
    return [truthy,falsy]
}

let values = countTruthy(array);
let truthy = values[0];
let falsy = values[1];

console.log(truthy, falsy)