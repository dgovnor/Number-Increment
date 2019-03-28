import React, { Component } from "react";
import Counters from "./components/counters";
import "./App.css";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handeleReset = () => {
    const reset = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: reset });
  };
  handleDelete = tag => {
    const counter = this.state.counters.filter(c => c.id !== tag);
    this.setState({ counters: counter });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counter={this.state.counters}
            onReset={this.handeleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
