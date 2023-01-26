'use strict';

const storyDiv = document.querySelector('.story-div');
const choicesDiv = document.querySelector('.choices-div');
const restartBtn = document.querySelector('.restart-button');

function choiceHandler() {
    choicesDiv.addEventListener('click', e => {
        const clicked = e.target.closest('.choice');
        const choice = clicked.value;

        if (!clicked) return;
        if (choice === '0') restartBtn.classList.remove('hidden');

        choicesDiv.innerHTML = CHOICES[choice];

        const newChapter = `<p class="chapter-${choice}">${CHAPTERS[choice]}</p>`;
        storyDiv.insertAdjacentHTML('beforeend', newChapter);
        document
            .querySelector(`.chapter-${choice}`)
            .scrollIntoView({ behavior: 'smooth' });
    });
}

function restartButton() {
    const restartModal = document.querySelector('.restart-modal');
    const restartBtnYes = document.querySelector('.yes-button');
    const restartBtnNo = document.querySelector('.no-button');
    const overlay = document.querySelector('.overlay');

    function hideModal() {
        restartModal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

    restartBtn.addEventListener('click', () => {
        restartModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    restartBtnYes.addEventListener('click', () => {
        storyDiv.innerHTML = '';
        choicesDiv.innerHTML = CHOICES[0];
        restartBtn.classList.add('hidden');
        hideModal();
    });

    restartBtnNo.addEventListener('click', hideModal);

    overlay.addEventListener('click', hideModal);

    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') hideModal();
    });
}

function init() {
    choiceHandler();
    restartButton();
}
init();
