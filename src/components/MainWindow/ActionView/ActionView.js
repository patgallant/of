import "./ActionView.css";

import React        from "react";

import ActionList   from "./ActionList";
import ActionFooter from "./ActionFooter";

var ActionView = (props) => {
    return (
        <div className="action-view-container">
            <ActionList
                store={props.store} 
                selectedView={props.selectedView} />
            <ActionFooter />
        </div>
    );
};

export default ActionView;