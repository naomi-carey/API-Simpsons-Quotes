import "./App.css";
import Button from "./components/Button";
import DisplaySimpsons from "./components/DisplaySimpsons";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    quote: "",
  };

  componentDidMount() {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=10")
      .then((response) => response.json())
      .then((data) => {
        console.log("success", data);
        this.setState({
          quote: data,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h3>Simpsons Quotes via API</h3>
            {this.state.quote && <DisplaySimpsons simpson={this.state.quote} />}
            <Button chooseQuote={() => this.componentDidMount()} />
          </header>
        </div>
      </div>
    );
  }
}
