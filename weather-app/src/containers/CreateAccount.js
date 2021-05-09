import React from 'react';
import PropTypes from "prop-types";
import Box from '@material-ui/core/Box';
import {withStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { mdiGoogle } from '@mdi/js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    boxContainer:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        height: '100vh',
        backgroundImage: 'url("/images/background.png")',
        backgroundSize: 'cover',
    },
    button: {
        margin: theme.spacing(1),
    },
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
    },
});

class LogIn extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment >
                <Box className={classes.boxContainer}>
                    <Grid container direction="column" alignItems="center" justify="center" style={{maxWidth:"60%"}}>
                        <Grid item>
                            <Card>
                                <CardContent style={{textAlign: 'center', padding: "5% 8% 8% 8%"}}>
                                    <h2> Crear cuenta</h2>
                                    <Grid container direction="column" alignItems="center" justify="center">
                                        <Grid item xs={12}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                                        </Grid>
                                    </Grid>
                                    <form>
                                        <Grid container spacing={3}>
                                            <Grid item xs="12" md={5}>
                                                <Divider/>
                                            </Grid>
                                            <Grid item xs="12" md={2}></Grid>
                                            <Grid item xs="12" md={5}>
                                                <Divider/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Nombre"
                                                    name="name"
                                                    type="text"
                                                    variant="outlined" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                fullWidth
                                                label="Apellido"
                                                name="lastname"
                                                type="text"
                                                variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Correo electrónico"
                                                    name="email"
                                                    type="email"
                                                    variant="outlined" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                fullWidth
                                                label="Contraseña"
                                                name="password"
                                                type="password"
                                                variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button color="primary" fullWidth variant="contained" component={ Link }  to={'/'}>
                                                    Registrarme
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </React.Fragment>
        );
    }
}

LogIn.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles) (LogIn);
