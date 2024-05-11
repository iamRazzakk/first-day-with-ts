{
    class Person {
        getSleep() {
            console.log(`I am sleeping 8 hour`)
        }
    }
    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping 7 hour`)
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping 6 hour`)
        }
    }
    const getSleepingHour = (params: Person) => {
        params.getSleep()
    }
    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()
    getSleepingHour(person3)


    // Another exampole

    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        redius: number
        constructor(redius: number) {
            super()
            this.redius = redius;
        }
        getArea(): number {
            return Math.PI * this.redius * this.redius;
        }
    }
    class Rectangle extends Shape {
        height: number;
        width: number
        constructor(height: number, width: number) {
            super()
            this.height = height;
            this.width = width
        }
        getArea(): number {
            return this.height * this.width;
        }
    }
    const getShapeArea = (params: Shape) => {
        console.log(params.getArea())
    }
    const shape = new Shape()
    const circle = new Circle(10)
    const rectangle = new Rectangle(20,7)
    getShapeArea(shape)
    getShapeArea(circle)
    getShapeArea(rectangle)
}