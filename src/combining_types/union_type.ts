//Union Types

//let varName = typeA | typeB; 

function printId(id: number | string) {
     console.log("Your ID is: " + id);
}


function welcomePeople(x: string[] | string) {
     if (Array.isArray(x)) {
       // Here: 'x' is 'string[]'
       console.log("Hello, " + x.join(" and "));
     } else {
       // Here: 'x' is 'string'
       console.log("Welcome lone traveler " + x);
     }
}


// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
     return x.slice(0, 3);
   }