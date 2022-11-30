

class ParkingLot {
    vno; hours; double_bill
    input() {
        this.vno = prompt("No. of vehicles:")
        this.hours = prompt("Enter the no. of hrs:")
    }
    calculate() {
        if (this.hours <= 1) {
           this.double_bill = this.hours * 3
        }
        else
           this.double_bill = 3+(this.hours-1)*1.5;
        }
    display(){
          document.write("No. of vehicles"+this.vno+"<br>")
          document.write("No. of hours "+this.hours+"<br>")
          document.write("Extra Charges "+this.double_bill)
        }
}

let parking = new ParkingLot();
parking.input()
parking.calculate()
parking.display()