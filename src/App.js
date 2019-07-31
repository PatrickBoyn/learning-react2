import React, { Component } from "react";
import "./App.module.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { id: 1, name: "Patrick", age: 38 },
      { id: 2, name: "John", age: 25 },
      { id: 3, name: "Jane", age: 29 }
    ]
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.people[personIndex]
    };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    // Shorthand for people: people
    this.setState({
      people
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
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      borderRadius: "6px",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "limegreen",
        color: "black"
      }
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
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    let classes = [];

    if (this.state.people.length <= 2) {
      classes.push("red");
      console.log(classes);
    }
    if (this.state.people < 1) {
      classes.push("bold");
      console.log(classes);
    }

    return (
      <div className="App.">
        <h1> Hello world from React! </h1>
        <p className={classes.join(" ")}> I'm really working!</p>
        <button style={style} onClick={this.togglePeopleHandler}>
          Toggle People
        </button>
        {people}
      </div>
    );
  }
}

export default App;
