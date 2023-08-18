type Name = string;
type Age = number;
type User = { name: Name; age: Age };

const userss: User = { name: 'John', age: 30 };


type Points = {
     x: number;
     y: number;
};

   // Exactly the same as the earlier example
   function printCoord(pt: Point) {
     console.log("The coordinate's x value is " + pt.x);
     console.log("The coordinate's y value is " + pt.y);
   }

   printCoord({ x: 100, y: 100 });


   