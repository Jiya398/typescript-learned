function add(a: number, b: number): number {
     return a + b;
}


const multiply = (a: number, b: number): number => {
     return a * b;
};


let divide: (a: number, b: number) => number;
divide = (a, b) => {
  return a / b;
};



function greeter(fn: (a: string) => void) {
     fn("Hello, World");
   }
function printToConsole(s: string) {
     console.log(s);
   }
greeter(printToConsole);