import React from "react";
import { render } from "react-dom";
import "./index.css";
import "./index.html";
import QuoteList from "./quotelist/quotelist.jsx";

class App extends React.Component {
  render() {
    return <QuoteList />;
  }
}

render(<App />, document.querySelector("#app"));
