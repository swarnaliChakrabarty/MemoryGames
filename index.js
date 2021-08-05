document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'food1.PNG'
      },
      {
        name: 'cheeseburger',
        img: 'food2.PNG'
      },
      {
        name: 'ice-cream',
        img: 'food3.JPEG'
      },
      {
        name: 'pizza',
        img: 'food4.PNG'
      },
      {
        name: 'milkshake',
        img: 'food5.PNG'
      },
      {
        name: 'hotdog',
        img: 'food6.PNG'
      },
      {
        name: 'fries',
        img: 'food1.PNG'
      },
      {
        name: 'cheeseburger',
        img: 'food2.PNG'
      },
      {
        name: 'ice-cream',
        img: 'food3.JPEG'
      },
      {
        name: 'pizza',
        img: 'food4.PNG'
      },
      {
        name: 'milkshake',
        img: 'food5.PNG'
      },
      {
        name: 'hotdog',
        img: 'food6.PNG'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.PNG')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'blank.PNG')
        cards[optionTwoId].setAttribute('src', 'blank.PNG')
        // console.log('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        
        cards[optionOneId].setAttribute('src', 'done.PNG')
        cards[optionTwoId].setAttribute('src', 'done.PNG')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'blank.PNG')
        cards[optionTwoId].setAttribute('src', 'blank.PNG')
       
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
