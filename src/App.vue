<script lang="ts">
import { defineComponent } from 'vue'

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

export default defineComponent({
  data() {
    return {
      treasureDeck: <Deck>{
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
      },
      gameTreasureDeck: <Deck>{
      },
      cardDrawn: <Card>{},
    }
  },
  computed: {

  },
  methods: {
    drawCard: function (): void {
      const cardNumber = this.pickRandom(this.gameTreasureDeck.cards.length)
      const card: Card = this.gameTreasureDeck.cards[cardNumber]
      this.cardDrawn = card
      if (card.returnable === false) {
        // remove item from gameTreasureDeck.cards array where index = cardNumber
        this.gameTreasureDeck.cards.splice(cardNumber, 1)
      }
    },
    newGame: function () {
      this.gameTreasureDeck.cards = (JSON.parse(JSON.stringify(this.treasureDeck.cards)))
    },
    pickRandom: function (deckLength: number): number {
      return Math.floor(Math.random() * deckLength)
    }
  },
  mounted(): void {
    this.newGame()
  },
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <button @click="newGame"> Novo Jogo</button>
        <button @click="drawCard"> Comprar Carta</button>
      </nav>
      <pre>{{ cardDrawn }}</pre>
      <ul>
        <li v-for="card in gameTreasureDeck.cards">
          {{ card.name }}
        </li>
      </ul>
    </div>
  </header>
</template>
