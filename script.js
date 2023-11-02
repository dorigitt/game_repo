const cards = document.querySelectorAll('.card');
let flippedCards = [];


let currentCard = null;
let prevTime = null;

function shuffle() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        cards[i].parentNode.insertBefore(cards[j], cards[i]);
    }
}

function reset() {
    cards.forEach(card => {
        card.classList.remove('flipped');
    });

    flippedCards = [];

    currentCard = null;
    prevTime = null;

    shuffle();
}

cards.forEach(card => {

    card.addEventListener('click', () => {
        if (!prevTime) {
            prevTime = Date.now();
        }
        console.log(flippedCards);//just dlya proverki
        if (flippedCards.includes(card)) {
            return;
        }

        card.classList.add('flipped');
        if (!currentCard) {
            currentCard = card;
            return;
        }
        if (currentCard === card) {
            return;
        }


        if (currentCard.getAttribute('data-card') === card.getAttribute('data-card')) {
            flippedCards.push(card);
            flippedCards.push(currentCard);
            currentCard = null;

        }

        else {
                currentCard.classList.add('dyryn');
                card.classList.add('dyryn');

            setTimeout(() => {

                currentCard.classList.remove('flipped');
                card.classList.remove('flipped');
                currentCard.classList.remove('dyryn');
                card.classList.remove('dyryn');

                currentCard = null;

            }, 200);
        }

        console.log(flippedCards);
        console.log(currentCard);

        if (flippedCards.length === cards.length) {
            setTimeout(() => {
                let difference = Date.now() - prevTime;
                let seconds = Math.floor(difference / 1000);
                alert("YOU WON! your time is " + seconds + " seconds,now the game is shuffled, you can play again");
                reset();

            }, 200)
        }


       
    }
    );



}
);

