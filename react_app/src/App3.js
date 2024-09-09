//todolist

import TodoItem from "./TodoItem";

import React from "react";
import TodosData from "./TodosData";
function App() {
  const toolitems = TodosData.map((data) => (
    <TodoItem key={data.id} data={data} />
  ));
  return (
    <div className="todolist">
      {/*  <TodoItem />
      <TodoItem />

      <TodoItem />
      <TodoItem /> */}
      {toolitems}
    </div>
  );
}
//export default App;

//convert above func comp to class comp

class App3 extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    console.log("changed " + id);
    this.setState((prevstate) => {
      const updatedTodos = prevstate.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }
  render() {
    const toolitems = TodosData.map((data) => (
      <TodoItem key={data.id} data={data} handleChange={this.handleChange} />
    ));
    return <div className="todolist">{toolitems}</div>;
  }
}
//to cllfunc this.funcname
export default App3;
//class based comps
//class comp must extend React.component and have render() method
//that contains return stmt
//tocall props we use this.props.whatever

//conversion of previous func comps and class based copms
/* class Appclass extends React.Component {
  render() {
    return (
      <>
        <Header username="asiya" />
        <Greeting />
      </>
    );
  }
}
export default Appclass;

class Header extends React.Component {
  render() {
    let username = "asiya";
    return (
      <h2>
        Hello world !<br />
        hello {this.props.username}
      </h2>
    );
  }
}
//export default Header;

class Greeting extends React.Component {
  render() {
    let time = null;
    let date = new Date();
    let hours = date.getHours();
    if (hours < 12) {
      time = "morning";
    } else if (hours >= 12 && hours <= 17) {
      time = "evening";
    } else time = "night";
    return (
      <>
        <h2>Good {time}</h2>
      </>
    );
  }
}
//export default Greeting;
 */
