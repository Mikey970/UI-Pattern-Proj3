let clicked = false
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

  
  })
  

   

  
