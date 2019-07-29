import React from "react";

const person = props => {
  // The + 8 is so 0 is never a number. Someone who is 0 can't talk.
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default person;
