import React from 'react';
import PropTypes from "prop-types";
import Box from '@material-ui/core/Box';
import {withStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardWeather from '../components/weather/CardWeather'
import CardHistory from '../components/weather/CardHistory'

import AppBar from  "../components/ui/AppBar"

const styles = theme => ({
    root:{
        padding:"5%",
        flexGrow: 1,
    }
});

class Dashboard extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment >
                <AppBar/>
                <div className={classes.root}>
                    <Grid container direction="row" justify="center" spacing={3} >
                        <Grid item xs={12} md={8}>
                            <CardWeather/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <CardHistory/>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles) (Dashboard);
