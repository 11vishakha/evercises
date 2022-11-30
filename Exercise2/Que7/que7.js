

class Bank{
    name;acno;type;bal;
   
    initialise(){
        this.name = prompt("Enter Your Name")
        this.acno= parseInt(prompt("Enter your acc no."))
        this.type=prompt("Enter the type of account ")
        this.bal= parseInt(prompt("Enter the balance amount in the account "))
    }
    depo(a){
        this.deposit=a;
        this.bal=parseInt(this.bal)+parseInt(this.deposit)
    }
    withdraw(b){
        this.withdraw=b;
        if(this.bal<=1000){
            document.write("Minimum balance should be rs1000" + this.bal + "<br>")
        }
        else
        this.bal =this.bal-this.withdraw;
    }
    print(){
        document.write("Your Name "+this.name+"<br>")
        document.write("Your acc no is "+this.acno +"<br>")
        document.write("Account type "+this.type+"<br>")
        document.write("Account bal"+this.bal+"<br>")
    }
    
    }
    
    let bank = new Bank()
    bank.initialise()
    bank.depo(1000)
    bank.withdraw(500)
    bank.print()


