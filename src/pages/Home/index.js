import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import "./style.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    main: {
        height: "100vh",
        display: "flex",
        width: "1200px",
        margin: "0 auto",
    },
});

function Home() {
    const classes = useStyles();
    return (
        <div classes={classes.root}>
            <Header />
            <div className="toobar"></div>
            <main className={classes.main}>
                <NavBar />
                <Feed />
            </main>
        </div>
    );
}

export default Home;
