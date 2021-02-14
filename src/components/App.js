import React, { Component, useState } from "react";
import "../styles/App.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.show = this.show.bind(this);
    this.state = {
      showMessage: false,
    };
  }

  show() {
    this.setState({ showMessage: true });
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={this.show}>
          Open
        </button>
        {this.state.showMessage && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
          </p>
        )}
      </div>
    );
  }
}

export default App;
