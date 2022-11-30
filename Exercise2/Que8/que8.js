

class Bill {
    name; consumerno; unitconsume; billamt;
    input() {
        this.name = prompt("Enter your name:")
        this.consumerno = prompt("Enter your consumer number:")
        this.unitconsume = prompt("Enter the total unit consumed:")
    }
   compute(){
    if(this.unitconsume<=100){
        this.billamt=this.unitconsume*1.20
    }
    else if(this.unitconsume>100 && this.unitconsume<=200)
      this.billamt=this.unitconsume*2.20
    else if(this.unitconsume>200 && this.unitconsume<=300)
      this.billamt=this.unitconsume*3.20
    else if(this.unitconsume>300)
    this.billamt = this.unitconsume*4
   }
   display(){
    document.write("Customer Name: ",this.name+"<br>")
    document.write("Consumer number: ",this.consumerno+"<br>")
    document.write("Unit consumed: ",this.unitconsume+"<br>")
    document.write("Bill Amount: ",this.billamt+"<br>")
   }
}

obj = new Bill();
obj.input();
obj.compute();
obj.display();