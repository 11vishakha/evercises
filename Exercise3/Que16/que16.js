

class movieMagic
{
    year;title;rating;
   input(){
    this.title=(prompt("Enter Title of movie:"))
    this.year=(parseInt("Enter Year of movie: "))
    this.rating=(prompt("Enter rating of movie:"))
   }
   accept(){
     if(this.rating>=0.0 && this.rating <= 2.0)
     document.write("Flop")
     else if
    (this.rating<=2.1 && this.rating<=3.4)
    document.write("Semi-Hit")
    else if(this.rating<=3.5 && this.rating<=4.5)
    document.write("Hit")
    else if(this.rating<=4.6 && this.rating<=5.0)
     document.write("Super Hit")
   }
 

}

let movie = new movieMagic();
movie.input();
movie.accept();

