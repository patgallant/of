import "./SidebarButton.css";

import React            from "react";
import { Component }    from "react";

class SidebarButton extends Component  {
    handleButtonClick = () => {
        this.props.selectView(this.props.viewId);
    };

    render() {
        return (
            <div 
                className={this.props.selected ? "sidebar-button-container-selected" : "sidebar-button-container"}
                onClick={this.handleButtonClick}>
                <div className="sidebar-button-text">{this.props.title}</div>
            </div>);
    }
};

export default SidebarButton;