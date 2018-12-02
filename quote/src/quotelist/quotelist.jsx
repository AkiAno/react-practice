import React from "react";
import "./quotelist.css";
import Quote from "../quote/quote.jsx";
import NewItem from "../new-item/new-item.jsx";

export default class QuoteList extends React.Component {
  constructor(props) {
    super(props);

    //this.counterRef = React.createRef();

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("http://quotes.podlomar.org/quotes")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          items: json
        });
      });
  }

  render() {
    return (
      <>
        <div className="">
          <NewItem />
          <div className="items">
            {this.state.items.map(item => (
              <Quote
                id={item.qid}
                text={item.qtext}
                rating={item.rating}
                user={item.user}
              />
            ))}
          </div>
        </div>
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
