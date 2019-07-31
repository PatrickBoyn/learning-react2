import React from "react";
import "./person.module.css";

const person = props => {
  // The + 8 is so 0 is never a number. Someone who is 0 can't talk.
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
