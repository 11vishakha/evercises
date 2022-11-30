

class Mobike {
    bno; phno; name; days; charge

    input() {
        this.bno = prompt("Enter your bike number")
        this.phno = prompt("Enter your phone number")
        this.name = prompt("Enter the name of customer")
        this.days = prompt("Enter the number of days the bike is taken on rent")
        
    }

    compute() {
        if (this.days <= 5) {
            this.charge = this.days * 500;
        }
        else if (this.days && this.days <= 10) {
            this.charge = ((5 * 500) + ((this.days - 5) * 400))
        }
        else if (this.days <= 10) {
            this.charge = ( (5 * 500) + (5 * 400) + ((this.days - 10) * 200))
        }
    }
    display() {
        document.write("Bike number:" + " " + this.bno + "<br>")
        document.write("phone no: " + " " + this.phno + "<br>")
        document.write("Name of customer: " + " " + this.name+"<br>")
        document.write("Numbers of days for bike taken on rent: " + " " + this.days+"<br>")
        document.write("Charge: " + " " + this.charge + "<br>")
    }
}

let m= new Mobike();
m.input()
m.display()
m.compute()