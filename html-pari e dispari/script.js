const submitBtn = document.getElementById("submitbtn");
let min = 1;
let max = 5;
maxNum = (5);
num = (0);
function randomPc(maxNum) {
    let randomNum = Math.floor(Math.random() * (maxNum - min + 1)) + min;

    return (randomNum);

}



console.log("numero random creato" + randomPc(max));


submitBtn.addEventListener("click", function () {
    let random = randomPc(maxNum);
    const inputNumber = document.getElementById("inputnumber").value;
    const chose = document.getElementById("select").value;

    console.log(chose);
    console.log("numero dell'utente" + inputNumber);
    console.log("numero del pc:" + (random));
    let sum = (parseInt(random) + parseInt(inputNumber));
    console.log("somma:" + sum);




    if (sum === evenOdd(num)) {
        console.log("il numero è pari");
    } else if (sum === evenOdd(1)) {
        console.log("il numero è dispari");
    }


    function evenOdd(num) {
        let oddNumber = (parseInt(sum) % 2 === parseInt(num));
        return (oddNumber);
    }

})













