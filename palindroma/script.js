const submitBtn = document.getElementById("submitbtn");



let letters = [];
submitBtn.addEventListener("click", function () {
    inputWord = document.getElementById("inputWord").value;
    console.log(inputWord);



    for (let i = 0; i < inputWord.length; i++) {
        letters.push(inputWord[i]);

    }
    // invertWord = letters.reverse();
    console.log(letters);

    // invertWord = letters.reverse();

    // console.log(invertWord);

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
