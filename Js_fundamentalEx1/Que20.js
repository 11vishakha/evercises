


function pell() {


    let first = 1;
    let second = 2;
    let next = 0;
    for (let i = 1; i <= 20; i++) {
        console.log(first)
        next = first + (second*2)
        first = second
        second = next
       

    }
}
pell(2);