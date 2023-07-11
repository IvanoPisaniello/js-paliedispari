const submitBtn = document.getElementById("submitbtn");
const resetBtn = document.getElementById("resetBtn");


resetBtn.addEventListener("click", function () {
    location.reload();
})


let letters = [];
submitBtn.addEventListener("click", function () {
    inputWord = document.getElementById("inputWord").value;
    console.log(inputWord);



    for (let i = 0; i < inputWord.length; i++) {
        letters.push(inputWord[i]);

    }
    console.log(letters);

    function revWord() {
        let invertWord = letters.reverse().join("");
        console.log(invertWord)
        if (invertWord === letJoin) {
            console.log("è palindroma");
            document.getElementById("wordResults").innerHTML = ("La parola è palindroma");

        } else if (invertWord !== letJoin) {
            console.log("non è palindroma");
            document.getElementById("wordResults").innerHTML = ("La parola non è palindroma");

        }
        return (invertWord);
    }
    letJoin = letters.join("");
    console.log(letJoin);
    console.log(revWord());




})
