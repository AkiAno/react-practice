import React from "react";

export default class NewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "Drake",
      text: "New Item"
    };
  }

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleUser = e => {
    this.setState({
      user: e.target.value
    });
  };

  onAdd = () => {
    const newQuote = {
      user: this.state.user,
      text: this.state.text
    };

    fetch("http://quotes.podlomar.org/quotes/create", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      mimeType: "application/json",
      body: JSON.stringify(newQuote)
    });
  };

  render() {
    return (
      <div className="new-item">
        <input type="text" value={this.state.user} onChange={this.handleUser} />
        <input type="text" value={this.state.text} onChange={this.handleText} />
        <button onClick={this.onAdd}>Add</button>
      </div>
    );
  }
}
