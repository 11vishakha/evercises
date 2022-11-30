

class Salary {
    name; address; sub; sal; it; phone;
    input() {
        this.name = prompt("Enter your name")
        this.address = prompt("Enter your address")
        this.sub = prompt("Enter subject specialization")
        this.phone = prompt("Enter your phone no.")
        this.sal = prompt("Enter your monthly salary")
    }
    display() {
        document.write("name:" + this.name+" "+"<br>");
        document.write("address:" + this.address+" "+"<br>");
        document.write("specialization:" + this.sub+" "+"<br>");
        document.write("phone:" + this.phone+" "+"<br>");
        document.write("sal:" + this.sal+" "+"<br>");

    }
    calc() {
        let aSal;
        aSal = 12 * this.sal;
        if (aSal > 175000) {
            this.it = 5 / 100.0 * (aSal - 175000)
        }
        else {
            this.it = 0
        }
    }
}
let obj= new Salary();
obj.input();
obj.display();
obj.calc()