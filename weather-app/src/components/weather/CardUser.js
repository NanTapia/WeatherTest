import React, { useContext }  from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { UserContext } from "../../providers/UserProvider";

const CardUser = () =>  {

    const user = useContext(UserContext);
    const {displayName} = user;

    return (
        <Box mt={1}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Grid>
                <Grid item xs={12} style={{padding: "2% 0% 8% 0%"}}>
                    {displayName}
                </Grid>
            </Grid>
        </Box>
    );
}


export default CardUser;