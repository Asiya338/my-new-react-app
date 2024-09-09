import React, { Component } from "react";
import TodosData from "./TodosData";
//states
//class comps : ES6 classes that extend from React.Component
//props are immutable => unchangeable
//to call constructor in class always call super() before refering to immediate parent class
/* class Appclass extends Component {
  constructor() {
    super();
    this.sate = {
      answer: "yes",
    };
  }
  render() {
    return (
      <>
        <h1>hello</h1>
        <h2> Is state important to know ? {this.state.answer}</h2>
      </>
    );
  }
} */
//export default Appclass;
//example
/* 
export default class PropsClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "asiya",
      age: 20,
    };
  }
  render() {
    return (
      <>
        <h2>{this.state.name}</h2>
        <h3>{this.state.age}</h3>
      </>
    );
  }
}
 */
/* 
class Loggedinorout extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    let wordisplay;
    if (this.state.isLoggedIn) {
      wordisplay = "in";
    } else {
      wordisplay = "out";
    }
    return <h1>U currently logged {wordisplay}</h1>;
  }
}

export default Loggedinorout;
 */

//

//state changing
class App45 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick(id) {
    console.log("changed " + id);
  }
  render() {
    return (
      <>
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleclick}>click me</button>
        </div>
      </>
    );
  }
}

export default App45;
