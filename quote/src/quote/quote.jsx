import React from "react";
import "./quote.css";

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="quote">
        <p className="text">{'"' + this.props.text + '"'} </p>
        <div className="container">
          <p className="user-rating">{this.props.rating}</p>
          <p className="user-rating">{this.props.user}</p>
        </div>
      </div>
    );
  }
}
