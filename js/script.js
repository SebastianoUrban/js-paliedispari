
//PAROLA PALINDROMA

//define the function
function isPalindrome(word){
    const array = Array.from(word);
    let stato = true;
    for (let i=0; i<array.length; i++){
        if (  !(array[i] === array[array.length - 1 - i])  ) {
            stato = false;
        }
    } 
    if(stato){
        console.log('Palindroma!!!');
    } else {
        console.log('NON palindroma!!!');
    }
}

//call the function
const userWord = prompt('Inserisci una parola per verificare se è Palindroma');
isPalindrome(userWord);