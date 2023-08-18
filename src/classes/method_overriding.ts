class Animals {
     makeSound(): void {
       console.log('Making animal sound');
     }
   }
   
   class Dogs extends Animal {
     makeSound(): void {
       console.log('Bark');
     }
   }
   
   let animals: Animal;
   
   animal = new Dog();
   animal.makeSound(); // Output: Bark