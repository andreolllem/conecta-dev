import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Paper,
    Button,
    ListSubheader,
    ListItem,
    ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
    },
    button: {
        width: "100%",
    },
}));

const tags = [
    { id: 1, name: "moda" },
    { id: 2, name: "tatto" },
    { id: 3, name: "revista" },
    { id: 4, name: "cinema" },
    { id: 5, name: "saúde" },
    { id: 6, name: "amor" },
];

function NavBar() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button
                className={classes.button}
                style={{
                    background: "#008000",
                    color: "#fff",
                    borderRadius: 10,
                }}
            >
                Registrar
            </Button>
            <ListSubheader>{`Tags em Alta`}</ListSubheader>
            {tags.map((item) => (
                <ListItem dense button key={`item-${item.id}-${item.name}`}>
                    <ListItemText primary={`#${item.name}`} />
                </ListItem>
            ))}
            <ListItem button>Exibir mais Tags</ListItem>
        </Paper>
    );
}

export default NavBar;
