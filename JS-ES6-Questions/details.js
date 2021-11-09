// Write a JavaScript function to find all the details of a particular book by passing

let library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

 function details(id){

    let obj = library.find(x => x.libraryID === id);
    console.log(obj);
   
 }

 details(1254);