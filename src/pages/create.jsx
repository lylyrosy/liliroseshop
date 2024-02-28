//ce qui est en commentaire est un code ou jutilise un fichier .json , comme github ne deploie que des appli statiques je ne peux pas utiliser cette technique
// d ou lutilisation de localstorage du navigateur afin de pouvoir deployer cette appli sur github

import React from 'react';

import Box from '@mui/material/Box'

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple} from '@mui/material/colors';


import CalculateIcon from '@mui/icons-material/Calculate';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AddCardIcon from '@mui/icons-material/AddCard';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';



import { TextField,InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
  // color: theme.palette.getContrastText(),
  backgroundColor: theme.palette.appco.main,
  '&:hover': {
    backgroundColor: theme.palette.ochre.main,
  },
}));
  





const Create = () => {


const [achat, setachat] = useState("");

const [prix, setprix] = useState(0);

const navigo= useNavigate();


//avec un localstorage

const handleAdd= () => {
  const newItem = { id: Date.now(), achat, prix };
  const existingItems = JSON.parse(localStorage.getItem('mydb')) || [];
  const updatedItems = [...existingItems, newItem];
  localStorage.setItem('mydb', JSON.stringify(updatedItems));
  navigo('/');
};




  
    return (



        <div>

<Box noValidate autoComplete="off"
 sx={{width:'380px'}} component="form">

  
    
<TextField

onChange={(eo) => {
  setachat((eo.target.value))
}}

fullWidth={true}
          label="Petit plaisir de la vie"
          id="standard-start-adornment"
          sx={{ mt:'22px', display:'block'}}
          InputProps={{
            startAdornment: <InputAdornment position="start"><CardGiftcardIcon/> </InputAdornment>,
          }}
          variant="filled"
        />


<TextField



onChange={(eo) => {
  setprix(Number(eo.target.value))
}}


fullWidth={true}
          label="Valeur"
          id="standard-start-adornment"
          sx={{ mt:'22px', display:'block'}}
          InputProps={{
            startAdornment: <InputAdornment position="start"><AddCardIcon/> &nbsp; $ </InputAdornment>,
          }}
          variant="filled"
        />

<ColorButton 

onClick={ () => 
  
  
  {
  

//   fetch('https://raw.githubusercontent.com/lylyrosy/liliroseshop/gh-pages/db.json',{method:'POST',     
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({achat, prix}),


// }).then((params) => {
//   navigo("/")
// })


handleAdd()

}}



sx={{mt:'22px'}} variant="contained">Ajouter au panier &nbsp; <ShoppingCartCheckoutIcon/></ColorButton>



</Box>





        </div>
    );
}

export default Create;
