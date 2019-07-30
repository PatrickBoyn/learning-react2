import React from "react";
import "./person.css";
import Radium from "radium";

const person = props => {
  const mediaQuery = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  // The + 8 is so 0 is never a number. Someone who is 0 can't talk.
  return (
    <div className="Person" style={mediaQuery}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
