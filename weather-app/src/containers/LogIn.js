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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { logInWithGoogle } from "../firebase";
import { logInWithFacebook } from "../firebase";
import { auth } from "../firebase";

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

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: null,
        };
    }

    onChangeHandler = (e) => {
        const {name, value} = e.target;

        if(name === 'email') {
            this.setState({email: value});
        }
        else if(name === 'password'){
            this.setState({password: value});
        }
    };

    logInDefaultHandler = (e) => {
        e.preventDefault();

        const {email, password} = this.state;

        auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log("autenticado")
        })
        .catch((error) => {
            console.log("autenticado")
        });
    }

    render() {
        const {classes} = this.props;
        const {email, password} = this.state;

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
                                                onClick={() => { logInWithFacebook(); }}
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
                                                onClick={() => { logInWithGoogle(); }}
                                            >
                                                Google
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid container className={classes.marginForm}>
                                        <form>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={3}>
                                                    <Divider/>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    Ingresar con correo electrónico
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Divider/>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            label="Correo electrónico"
                                                            placeholder="user@gmail.com"
                                                            name="email"
                                                            type="email"
                                                            variant="outlined"
                                                            value={email}
                                                            onChange={this.onChangeHandler}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            label="Contraseña"
                                                            placeholder="BD4acd250"
                                                            name="password"
                                                            type="password"
                                                            variant="outlined"
                                                            value={password}
                                                            onChange={this.onChangeHandler}
                                                        />
                                                    </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button color="primary" fullWidth variant="contained" onClick={this.logInDefaultHandler}>
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
