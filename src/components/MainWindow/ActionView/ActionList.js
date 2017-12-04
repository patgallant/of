import "./ActionList.css";

import React            from "react";
import { Component }    from "react";

import Action           from "./Action";
import ProjectContainer from "./ProjectContainer";
import CompletionCircle from "./CompletionCircle";

class ActionList extends Component {
    render() {
        var inbox = this.props.store.inbox;
        if (this.props.selectedView === "INBOX") {
            return (
                <div className="action-list-inbox-container">
                    {inbox.map((action, index) => {
                        return <Action />;
                    })}
                </div>
            );
        }

        else {
            return (
                <div>
                    <ProjectContainer />
                    <ProjectContainer />
                    <ProjectContainer />
                </div>
            );
        }
    }
};

export default ActionList;