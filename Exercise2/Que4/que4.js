

class employee {
    tax; name; income_tax; pan;
    input() {
        this.pan = prompt("Enter your pan")
        this.name = prompt("Enter your name")
        this.income_tax = parseInt(prompt("Enter your income tax"))
    }
    display() {
        // document.write("pan Number:  this.name  tax-income  tax")
        document.write(this.pan + " "+"<br>" + this.name + " "+"<br>" + this.income_tax + " "+"<br>" + this.tax);
    }
    calc() {
        if (this.income_tax <= 100000)
            this.tax = 0;
        else if (this.income_tax > 100000 && this.income_tax <= 150000)
            tax = 10 / 100.0 * (this.income_tax > 150001 && this.income_tax <= 250000)
        let tax = 5000 + 20 / 100.0 * (this.income_tax - 250000);
    }
}

let e1 = new employee()
e1.input()
e1.calc()
e1.display()