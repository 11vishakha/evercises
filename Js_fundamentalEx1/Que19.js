

function lucas() {


    let first = 2;
    let second = 1;
    let next = 0;
    for (let i = 0; i <= 10; i++) {
        console.log(first)
        next = first + second
        first = second
        second = next

    }
}
lucas(2);