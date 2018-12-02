import React from 'react';
import { render } from 'react-dom';
import CheckList from './checklist/checklist.jsx';
import './index.css';
import './index.html';

class App extends React.Component {
  render() {
    return <CheckList />;
  }
}

render(<App />, document.querySelector('#app'));