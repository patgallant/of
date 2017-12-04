import "./Navigator.css";

import React            from "react";

import TreeView         from "./TreeView";
import NavigatorToolbar from "./NavigatorToolbar";

var Navigator = () => {
    return (
        <div className="navigator-container">
            <TreeView />
            <NavigatorToolbar />
        </div>
    );
};

export default Navigator;