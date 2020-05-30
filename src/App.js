import React, {Component} from 'react';
import './App.css';
// import fire from './config/Fire';
import Login from "./Login";
import Home from "./Home";
import {base} from "./config/Fire.js";

// TODO: Connect teacher class list as attribute

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      teachers: [],
      students: [], 
      classes: []
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
        currentTeacherID: 0
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
        classList: []
      };
      this.setState({teachers});
    }
  }

  createClass = (ID, teacher, name) => {
    if(this.state.classes[ID]){
      alert("Class ID already taken")
    } else {
      const classes = {...this.state.class};
      classes[ID] = {
        teacher: teacher,
        name: name,
        students: []
      };
      this.setState({classes});
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
    this.classesRef = base.syncState('classes', {
      context: this,
      state: 'classes'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.studentsRef);
    base.removeBinding(this.teachersRef);
    base.removeBinding(this.classesRef);
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
        <Home studentsList = {this.state.students} teachersList = {this.state.teachers} 
        createStudent = {this.createStudent} createTeacher = {this.createTeacher} createClass = {this.createClass} />
      </div>
    );
  }
}

export default App;
