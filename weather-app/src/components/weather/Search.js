import React from 'react';
import PropTypes from "prop-types";
import { withStyles, fade} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    root:{
        backgroundColor:"rgba(59,138,217,.2)",
        padding:"1%"
    },
    filledInput:{
        backgroundColor:"rgba(255,255,255,.9)",
        color:"darkblue",
        '&:hover': {
            background: "rgba(255,255,255,.8)",
        },
    }
});


class Search extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {
            city: "",
        };
    }

    render() {

        const { classes, city, onChangeHandler, searchHandler } = this.props;

        return (
            <React.Fragment>
                <form>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1} className={classes.root}>
                        <Grid item xs={12} md={3}>
                            Ciudad:
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl variant="filled" >
                                <InputLabel htmlFor="label-city">Ciudad</InputLabel>
                                <FilledInput
                                    required
                                    id="label-city"
                                    type='text'
                                    value={city}
                                    onChange={onChangeHandler}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton aria-label="search" onClick={searchHandler}>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    className={classes.filledInput}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </React.Fragment>
        );
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Search);