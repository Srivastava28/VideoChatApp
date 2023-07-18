import React, { useContext, useState } from "react";
import { Paper } from "@mui/material";
import {Button} from "@mui/material";
import {TextField} from "@mui/material";
import {Grid} from "@mui/material";
import {Typography} from "@mui/material";
import {Container} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CopyToClipboard from "react-copy-to-clipboard";
import PhoneIcon from '@mui/icons-material/Phone';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import { SocketContext } from "../SocketContext.js";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      
    },
   
    gridContainer: {
      width: '100%',
      "@media (max-width: 1440px)": {
        gridContainer: {
          flexDirection:"column"   
         }
    }
    },


    container: {
      width: '600px',
      margin: '35px 0',
      padding: 0,
      background: 'white',
      border: '2px solid black',
       "@media (max-width: 1440px)": {
        container: {
          width: '80%'
          
         }
    }
    },
    margin: {
      marginTop: 20,
    },
    padding: {
      padding: 20,
    },
    paper: {
      padding: '15px 25px',
    //   border: '2px solid black',
      
    },
   }));


const Options = ({children}) =>{
    const {me, callAccepted, name, setName, callEnded, leaveCall, callUser  } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const classes = useStyles();
    return(
        <Container className={classes.container} >
            <paper elevation={10} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant='h6'>Account Info</Typography>
                            <TextField label='Name' value={name} onChange={(e)=> setName(e.target.value)} fullWidth/>
                            <CopyToClipboard text={me} className={classes.margin}>
                                <Button variant='contained' color='primary' fullWidth startIcon={<AssignmentIcon fontSize="large"/>}>
                                    Copy Your ID
                                </Button>

                            </CopyToClipboard>

                        </Grid>


                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant='h6'>Make a Call</Typography>
                            <TextField label='ID to Call' value={idToCall} onChange={(e)=> setIdToCall(e.target.value)} fullWidth/>
                            {callAccepted && !callEnded ? (
                                <Button variant="contained" color='secondary' startIcon={<PhoneDisabledIcon fontSize="large"/>}
                                fullWidth onClick={leaveCall} className={classes.margin}>
                                    Hang Up
                                </Button>) :(
                                <Button
                                variant="contained" color='primary' startIcon={<PhoneIcon fontSize="large"/>}
                                fullWidth onClick={()=> callUser(idToCall)} className={classes.margin}
                                >
                                    Call
                                </Button>
                            )
                                }

                        </Grid>


                    </Grid>

                </form>
                {children}
            </paper>

         
           
        </Container>
    );
}

export default Options;