import React, { useEffect, useState } from 'react'
import { get100Coins } from '../functions/get100Coins';
import Grid from '../components/Dashboard/Grid';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import WatchListMessage from '../components/Common/WatchListFallBack';

const WatchListPage = () => {
    const [allCoins,setAllCoins]=useState([]);
    const [watchListCoins,setWatchListCoins]=useState([])
    useEffect(()=>{
        getCoins()
       
    },[]);
     useEffect(()=>{
        if(allCoins.length>0){
            handleWatchList()
        }
    },[allCoins])
   
  
useEffect(() => {
  function refresh() {
    handleWatchList();
  }

  window.addEventListener("watchlist-updated", refresh);

  return () => window.removeEventListener("watchlist-updated", refresh);
}, [allCoins]);

async function getCoins(){
    let coins=await get100Coins();
    setAllCoins(coins)
}
function handleWatchList(){
   let watchListItems=JSON.parse(localStorage.getItem("watchList"));
   if(watchListItems.length>0){
   let filteredWatchListItems=allCoins.filter(item=>watchListItems.includes(item.id))
   setWatchListCoins(filteredWatchListItems)
   }
  
}
console.log(watchListCoins)
  return (
    <div>
      <Header/>
     {watchListCoins.length>0? <TabsComponent coins={watchListCoins}/>:<WatchListMessage/>}
    </div>
  )
}

export default WatchListPage
