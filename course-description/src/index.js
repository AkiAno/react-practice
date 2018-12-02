import React from "react";
import { render } from "react-dom";
import "./index.css";
import "./index.html";
import Chapter from "./Chapter/chapter";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Chapter
          day="Tu"
          date="4.9"
          headline="Web Development Process - From Mockup to Coding"
          text="Minimum Viable Product. A strategy used for fast and quantitative market testing of a product or product feature.

          As Eric Ries says in his book “The Lean Startup”: A minimum viable product is the version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort."
        />
        <Chapter
          day="Wed"
          date="5.9"
          headline="Graphic Editing For Web Development"
          text="Pixels – a visual representation of data in a digital image or graphic (megapixel = 1 million pixels or 3.2 megapixels = 11 X 14 photograph) 
          Resolution – number of pixels per inch (ppi) in an image."
        />
        <Chapter
          day="Th"
          date="6.9"
          headline="The display property"
          text="block
          inline
          inline-block: inline element that can have top and bottom margin and width and height. This is more or less obsolete since we have flexbox.
          flex: sets the container to flexbox layout.
          none: hides element completely, even from screenreaders (different from visibility property which hides element visually and is still read by screenreaders.)"
        />
      </div>
    );
  }
}

render(<App />, document.querySelector("#app"));
