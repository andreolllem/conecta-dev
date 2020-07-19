import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        display: "flex",
        alignItems: "center",
    },
    caption: {
        marginRight: theme.spacing(1),
    },
    message: {
        height: "auto",
        marginBottom: theme.spacing(2),
        padding: "0 24px",
    },
    image: {
        height: 400,
        width: "40%",
        maxWidth: "50%",
        padding: "0 100px",
    },
    content: {
        padding: 0,
    },
    favorite: {
        marginLeft: "auto",
    },
    date: {
        marginLeft: theme.spacing(2),
    },
}));

function PostCard({ post }) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={<Avatar src={post.author.avatar} />}
                    title={
                        <Typography variant="h6" className={classes.caption}>
                            {post.title}
                        </Typography>
                    }
                    subheader={
                        <div className={classes.subheader}>
                            <Typography
                                variant="caption"
                                className={classes.caption}
                            >
                                {"Postado por:"}
                            </Typography>
                            <Typography variant="subtitle2">
                                {post.author.name}
                            </Typography>
                            <Typography
                                variant="caption"
                                className={classes.date}
                            >
                                {post.date}
                            </Typography>
                        </div>
                    }
                />
                <CardContent className={classes.content}>
                    <Typography className={classes.message} variant="body1">
                        {post.hashtags}
                    </Typography>
                    <CardActionArea>
                        <img
                            src={post.image}
                            alt="Foto"
                            className={classes.image}
                        />
                    </CardActionArea>
                </CardContent>
                <CardActions disabledSpacing>
                    <IconButton area-label="like">
                        <FavoriteIcon />
                        <Typography
                            style={{ cursor: "pointer" }}
                            color="textSecondary"
                            variant="body2"
                        >
                            {"10"}
                        </Typography>
                    </IconButton>

                    <IconButton area-label="comment">
                        <Typography
                            className={classes.reactions}
                            color="textSecondary"
                            variant="body2"
                        >
                            {"30"}
                        </Typography>
                    </IconButton>
                    <IconButton
                        area-label="favorite"
                        className={classes.favorite}
                    >
                        <ChatIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}

export default PostCard;
