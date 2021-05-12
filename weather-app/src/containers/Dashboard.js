import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import CardWeather from '../components/weather/CardWeather'
import CardHistory from '../components/weather/CardHistory'
import AppBar from  "../components/ui/AppBar"
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const styles = theme => ({
    root:{
        flexGrow: 1,
        backgroundColor: "#e3f2fd",
        minHeight:"100vh"
    },
    containerWeather:{
        padding:"2% 1% 0% 2%"
    },
    containerHistory:{
        padding:"2% 2% 0% 1%"
    }
});

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            city: "",
            weather: "",
            errorSearch:false,
            history:[]
        };
    }

    onChangeHandler = (e) => {
        const {value} = e.target;

        this.setState({
            city: value
        })
    };

    searchHandler = (e) => {
        e.preventDefault();
        const {history} = this.state;

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl)
        .then(response => {

            let dataHistory = response.data.name + ", " +response.data.sys.country;
            let arrayHistory = history;

            if(arrayHistory.length < 3){
                arrayHistory.push(dataHistory)
            }else{
                arrayHistory.shift()
                arrayHistory.push(dataHistory)
            }

            this.setState({
                weather: response.data,
                errorSearch: false,
                history: arrayHistory
            })
        })
        .catch(error => {
            this.setState({
                messageAlert: "error",
                errorSearch: true,
            })
        })
    }

    render() {
        const {classes} = this.props;
        const {city, weather, errorSearch, history} = this.state

        return (
            <React.Fragment >
                <div className={classes.root}>
                    <AppBar
                        city={city}
                        weather={weather}
                        onChangeHandler={this.onChangeHandler}
                        searchHandler={this.searchHandler}
                    />
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={12} md={8} className={classes.containerWeather}>
                            <CardWeather weather={weather} errorSearch={errorSearch}/>
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.containerHistory}>
                            <CardHistory history={history}/>
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
