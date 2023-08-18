//Equality
function exampless(x: string | number, y: string | boolean) {
     if (x === y) {
       // We can now call any 'string' method on 'x' or 'y'.
       x.toUpperCase();
       y.toLowerCase();
     } else {
       console.log(x);
       console.log(y);
     }
}


function examples(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
        //(method) String.toUpperCase(): string
    y.toLowerCase();
        //(method) String.toLowerCase(): string
  } else {
    console.log(x);
      //(parameter) x: string | number
    console.log(y);
      //(parameter) y: string | boolean
  }
}

