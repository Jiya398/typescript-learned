//interface
interface Person {
     name: string;
     age: number;
}

function greet(person: Person) {
     return 'Hello ' + person.name;
}



//class
class Car {
     make: string;
     model: string;
     year: number;

     constructor(make: string, model: string, year: number) {
       this.make = make;
       this.model = model;
       this.year = year;
     }

     drive() {
       console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
     }
}


//enum
enum Direction {
     Up = 1,
     Down,
     Left,
     Right,
}

enum UserResponse {
     No = 0,
     Yes = 1,
}
function respond(recipient: string, message: UserResponse): void {
     // ...
}
respond("Princess Caroline", UserResponse.Yes);

//string
enum Students {
     Name = "name",
     Gender = "gender",
     Address = "address",
     Motto = "motto",
}

//Heterogeneous enums- mixed with string and numeric members
enum BooleanLikeHeterogeneousEnum {
     No = 0,
     Yes = "YES",
}


//Arrays
const numbers: number[] = [1, 2, 3];



//Tuple
type StringNumberPair = [string, number];

const pair: StringNumberPair = ['hello', 42];

const first = pair[0];
const second = pair[1];



