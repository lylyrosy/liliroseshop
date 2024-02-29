

import React from 'react';



import { Drawer, Divider, Box} from "@mui/material";






import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

import LocalDrinkIcon from '@mui/icons-material/LocalDrink';

import { useLocation, useNavigate,} from 'react-router-dom';
import { useTheme } from '@emotion/react';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';



import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const MyDrawer= ({drawerwidth,setstate,open,draw,hiddraw}) => {




const theme=useTheme(); //utiliser le theme actuel


//utiliser le path

  const navig=useNavigate();

  //utiliser hook changer background du path lordque je suis dans le path

const locactu=useLocation();


const mylist=[

  {text:'Fais toi plaisir! ', icon:<FavoriteBorderIcon />, path:'/liliroseshop'},
  // {text:'IMC', icon:<MonitorWeightIcon />, path:'/create'},
  { text:'Emplettes', icon:<AddShoppingCartIcon  />, path:'/liliroseshop/create'},
  {text:'Déjeuners&brunchs', icon:<LocalCafeIcon  />, path:'/liliroseshop/dej'},
  {text:'Régime meditéranéen', icon:< LocalPizzaIcon />, path:'/liliroseshop/medit'},
  {text:'Boissons saines', icon:< LocalDrinkIcon />, path:'/liliroseshop/bois'},
  {text:'LiliRose thérapie', icon:<LocalFloristIcon/>, path:'/liliroseshop/external'},


]





    return (
        <div>





<Box component="nav" >
  <Drawer


        sx={{
          display:{xs:open, md:'block'},
          
          width: `${drawerwidth}px` ,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width:`${drawerwidth}px` ,
            boxSizing: 'border-box',
          },
        }}
        variant={draw}
        anchor="left"
        open={true}
     
        onClose={() => { hiddraw() }}
      >




      


        <List>



    


      


    <ListItem sx={{display:'flex', justifyContent:'center', mb:'19px'}} disablePadding>


        <IconButton sx={{ }}




onClick={ () => {

  //historques de modes 

  localStorage.setItem("modeactuel",theme.palette.mode==="light" ? 'dark':'light')

  //toogler le mode

  setstate(theme.palette.mode==="light" ? "dark" : "light")


  
} }


color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon sx={{color:"pink"}} /> : <Brightness4Icon />}
      </IconButton>


        </ListItem>

  <Divider />


{mylist.map((item) => {

return(

  <ListItem 

  key={item.text}
        
        
  sx={{
    background:
    locactu.pathname===item.path
    
   ? theme.palette.appco.main
  :null,
  
  
  }}
  
  
  
  disablePadding>
      <ListItemButton onClick={() => 
        
        
        
        { navig(item.path)
        
        
          // hiddraw() au cas ou je veux fermer le drawer automatiquement une fois que je suis dans mon path
        
        }}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>



)




})}




       






        </List>
  
      </Drawer>

</Box>
 







            
     



        </div>
    );
}

export default MyDrawer;
