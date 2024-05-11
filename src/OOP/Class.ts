{

    // Understanding Classes:
    class Animal {
        name: string;
        specific: string;
        sound: string
        // Create an instance of animal

        constructor(name: string, specific: string, sound: string) {
            this.name = name;
            this.specific = specific
            this.sound = sound;
        }

        // When you create a function in Class its call method
        makeSound() {
            console.log(`This ${this.name} says ${this.sound}`)
        }
        // console the animal name and his sound
    }
    const cat = new Animal("Aduri", "cat", "Meaw Meaw")
    const Dog = new Animal ("Tiger", "Dog", "Geow Geow")
    Dog.makeSound()
    Output : This Tiger says Geow Geow

    // Class Inheritance:

// Public type
    class Animal {

        constructor(public name: string) {
            this.name = name;
            // this.specific = specific
            // this.sound = sound;
        }
    }
    class Dog extends Animal {
        bark() {
            console.log(`${this.name} barked`)
        }
    }
    const dog = new Dog('Rox')
    dog.bark()



    // Represents an animal with a name (private).
    class Animal {
        private name: string; // This is a member variable

        constructor(name: string) { 
            this.name = name; // This assigns the parameter 'name' to the member variable 'name'
        }

        move(distance: number) {
            console.log(`${this.name} moved ${distance} meters.`);
        }
    }

    const animal = new Animal("Cat");
    console.log(animal.name); 


    // Protected Access Modifier
    class Animal {
        protected name: string
        constructor(protected name: string) { }
        hello(distance: number) {
            console.log(`${this.name} move to ${distance} meater`)
        }
    }
    const animal = new Animal("Cat")
    
    console.log(animal?.name)
    // animal.hello(5)
    // animal.hello()
}