import React from 'react';
import classes from "./CustomButton.module.css";

function CustomButton({children, ...props}) {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    );
}

export default CustomButton;