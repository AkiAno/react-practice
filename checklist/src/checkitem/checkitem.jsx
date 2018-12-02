import React from 'react';

export default class CheckItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  changed = (e) => {
    this.props.changed(e.target.checked);
  }

  render() {
    return (
      <div>
        <input 
          type="checkbox" 
          id={this.props.name} 
          onChange={this.changed}/>
        <label htmlFor={this.props.name}>{this.props.text}</label>
      </div>
    );
  }
}