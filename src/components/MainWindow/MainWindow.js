import React        from "react";

import Sidebar      from "./Sidebar/Sidebar";
import Navigator    from "./Navigator/Navigator";
import ActionView   from "./ActionView/ActionView";

var MainWindow = (props) => {
    return (
        <div>
            <Sidebar 
                selectedView={props.selectedView}
                selectView={props.selectView} />
            {props.selectedView === "INBOX" ? "" :
                <Navigator
                    store={props.store}
                    selectedView={props.selectedView} /> 
            }
            <ActionView
                store={props.store}
                selectedView={props.selectedView} />
        </div>
    );
};

export default MainWindow;