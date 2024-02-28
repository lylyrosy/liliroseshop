
import React, { useState } from 'react';
import { Link, Avatar, IconButton} from "@mui/material";

import Toolbar from "@mui/material/Toolbar";


import Typography from '@mui/material/Typography';
import AppBar from "@mui/material/AppBar";

import { Helmet } from 'react-helmet-async';
import { pink } from '@mui/material/colors';
import { useTheme } from '@emotion/react';

import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import SetMealIcon from '@mui/icons-material/SetMeal';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Appbar = ({drawerwidth, showdraw}) => {

    //la fct appbar et le tool appbar ne doivent pas avoir le meme nom ici les lettres majescules qui different reglent le probleme 


    const theme= useTheme(); 


    const appBarHeight = theme.mixins.toolbar.minHeight;



    return (
        <div>

<Helmet>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Pacifico&display=swap" rel="stylesheet"/>
</Helmet>

{/* <p>Hauteur de l'AppBar : {appBarHeight}px</p> */}
            
            <AppBar
        sx={{ width:{xs: '100% ', sm:`calc(100% - ${drawerwidth}px)`}   ,
        
        
        ml:  {xs:0, sm:`${drawerwidth}px`}   , 
        zIndex: 1000, // z-index élevé pour l'AppBar

        
        background: theme.palette.appco.main}}
        position="static"
      >






        <Toolbar>

        <IconButton 
        
      
        
        onClick={() => {


       showdraw()
        }}
        

        sx={{display:{sm:'none'}}}>

            <ShoppingCartIcon sx={{fontSize:'50px'}} />

            <Typography >Clique-moi </Typography>


          
          
        </IconButton>

          <Link
            href="/"
            underline="none"
            sx={{ flexGrow: 1, '&:hover': { fontSize: '30px' }, fontSize:'25px', fontFamily:'Indie Flower, cursive;', fontWeight:400, fontStyle:'normal '}}

          
            color={"inherit"}
          >
            
          </Link>



<Typography variant="h4" color="initial" sx={{fontFamily:'Pacifico, cursive;', fontWeight:400, fontStyle:'normal '}}>Lili Rose SHOP &nbsp; </Typography>

          <Avatar variant="circular" src="/liliroseshop/images/vecto.png" />
        </Toolbar>
      </AppBar>




        </div>
    );
}

export default Appbar;

