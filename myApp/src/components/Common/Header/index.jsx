import React, { useEffect, useState } from "react";
import "./styles.css";
import AnchorTemporaryDrawer from "./drawer";
import Button from "../Button";
import {Link, useLocation} from "react-router-dom"
import ThemeToggle from "../ChangeTheme/ThemeToggle";
const Header = () => {
  const [pathName,setPathName]=useState("");
  const location=useLocation();
  useEffect(()=>{
    setPathName(location.pathname)
  },[location.pathname])
  
  return (
    <div className="navbar">
      <ThemeToggle/>
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link to="/">
          <p className={pathName=="/" ?"underline-text":"link"}>Home</p>
        </Link>
        <Link to="/compare">
          <p className={pathName=="/compare"?"underline-text":"link"}>Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className={pathName=="/watchlist"?"underline-text":"link"}>WatchList</p>
        </Link>
         <Link to="/dashboard">
         <div className={pathName=="/dashboard" ?"button-color":""}>
          <Button text={"Dashboard"} onClick={()=>console.log("Btn Clicked")}
          
            />
            </div>
        </Link>
       
      </div>
      <div className="mobile-drawer">
        <AnchorTemporaryDrawer/>
      </div>
    </div>
    
  );
};

export default Header;
