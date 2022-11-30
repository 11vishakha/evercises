

class emp{
    constructor(b)
{
    this.basic=b;
}
 calc()
 {
    let pf,gp,np,hra,da;
    da=25/100.0*this.basic;
    hra=15/100.0*this.basic;
    pf=8.33/100*this.basic;
    np=this.basic+da+hra;
    gp=np-pf;
    console.log("Gross pay="+gp)
 }
}

let emp1=new emp(200000);
emp1.calc()

