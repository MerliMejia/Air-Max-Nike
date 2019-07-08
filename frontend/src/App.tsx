import React from 'react';
import './css/App.css';

import Menu from "./components/Menu"
import BigLetters from "./components/BigLetters"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Menu />
        <div id="diagonalLine-container">
          <div id="diagonalLine" />
        </div>
        <BigLetters />
      </div>
    );
  }
}

export default App;
