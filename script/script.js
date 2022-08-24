// INTRO AND CHAPTERS

const CHAPTERS = [
    /*INTRO*/ 'Goodly reader, in this story you will take the role of Gregory, a curious and youthful gentleman of British birth living in an ambiguous city in 19th century France. And while this story is indeed adventurous — lest its very subtitle be criminally misleading! — you must bear in mind that you, Gregory, are more acquainted with absinthe and vice than firearms and acrobatics.</br></br>But you will venture forth with empty hands or pockets; we shall not allow you to be so underprepared! At the beginning of this tale you are wearing a fashionable, if cheap, suit — complete with black wool overcoat and starched-felt bowler. You have a pocket watch on a chain. But this is no ordinary pocket watch; this pocket watch has been over-wound and is in need of repair. Your wallet is empty of money; they seem to have taken it all at the bar. In one hand you bear a simple, bronze-headed cane of stained wood, born as an affectation. In your trousers pocket you have a silver ring that you won in a game of chance, a ring that you were hoping to give to your lover. And of course, you would not consider leaving your chamber without an ample supply of intoxicants, which may be found in various flasks and bottles upon your person. It is with these provisions that you begin your absinthe-muddled journey into the depths of the undercity.</br></br>This book, as you may have conjectured, does not read like a normal book. This book is not constrained by the limits of linear form. You will be allowed to make choices.</br></br>I won\'t lie to you; some of the choices may very well lead you to your death — or to fates still worse! The honest thing to do, of course, when you reach such an end would be to admit defeat. However, it is important to remember that this is just a book.</br>'
];

// CHOICES

const CHOICES = [
    /*choice 0-1*/ '<button class=choice id=choice-0-1 value="1">Click here to start</button>'
];


// FUNCTIONALITY

const storyDiv = document.querySelector('.story-div');
const choicesDiv = document.querySelector('.choices-div');
const startButton = document.querySelector('.start-button');
const restartButton = document.querySelector('.restart-button');

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

function startGame() {
    storyDiv.innerHTML += CHAPTERS[0];
    choicesDiv.innerHTML += CHOICES[0];
    startButton.style.display = 'none';
    restartButton.style.display = 'inline';
}

function restartGame() {
    let confirmRestart = confirm('Are you sure you want to restart? Your progress cannot be saved.');

    if (confirmRestart) {
        storyDiv.innerHTML = '';
        choicesDiv.innerHTML = '';
        startButton.style.display = 'inline';
        restartButton.style.display = 'none';
    }
}