import axios from "axios";
const apiKey=import.meta.env.VITE_API_KEY
export const get100Coins = () => {
  const myCoins = axios
    .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&per_page=100&page=1",
      {
         headers:{
                "x-cg-demo-api-key":apiKey
              }
      }
    )
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      
      // setIsLoading(false);
    });
  return myCoins;
};
