

function amt() {
    let tc = prompt("Enter the total cost of the items:")

    if (tc <= 2000) {
        d = (5 / 100) * tc;
    }
    else if (tc >= 2001 && tc <= 5000) {
        d = (25 / 100) * tc;
    }
    else if (tc >= 5001 && tc <= 10000) {
        d = (35 / 100) * tc;
    }
    else if (tc > 10000)
        d = (50 / 100) * tc;

    let ap = tc - d;

    document.write("Total cost:" + tc + "<br>")
    document.write("Discount:" + tc + "<br>")

    document.write("Amount Payable:" + ap)

}
amt();