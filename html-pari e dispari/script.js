const submitBtn = document.getElementById("submitbtn");
let min = 1;
let max = 5;
maxNum = (5);
num = (0);
function randomPc(maxNum) {
    let randomNum = Math.floor(Math.random() * (maxNum - min + 1)) + min;

    return (randomNum);

}


const resetBtn = document.getElementById("resetBtn");


resetBtn.addEventListener("click", function () {
    location.reload();
})

// console.log("numero random creato" + randomPc(max));


submitBtn.addEventListener("click", function () {
    let random = randomPc(maxNum);
    const inputNumber = document.getElementById("inputnumber").value;
    const chose = document.getElementById("select").value;

    console.log(chose);
    console.log("numero dell'utente" + inputNumber);
    console.log("numero del pc:" + (random));
    let sum = (parseInt(random) + parseInt(inputNumber));
    console.log("somma:" + sum);

    document.getElementById("yourNumber").innerHTML = ("Il numero selezionato è:" + " " + (inputNumber))
    document.getElementById("pcNumber").innerHTML = ("Il numero del pc è:" + " " + (random))
    document.getElementById("sumNumber").innerHTML = ("La somma dei numeri è:" + " " + (sum))
    sumOdd = (false);



    function isEven(sumEven) {

        return sum % 2 === 0;

    }



    if (isEven(sumOdd) === true) {
        console.log("il numero è pari")
        document.getElementById("oddEven").innerHTML = ("Il numero è pari")
    } else if (isEven(sumOdd) === false) {
        console.log("il numero è dispari")
        document.getElementById("oddEven").innerHTML = ("Il numero è dispari")

    }
    if (isEven(sumOdd) === true && chose === "pari") {
        document.getElementById("win").innerHTML = ("Hai vinto")


    } else if (isEven(sumOdd) === true && chose === "dispari") {
        document.getElementById("win").innerHTML = ("Hai perso")

    }


})










