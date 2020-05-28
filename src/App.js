import React, {Component} from 'react';
import './App.css';
// import fire from './config/Fire';
import Login from "./Login";
import Home from "./Home";
import {base} from "./config/Fire.js";
import StudentSignUp from "./StudentSignUp";
import TeacherSignUp from "./TeacherSignUp";

// TODO: Account for if there are no users 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      teachers: [],
      students: [], 
    }
  }

  createStudent = (studentID, firstName, lastName) => {
    if(this.state.students[studentID]) {
      alert("Student ID already taken")
    } else {
      const students = {...this.state.student};
      students[studentID] = {
        firstName: firstName,
        lastName: lastName,
        hasTeacher: false
      };
      this.setState({students});
    }
  }

  createTeacher = (ID, firstName, lastName) => {
    if(this.state.teachers[ID]) {
      alert("Teacher ID already taken")
    } else {
      const teachers = {...this.state.teacher};
      teachers[ID] = {
        firstName: firstName,
        lastName: lastName,
        classList: ['no students added yet']
      };
      this.setState({teachers});
    }
  }

  componentWillMount(){
    this.studentsRef = base.syncState('students',{
      context: this,
      state: 'students'
    });
    this.teachersRef = base.syncState('teachers',{
      context: this,
      state: 'teachers'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.studentsRef);
    base.removeBinding(this.teachersRef);
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
        <StudentSignUp create = {this.createStudent} />
        <TeacherSignUp create = {this.createTeacher} />
      </div>
    );
  }
}

export default App;
