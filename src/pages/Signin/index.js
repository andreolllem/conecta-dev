import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import LockIcon from "@material-ui/icons/Lock";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinK from "@material-ui/core/LinK";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
    },
    image: {
        backgroundImage: "url(/images/campo.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        padding: theme.spacing(2),
        textAlign: "center",
    },
    form: {
        margin: theme.spacing(2, 4),
    },
    logo: {
        width: 160,
        height: 180,
    },
}));

function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {"Copiright"}
            <a color="ïnherit" href="http://localhost:3000/home">
                André Mello
            </a>
            {"  "}
            {new Date().getFullYear()}
        </Typography>
    );
}

function SignIn() {
    const classes = useStyles();
    const navigate = useNavigate();

    function handleSignin() {
        axios
            .post("/api/home/login")
            .then((resposnse) => console.log(resposnse));
    }

    return (
        <Grid container className={classes.root}>
            <Grid
                item
                container
                direction="column"
                justify="center"
                alignItems="center"
                md={7}
                className={classes.image}
            >
                <Grid>
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className={classes.logo}
                    ></img>
                </Grid>
                <Typography
                    style={{
                        color: "#fff",
                        fontSize: 35,
                        lineHeight: "45px",
                        fontFamily: "Ranchers",
                    }}
                >
                    <strong>MeMi App</strong>
                </Typography>
                <Typography
                    variant="body2"
                    style={{
                        color: "#FFF",
                        marginTop: 5,
                        fontSize: 20,
                        lineHeight: "30px",
                    }}
                >
                    Social Family
                </Typography>
            </Grid>
            <Grid item md={5}>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt={8}
                >
                    <Avatar
                        style={{
                            background: "#ccc",
                            color: "#00695f",
                            marginBottom: "10px",
                        }}
                    >
                        <LockIcon />
                    </Avatar>
                    <Typography variant="h5">Acessar</Typography>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            id="password"
                            type="password"
                            autoComplete="email"
                        />
                        <Button
                            onClick={handleSignin}
                            fullWidth
                            variant="contained"
                            style={{
                                background: "#008000",
                                color: "#fff",
                                borderRadius: 6,
                                border: 1,
                                marginTop: 15,
                            }}
                        >
                            Registrar
                        </Button>
                        <Grid container>
                            <Grid item>
                                <LinK>Esqueceu sua senha?</LinK>
                            </Grid>
                            <Grid item>
                                <LinK>Não tem uma conta? Registre-se!</LinK>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    );
}

export default SignIn;
