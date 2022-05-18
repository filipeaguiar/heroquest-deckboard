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

import deckBackgroundImage from '@/assets/images/back.jpg'
import strengthPotionImage from '@/assets/images/strength_potion.webp'
import spearImage from '@/assets/images/spear.webp'
import healingPotionImage from '@/assets/images/healing_potion.webp'
import heroicBrewImage from '@/assets/images/heroic_brew.webp'
import monsterImage from '@/assets/images/monster.webp'
import jewelImage from '@/assets/images/jewel.webp'
import pitImage from '@/assets/images/pit.webp'
import gemImage from '@/assets/images/gem.webp'
import goldImage from '@/assets/images/gold.webp'
import defensePotionImage from '@/assets/images/defense_potion.webp'

export default defineComponent({
  data() {
    return {
      cardImage: deckBackgroundImage,
      treasureDeck: <Deck>{
        cards: [
          {
            name: "Poção Restauradora",
            description: "Em meio a uma porção de trapos, você encontrou uma garrafinha com um líquido azulado. Você pode beber essa poção restauradora a qualquer momento, restaurando o número de Pontos Físicos iguais ao número sorteado num dos dados vermelhos. Você não pode, entretanto, exceder seu número de Pontos Físicos iniciais. A poção só pode ser usada uma vez. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: healingPotionImage,
            returnable: false
          },
          {
            name: "Poção Restauradora",
            description: "Em meio a uma porção de trapos, você encontrou uma garrafinha com um líquido azulado. Você pode beber essa poção restauradora a qualquer momento, restaurando o número de Pontos Físicos iguais ao número sorteado num dos dados vermelhos. Você não pode, entretanto, exceder seu número de Pontos Físicos iniciais. A poção só pode ser usada uma vez. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: healingPotionImage,
            returnable: false
          },
          {
            name: "Poção Restauradora",
            description: "Em meio a uma porção de trapos, você encontrou uma garrafinha com um líquido azulado. Você pode beber essa poção restauradora a qualquer momento, restaurando o número de Pontos Físicos iguais ao número sorteado num dos dados vermelhos. Você não pode, entretanto, exceder seu número de Pontos Físicos iniciais. A poção só pode ser usada uma vez. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: healingPotionImage,
            returnable: false
          },
          {
            name: "Bebida Heróica",
            description: "Para a sua surpresa, você encontrou um cantil de couro pendurado na parede. Se você beber o líquido que está nele, antes de atacar, você poderá fazer dois ataques em vez de um. O cantil só pode ser usado uma vez. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: heroicBrewImage,
            returnable: false
          },
          {
            name: "Poção de Força",
            description: "Você achou um pequeno frasco vermelho. Você pode beber esse líquido de cheiro estranho a qualquer momento. Ela lhe dá o direito de jogar dois dados extras de combate na próxima vez que você atacar. A poção só pode ser usada uma vez. NÃO RECOLOQUE ESSA CARTA NO MONTE.",
            image: strengthPotionImage,
            returnable: false
          },
          {
            name: "Azar",
            description: "Enquanto você estava procurando, uma seta escondida disparou da parede, acertando você. Você perdeu 1 Ponto Físico e sua vez terminou. RECOLOQUE ESTA CARTA NO MONTE.",
            image: spearImage,
            returnable: true
          },
          {
            name: "Azar",
            description: "Enquanto você estava procurando, uma seta escondida disparou da parede, acertando você. Você perdeu 1 Ponto Físico e sua vez terminou. RECOLOQUE ESTA CARTA NO MONTE.",
            image: spearImage,
            returnable: true
          },
          {
            name: "Azar",
            description: "Enquanto você estava procurando, uma seta escondida disparou da parede, acertando você. Você perdeu 1 Ponto Físico e sua vez terminou. RECOLOQUE ESTA CARTA NO MONTE.",
            image: spearImage,
            returnable: true
          },
          {
            name: "Jóias!",
            description: "Você achou uma pequena caixa de madeira. De aparência singela e muito velha. Por dentro você descobriu que ela é forrada de veludo e contém pequeninas jóias valendo 50 moedas de ouro. Anote esse valor na sua ficha. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: jewelImage,
            returnable: false
          },
          {
            name: "Jóias!",
            description: "Você achou uma pequena caixa de madeira. De aparência singela e muito velha. Por dentro você descobriu que ela é forrada de veludo e contém pequeninas jóias valendo 50 moedas de ouro. Anote esse valor na sua ficha. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: jewelImage,
            returnable: false
          },
          {
            name: "Jóias!",
            description: "Você achou uma pequena caixa de madeira. De aparência singela e muito velha. Por dentro você descobriu que ela é forrada de veludo e contém pequeninas jóias valendo 50 moedas de ouro. Anote esse valor na sua ficha. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: jewelImage,
            returnable: false
          },
          {
            name: "Jóias!",
            description: "Você achou uma pequena caixa de madeira. De aparência singela e muito velha. Por dentro você descobriu que ela é forrada de veludo e contém pequeninas jóias valendo 50 moedas de ouro. Anote esse valor na sua ficha. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: jewelImage,
            returnable: false
          },
          {
            name: "Pedra Preciosa!",
            description: "Escondida dentro da biqueira de uma bota velha, você encontrou uma pequena pedra preciosa, valendo 35 moedas de ouro. Anote esse valor na sua ficha. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: gemImage,
            returnable: false
          },
          {
            name: "Poção de Defesa",
            description: "Em meio a uma coleção de velhas garrafas, você encontrou um frasco pequeno contendo um líquido claro. Você pode beber essa poção a qualquer momento. Ela lhe dá o direito de usar dois dados extras de combate na próxima vez em que você for se defender. A poção só pode ser usada uma vez. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: defensePotionImage,
            returnable: false
          },
          {
            name: "Monstro Errante",
            description: "Enquanto você estava procurando, um monstro surgiu em passos lentos e atacou você! Zargon coloca o monstro ambulante (relacionado no LIVRO DAS BUSCAS) em qualquer quadrado, próximo a você. O monstro ataca imediatamente. RECOLOQUE ESTA CARTA NO MONTE.",
            image: monsterImage,
            returnable: true
          },
          {
            name: "Monstro Errante",
            description: "Enquanto você estava procurando, um monstro surgiu em passos lentos e atacou você! Zargon coloca o monstro ambulante (relacionado no LIVRO DAS BUSCAS) em qualquer quadrado, próximo a você. O monstro ataca imediatamente. RECOLOQUE ESTA CARTA NO MONTE.",
            image: monsterImage,
            returnable: true
          },
          {
            name: "Monstro Errante",
            description: "Enquanto você estava procurando, um monstro surgiu em passos lentos e atacou você! Zargon coloca o monstro ambulante (relacionado no LIVRO DAS BUSCAS) em qualquer quadrado, próximo a você. O monstro ataca imediatamente. RECOLOQUE ESTA CARTA NO MONTE.",
            image: monsterImage,
            returnable: true
          },
          {
            name: "ouro",
            description: "Você encontrou uma pedra solta e tirou-a da parede. Atrás dela, você descobriu uma bolsa de couro embrulhada num pedaço de trapo. Ao examinar dentro dela, você achou 25 moedas de ouro. Anote esse valor na sua ficha. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: goldImage,
            returnable: false
          }, {
            name: "ouro",
            description: "Você encontrou uma pedra solta e tirou-a da parede. Atrás dela, você descobriu uma bolsa de couro embrulhada num pedaço de trapo. Ao examinar dentro dela, você achou 25 moedas de ouro. Anote esse valor na sua ficha. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: goldImage,
            returnable: false
          }, {
            name: "ouro",
            description: "Você encontrou uma pedra solta e tirou-a da parede. Atrás dela, você descobriu uma bolsa de couro embrulhada num pedaço de trapo. Ao examinar dentro dela, você achou 25 moedas de ouro. Anote esse valor na sua ficha. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: goldImage,
            returnable: false
          }, {
            name: "ouro",
            description: "Você encontrou uma pedra solta e tirou-a da parede. Atrás dela, você descobriu uma bolsa de couro embrulhada num pedaço de trapo. Ao examinar dentro dela, você achou 25 moedas de ouro. Anote esse valor na sua ficha. NÃO RECOLOQUE ESTA CARTA NO MONTE.",
            image: goldImage,
            returnable: false
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
      const timeoutId = setTimeout(() => {
        this.cardDrawn = <Card>{}
      }, 10000)
    },
    newGame: function () {
      this.cardDrawn = <Card>{}
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
  <header class="p6 max-w-sm mx-auto">
    <div class=" wrapper bg-black-100 p-3">
      <nav class="max-w-sm">
        <button @click="newGame" class="btn w-full">
          <svg class="fill-current w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 0h512v512H0z" fill="#000000" fill-opacity="0.01"></path>
            <g class="" style="" transform="translate(0,0)">
              <path
                d="M258.148 20.822c-1.112.008-2.226.026-3.343.055-39.32 1.041-81.507 15.972-123.785 50.404l-6.028 4.91-5.732-5.25c-12.644-11.578-20.276-27.633-25.653-43.716-8.974 36.98-14.631 81.385-9.232 114.523 18.065.908 45.409-2.177 73.7-7.818 17.858-3.561 36.048-8.126 53.064-13.072-13.419-2.911-25.896-6.882-38.143-12.082l-16.088-6.832 14.906-9.127c46.367-28.393 80.964-40.686 120.235-35.553 33.105 4.327 69.357 20.867 119.066 47.271-25.373-36.314-62.243-64.737-104.728-76.994-15.402-4.443-31.553-6.828-48.239-6.719zM346 116c-46.667 0-46.666 0-46.666 46.666V349.4c0 9.596.007 17.19.414 23.242a664.804 664.804 0 0 1 50.656-12.223c24.649-4.915 48.367-8.224 67.916-8.41 6.517-.062 12.571.224 18.041.912l6.31.793 1.358 6.213c2.464 11.265 3.673 23.447 3.914 36.059 38.032-.19 38.057-3.06 38.057-46.65V162.665C486 116 486 116 439.334 116a226.98 226.98 0 0 1 3.978 7.64l12.624 25.536-25.004-13.648c-13.085-7.143-25.164-13.632-36.452-19.528zm-281.943.016c-38.032.19-38.057 3.06-38.057 46.65V349.4C26 396 26 396 72.666 396a226.98 226.98 0 0 1-3.978-7.64l-12.624-25.536 25.004 13.649c13.085 7.142 25.164 13.632 36.452 19.527H166c46.667 0 46.666 0 46.666-46.666V162.666c0-9.626-.006-17.24-.416-23.304a664.811 664.811 0 0 1-50.654 12.22c-32.865 6.554-64.077 10.25-85.957 7.498l-6.31-.793-1.358-6.213c-2.464-11.265-3.673-23.446-3.914-36.058zm354.619 254.078c-17.543.25-40.826 3.206-64.75 7.977-17.859 3.56-36.05 8.125-53.065 13.072 13.419 2.91 25.896 6.881 38.143 12.082l16.088 6.832-14.906 9.127c-46.367 28.392-80.964 40.685-120.235 35.553-33.105-4.327-69.357-20.868-119.066-47.272 25.373 36.315 62.243 64.738 104.728 76.994 52.573 15.166 113.872 6.343 175.367-43.74l6.028-4.91 5.732 5.25c12.644 11.579 20.276 27.633 25.653 43.717 8.974-36.981 14.631-81.386 9.232-114.524-2.788-.14-5.748-.204-8.95-.158z"
                fill="#fff" fill-opacity="1"></path>
            </g>
          </svg>
          <span>Novo Jogo</span>
        </button>
        <button @click="drawCard" class="btn w-full">
          <svg class="fill-current w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 0h512v512H0z" fill="#000000" fill-opacity="0.01"></path>
            <g class="" style="" transform="translate(0,0)">
              <path
                d="M209.955 488.202l-121.242-46.62c-11.308-4.34-11.643-12.087-.79-17.288L204.8 469.236c15.024 5.777 37.23 4.92 51.774-1.96l161.522-76.6c10.014 4.436 9.864 11.818-.67 16.798L250.43 486.668c-10.983 5.195-29.128 5.902-40.477 1.534zm0-32.37L88.713 409.21C79.09 405.52 77.41 399.36 83.81 394.4l120.99 46.517c15.024 5.776 37.23 4.92 51.774-1.96l165.393-78.433c5.855 4.417 4.38 10.36-4.542 14.58l-166.993 79.193c-10.983 5.196-29.128 5.903-40.477 1.534zm0-28.314L88.713 380.892c-9.624-3.69-11.302-9.85-4.902-14.813l120.99 46.523c15.024 5.77 37.23 4.914 51.774-1.96l165.393-78.438c5.855 4.416 4.38 10.36-4.542 14.58l-166.993 79.2c-10.983 5.194-29.128 5.895-40.477 1.533zm0-28.32L88.713 352.572c-9.624-3.69-11.302-9.85-4.902-14.812l120.99 46.524c15.024 5.776 37.23 4.92 51.774-1.96l165.393-78.44c5.855 4.424 4.38 10.368-4.542 14.586l-166.993 79.194c-10.983 5.196-29.128 5.897-40.477 1.534zm0-28.32L88.713 324.26c-11.35-4.355-11.643-12.15-.66-17.353l87.236-41.376 34.826 18.323c15.365 8.09 37.937 7.06 52.5-2.39l65.74-42.672 88.404 34.007c11.344 4.357 11.65 12.16.665 17.354l-166.993 79.195c-10.983 5.195-29.128 5.902-40.477 1.534zm6.85-99.73L93.44 206.22c-10.767-5.67-11.217-15.647-1.018-22.268l105.11-68.228h25.845l.015 64.962h58.664v-64.962H332.2l-27.487-41.39 118.91 62.584c10.763 5.67 11.212 15.646 1.013 22.268L254.803 269.418c-10.2 6.62-27.23 7.4-37.997 1.73zm21.637-105.523V100.67h-34.845l49.13-79.74 49.12 79.74H267v64.955h-28.558z"
                fill="#fff" fill-opacity="1"></path>
            </g>
          </svg>
          <span>Comprar Carta</span>
        </button>
      </nav>
      <div class="deck">
        <img :src="cardImage" alt="Carta" v-if="!cardDrawn.name" @click="drawCard">
        <div class="card font-serif" v-if="cardDrawn.name">
          <h2 class="title">{{ cardDrawn.name }}</h2>
          <img :src="cardDrawn.image" :alt="cardDrawn.name" class="img">
          <p class="card-description">{{ cardDrawn.description }}</p>
        </div>
      </div>
    </div>
  </header>
</template>
