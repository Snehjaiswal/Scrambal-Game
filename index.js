const msg = document.querySelector('.msg')
const guess = document.querySelector('input')
const btn = document.querySelector('.btn')
let play = false;

let newWords = "";
let randWords = "";

let sWords = ["sneh", "ram", "shubham", "ratnesh", "mohan", "sanjay", "deepak", "praveen", "aryan", "chetan", "lalla", "vikas", "muskan", "anmol", "bhola", "sneha", "yogita"]

const CreateNewWords = () => {

    let renNum = Math.floor(Math.random() * sWords.length)

    let newTempSword = sWords[renNum];
    // console.log(newTempSword);
    return newTempSword;
}

let scrambleWords = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        // console.log(temp);

        let j = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[j]
        arr[j] = temp;

    }
    return arr;
}

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = CreateNewWords();
        randWords = scrambleWords(newWords.split(""))
        let ans = randWords.join("")
        console.log(ans);
        msg.innerHTML = `Guess the words : ${ans}`;
    } else {
        let tempWords = guess.value;
        if (tempWords === newWords) {
            console.log('correct');

            play=false;
            msg.innerHTML = ` It's Correct=>${newWords}`
            btn.innerHTML = 'Start Again';

            guess.classList.toggle('hidden');
            guess.value= "";
        } else {
            console.log("incorrect");
            msg.innerHTML = `Soory Boss. It's not Correct. Plz try again`
        }
    }
})
