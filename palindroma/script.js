const submitBtn = document.getElementById("submitbtn");



let letters = [];
submitBtn.addEventListener("click", function () {
    inputWord = document.getElementById("inputWord").value;
    console.log(inputWord);



    for (let i = 0; i < inputWord.length; i++) {
        letters.push(inputWord[i]);
        invertWord = letters.reverse();
    }
    console.log(letters);

    invertWord = letters.reverse();

    console.log(invertWord);

    if (invertWord === inputWord) {
        console.log("la parola è palindroma")

    } else if (invertWord === inputWord) {
        console.log("la parola non è palindroma")
    }

})
