import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
    background: {
        backgroundColor: '#cfe8fc',
        height: '100vh'
    },
    spaceUsername:{
        marginTop: "5px"
    }
};


class CardUser extends React.Component  {

    render() {

        const {classes} = this.props;

        return (
            <Box mt={1}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Grid>
                    <Grid item xs={12} >
                        <p className={classes.spaceUsername}>José Colí</p>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

CardUser.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles) (CardUser);