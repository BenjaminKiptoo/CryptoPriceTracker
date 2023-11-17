const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=USD&include_24hr_change=true&include_last_updated_at=true;";

async function cryptoPrice (){
    const response = await fetch(url);
    let data = await response.json();

    console.log(data);
    document.querySelector(".bit-price").innerHTML = `$  ${data.bitcoin.usd}`;
    document.querySelector(".eth-price").innerHTML = `$  ${data.ethereum.usd}`;
    document.querySelector(".doge-price").innerHTML = `$  ${data.dogecoin.usd}`;
}
cryptoPrice();