{
// Leats learn Abstraction useing interface and abstract
    // Take Idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void
    }
    // Real implementation 
    class Car implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting Engine`)
        }
        stopEngine(): void {
            console.log(`I am Stop my engine`)
        }
        move(): void {
            console.log(`I am moving`)
        }
    }
    const toyota = new Car();
    toyota.startEngine()


    // Leats Learn Abstrac class
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void
    }

    class toyotaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting Engine`)
        }
        stopEngine(): void {
            console.log(`I am Stop my engine`)
        }
        move(): void {
            console.log(`I am moving`)
        }
    }
}