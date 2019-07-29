import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { name: "Patrick", age: 38 },
      { name: "John", age: 25 },
      { name: "Jane", age: 29 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      people: [
        { name: newName, age: 38 },
        { name: "Sarah", age: 25 },
        { name: "Jane", age: 29 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Hello world from React! </h1>
        <p> I'm really working!</p>
        {/* Don't add parentheses */}
        <button onClick={this.switchNameHandler.bind(this, "James")}>
          Switch Name
        </button>
        {/* You can pass anything not just text between the opening and closing tag. */}
        <Person
          click={this.switchNameHandler.bind(this, "George")}
          name={this.state.people[0].name}
          age={this.state.people[0].age}
        >
          My Hobbies: piano
        </Person>
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
        />
        <Person
          name={this.state.people[2].name}
          age={this.state.people[2].age}
        />
      </div>
    );
  }
}

export default App;
