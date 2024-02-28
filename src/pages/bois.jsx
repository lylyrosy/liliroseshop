
import React from 'react';
import BasicTable from '../composants/BasicTable';
import Typography from '@mui/material/Typography'

import { useTheme } from '@emotion/react';
const Bois = () => {

    const theme= useTheme(); 

    return (
        <div>
            

            <BasicTable/>





            <Typography color={theme.palette.appco.main } mt='30px' display='flex' justifyContent='center' component="h6"> <b>Hydrate-toi, c'est ta superpuissance !</b>  </Typography>
       
       
            <Typography color={theme.palette.magie.main } display='flex' justifyContent='center'  mt='100px' fontSize='15px' componentt="code">Designed by Lili Rose</Typography>
       <Typography   sx={{   fontFamily: "Gruppo, sans-serif", fontWeight: 400, fontStyle:'normal'}}  display='flex' justifyContent='center'  mt='0px' fontSize='12px' componentt="code">mon kif pour l'informatique m'accompagne sur le chemin qui mène à la paix</Typography>

        
        </div>

    );
}

export default Bois;
