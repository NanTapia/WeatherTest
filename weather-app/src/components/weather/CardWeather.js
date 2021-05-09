import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        border: '1px solid #bdbdbd',
        padding: '5%',
        minHeight: '50vh'
    },
    bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    },
    title: {
    fontSize: 14,
    },
    pos: {
    marginBottom: 12,
    },
});

class CardWeather extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <div className={classes.root}>
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    be lent
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

CardWeather.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles) (CardWeather);
