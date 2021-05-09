import React from 'react';
import PropTypes from "prop-types";
import Box from '@material-ui/core/Box';
import {withStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const styles = theme => ({
    boxContainer:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        height: '100vh',
        backgroundImage: 'url("/images/background.png")',
        backgroundSize: 'cover',
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover'
    },
    paddingitem:{
        padding: "3% 8% 4% 8%",
        textAlign: 'center'
    },
    marginForm:{
        marginTop:"2%"
    },
    button: {
        margin: theme.spacing(1),
    },
});

class LogIn extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment >
                <Box className={classes.boxContainer}>
                    <Grid container direction="column" alignItems="center" justify="center" style={{maxWidth:"60%"}}>
                        <Grid item >
                            <Card className={classes.paddingitem}>
                                <CardContent>
                                    <h2>Inicio de sesión</h2>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Divider/>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.button}
                                                startIcon={<FontAwesomeIcon icon={faFacebookSquare} />}
                                            >
                                                facebook
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                startIcon={<FontAwesomeIcon icon={faGoogle} />}
                                            >
                                                Google
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid container className={classes.marginForm}>
                                        <form>
                                            <Grid container spacing={3}>
                                                <Grid item xs="12" md={3}>
                                                    <Divider/>
                                                </Grid>
                                                <Grid item xs="12" md={6}>
                                                    Ingresar con correo electrónico
                                                </Grid>
                                                <Grid item xs="12" md={3}>
                                                    <Divider/>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container spacing={2}>
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
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button color="primary" fullWidth variant="contained" component={ Link }  to={'/dashboard'}>
                                                        Iniciar sesión
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                    <Grid container direction="row" align="left">
                                        <Grid item xs={12}>
                                            <small>
                                                ¿Aún no tienes una cuenta? &nbsp;
                                                <a href={'/createAccount'}>Regístrate</a>
                                            </small>
                                        </Grid>
                                    </Grid>
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
