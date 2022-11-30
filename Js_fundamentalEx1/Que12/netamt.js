

    let name = prompt("Enter your name");
    let address = prompt("Enter your Address")
    let amount = prompt("Enter Amount of purchase")
    let type=prompt("Type of purchase")
    let d=0

    let L = "laptop";
    if (type == "L") {
        if (amount <= 25000) {
            document.write("Name:" + name + "<br>" + "Address:" + address + "<br>" + "Amount Payable:" + (amount - (amount * 0) / 100))
        }
        else if (amount <= 25001 && amount <= 57000) {
            d=5
        }
        else if (amount <= 57000 && amount <= 100000) {
           d=7.5
        }
        else if (amount <= 100000) {
           d=10
        }
    }


        else if (type == "D") {
        if (amount <= 25000) {
          d=5;
        }
        else if (amount <= 25001 && amount <= 57000) {
            d=7.5
        }
        else if (amount <= 57000 && amount <= 100000) {
           d=10
        }
        else if(amount <= 100000) {
           d=15
        }
    }
    
    

    let da=(d/100)*amount
    let netamount=amount-da

    document.write("Name:"+name+"<br>")
    document.write("Address:"+address+"<br>")
    document.write("Total purchase amt:"+amount+"<br>")
    document.write("discount:"+d+"%<br>")
    document.write("Net amount:"+netamount);
