import MenuItem from "@mui/material/MenuItem";
import "./styles.css"
import Select from "@mui/material/Select";
import { useState } from "react";

export default function SelectDays({days,handleDaysChange,noPTag}) {
 

  return (
    <div className="select-days">
        {!noPTag && <p>Price Change In</p>}
      <Select
      sx={{height:"2.5rem",
        color:"var(--white)",
        "& .MuiOutlinedInput-notchedOutline":{
            borderColor:"var(--white)",
        },
        "& .MuiSvgIcon-root":{
            color:"var(--white)",
        },
        "&:hover":{
            "&& fieldset":{
                borderColor:"#3a80e9"
            }
        },
        "@media (max-width: 600px)":{
          height:"2rem",
          fontSize:"0.8rem",
          minWidth:"20px",
          mx:"auto",
          ml:-3.5,
          mr:1,
          width:90,

          "& .MuiSelect-select":{
            padding:"6px 10px",
            fontSize:"0.8rem"
          },
          "& .MuiSvgIcon-root":{
            fontSize:"1rem"
          }
        }
      }
    
    }
      
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleDaysChange}
      >
         <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}
