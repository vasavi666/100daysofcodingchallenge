 document.addEventListener("DOMContentLoaded", initGame);

function initGame() {
  const cardSymbols = ["🌟", "🎉", "🌈", "🚀", "🎨", "🍕", "🎸", "📚"];
  const allCards = [...cardSymbols, ...cardSymbols];  
  const shuffledCards = shuffle(allCards);
  const gameContainer = document.getElementById("game-container");
  let flippedCards = [];
  let moves = 0;

 
  shuffledCards.forEach((symbol, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = index;
    card.innerHTML = '<div class="card-inner"></div>';
    card.addEventListener("click", flipCard);
    gameContainer.appendChild(card);
  });

  function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  function flipCard(event) {
    const selectedCard = event.currentTarget;
    selectedCard.classList.add("flipped");
    flippedCards.push(selectedCard);

    if (flippedCards.length === 2) {
    
      setTimeout(checkMatch, 800);
      moves++;
   
    }
  }

 
  function checkMatch() {
    const [card1, card2] = flippedCards;
    const symbol1 = card1.textContent;
    const symbol2 = card2.textContent;

    if (symbol1 === symbol2) {
      
      card1.removeEventListener("click", flipCard);
      card2.removeEventListener("click", flipCard);
    } else {
    
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
    }

    flippedCards = [];  

    
    if (document.querySelectorAll(".flipped").length === shuffledCards.length) {
      
      alert(`Congratulations! You completed the game in ${moves} moves.`);
    }
  }
}
