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
import { Alert } from '@material-ui/lab';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput';

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
            errorLogin: false,
            showPassword: false,
        };
    }

    onChangeHandler = (e) => {
        const {name, value} = e.target;

        if(name === 'email') {
            this.setState({
                email: value
            });
        }
        else if(name === 'password'){
            this.setState({
                password: value
            });
        }
    };

    logInDefaultHandler = async (e) => {
        e.preventDefault();

        const {email, password} = this.state;

        await auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log("autenticado")
        })
        .catch((error) => {
            this.setState({
                errorLogin: true
            })
        });
    }

    handleClickShowPassword = () => {

        const {showPassword} = this.state;

        this.setState({
            showPassword: !showPassword
        })
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    render() {
        const {classes} = this.props;
        const {email, password, errorLogin} = this.state;

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
                                                        {errorLogin &&
                                                            <Grid item xs={12}>
                                                                <Alert variant="filled" severity="error" size="small">
                                                                    <strong>Error:</strong> El usuario y contraseña son incorrectos.
                                                                </Alert>
                                                            </Grid>
                                                        }
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
                                                            <FormControl variant="outlined" fullWidth>
                                                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                                <OutlinedInput
                                                                    id="outlined-adornment-password"
                                                                    type={this.state.showPassword ? 'text' : 'password'}
                                                                    value={password}
                                                                    name="password"
                                                                    onChange={this.onChangeHandler}
                                                                    endAdornment={
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={this.handleClickShowPassword}
                                                                        onMouseDown={this.handleMouseDownPassword}
                                                                        edge="end"
                                                                        >
                                                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                                        </IconButton>
                                                                    </InputAdornment>
                                                                    }
                                                                    labelWidth={70}
                                                                />
                                                            </FormControl>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button
                                                        color="primary"
                                                        fullWidth
                                                        variant="contained"
                                                        onClick={this.logInDefaultHandler}
                                                        disabled={(email !== "" && email !== null) && (password !== "" && password !== null) ? false: true}
                                                    >
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
