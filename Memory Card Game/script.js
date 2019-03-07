const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipcard(){
    this.classList.toogle('flip');
}

cards.forEach(card => card.addEventListener('click', flipcard));
