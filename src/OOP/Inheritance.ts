{
//Inheritance -OOP
    class Person {
        name: string;
        age: number;
        adress: string;
        phone: number;
        email?: string
        constructor(name: string, age: number, adress: string, phone: number, email: string) {
            this.name = name;
            this.age = age;
            this.adress = adress;
            this.phone = phone;
            this.email = email
        }
    }


    class Student extends Person {
        constructor(name: string, age: number, adress: string, phone: number, email: string) {
            super(name, age, adress, phone, email)
        }

        getSleep(numberOfHour: number) {
            console.log(`${this.name} will sleep for ${numberOfHour}`)
        }
    }
    const student1 = new Student("Md Abdur Razzak", 23, "Chittagong", +8801609502136, "mdabdurrazzakrakib290@gmail.com");
    student1.getSleep(8)
    class Teacher extends Person {
        designation: string;
        constructor(name: string, age: number, adress: string, phone: number, email: string, designation: string) {
            super(name, age, adress, phone, email)
            this.designation = designation;
        }
        getClass(numberOfHour: number) {
            console.log(`${this.name} will take class ${numberOfHour}`)
        }
    }
    const Teacher1 = new Teacher("Md Rakib", 30, "Chittagong", +8801878265664, "Mdabdurrazzakrakib290@gmail.com", "seniour teacher")
    Teacher1.getClass(8)

}