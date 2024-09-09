import React from "react";
import "./App.css";
function TodoItem(props) {
  const styles = {
    color: "red",
    fontStyle: "italic",
  };
  return (
    <>
      <div className="todoitem">
        <input
          type="checkbox"
          checked={props.data.completed}
          onChange={() => props.handleChange(props.data.id)}
          className="inputodo"
        />
        <p style={props.data.completed ? styles : null}>{props.data.text}</p>
        <br />
      </div>
      <hr />
    </>
  );
}
export default TodoItem;
