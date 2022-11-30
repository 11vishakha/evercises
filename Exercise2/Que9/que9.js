

class Emp {
    Emp_no; name; basic; da; hra; ta; pf; gross;
    get() {
        this.Emp_no = prompt("Enter Employee no.")
        this.name = prompt("Enter name:")
        this.basic = prompt("Enter basic salary:")
    }
    calc() {
        if (this.basic < 10000) {
            this.da = 0.4 * this.basic;
            this.ta = 0.08 * this.basic;
            this.hra = 0.14 * this.basic;
            this.pf = 0.07 * this.basic;
        }
        else if (this.basic >= 10000 && this.basic < 20000) {
            this.da = 0.45 * this.basic
            this.ta = 0.1 * this.basic
            this.hra = 0.12 * this.basic
            this.pf = 0.075 * this.basic
        }
        else if (this.basic >= 20000) {
            this.da = 0.53 * this.basic;
            this.ta = 0.12 * this.basic;
            this.hra = 0.1 * this.basic;
            this.pf = 0.08 * this.basic;
        }

        this.gross =(parseInt(this.basic)+parseInt(this.da)+parseInt(this.hra))
        - this.pf
    }

    display(){
        document.write("Employee no:"+this.Emp_no+"<br>")
        document.write("Employee Name:"+this.name+"<br>")
        document.write("Gross salary:"+this.gross+"<br>")
        document.write("pf amount:"+this.pf+"<br>")
    }
}

let emp=  new Emp()
emp.get()
emp.calc()
emp.display()