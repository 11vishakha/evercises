

class RailwayTicket {
    name; coach; mobno; amt; total_amt;
    accept() {
        this.name = prompt("Name of the customer")
        this.coach = prompt("Enter the type of coach(firstAC,secondAC,thirdAC)")
        this.mobno = prompt("Enter customer's mobile no.")
        this.amt = prompt("Enter the amt of ticket")
    }
    update() {
        if (this.coach == ("First_AC"))
            this.total_amt = this.amt + 700;
        else if(this.coach == ("Second_AC"))
          this.total_amt = this.amt +500;
        else if(this.coach == ("Third_AC"))
        this.total_amt = this.amt +250
        else 
        this.total_amt = this.amt;
     }
     display(){
        document.write("Name of the customer: "+this.name+"<br>")
        document.write("Type of Coach: "+this.coach+"<br>")
        document.write("Total amount: "+this.total_amt+"<br>")
        document.write("Mobile no:"+this.mobno)
     }
}

let railway= new RailwayTicket();
railway.accept();
railway.update();
railway.display();