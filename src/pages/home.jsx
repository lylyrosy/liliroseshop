

import React from 'react';
import Typography from '@mui/material/Typography'
import Mypaper from '../composants/mypaper';
import { useEffect , useState} from 'react';


import { Paper, IconButton } from '@mui/material';

import {Close} from '@mui/icons-material';

import AppShortcutIcon from '@mui/icons-material/AppShortcut';

const Home = () => {




    //const [total, settotal] = useState(0); le usestate fera une boucle indfinie il ne va pas lire la suite du code donc jutilise pas settotal mais un code js avec une variable let

    let total=0;
// si on laisse [mydb] dans useeffect vide ya que le first runder qui sera affiché il faudrait raffraichir la page dans le cas du delete sinon  use my effect ne fera pas la maj automatiquement 


const [mydb, setmydb] = useState([]);

useEffect(() => {

    fetch("http://localhost:3100/mydb")
    .then((response) => response.json())
    .then((data) =>  setmydb(data) )


}, [mydb]); 






const handledelete = (item) => {

    fetch(
        `http://localhost:3100/mydb/${item.id}`,{method:'DELETE'
       
     })
    
    
    
     



    
}



    return (





        <div>



{mydb.map((item) => {



total+=item.prix

    return(

        <>

        <Paper sx={{display:'flex', justifyContent:'space-between', width:'360px',mt:'22px', pt:'27px', pb:'7px', position:'relative'}}>

<Typography     
 sx={{ml:'16px', fontSize:'1.3em'}} variant="h6" > {item.achat}</Typography>



 <Typography     


sx={{

mr:'33px',
fontWeight:500,
fontSize:'1.4em',
opacity:'0.8'

}}


variant="h6" > {item.prix} $</Typography> 






<IconButton     




onClick={ () => {
  
    handledelete(item)




  }}
  





sx={{position:'absolute',top:'0',right:'0'}}>
<Close sx={{fontSize:'20px'}}  />
</IconButton>


</Paper>






</>



    )
    
})}


<Mypaper settotal={total}/>


        </div>
    );
}

export default Home;
