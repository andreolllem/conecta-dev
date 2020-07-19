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
import { useSelector } from "react-redux";

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
    const user = useSelector((state) => state.user);

    return (
        <AppBar position="fixed" color="inheret" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h4" className={classes.title}>
                    MeMi App
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
                            borderRadius: 6,
                        }}
                    >
                        Novo Post
                    </Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Remy Sharp" src={user && user.avatar} />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
