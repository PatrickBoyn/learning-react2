import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1> Hello world from React! </h1>
      <p> I'm really working!</p>
      <Person name="Patrick" age="38">
        My Hobbies: piano
      </Person>
      <Person name="John" age="25" />
      <Person name="Jane" age="29" />
    </div>
  );
}

export default App;
