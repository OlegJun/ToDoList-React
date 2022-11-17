import React from 'react';
import classes from "./CustomTextArea.module.css";

function CustomTextArea(props) {
    return (
        <textarea className={classes.textarea} {...props} rows="10"></textarea>
    );
}

export default CustomTextArea;