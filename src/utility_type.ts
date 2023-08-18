//partial
interface Users {
     name: string;
     age: number;
     email: string;
   }
   
   function createUser(user: Partial<User>): User {
     return {
       name: 'John Doe',
       age: 30,
      // email: 'john.doe@example.com',
       ...user,
     };
   }

   const newUser = createUser({ name: 'Jane Doe' });

console.log(newUser);
// Output: { name: 'Jane Doe', age: 30, email: 'john.doe@example.com' }


//pick
interface Todo {
     title: string;
     description: string;
     completed: boolean;
   }
   
   type TodoPreview = Pick<Todo, 'title' | 'completed'>;
   
   const todo: TodoPreview = {
     title: 'Clean room',
     completed: false,
   };


//Omit


//readonly


//record


//exclude


//extract


//non nullable


//parameters


//return type


//instance type


//awaited

