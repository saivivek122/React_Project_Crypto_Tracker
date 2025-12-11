import React, { useEffect, useState } from "react";
import "./styles.css";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import Tooltip from "@mui/material/Tooltip";
import { convertNumber } from "../../../functions/convertNumbers";
import {Link} from "react-router-dom"
import { isThereinWatchList, watchListText} from "../../../functions/getWatchListItem";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {motion} from "framer-motion"
import {toast} from "react-toastify"
const List = ({ coin }) => {
  const [buttonText,setButtonText]=useState(true);
  function handleWatchList(id){
    const text=watchListText(id);
    if(text){
      toast.success("Added To WatchList",{autoClose:1000})
    }
    else{
      toast.info("Removed From WatchList",{autoClose:1000})
    }
    setButtonText(!text)

  }
  useEffect(()=>{
      if(isThereinWatchList(coin.id)){
        setButtonText(false)
      }
  },[])
  return (
    <Link to={`/coin/${coin.id}`}>
    <motion.tr initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{duration:0.5}} className="list-row">
      <Tooltip title="Coin Logo">
        <td className="td-image">
          <img src={coin.image} className="coin-logo" />
        </td>
      </Tooltip>
      <Tooltip title="Coin Info" placement="bottom-start">
        <td>
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </td>
      </Tooltip>
      <Tooltip title="Price Change in 24Hrs" placement="bottom-start">
        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex">
            <div className="price-chip">
              {Number(coin.price_change_percentage_24h).toFixed(2)}%
            </div>
            <div className="icon-chip td-icon">
              <TrendingUpOutlinedIcon />
            
            </div>
            <button className="icon-chip td-icon watchList-Button"  onClick={(e)=>{e.preventDefault();e.stopPropagation();handleWatchList(coin.id)}}>{buttonText?<FavoriteBorderOutlinedIcon/>:<FavoriteOutlinedIcon/>}</button>
          </td>
        ) : (
          <td className="chip-flex">
            <div className="price-chip chip-red">
              {Number(coin.price_change_percentage_24h).toFixed(2)}%
            </div>
            <div className="icon-chip chip-red td-icon">
              <TrendingDownOutlinedIcon />
            
            </div>
            <button className="icon-chip chip-red td-icon watchList-Button" onClick={(e)=>{e.preventDefault();e.stopPropagation();handleWatchList(coin.id)}}>{buttonText?<FavoriteBorderOutlinedIcon/>:<FavoriteOutlinedIcon/>}</button>
          </td>
        )}
      </Tooltip>
      <Tooltip title="Current Price">
        <td className="info-container">
          <h3
            className="coin-price td-center-align"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${Number(coin.current_price).toLocaleString()}
          </h3>
        </td>
      </Tooltip>
      <Tooltip title="Total Volume" placement="bottom-end">
        <td>
          <p className="total_volume td-right-align td-total-volume">
            {Number(coin.total_volume).toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap" placement="bottom-end">
        <td className="desktop-td-mkt">
          <p className="total_volume td-right-align">
            ${Number(coin.market_cap).toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap" placement="bottom-end">
        <td className="mobile-td-mkt">
          <p className="total_volume td-right-align">
            ${convertNumber(Number(coin.market_cap))}
          </p>
        </td>
      </Tooltip>
    </motion.tr>
    </Link>
  );
};

export default List;
