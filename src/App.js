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

  nameChangedHandler = event => {
    this.setState({
      people: [
        { name: event.target.value, age: 38 },
        { name: "Sarah", age: 25 },
        { name: "Jane", age: 29 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      borderRadius: "6px",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1> Hello world from React! </h1>
        <p> I'm really working!</p>
        {/* Don't add parentheses  
             except with an arrow function.*/}
        {/* Can be inefficient */}
        {/* Not my preferred way of styling. Remember inline styles have
            a higher specificity. */}
        <button style={style} onClick={() => this.switchNameHandler("Larry")}>
          Switch Name
        </button>
        {/* You can pass anything not just text between the opening and closing tag. */}
        <Person
          click={this.switchNameHandler.bind(this, "George")}
          name={this.state.people[0].name}
          age={this.state.people[0].age}
          changed={this.nameChangedHandler}
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
