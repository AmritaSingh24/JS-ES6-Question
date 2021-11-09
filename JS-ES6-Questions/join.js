//Write a simple JavaScript program to join all elements of the following array into
// a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

const colorArr = ['Red', 'blue', 'Green', 'Black'];

let joined = colorArr.join(',');
console.log(joined);

joined = colorArr.join('+');
console.log(joined);

//Custom Function

let join1 = '';
let join2 = '';

colorArr.forEach((x, index) =>{
    if(index<colorArr.length-1){
    join1 += x+",";
    join2 += x+"+";
    }
    else{
        join1 += x;
        join2 += x;
    }
});
console.log(join1);
console.log(join2);