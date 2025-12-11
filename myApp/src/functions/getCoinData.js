import axios from "axios";
const apiKey=import.meta.env.VITE_API_KEY
export const getCoinData=(id)=>{
   const myData= axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`,
          {
             crossDomain:true,
            headers:{
                "x-cg-demo-api-key":apiKey
              }
          }
        )
        
        .then((response) => {
          console.log(response);
          return (response.data)
         
        })
        .catch((error) => {
          console.log(error);
        });
        return myData;
}