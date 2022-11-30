

class Student
{
  name;age;m1;m2;m3;max;avg;
  input(){
    this.name=prompt("Enter Your Name")
    this.m1=parseInt(prompt("Enter m1"))
    this.m2=parseInt(prompt("Enter m2"))
    this.m3=parseInt(prompt("Enter m3"))
    this.age=parseInt(prompt("Enter age"))
  }
  display(){
    document.write('Name:'+this.name)
    document.write('Marks:'+this.m1+' '+this.m2+" "+this.m3)
    document.write("Maximum Marks:"+this.max)
    document.write("Average:"+this.avg)
  }
  compute(){
    max=Math.max(Math.max(this.m1,m2),this.m3)
    this.avg=this.m1+this.m2+this.m3/3
  }
}

let obj= new Student();
obj.input();
obj.display();
obj.compute()