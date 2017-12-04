import "./ToolbarButton.css";

import React    from "react";

var ToolbarButton = ({title}) => {
    return (<div className="toolbar-button-container">{title}</div>);
};

export default ToolbarButton;