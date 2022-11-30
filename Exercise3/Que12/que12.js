

class Book{
    Book_NO; book_title;PRICE;
    input(){
        this.Book_NO = prompt("Enter the book no. ");
        this.book_title= prompt("Enter the book title:");
        this.PRICE= parseInt(prompt("Enter the price:"))
    }
    total_cost(n){
        let tcost;
        tcost = this.PRICE * this.n;   
        document.write("Total Cost: "+tcost) 
    }
    purchase(){
        this.n = parseInt(prompt("Enter the no. of copies to purchase: "));
        this.total_cost(this.n);
    }
}

let ob = new Book();
ob.input();
ob.purchase();