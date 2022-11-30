

class Library{
    acc_num;title;author;

    input(){
        this.acc_num=prompt("Enter accession number")
        this.title=prompt("Enter book title")
        this.author=prompt("Enter book author name:")
    }
    compute(){
        let late =prompt("Enter number of late days")
        this.fine =late*2;
    }
    display(){
        document.write("Accession no."+this.acc_num+"<br>")
        document.write("Title: "+this.title+"<br>")
        document.write("Author of the book:"+this.author+"<br>")
        document.write("Fine:"+this.fine)
    }
}   

let library= new Library();
library.input()
library.compute()
library.display()

