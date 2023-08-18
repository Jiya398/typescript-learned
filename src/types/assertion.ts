//As Const
const colors = ['red', 'green', 'blue'] as const;

let x = "hello" as const;
let y = [10, 20] as const;
let z = { text: "hello" } as const;

// Works with no types referenced or declared.
// We only needed a single const assertion.
function getShapes() {
     let result = [
       { kind: "circle", radius: 100 },
       { kind: "square", sideLength: 50 },
     ] as const;
     return result;
   }
   for (const shape of getShapes()) {
     // Narrows perfectly!
     if (shape.kind === "circle") {
       console.log("Circle radius", shape.radius);
     } else {
       console.log("Square side length", shape.sideLength);
     }
   }


//As Type
let nums = 42;
//let str =  nums as string;


//As Any- we can assign any value to anyValue, regardless of its type
let anyValue: any = 42;

anyValue = 'Hello, world!';
anyValue = true;


//Non Null Assertion -  we use the non-null assertion operator to tell the compiler that name will never be null
let names: string | null = null;
let namesLength = names!.length;


//Satisfies Keyword
type Colors = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];

const palette = {
     red: [255, 0, 0],
     green: '#00ff00',
     blue: [0, 0, 255],
   };
   //const redComponent = palette.red.at(0);
   const greenNormalized = palette.green.toUpperCase();