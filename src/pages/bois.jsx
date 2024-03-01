
import React from 'react';
import BasicTable from '../composants/BasicTable';
import Typography from '@mui/material/Typography'
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import { useTheme } from '@emotion/react';
const Bois = () => {

    const theme= useTheme(); 

    return (
        <div>
            

            <BasicTable/>





            <Typography color={theme.palette.appco.main } mt='30px' display='flex' justifyContent='center' component="h6"> <b>Hydrate-toi, c'est ta superpuissance !</b>  </Typography>
       
       
            <Typography color={theme.palette.magie.main } display='flex' justifyContent='center'  mt='20px' fontSize='15px' componentt="code">Designed by Lili Rose</Typography>
            
            
            <Typography color={theme.palette.appco.main } display='flex' justifyContent='center'  fontSize='12px' componentt="code">Trouvez dans la barre d'adresse Installer l'application </Typography>

            <Typography color={theme.palette.appco.main } display='flex' justifyContent='center'  fontSize='12px' componentt="code"> Lili Rose-Shop <BrowserUpdatedIcon/> ou <InstallMobileIcon/>  </Typography>



       <Typography  color={theme.palette.appco.main } sx={{   fontSize:'12px', fontFamily: "Gruppo, sans-serif", fontWeight: 400, fontStyle:'normal'}}  display='flex' justifyContent='center'  mt='0px' fontSize='10px' >mon kiff pour l'informatique </Typography>

       <Typography  color={theme.palette.appco.main } sx={{  fontSize:'12px', fontFamily: "Gruppo, sans-serif", fontWeight: 400, fontStyle:'normal'}}  display='flex' justifyContent='center'  mt='0px' fontSize='10px'> m'accompagne sur le chemin qui mène à la paix</Typography>

        </div>

    );
}

export default Bois;
