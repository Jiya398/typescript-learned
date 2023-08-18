//any
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;


//object
// The parameter's type annotation is an object type
function printCoords(pt: { x: number; y: number }) {
     console.log("The coordinate's x value is " + pt.x);
     console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });


//unkwnown
function f2(a: unknown) {
     // Error: Property 'b' does not exist on type 'unknown'.
     //a.b();
}


//never- Function returning never must not have a reachable end point
function error(message: string): never {
     throw new Error(message);
}

function fail() {
     return error('Something failed');
}

function infiniteLoop(): never {
     while (true) {}
}