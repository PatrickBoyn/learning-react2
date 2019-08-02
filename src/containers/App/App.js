import React, { Component } from "react";
import styles from "./App.module.css";
import People from "../../components/People/People";
import Header from "../../components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      people: [
        { id: 1, name: "Patrick", age: 38 },
        { id: 2, name: "John", age: 25 },
        { id: 3, name: "Jane", age: 29 }
      ]
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

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
    console.log("[App.js] render");
    let people = null;

    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={styles.App}>
        <Header
          title={this.props.appTitle}
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePeopleHandler}
        />
        {people}
      </div>
    );
  }
}

export default App;
