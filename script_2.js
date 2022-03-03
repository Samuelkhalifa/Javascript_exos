//------------------------------------
// Exercice 3 _ Calculs rapides
//------------------------------------
anwser = ""
answer = prompt("Which number's factorial would you like to get ?")
console.log(`You choose the number ${answer}`)

function fact(answer) {
    var i, answer, f = 1;
    for (i = 1; i <= answer; i++) {
        f = f * i;}
    return f;
    }

console.log(`Here is your result : ${fact(answer)}`)


