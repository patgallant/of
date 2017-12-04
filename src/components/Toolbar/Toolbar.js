import "./Toolbar.css";

import React            from "react";

import ToolbarButton    from "./ToolbarButton";
import SearchBox        from "./SearchBox";

var Toolbar = () => {
    return (
        <div className="toolbar-container">
            <ToolbarButton title="Sidebar" />
            <ToolbarButton title="New Action" />
            <ToolbarButton title="Clean Up" />
            <ToolbarButton title="Quick Open" />
            <ToolbarButton title="View" />
            <SearchBox />
            <ToolbarButton title="Share" />
            <ToolbarButton title="Inspect" />            
            <ToolbarButton title="Sync" />            
        </div>
    );
};

export default Toolbar;