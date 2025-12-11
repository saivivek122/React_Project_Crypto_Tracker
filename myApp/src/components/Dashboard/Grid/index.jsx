import React, { useEffect, useState } from "react";
import "./styles.css";
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import {Link} from "react-router-dom"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { isThereinWatchList, watchListText } from "../../../functions/getWatchListItem";
import {motion} from "framer-motion"
import  {toast} from "react-toastify"
const Grid = ({ coin }) => {
  console.log("the coin is",coin)
  const [buttonText,setButtonText]=useState(true);
  function handleWatchList(id){
    const text=watchListText(id)
    if(text){
      toast.success("Added To WatchList",{autoClose:1000})
    }
    else{
      toast.info("Removed From WatchList",{autoClose:1000})
    }
    setButtonText(!text)
  }
  useEffect(()=>{
     if (typeof window !== "undefined" && isThereinWatchList(coin.id)) {
    setButtonText(false);
  }
  },[coin.id])
   
  return (
    <Link to={`/coin/${coin.id}`}>
    <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className={`grid-container ${coin.price_change_percentage_24h<0 && "grid-container-red"}`}>
      <div className="info-flex">
        <img src={coin.image} className="coin-logo" />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ? (
        <div className="chip-flex">
          <div className="price-chip">
            {Number(coin.price_change_percentage_24h).toFixed(2)}%
          </div>
          <div className="icon-chip"><TrendingUpOutlinedIcon/></div>
          <button className="icon-chip watchList-Button" onClick={(e)=>{e.preventDefault();e.stopPropagation();handleWatchList(coin.id)}}>{buttonText ?<FavoriteBorderOutlinedIcon/>:<FavoriteOutlinedIcon/>}</button>
         
        </div>
      ) : (
       <div className="chip-flex">
        <div className="price-chip chip-red">
            {Number(coin.price_change_percentage_24h).toFixed(2)}%
        </div>
         <div className="icon-chip chip-red"><TrendingDownOutlinedIcon/></div>
         <button className="icon-chip chip-red watchList-Button" onClick={(e)=>{e.preventDefault();e.stopPropagation();handleWatchList(coin.id)}}>{buttonText ?<FavoriteBorderOutlinedIcon/>:<FavoriteOutlinedIcon/>}</button>
          
       </div>
      )}
      <div className="info-container">
      <h3 className="coin-price" style={{color:coin.price_change_percentage_24h<0?"var(--red)":"var(--green)"}}>${Number(coin.current_price).toLocaleString()}</h3>
      <p className="total_volume">Total Volume : {Number(coin.total_volume).toLocaleString()}</p>
      <p className="total_volume">Market Cap : ${Number(coin.market_cap).toLocaleString()}</p>
      <p></p>
      </div>
    </motion.div>
    </Link>
    
  );
};

export default Grid;
