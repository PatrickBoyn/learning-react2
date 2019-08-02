import React from "react";
import styles from "./Header.module.css";

const header = props => {
  let classes = [];
  let btnClass = "";

  if (props.showPeople) {
    btnClass = styles.Red;
  }
  if (props.people.length <= 2) {
    classes.push(styles.red);
  }
  if (props.people.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Header}>
      <h1> {props.title}</h1>
      <p className={classes.join(" ")}> I'm really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle People
      </button>
    </div>
  );
};

export default header;
