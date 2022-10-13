'use strict';

// INTRO AND CHAPTERS

const CHAPTERS = {
    0: 'Goodly reader, in this story you will take the role of Gregory, a curious and youthful gentleman of British birth living in an ambiguous city in 19th century France. And while this story is indeed adventurous — lest its very subtitle be criminally misleading! — you must bear in mind that you, Gregory, are more acquainted with absinthe and vice than firearms and acrobatics.</br>But you will venture forth with empty hands or pockets; we shall not allow you to be so underprepared! At the beginning of this tale you are wearing a fashionable, if cheap, suit — complete with black wool overcoat and starched-felt bowler. You have a pocket watch on a chain. But this is no ordinary pocket watch; this pocket watch has been over-wound and is in need of repair. Your wallet is empty of money; they seem to have taken it all at the bar. In one hand you bear a simple, bronze-headed cane of stained wood, born as an affectation. In your trousers pocket you have a silver ring that you won in a game of chance, a ring that you were hoping to give to your lover. And of course, you would not consider leaving your chamber without an ample supply of intoxicants, which may be found in various flasks and bottles upon your person. It is with these provisions that you begin your absinthe-muddled journey into the depths of the undercity.</br>This book, as you may have conjectured, does not read like a normal book. This book is not constrained by the limits of linear form. You will be allowed to make choices.</br>I won\'t lie to you; some of the choices may very well lead you to your death — or to fates still worse! The honest thing to do, of course, when you reach such an end would be to admit defeat. However, it is important to remember that this is just a book.</br>',
    1: 'The clock tower above your apartment tolls, ringing twice. You sit in your bedroom, which serves as your salon, which serves as your dining room and kitchen, which serves, quite unfortunately, as your water closet. The rain is pooling on the floor by the leaky window, and the wind is rushing through the alley outside with such force that your meager curtains billow and sway.</br>The green-tinted bottle lies empty at your tired feet, but you are not prepared to sleep. There are letters unanswered, and what sort of gentleman would you be if you delayed in your correspondence?</br>After the tolling of the bells, you hear a most curious sound, a sound quite unfamiliar to you. It is the sound of an iron gate perhaps, scraping and squealing from disuse. Or it is the sound of a dozen dogs of hell, scratching their claws of steel on the stone of their prison, howling towards the setting moon. But one thing is certain of the noise: it came from the stairwell right outside your door.</br>',
    2: 'You turn your eyes back to the letter before you, but your mind refuses to follow. Untamed, it thinks only of the gateway to hell that must surely have opened so close at hand, setting unimaginable beasts into the mortal realm. You turn the letter to your lover into a macabre poetry, one that references demons you did not realize you put stock in. The letter to your patron—as the middle-class banker who pays your rent would like to consider himself —is woefully incoherent, and is certain to convince him of your madness.</br>The wind and rain fall silent, and your room has never felt so ominous. The simple lock on the door suddenly seems inadequate, and—as much as you hate to admit it—you begin to question your own courage. You wish another soul were present in the room with you, for even the devils of the ninth hell may seem bearable when you\'ve a friend.</br>',
    3: 'The lamp seems to be out, and the stairwell is dark but for the orange glow that seeps in from the streetlights outside. You pause, letting your eyes adjust to the darkness, and close your door quietly behind you, locking it. </br>At the base of the steps, a floor below you, lies a dark bundle. To your mind it may be a rucksack, or a child. An imp, or a pile of laundry. It does not move.</br>Coming from the belfry upstairs, you hear the unmistakable sound of conflict: heavy breathing and boots clacking on the hardwood. Or perhaps it is the dancing of cloven-hoofed demons?</br>',
    4: 'An hour passes, an hour during which every howl of wind seems to be the wailing of a banshee, an hour that seems interminable. Eventually, after you\'ve calmed yourself with brandy and lie in a drunken near-slumber, the bells above chime thrice. On the third bell, you hear the noise once more. This must be the closing of the door, you rationalize, and soon you pass into dreamless sleep.</br>The next noon you awake, your head set afire by the toxins of vice, your palms bearing clear marks where your nails had dug in. You don your hat and begin to walk to the library. You need a book to read, to be certain, but not this one.</br>'
};

// CHOICES

const CHOICES = {
    0: '<button class="choice" id="choice-0-1" value="1">Click to start</button>',
    1: '<button class="choice" id="choice-1-2" value="2">Refuse to investigate, pass it off as the fancy of your tired mind</button><button class="choice" id="choice-1-3" value="3">Rise, don coat, hat, and cane, and step out of your parlor to see what the trouble is</button>',
    2: '<button class="choice" id="choice-2-4" value="4">Return to your bed and seek the solace of your ratted down comforter, lighting every lamp and praying to the God whose existence you have forsworn</button><button class="choice" id="choice-2-3" value="3">Dress and venture into the hallway, facing what you hope to be imaginary fear</button>',
    3: '<button class="choice" id="choice-3-5" value="5">Venture upstairs into the belfry</button><button class="choice" id="choice-3-6" value="6">Inspect the bundle at the base of the steps</button>',
    4: '<h2>The End</h2>'
};


// FUNCTIONALITY

const storyDiv = document.querySelector('.story-div');
const choicesDiv = document.querySelector('.choices-div');
const startBtn = document.querySelector('.start-button');
const restartBtn = document.querySelector('.restart-button');


function choiceEventListenerAdd() {
    const choiceBtn = document.querySelectorAll('.choice');
    for (let i = 0; i < choiceBtn.length; i++) {
        choiceBtn[i].addEventListener('click', () => {makeChoice(choiceBtn[i].value)});
    }
}


startBtn.addEventListener('click', () => {
    storyDiv.innerHTML += CHAPTERS[0];
    choicesDiv.innerHTML += CHOICES[0];

    choiceEventListenerAdd()

    startBtn.classList.add('hidden');
    restartBtn.classList.remove('hidden');
});


restartBtn.addEventListener('click', () => {
    storyDiv.innerHTML = '';
    choicesDiv.innerHTML = '';
    startBtn.classList.remove('hidden');
    restartBtn.classList.add('hidden');
})


function makeChoice(input) {
    storyDiv.innerHTML += CHAPTERS[input];

    choicesDiv.innerHTML = '';
    
    choicesDiv.innerHTML += CHOICES[input];

    window.scrollTo(0, document.body.scrollHeight);
    
    if (document.querySelector('.choice')) choiceEventListenerAdd()
}