import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import "./style.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import NavBar from "./components/NavBar";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    main: {
        height: "100vh",
        padding: 24,
    },
    toobar: {
        minHeight: 64,
    },
});

function Home() {
    const classes = useStyles();
    return (
        <div classes={classes.root}>
            <Header />
            <div className={classes.toobar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>
            </main>
        </div>
    );
}

export default Home;
