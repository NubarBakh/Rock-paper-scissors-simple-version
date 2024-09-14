const computerChoiceDisplay = document.getElementById('Computer-choice');
const userChoiceDisplay = document.getElementById('User-choice')
const result = document.querySelector('#result');
const possibleChoices= document.querySelectorAll('button');
let userChoice
let computerChoice

/*possibleChoices.forEach(possibleChoice=> possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice
}))
*/
possibleChoices.forEach(function(possibleChoice){
    possibleChoice.addEventListener('click',function(e){
        userChoice=e.target.id;
        console.log(userChoice)
        userChoiceDisplay.innerHTML=userChoice;
        generateComputerChoice();
        getResult();
    })
   
})

function generateComputerChoice(){
    let random=Math.random()
    if(random>=0 && random<1/3){
        computerChoice='Paper'
    }else if( random>=1/3 && random<2/3){
        computerChoice='Scissors'

    }else {computerChoice='Rock'

    }

    computerChoiceDisplay.innerHTML=computerChoice
}

function getResult() {
    if (userChoice === computerChoice) {
        result.innerHTML = 'It is a draw';
    } else if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result.innerHTML = 'You win';
    } else if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result.innerHTML = 'You lost';
    } else if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result.innerHTML = 'You lost';
    } else if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result.innerHTML = 'You win';
    } else if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result.innerHTML = 'You win';
    } else if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result.innerHTML = 'You lost';
    }
    console.log(result.innerHTML)

}


