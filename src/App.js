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
      ],
      showPeople: false
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
          <div>
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
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hello world from React! </h1>
        <p> I'm really working!</p>
        <button style={style} onClick={this.togglePeopleHandler}>
          Toggle People.
        </button>
        {people}
      </div>
    );
  }
}

export default App;
