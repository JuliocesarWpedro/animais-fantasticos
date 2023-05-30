export default function InitFetchBitcoin() {
  async function exportBitcoin(url) {
    try {
      const responseBitcoin = await fetch(url);
      const jsonBitcoin = await responseBitcoin.json();
      const spanBitcoin = document.querySelector(".btc-preco");
      spanBitcoin.innerText = (1000 / jsonBitcoin.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  exportBitcoin("https://blockchain.info/ticker");
}
