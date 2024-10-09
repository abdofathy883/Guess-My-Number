let number = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highscore = 0;

function displyMessege(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    //If the input number is 0
    if(!guess){
        displyMessege('No Number');
    }
    //if the number is correct
    else if (guess === number){
        displyMessege('Correct Answer');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = number;
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if (guess !== number){
        if (score > 1 ){
            displyMessege(guess > number ? "Too High" : "Too Low");
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            displyMessege("You Lost");
            document.querySelector('.score').textContent = 0;

        }
    }
})


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displyMessege('Start Guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';


})