import React from "react";
import { Button, Tooltip } from "@material-ui/core";

const HelpButton = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Tooltip open={open} onClose={() => setOpen(false)} title="The objective of the game is to guess the word
        by guessing one letter at a time. You have 10 guesses to correctly guess the word. Good luck!" placement="right">
            <Button onClick={() => setOpen(!open)}>Help</Button>
        </Tooltip>
    );
};

export default HelpButton;
