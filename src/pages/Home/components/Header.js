import React from "react";
import { Bell } from "react-feather";
//import "../style.css";
import { makeStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    Typography,
    SvgIcon,
    Button,
    Avatar,
} from "@material-ui/core";

const useStyles = makeStyles({
    appBar: {
        boxShadow: "none",
    },
    img: {
        maxHeight: 55,
    },
    title: {
        color: "green",
        fontWeight: 300,
        fontFamily: "Ranchers",
    },
    button: {
        marginRight: 10,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: "flex",
        alignItems: "center",
    },
    bell: {
        marginRight: 10,
    },
});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inheret" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h4" className={classes.title}>
                    PixApp
                </Typography>
                <img
                    src="/images/logo.png"
                    alt="logo"
                    className={classes.img}
                />
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button
                        variant="contained"
                        style={{
                            background: "green",
                            color: "#fff",
                            marginRight: 10,
                            borderRadius: 10,
                        }}
                    >
                        Novo Post
                    </Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Remy Sharp" src="/images/logo.png" />
                </div>
                {/*<div>
                        <a href="/">Pix App</a>
                        <input type="text"></input>
                    </div>
                    <div>
                        
                        <span>img1</span>
                        <span>img2</span>
                    </div>*/}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
