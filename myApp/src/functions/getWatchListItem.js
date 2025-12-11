export function watchListText(coinId){
    console.log("The id is",coinId)
    let watchListItems=JSON.parse(localStorage.getItem("watchList"))||[];
    if(watchListItems.includes(coinId)){
     watchListItems=watchListItems.filter((item)=>item!==coinId)
      localStorage.setItem("watchList",JSON.stringify(watchListItems));
     return false
    }
    else{
      watchListItems.push(coinId);
      localStorage.setItem("watchList",JSON.stringify(watchListItems))
     return true
    }
  }
  export function isThereinWatchList(coinId){
    let watchListItems=JSON.parse(localStorage.getItem("watchList"))||[];
    return watchListItems.includes(coinId)
  }
