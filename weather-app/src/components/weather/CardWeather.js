import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const styles = theme => ({
    root: {
        backgroundColor:"white",
        borderRadius:"2%",
        padding:"10%",
        minHeight:"100%",
        alignText:"center",
    },
});

class CardWeather extends React.Component {

    render() {
        const { classes, weather } = this.props;

        return (
            <React.Fragment >
                <div className={classes.root}>
                    {weather ?
                        <div style={{textAlign:"center"}}>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {new Date().toLocaleString("es-MX", {timeZone: weather.timeZone})}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {weather.name}, {weather.sys.country}
                            </Typography>
                            <Typography variant="h4" component="h2" style={{marginTop:"5%", marginBottom:"2%"}}>
                                <FontAwesomeIcon icon={faCloud} style={{color:"gray"}}/> &nbsp;
                                {weather.main.temp} °C
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Feels like {weather.main.feels_like} °C. {weather.weather[0].main}, {weather.weather[0].description}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {weather.wind.speed} m/s ESE &nbsp;&nbsp;&nbsp;  {weather.main.pressure} hPa
                                <br />
                                Humidity: {weather.main.humidity} % &nbsp;&nbsp;&nbsp;  UV: 11
                                <br />
                                Dewp point: 16°C &nbsp;&nbsp;&nbsp; Visibility: {weather.visibility}
                            </Typography>
                        </div>
                    :
                        <div style={{textAlign:"center"}}>
                            <img src={window.location.origin + '/images/weather.gif'} className="img-fluid" alt="static view" width="50%"  />
                        </div>
                    }
                </div>
            </React.Fragment>
        );
    }
}

CardWeather.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles) (CardWeather);
