// Write a JavaScript function to merge two arrays and remove all duplicated elements.

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

let array3 = array1.concat(array2);
array3 = array3.filter((item,index)=>{
    console.log(item,index)
   return (array3.indexOf(item) == index)
})
console.log(array3);

// function merge_array(array1, array2) {
//     var result_array = [];
//     var arr = array1.concat(array2);
//     var len = arr.length;
//     var assoc = {};

//     while(len--) {
//         var item = arr[len];
//         console.log(item)

//         if(!assoc[item]) 
//         { 
//             result_array.unshift(item);
//             assoc[item] = true;
//         }
//     }

//     return result_array;
// }

// console.log(merge_array(array1, array2));