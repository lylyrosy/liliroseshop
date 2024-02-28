
import { pink, purple } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
    palette:
    {

      

      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
           ochre: {main: "red", } ,

           appco:{ main:pink[400],},


           magie:{main: pink[600]},
         
          }
        : {
            // palette values for dark mode
           ochre:{ main: pink[700], },

           appco:{ main:purple[100]},

           magie:{main: purple[600]},

            
          }),
}
   
  }); export default getDesignTokens ;
 