let clicked = false
let livePrice = document.querySelector(".p-text")
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then(response => response.json())
  .then(data => leftButton.innerHTML = data.name)
let logo = document.querySelector(".logo1")
let logo2 = document.querySelector(".logo2")
  let btc = document.querySelector(".bitcoin")
let btcDesc = document.querySelector(".btcDesc")
let leftButton = document.querySelector(".leftButton")
leftButton.addEventListener("click", function (e) {
  fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then(response => response.json())
  .then(data => btc.innerHTML = data.name)
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then(response => response.json())
  .then(data => btcDesc.innerHTML = data.description.en)
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then(response => response.json())
  .then(data => logo.src = data.image.small)
  fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then(response => response.json())
  .then(data => logo2.src = data.image.small)
  fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then(response => response.json())
  .then(data => livePrice.innerHTML ="Last Bitcoin Price: $" + data.market_data.current_price.usd)
  leftButton.style.backgroundColor = "black";
  leftButton.style.color = "white"
  rightButton.style.backgroundColor = "lightgray"
  rightButton.style.color = "black"
  button3.style.backgroundColor = "lightgray"
  button3.style.color = "black"
  button4.style.backgroundColor = "lightgray"
  button4.style.color = "black"
  
})


fetch("https://api.coingecko.com/api/v3/coins/ethereum")
  .then(response => response.json())
  .then(data => rightButton.innerHTML = data.name)
let rightButton = document.querySelector(".buttonRight")
rightButton.addEventListener("click", function (e) {
  fetch("https://api.coingecko.com/api/v3/coins/ethereum")
  .then(response => response.json())
  .then(data => btc.innerHTML = data.name)
fetch("https://api.coingecko.com/api/v3/coins/ethereum")
  .then(response => response.json())
  .then(data => btcDesc.innerHTML = data.description.en)
  fetch("https://api.coingecko.com/api/v3/coins/ethereum")
  .then(response => response.json())
  .then(data => logo.src = data.image.small)
  fetch("https://api.coingecko.com/api/v3/coins/ethereum")
  .then(response => response.json())
  .then(data => logo2.src = data.image.small)
  fetch("https://api.coingecko.com/api/v3/coins/ethereum")
  .then(response => response.json())
  .then(data => livePrice.innerHTML ="Last Eth Price: $" + data.market_data.current_price.usd)
  rightButton.style.backgroundColor = "black";
 rightButton.style.color = "white"
  leftButton.style.backgroundColor = "lightgray"
  leftButton.style.color = "black"
  button3.style.backgroundColor = "lightgray"
  button3.style.color = "black"
  button4.style.backgroundColor = "lightgray"
  button4.style.color = "black"
})

let button3 = document.querySelector(".button3")
fetch("https://api.coingecko.com/api/v3/coins/polkadot")
.then(response => response.json())
.then(data => button3.innerHTML = data.name)
  button3.addEventListener("click", function (e) {
    fetch("https://api.coingecko.com/api/v3/coins/polkadot")
    .then(response => response.json())
    .then(data => btc.innerHTML = data.name)
  fetch("https://api.coingecko.com/api/v3/coins/polkadot")
    .then(response => response.json())
    .then(data => btcDesc.innerHTML = data.description.en)
    fetch("https://api.coingecko.com/api/v3/coins/polkadot")
  .then(response => response.json())
  .then(data => logo.src = data.image.small)
  fetch("https://api.coingecko.com/api/v3/coins/polkadot")
  .then(response => response.json())
  .then(data => logo2.src = data.image.small)
  fetch("https://api.coingecko.com/api/v3/coins/polkadot")
  .then(response => response.json())
  .then(data => livePrice.innerHTML ="Last Polkadot Price: $" + data.market_data.current_price.usd)
  button3.style.backgroundColor = "black";
 button3.style.color = "white"
  leftButton.style.backgroundColor = "lightgray"
  leftButton.style.color = "black"
  rightButton.style.backgroundColor = "lightgray"
  rightButton.style.color = "black"
  button4.style.backgroundColor = "lightgray"
  button4.style.color = "black"
  })
  
let button4 = document.querySelector(".button4")

  fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(response => response.json())
    .then(data => button4.innerHTML = data.name)
  button4.addEventListener("click", function (e) {
    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
      .then(response => response.json())
      .then(data => btc.innerHTML = data.name)
    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
      .then(response => response.json())
      .then(data => btcDesc.innerHTML = data.description.en)
    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
      .then(response => response.json())
      .then(data => logo.src = data.image.small)
    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
      .then(response => response.json())
      .then(data => logo2.src = data.image.small)
      fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
      .then(response => response.json())
      .then(data => livePrice.innerHTML ="Last Dogecoin Price: $" + data.market_data.current_price.usd)
     button4.style.backgroundColor = "black";
      button4.style.color = "white"
       leftButton.style.backgroundColor = "lightgray"
       leftButton.style.color = "black"
       button3.style.backgroundColor = "lightgray"
       button3.style.color = "black"
       rightButton.style.backgroundColor = "lightgray"
       rightButton.style.color = "black"
  
  })
  

   

  
