//generics
function identity<T>(arg: T): T {
     return arg;
   }
   
   let output = identity<string>('Hello'); // type of output will be 'string'


   //types
   class GenericNumber<T> {
     //zeroValue: T;
     //add: (x: T, y: T) => T;
   }
   
   let myGenericNumber = new GenericNumber<number>();
   //myGenericNumber.zeroValue = 0;
   //myGenericNumber.add = function (x, y) {
     //return x + y;
   //};


   //constraints
   interface Lengthwise {
     length: number;
   }
   
   function loggingIdentity<T extends Lengthwise>(arg: T): T {
     // Now we know it has a .length property, so no more error
     console.log(arg.length);
   
     return arg;
   }
   
   //loggingIdentity(3); // Error, number doesn't have a .length property
   loggingIdentity({ length: 10, value: 3 }); // OK