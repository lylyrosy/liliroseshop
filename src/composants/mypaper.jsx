

import React from 'react';
import Typography from '@mui/material/Typography'

import { Paper, IconButton } from '@mui/material';

import {Close} from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';


const Mypaper = ({settotal}) => {

    const theme= useTheme(); 


    return (

        
        <div>
            
            {/* <Paper sx={{display:'flex', justifyContent:'space-between', width:'360px',mt:'22px', pt:'27px', pb:'7px', position:'relative'}}>

<Typography sx={{ml:'16px', fontSize:'1.3em'}} variant="h6" >Votre poids</Typography>



 <Typography

sx={{

mr:'33px',
fontWeight:500,
fontSize:'1.4em',
opacity:'0.8'

}}


variant="h6" >kg</Typography> 






<IconButton sx={{position:'absolute',top:'0',right:'0'}}>
<Close sx={{fontSize:'20px'}}  />
</IconButton>



</Paper> */}

{/* <Paper sx={{display:'flex', justifyContent:'space-between', width:'360px',mt:'22px', pt:'27px', pb:'7px', position:'relative'}}>

<Typography sx={{ml:'16px', fontSize:'1.3em'}} variant="h6" >Votre taille</Typography>



 <Typography

sx={{

mr:'33px',
fontWeight:500,
fontSize:'1.4em',
opacity:'0.8'

}}


variant="h6" >cm</Typography> 






<IconButton sx={{position:'absolute',top:'0',right:'0'}}>
<Close sx={{fontSize:'20px'}}  />
</IconButton>



</Paper> */}



{/* <Paper sx={{display:'flex', justifyContent:'space-between', width:'360px',mt:'22px', pt:'27px', pb:'7px', position:'relative'}}>

</Paper> */}
<Typography sx={{mt:'55px', textAlign:'center', color: theme.palette.magie.main}} variant="h6" >Je me suis fait(e) plaisir avec : ${settotal} 

<br />
<AppShortcutIcon/> &nbsp;
 Ma carte bancaire est magique, elle ne dit jamais non ! </Typography>









{/* <IconButton sx={{position:'absolute',top:'0',right:'0'}}>
<Close sx={{fontSize:'20px'}}  />
</IconButton> */}











        </div>
    );
}

export default Mypaper;

