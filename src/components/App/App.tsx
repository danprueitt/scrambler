import React from "react";
import "./App.css";
import Form from "../Form/Form";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Another Scrambler</h3>
      </header>
      <p className="App-intro">
        Enter a sentence on each line to be scrambled.
      </p>
      <Form></Form>
      <Analytics />
    </div>
  );
}

export default App;
