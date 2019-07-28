import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [{ name: 'Patrick', age: 38 }],
  };

  render() {
    return (
      <div className="App">
        <h1> Hello world from React! </h1>
        <p> I'm really working!</p>
        <button>Switch Name</button>
        {/* You can pass anything not just text between the opening and closing tag. */}
        <Person name="Patrick" age="38">
          My Hobbies: piano
        </Person>
        <Person name="John" age="25" />
        <Person name="Jane" age="29" />
      </div>
    );
  }
}

export default App;
