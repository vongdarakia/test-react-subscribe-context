import React from "react";
import "./App.css";
import { DeepSubscriberDemo } from "./examples/DeepSubscriberDemo/DeepSubscriberDemo";
import { ReactTrackDemo } from "./examples/ReactTrackDemo/ReactTrackDemo";

function App() {
    return (
        <div className="App">
            <DeepSubscriberDemo />
            <ReactTrackDemo />
        </div>
    );
}

export default App;
