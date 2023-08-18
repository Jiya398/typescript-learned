//keyof operator
interface Users {
     name: string;
     age: number;
     location: string;
}

type UserKeys = keyof Users; // "name" | "age" | "location"
const key: UserKeys = 'name';


type Pointss = { x: number; y: number };
type Pi = keyof Point;
    //type Pi = keyof Point

type Arrayish = { [n: number]: unknown };
type Ai = keyof Arrayish;
        //type Ai = number

type Mapish = { [k: string]: boolean };
type Mi = keyof Mapish;
        //type M = string | number