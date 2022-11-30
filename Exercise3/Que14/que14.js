

class hotel {
    Rno; Nod; Name; Tarrif;
    calc() {
        let amount;
        amount = this.Nod * this.Tarrif;
        if (amount > 10000)
            amount = amount * 1.05;
        return amount;
    }
    Chekin() {
        this.Rno = parseInt(prompt("Enter the room no:"));
        this.Name = prompt("Enter the name:")
        this.Tarrif = parseInt(prompt("Enter the tarrif:"))
        this.Nod = parseInt(prompt("Enter the no. of days:"))
    }
   Checkout(){
    document.write("Room no:"+this.Rno+"<br>")
    document.write("Name:"+this.Name+"<br>")
    document.write("Tarrif:"+this.Tarrif+"<br>")
    document.write("No. of days:"+this.Nod+"<br>")
    document.write("Amount:"+this.calc());
   }
}

let h=new hotel();
h.Chekin();
h.Checkout();