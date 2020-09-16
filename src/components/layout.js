import React from "react";
import Header from "./header";
import Body from "./body";

const Layout = (props) => {
    return (
        <div>
        <Header/>
        <Body>
            {props.children}
        </Body>
        </div>
    );
};

export default Layout;