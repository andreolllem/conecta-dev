import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostCard from "../../../components/PostCard";

const useStyles = makeStyles((theme) => ({
    root: {},
}));

const posts = [
    {
        id: 1,
        author: {
            name: "Carrolina Minni",
            username: "carolinaminni",
            avatar: "/images/avatars/caro.png",
        },
        title: "Billy posando pra SexDog! ",
        date: "Julho 18, 2020",
        description: "Muito animada com essa nova Rede Social!",
        hashtags: "#cinema, #tatto ",
        image: "/images/posts/billy.jpeg",
    },

    {
        id: 2,
        author: {
            name: "Lucas Minni",
            username: "lucasiminni",
            avatar: "/images/avatars/lucas.png",
        },
        title: "Olha só o Pippo! ",
        date: "Julho 18, 2020",
        description: "Pippo no estilo!",
        hashtags: "#cinema, #tatto ",
        image: "/images/posts/pippo.png",
    },

    {
        id: 3,
        author: {
            name: "Violeta Minni",
            username: "violetaminni",
            avatar: "/images/avatars/vi.png",
        },
        title: "Trabalho de ecola. ",
        date: "Julho 18, 2020",
        description: "Meu lindo trabalho de escola!",
        hashtags: "#cinema, #tatto ",
        image: "/images/posts/escola.jpeg",
    },
];

function Feed() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Feed;
