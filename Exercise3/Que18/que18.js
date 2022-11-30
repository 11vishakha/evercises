
class BookFair
{
    Bname;double_price;
    input(){
        this.Bname=prompt("Enter the name of the book")
        this.double_price=prompt("Enter the price of the book")
    }
    calculate(){
      
        if(this.double_price <=1000){
          this.d= 2.0/100*this.double_price;
        }
        else if(this.double_price<=3000)
        this.d =10.0/100*this.double_price
        else {
            this.d=15.0/100*this.double_price;
        }
    }
    display(){
        document.write("Book name: "+this.Bname+"<br>")
        document.write("Price of book: "+this.double_price+"<br>")
        document.write("after discount:"+this.d)
    }

}

let book= new BookFair();
book.input()
book.calculate()
book.display()