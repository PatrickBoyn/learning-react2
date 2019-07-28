import React from 'react';

const person = () => {
  // The + 8 is so 0 is never a number. Someone who is 0 can't talk.
  return <p > I 'm a person and I am {Math.floor(Math.random() * 30) + 8} years old!</p>
};

export default person;