//lifecycle methods
//3 states for
/*
state  1
=>mounting
4 state methods
constructor => nitialize 
getDerivedPropsfromState => static
render => compulsory
componentDidMount => imp 


state 2
=>updating
5 state methods
getDerivedPropsfromState => static
shouldcomponentupdate  => boolean return
getSnapshotbeforeUpdate => state before updation retuens (props, state) as args
render
componentDidUpdate =>called compulsory if getsnaphsotbeforeUpdate is incvoked

state 3
=>unmounting
1 state method
componentWillUnmount  => boolean return

*/
import Conditinal from "./Conditional";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favcolor: "red" };
  }
  changeColor() {
    this.setState({ favcolor: "blue" });
  }
  static getDerivedStateFromProps(props, state) {}

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {}
  componentWillUnmount() {}
  static getDerivedStateFromProps(props, state) {}
  getSnapshotBeforeUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <>
        <p>code goes here</p>
      </>
    );
  }
}

//export default App;

//conditinal rendering

class App5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFoalding: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isFoalding: false });
    }, 2000);
  }
  render() {
    return (
      <>
        <Conditinal isFoalding={this.state.isFoalding} />
      </>
    );
  }
}
//export default App5;

class App12345 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unreadMsg: [],
      // unreadMsg: ["unread\n", "jndi\n", "jkm\n"],
    };
  }
  //&&
  render() {
    return (
      <>{this.state.unreadMsg.length > 0 && <h2>{this.state.unreadMsg}</h2>}</>
    );
  }
}
//export default App12345;

//challenge conditional rendering

class Cond extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.changeState = this.changeState.bind(this);
  }
  changeState() {
    this.setState((prevstate) => {
      return {
        isLoggedIn: !prevstate.isLoggedIn,
      };
    });
  }
  render() {
    const buttontxt = this.state.isLoggedIn ? "Log in " : "Log out";
    const display = this.state.isLoggedIn ? "Log out" : "Log in";
    return (
      <>
        <h1>User is {display}</h1>
        <button onClick={this.changeState}>{buttontxt}</button>
      </>
    );
  }
}
//export default Cond;
