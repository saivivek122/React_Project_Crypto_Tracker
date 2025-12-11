import axios from "axios";
const apiKey=import.meta.env.VITE_API_KEY
export const getCoinPrices=(id,days,priceType)=>{
 const prices= axios
          .get(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
            {  
              crossDomain:true,
              headers:{
                "x-cg-demo-api-key":apiKey
              }
            }
          )
          .then((response) => {
            console.log(response.data.prices);
            return response.data[priceType]
          })
          .catch((error) => {
            console.log(error);
            throw error
          });
          return prices
}