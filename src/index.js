import "./index.css";

import React                    from "react";
import ReactDOM                 from "react-dom";

import App                      from "./App";
import registerServiceWorker    from "./registerServiceWorker";

const STORE = {
    inbox: [
        {id: "1", title: "Action 1", complete: false, flagged: false},
        {id: "2", title: "Action 2", complete: false, flagged: false},
        {id: "3", title: "Action 3", complete: false, flagged: false}
    ],
    projects: [],
    contexts: []
};

ReactDOM.render(
    <App store={STORE} />, 
    document.getElementById("root")
);
registerServiceWorker();
