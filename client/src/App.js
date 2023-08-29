import React from "react";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";



import Videoplayer from "./components/Videoplayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";



const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        border: '5px solid black',
        
        
        

        "@media (max-width: 1440px)": {
          appBar: {
            width: '90%'
            
           }
      }
    
    
        // [theme.breakpoints.down('xs')]: {
        //   width: '90%',
        // },
      },
     
      wrapper: {
        display:"flex",
        
        flexDirection: 'column',
        alignItems: "center",
        width: '100%'
      }
}));

const App = () => {
    const classes = useStyles();
    return(
       
        <div className={classes.wrapper}>
            
            <AppBar className={classes.appBar}  position="static" color="inherit">
            <Typography variant="h1" align="center" >Video chat </Typography>
            </AppBar>

            
            <Videoplayer/>
            <Options>
                <Notifications/>
            </Options>
            
        </div>
        
    );
}
export default App;





