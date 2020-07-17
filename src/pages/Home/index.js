import React from "react";
import "./style.css";

function Home() {
    return (
        <div>
            <header className="header">
                <div className="toobar">
                    <div>
                        <a href="/">Pix App</a>
                        <input type="text"></input>
                    </div>
                    <div>
                        <button>Novo Post</button>
                        <span>img1</span>
                        <span>img2</span>
                    </div>
                </div>
            </header>
            <div className="toobar"></div>
            <main className="main">
                <div className="navbar">NavBar</div>
                <div className="feed">Feed</div>
            </main>
        </div>
    );
}

export default Home;
