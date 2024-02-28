import React from "react";

import { Outlet } from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

import Appbar from "./composants/appbar";
import './index.css'; // Fichier CSS global


import MyDrawer from "./composants/mydrawer";
import Box from '@mui/material/Box'

import { Typography } from "@mui/material";
import { useState, useMemo } from "react";

import getDesignTokens from "./styles/mytheme";

const drawerwidth=240;

const Root = () => {

const [mode, setstate] = useState(localStorage.getItem("modeactuel")===null? 'light': localStorage.getItem("modeactuel")==='light'? 'light': 'dark');

const [open, setopen] = useState('none');

const [draw, setdraw] = useState("permanent");


  const hiddraw = (params) => {
    setopen('none')
    setdraw("permanent")
    
  }


  const showdraw = () => {
    setdraw("temporary")

    setopen('block')
    
  }
  
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return (
    



    <ThemeProvider theme={theme}>

<CssBaseline />


<div>


<Appbar drawerwidth={drawerwidth} showdraw= {showdraw}  />

{/* avec spread opertaeur  */}
<MyDrawer 

{...{drawerwidth,setstate,open,draw,hiddraw}}

// drawerwidth={drawerwidth} setstate={setstate} open={open} draw={draw} hiddraw={hiddraw}   

/>





<Box component="main" sx={{ ml: {sm: `${drawerwidth}px`}    , display:'flex', justifyContent:'center', mt:'66px'}} >




  <Outlet />
</Box>




</div>




    </ThemeProvider>
    







   
  );
};

export default Root;
