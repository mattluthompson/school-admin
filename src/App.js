import React, {Component} from 'react';
import './App.css';
// import fire from './config/Fire';
import Login from "./Components/Login";
import Home from "./Components/Home";
import {base} from "./config/Fire.js";

// TODO: Connect teacher class list as attribute
//TODO: Change read/write rules

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      teachers: [],
      students: [], 
      classes: [],
      user: false
    }
  }

  authListener() {
    base.initializedApp.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      } else {
        this.setState({user: null});
      }
    })
  }

  // Create Functions

  createStudent = (studentID, firstName, lastName) => {
    if(this.state.students[studentID]) {
      alert("Student ID already taken")
    } else {
      const students = {...this.state.student};
      students[studentID] = {
        ID: studentID,
        firstName: firstName,
        lastName: lastName,
        classList: ["no current classes"]
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
        ID: ID,
        firstName: firstName,
        lastName: lastName,
        classList: ["no current classes"]
      };
      this.setState({teachers});
    }
  }

  createAdmin = () => {}

  createClass = (ID, teacher, name) => {
    if(this.state.classes[ID]){
      alert("Class ID already taken")
    } else {
      const classes = {...this.state.class};
      classes[ID] = {
        ID: ID,
        teacher: teacher,
        name: name,
        students: ["no current students"]
      };
      this.setState({classes});
    }
  }

  // Edit Functions
  
  editStudent = (ID, firstName, lastName, addClass, deleteClass) => {
    
    let currentStudentList = this.state.students
    let currentStudent = currentStudentList[ID];

    if(firstName){
    };

    if(lastName){
    };

    if(addClass){
      if(currentStudent.classList[0] === "no current classes") {
        currentStudent.classList[0] = addClass;
      } else {
        currentStudent.classList.push(addClass);
      }
    };

    if (deleteClass) {

    };

    currentStudentList[ID] = currentStudent;

    this.setState({
      students: currentStudentList
    })
  }

  editTeacher = (ID, firstName, lastName, addClassList, deleteClassList) => {

    let currentTeacherList = this.state.teachers
    let currentTeacher = currentTeacherList[ID];
    
    if(firstName){
      // teachers[ID] = {
      //   firstName: firstName,
      // };
    };

    if(lastName){
      // teachers[ID] = {
      //   lastName: lastName,
      // };
    };

    if(addClassList){
      if(currentTeacher.classList[0] === "no current classes") {
        currentTeacher.classList[0] = addClassList;
      } else {
        currentTeacher.classList.push(addClassList);
      }
    };

    if (deleteClassList) {

    };

    currentTeacherList[ID] = currentTeacher;

    this.setState({
      teachers: currentTeacherList
    })
  }

  editAdmin = () => {}

  editClass = (ID, name, teacher, addStudent, deleteStudent) => {
    let currentClassList = this.state.classes
    let currentClass = currentClassList[ID];

    if(name){
    };

    if(teacher){
    };

    if(addStudent){
      if(currentClass.students[0] === "no current students") {
        currentClass.students[0] = addStudent;
      } else {
        currentClass.students.push(addStudent);
      }
    };

    if (deleteStudent) {

    };

    currentClassList[ID] = currentClass;

    this.setState({
      classes: currentClassList
    })
  }

  // Delete

  deleteStudent = () => {}

  deleteTeacher = () => {}

  deleteAdmin = () => {}

  deleteClass = () => {}

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
  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home studentsList = {this.state.students} teachersList = {this.state.teachers} classList = {this.state.classes}
        createStudent = {this.createStudent} createTeacher = {this.createTeacher} createClass = {this.createClass} createAdmin = {this.createAdmin}
        editStudent = {this.editStudent} editTeacher = {this.editTeacher} editClass = {this.editClass} editAdmin = {this.editAdmin} />) : (<Login />)}
      </div>
    );
  }
}

export default App;
