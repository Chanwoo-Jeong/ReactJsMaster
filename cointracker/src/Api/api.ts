import axios from "axios";

const BASE_Url = "https://api.coinpaprika.com"

function getCoins() {
  return axios
    .get(`${BASE_Url}/v1/tickers`)
    .then((Response) => {
      return Response.data;
    })
    .catch((Error) => {
      console.log(Error);
    });
}

function getCoinInfo(coinId:string) {
    return axios
      .get(`${BASE_Url}/v1/coins/${coinId}`)
      .then((Response) => {
        return Response.data
      })
      .catch((Error) => {
        console.log(Error);
      });
}

function getCoinPrice(coinId:string) {
    return axios
      .get(`${BASE_Url}/v1/tickers/${coinId}`)
      .then((Response) => {
        return Response.data
      })
      .catch((Error) => {
        console.log(Error);
      });
}

function getCoinHistory(coinId:string){
  return axios
      .get(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
      .then((Response) => {
        return Response.data
      })
      .catch((Error) => {
        console.log(Error);
      });
}

export { getCoins, getCoinInfo, getCoinPrice ,getCoinHistory };
