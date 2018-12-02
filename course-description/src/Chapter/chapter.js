import React from "react";
import { render } from "react-dom";
import "./chapter.css";

export default class Chapter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="chapter">
        <div className="date">
          <div className="day">{this.props.day}</div>
          <div className="">{this.props.date}</div>
        </div>
        <div className="description">
          <h2 className="headline">{this.props.headline}</h2>
          <p className="text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}
