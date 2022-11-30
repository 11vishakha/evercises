

class ElectricBill{
    n;units;double_bill;
    accept(){
        this.n=prompt("Enter the name of customer:")
        this.units=prompt(("Enter no. of units consumed:"))
    }
    calculate(){
        if(this.units<=100)
        this.double_bill=2.00*this.units
       if(this.units<=300)
        this.double_bill=3.00*this.units
        if(this.units>300)
        this.double_bill=5.00*this.units
    }
    display(){
        document.write("Name of the customer:"+this.n+"<br>")
        document.write("No. of units consumed:"+this.units+"<br>")
        document.write("Bill amount:"+this.double_bill)
    }
}

let electricbill = new  ElectricBill();
electricbill.accept()
electricbill.calculate()
electricbill.display()