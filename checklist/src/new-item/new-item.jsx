import React from 'react';

export default class NewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'New Item'
    };
  }

  textChanged = (e) => {
    this.setState({text: e.target.value});
  }

  onAdd = () => {
    this.props.addItem(this.state.text);
  }

  render() {
    return (
      <div className="new-item">
        <input 
          type="text" 
          value={this.state.text} 
          onChange={this.textChanged} />
        <button onClick={this.onAdd}>Add</button>
      </div>
    );
  }
}