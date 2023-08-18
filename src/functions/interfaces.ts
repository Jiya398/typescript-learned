interface Usesr {
     name: string;
     age: number;
   }

const usesr: User = {
     name: 'John Doe',
     age: 30,
   };


   interface Person {
     name: string;
     age: number;
   }
   function greet(persons: Person) {
     return "Hello " + persons.name;
}


//types vs interfaces
interface Point {
     x: number;
     y: number;
}
interface SetPoint {
     (x: number, y: number): void;
}


type Correct = {
     x: number;
     y: number;
};
type SetCorrect = (x: number, y: number) => void;




//Extending Interfaces
interface Shape {
     width: number;
     height: number;
   }

   interface Square extends Shape {
     sideLength: number;
   }

   let square: Square = {
     width: 10,
     height: 10,
     sideLength: 10,
   };


//Interface Declaration
interface Person {
     firstName: string;
     lastName: string;
     //age?: number;

     getFullName(): string;
   }


//Hybrid Types
type StringOrNumber = string | number;

type Education = {
     degree: string;
     school: string;
     year: number;
   };
   
   type People = {
     name: string;
     age: number;
     email: string;
     education: Education;
   };