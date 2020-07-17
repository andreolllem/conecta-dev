import React from "react";
import { Button } from "@material-ui/core";
import "../style.css";

function header() {
    return (
        <div>
            <header className="header">
                <div className="toobar">
                    <div>
                        <a href="/">Pix App</a>
                        <input type="text"></input>
                    </div>
                    <div>
                        <Button variant="contained" color="primary">
                            Novo Post
                        </Button>
                        <span>img1</span>
                        <span>img2</span>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default header;
