

class Student {
    name; hindi; english; maths; computer; grade; average;
    accept() {
        this.name = prompt("Enter your name")
        this.hindi = parseInt(prompt("Enter marks of hindi"))
        this.english = parseInt(prompt("Enter marks of english"))
        this.maths = parseInt(prompt("Enter marks of maths"))
        this.computer = parseInt(prompt("Enter marks of computer"))
      }
    calcavg() {
        this.average = (this.hindi + this.english + this.maths + this.computer) / 4;
        document.write("Average of marks: " + this.average + "<br>")
        if (this.average >= 90) {
            document.write("Grade A++")
        }
        else if (this.average >= 75 && this.average <= 89) {
            document.write("Grade A ")
        }

      }
}

let sObj = new Student();
sObj.accept();
sObj.calcavg();