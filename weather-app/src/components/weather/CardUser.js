import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { UserContext } from "../../providers/UserProvider";
import {auth} from "../../firebase";

class CardUser extends React.Component {

    static contextType = UserContext

    async logOut(e) {
        e.preventDefault();
        await auth.signOut()
        window.location.href="/";
    }

    render(){

        const {photoURL, displayName} =this.context;

        return (
            <Box mt={1}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Avatar alt="Remy Sharp" src={photoURL} />
                    </Grid>
                    <Grid item xs={12} style={{padding: "2% 0% 8% 0%"}}>
                        {displayName}
                        <IconButton aria-label="exit"  size="small" style={{color: "white"}} onClick = {this.logOut}>
                            <ExitToAppIcon fontSize="inherit" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}


export default CardUser;