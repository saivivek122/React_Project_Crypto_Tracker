import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import "./styles.css"

const WatchListMessage = () => {
  return (
    <div className="watch-list-message-textbutton" >
      <h1 className="watch-list-message-text">No WatchList Coins Found</h1>
      <Link to="/dashboard">
      <div className="watch-list-message-button">
      <Button text={"Dashboard"}/>
      </div>
      </Link>
    </div>
  )
}

export default WatchListMessage
