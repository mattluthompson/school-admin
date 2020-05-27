import React, {Component} from 'react';
import './App.css';
// import fire from './config/Fire';
import Login from "./Login";
import Home from "./Home";
import {base} from "./config/Fire.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: {}
      users: {}
    }

    this.addMatt = this.addMatt.bind(this);
    this.addMegan = this.addMegan.bind(this);
  }

  addMatt() {
    const users = {...this.state.user};
    const id = 1;

    users[id] = {
      id: id,
      name: "Matt"
    };

    this.setState({users});
    console.log(this.state)
  }

  addMegan() {
    const users = {...this.state.user};
    const id = 3;

    users[id] = {
      id: id,
      name: "Megan"
    };

    this.setState({users});
    console.log(this.state)
  }

  componentWillMount(){
    this.usersRef = base.syncState('users',{
      context: this,
      state: 'users'
    });

  }

  componentWillUnmount() {
    base.removeBinding(this.usersRef);
  }
  // componentDidMount() {
  //   // this.authListener();
  // }

  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     // console.log(user);
  //     if(user){
  //       this.setState({user});
  //       // localStorage.setItem('user', user.uid);
  //     } else {
  //       this.setState({user: null});
  //       // localStorage.removeItem('user')
  //     }
  //   });
  // }

  render() {
    return (
      <div className="App">
        {/* {this.state.user ? (<Home/>) : (<Login />)} */}
        <Home />
        <button onClick = {this.addMatt}>Add Matt</button>
        <button onClick = {this.addMegan}>Add Megan</button>
      </div>
    );
  }
}

export default App;
