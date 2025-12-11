import {useEffect, useState} from "react"
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from "@mui/material/IconButton";
import {Link, useLocation} from "react-router-dom"
import ThemeToggle from "../ChangeTheme/ThemeToggle";
export default function AnchorTemporaryDrawer() {
const [open,setOpen]=useState(false)
const [pathName,setPathName]=useState("");
const location=useLocation();
useEffect(()=>{
  setPathName(location.pathname)
},[location.pathname])

 
  return (
    <div>
     
          <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon className="link"/></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
        <div className="drawer-div">
           <Link to="/">
          <p className={pathName=="/"?"underline-text":"link"}>Home</p>
        </Link>
        <Link to="/compare">
          <p className={pathName=="/compare"?"underline-text":"link"}>Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className={pathName=="/watchlist"?"underline-text":"link"}>WatchList</p>
        </Link>
         <Link to="/dashboard">
          <p className={pathName=="/dashboard"?"underline-text":"link"}>Dashboard</p>
        </Link>
        </div>
          </Drawer>
       
    </div>
  );
}
