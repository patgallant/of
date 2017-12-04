import "./App.css";
import React, { Component } from "react";

import Toolbar              from "./components/Toolbar/Toolbar";
import MainWindow           from "./components/MainWindow/MainWindow";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedView: "INBOX"
    }
  }

  selectView = (viewId) => {
    this.setState({
      selectedView: viewId
    });
  };

  render() {
    return (
      <div>
        <Toolbar />
        <MainWindow 
          selectedView={this.state.selectedView}
          selectView={this.selectView}
          store={this.props.store} />        
      </div>
    );
  }
}

export default App;
