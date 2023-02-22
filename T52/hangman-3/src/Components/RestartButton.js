import React from "react";
import { Button } from "@material-ui/core";

const RestartButton = ({ handleRestart }) => {
    return (
        <Button className="restart-button" variant="contained" color="secondary" onClick={handleRestart}>
            Restart
        </Button>
    );
};

export default RestartButton;
