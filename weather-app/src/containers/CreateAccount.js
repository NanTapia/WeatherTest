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
import Avatar from '@material-ui/core/Avatar';
import { auth, generateUserDocument } from "../firebase";
import { Alert } from '@material-ui/lab';

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

class CreateAccount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            errorCreate: false,
        };
    }

    onChangeHandler = (e) => {
        const {name, value} = e.target;

        if(name === 'username') {
            this.setState({username: value});
        }
        if(name === 'email') {
            this.setState({email: value});
        }
        else if(name === 'password'){
            this.setState({password: value});
        }
    };

    createAccountHandler = async (e) => {
        e.preventDefault();

        const {username, email, password} = this.state;

        await auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {

            let user = userCredential.user;

            auth.currentUser.updateProfile({
                displayName: username
            }).then(function() {
                console.log("ready: add name")
            }, function(error) {
                console.log("error: add name")
            });

            generateUserDocument(user, {username});
        })
        .catch((error) => {
            this.setState({
                errorCreate: true
            })
        });

        this.setState({
            username:"",
            email:"",
            password:"",
        })
    }

    render() {
        const {classes} = this.props;
        const {username, email, password, errorCreate} = this.state;

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
                                            <Grid item xs={12} md={5}>
                                                <Divider/>
                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5}>
                                                <Divider/>
                                            </Grid>
                                            {errorCreate &&
                                                <Grid item xs={12}>
                                                    <Alert variant="filled" severity="error" size="small">
                                                        <strong>Error:</strong> La información ingresada no es válida.
                                                    </Alert>
                                                </Grid>
                                            }
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    label="Nombre completo"
                                                    placeholder="José Collí"
                                                    name="username"
                                                    type="text"
                                                    variant="outlined"
                                                    value={username}
                                                    onChange={this.onChangeHandler}
                                                />
                                            </Grid>
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
                                            <Grid item xs={12}>
                                                <Button
                                                    color="primary"
                                                    fullWidth
                                                    variant="contained"
                                                    onClick={this.createAccountHandler}
                                                    disabled={
                                                        (email !== "" && email !== null) && (password !== "" && password !== null) && (username !== "" && username !== null)?
                                                        false: true
                                                    }
                                                >
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

CreateAccount.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles) (CreateAccount);
