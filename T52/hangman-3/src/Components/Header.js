// Header.js
import React from "react";
import { Typography } from "@material-ui/core";

const Header = () => {
    return (
        <div className= "header1">
            <Typography variant="h4" style={{ textAlign: "center" }}>
                Swim-Man(!)
            </Typography>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                A 90s themed hangman alternative
            </Typography>
        </div>
    );
};


export default Header;