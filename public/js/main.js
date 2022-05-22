
class Coinflip{
    flipCoin(){
let random = Math.random()
return random < 0.5 ? 'Tails' :'Heads'
    }
}

let coin = new Coinflip()

class ShowCoin extends Coinflip{
    showCoinResult(){
        document.querySelector('#results').innerText = coin.flipCoin()
    }
} 

let show = new ShowCoin()

document.querySelector('#flip').addEventListener('click',show.showCoinResult)