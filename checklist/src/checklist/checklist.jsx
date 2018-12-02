import React from "react";
import CheckItem from "../checkitem/checkitem.jsx";
import Counter from "../counter/counter.jsx";
import NewItem from "../new-item/new-item.jsx";
import "./checklist.css";

export default class CheckList extends React.Component {
  constructor(props) {
    super(props);

    this.counterRef = React.createRef();

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("http://quotes.podlomar.org/api/items")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          items: json
        });
      });
  }

  itemChanged = checked => {
    if (checked) {
      this.counterRef.current.changeValue(1);
    } else {
      this.counterRef.current.changeValue(-1);
    }
  };

  addNewItem = text => {
    const newItemName = `item${this.state.items.length + 1}`;
    const newItems = this.state.items;
    newItems.push({ name: newItemName, text: text });
    this.setState({
      items: newItems
    });
  };

  render() {
    return (
      <>
        <div className="checklist">
          <div className="items">
            {this.state.items.map(item => (
              <CheckItem
                changed={this.itemChanged}
                name={item.name}
                text={item.text}
              />
            ))}
          </div>
          <Counter ref={this.counterRef} />
        </div>
        <NewItem addItem={this.addNewItem} />
      </>
    );
  }
}

/* Version for children 

{ items.map(
    (item) => {
      return (
        <CheckItem 
          changed={this.itemChanged} 
          name={item.name} 
          text={item.text}/>
      )
    }
  )
}
*/
