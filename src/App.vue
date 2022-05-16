<script setup lang="ts">
  type Card = {
    name: string,
    description: string,
    image: string,
    returnable: boolean,
    cardback?: string
  }

  type Deck = {
    cards: Card[]
  }

  const treasureDeck:Deck = {
    cards: [
      {
        name: "Poção de Força",
        description: "Você achou um pequeno frasco vermelho. Você pode beber esse líquido de cheiro estranho a qualquer momento. Ela lhe dá o direito de jogar dois dados extras de combate na próxima vez que você atacar. A poção só pode ser usada uma vez. NÃO RECOLOQUE ESSA CARTA NO MONTE.",
        image: "https://www.game.guide/wp-content/uploads/2012/07/splashPurple.gif",
        returnable: false
      },
      {
        name: "Azar",
        description: "Enquanto você estava procurando, uma seta escondida disparou da parede, acertando você. Você perdeu 1 Ponto Físico e sua vez terminou. RECOLOQUE ESTA CARTA NO MONTE.",
        image: "https://www.game.guide/wp-content/uploads/2012/07/splashPurple.gif",
        returnable: true
      }
    ]
  }

  const gameTreasureDeck: Deck = treasureDeck

  function drawCard(deck: Deck): void {
    console.log('Draw')
    const cardNumber = pickRandom(deck.cards.length)
    const card = deck.cards[cardNumber]
    console.log(card.name)
    if (card.returnable = false) {
      // remove card from deck
      gameTreasureDeck.cards = gameTreasureDeck.cards.splice(cardNumber, 1)
    }
    console.log(gameTreasureDeck.cards.length)
  }

  // create a function called pickRandom that takes in a deck and returns a random card from the deck
  function pickRandom(deckLength: number): number {
    // pick a random integer between 0 and deckLength - 1
    const randomIndex = Math.floor(Math.random() * deckLength)
    return randomIndex
  }
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <button> Novo Jogo</button>
        <button @click="drawCard(gameTreasureDeck)"> Comprar Carta</button>
      </nav>
      <ul>
        <li v-for="card in gameTreasureDeck.cards">
          {{ card.name }}
        </li>
      </ul>
    </div>
  </header>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
