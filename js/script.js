//=====================================================================================================//
//Task 1 --> PLAINDROME WORDS
//=====================================================================================================//


//define the function
function isPalindrome(word){
    const array = Array.from(word);
    let status = true;
    for (let i=0; i<array.length; i++){
        if (  !(array[i] === array[array.length - 1 - i])  ) {
            status = false;
        }
    } 
    if(status){
        console.log(word + ' é Palindroma!!!');
    } else {
        console.log(word + ' NON palindroma!!!');
    }
}


//call the function
const userWord = prompt('Inserisci una parola per verificare se è Palindroma');
isPalindrome(userWord);


//=====================================================================================================//
//Task 2 --> ODD OR EVEN
//=====================================================================================================//


//define function for random number in a range
function randomNumberRange(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}


//define function for say if a number is odd or even
function isSumOddOrEven(num1, num2) {
    const sum = num1 + num2;
    if ((sum % 2) == 0){
        return 'pari';
    } else {
        return 'dispari';
    }
}


//call the bet
let userOddEven;
do {
    userOddEven = prompt('Vuoi puntare su "pari" o "dispari" ?');
} while ( !((userOddEven == 'pari') || (userOddEven == 'dispari')) );
console.log('Hai scielto si puntare su: ' + userOddEven);


//call the number
let userNumber;
do {
    userNumber = parseInt(prompt('Inserisci un valore compreso tra 1 e 5" ?'));
} while ( !((userNumber >= 1) && (userNumber <= 5)) );
console.log('Hai scielto il numero: ' + userNumber);


//check the win
const pcNumber = randomNumberRange(1, 5);
console.log('Il PC ha scielto il numero: ' + pcNumber)
const sumStatus = isSumOddOrEven(userNumber, pcNumber);

if ( sumStatus === userOddEven ) {
    console.log('Hai vinto il gioco dei numeri!!');
} else {
    console.log('Hai vinto il gioco dei numeri!!');
}