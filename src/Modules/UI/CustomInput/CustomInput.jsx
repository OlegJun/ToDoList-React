import React from 'react';
import classes from "./CustomInputStyle.module.css";

function CustomInput(props) {
    return (
        <input className={classes.input} {...props}/>
    );
}

export default CustomInput;