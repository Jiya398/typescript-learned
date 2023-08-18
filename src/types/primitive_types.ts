//boolean
let isTrue: boolean = true;
let isFalse: boolean = false;


//number
let intValue: number = 42;
let floatValue: number = 3.14;


//string
let firstName: string = 'John Doe';


//void
function noop() {
     return;
}


//undefined
function doSomething(x: string | null) {
     if (x === null) {
       // do nothing
     } else {
       console.log('Hello, ' + x.toUpperCase());
     }
}

function liveDangerously(x?: number | null) {
     // No error
     console.log(x!.toFixed());
}


//null
