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

  nameChangedHandler = event => {
    this.setState({
      people: [
        { name: event.target.value, age: 38 },
        { name: "Sarah", age: 25 },
        { name: "Jane", age: 29 }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    // Makes a copy of the old array
    const people = [...this.state.people];

    people.splice(personIndex, 1);
    // This is shorthand for people: people
    this.setState({ people });
  };

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    // Swaps true for false.
    this.setState({ showPeople: !doesShow });
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

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hello world from React! </h1>
        <p> I'm really working!</p>
        <button style={style} onClick={this.togglePeopleHandler}>
          Toggle People
        </button>
        {people}
      </div>
    );
  }
}

export default App;
