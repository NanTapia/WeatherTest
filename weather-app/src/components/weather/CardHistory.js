import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        backgroundColor:"white",
        borderRadius:"2%",
        padding:"17%",
        minHeight:"100%",
        alignText:"center",
    },
});

class CardHistory extends React.Component {

    render() {
        const {classes} = this.props;

        return (
                <React.Fragment>
                    <div className={classes.root}>
                        <Grid container spacing={5} >
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            Puebla, MX
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            Puebla, MX
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            Puebla, MX
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </React.Fragment>
        );
    }
}

CardHistory.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles) (CardHistory);
