import "./Action.css"

import React            from "react";

import CompletionCircle from "./CompletionCircle";

var Action = () => {
    return (
        <div className="action-container">
            <div className="action-title">Action</div>
            <div><CompletionCircle /></div>
        </div>);
};

export default Action;