import React, {useContext} from "react";


import {Paper} from "@mui/material";
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";

import { SocketContext } from "../SocketContext";
import { ContextProvider } from "../SocketContext";


const useStyles = makeStyles((theme) => ({
    video: {
      width: '650px',
      


      "@media (max-width: 1440px)": {
        video: {
          width: '300px'
          
         }
    }

 
    },

    gridContainer: {
      justifyContent: 'center',

      "@media (max-width: 1440px)": {
        gridContainer: {
          width: '90%'
          
         }
    }


      
    },
    paper: {
      padding: '7px',
      border: '5px solid black',
      margin: '10px',
      // background: "",

    
 
    },
  }));


const Videoplayer = () => {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);
    const classes = useStyles();
    return(
        <Grid container className={classes.gridContainer}>
            {/* Our own Video */}
            {
              stream && (
                <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom >{name || 'Name'}</Typography>
                    <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                </Grid>
                 </Paper>
              )
            }

            
            {/* User's video  */}

              {
                callAccepted && !callEnded && (
                  <Paper className={classes.paper}>
                  <Grid item xs={12} md={6}>
                      <Typography variant="h5" gutterBottom >{call.name || 'Name'} </Typography>
                      <video playsInline ref={userVideo} autoPlay className={classes.video} />
                  </Grid>
              </Paper>
                )
              }

            
        </Grid>
    );
};
export default Videoplayer;





