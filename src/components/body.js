import React from "react";
import styles from "./body.module.css";

const Body = (props) => {
    return (
        <div className={styles.root}>
            {props.children}
        </div>
    );
};

export default Body;