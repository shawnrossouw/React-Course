import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Shawn", age: 40 },
      { name: "Melanje", age: 22 },
      { name: "MJ", age: 32 },
    ],
  };
  nameToggler = () => {
    this.setState({
      persons: [
        { name: "Shawn Rossouw", age: 40 },
        { name: "Melanje Kall", age: 22 },
        { name: "MJ Otto", age: 32 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>This is a REACT app from the react udemy course</h1>
        <button onClick={this.nameToggler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          Hobbies : Reading
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
