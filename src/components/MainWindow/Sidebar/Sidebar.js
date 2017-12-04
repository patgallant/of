import "./Sidebar.css";

import React            from "react";

import SidebarButton    from "./SidebarButton";

var Sidebar = (props) => {
    return (
        <div className="sidebar-container">
            <SidebarButton 
                title="Inbox" 
                viewId="INBOX"
                selected={props.selectedView === "INBOX"}
                selectView={props.selectView} />
            <SidebarButton 
                title="Projects" 
                viewId="PROJECTS"
                selected={props.selectedView === "PROJECTS"}
                selectView={props.selectView} />
            <SidebarButton 
                title="Contexts" 
                viewId="CONTEXTS"
                selected={props.selectedView === "CONTEXTS"}
                selectView={props.selectView} />
            <SidebarButton 
                title="Forecast" 
                viewId="FORECAST"
                selected={props.selectedView === "FORECAST"} 
                selectView={props.selectView} />
            <SidebarButton 
                title="Flagged" 
                viewId="FLAGGED"
                selected={props.selectedView === "FLAGGED"} 
                selectView={props.selectView} />
            <SidebarButton 
                title="Review" 
                viewId="REVIEW"
                selected={props.selectedView === "REVIEW"}
                selectView={props.selectView} />
        </div>
    );
};

export default Sidebar;