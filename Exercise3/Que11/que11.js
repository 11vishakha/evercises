
class FruitJuice{
    pCode=1234;
    pType="xlx";
    pSize=123;
    pPrice=1234;
    flavour="choco";
    input()
    {
        let a=prompt("Enter the Product Code :");
        this.pCode=parseInt(a);
        this.flavour=prompt("Enter the flavour (Orange/Apple,etc):")
        this.pType=prompt("Enter the pack type (tetraPack/bottle,etc):")
        let b=prompt("Enter the pack size (200ml/500ml.1L):")
        this.pSize=parseInt(b);
        let c=prompt("Enter the product price :")
        this.pPrice=parseInt(c);
    }
    discount()
    {
        this.pPrice=10
    }
    display(){
        document.write("Product Code :"+this.pCode+"<br>")
        document.write("flavour :"+this.flavour+"<br>")
        document.write("pack type :"+this.pType+"<br>")
        document.write("pack size :"+this.pSize+"<br>")
        document.write("product price :"+this.pPrice+"<br>")
        document.write("Discount :"+this.pPrice+"<br>")
    }
}
let fruitJuice = new FruitJuice();
fruitJuice.input();
fruitJuice.discount();
fruitJuice.display();