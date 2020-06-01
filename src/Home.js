import React, {Component} from 'react';
import SignUp from './SignUp';
import UserList from "./UserList";
import AssignStudent from "./AssignStudent";
import {base} from "./config/Fire.js";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignUp: false,
            isStudentView: false,
            isAssignStudent: false
        }
    }

    toggleSignUp = () => {
        this.setState({
            isSignUp: this.state.isSignUp ? false : true
        })
    }

    toggleAssignStudent = () => {
        this.setState({
            isAssignStudent: this.state.isAssignStudent ? false : true
        })
    }

    toggleStudentView = () => {
        this.setState({
            isStudentView: this.state.isStudentView ? false : true
        })
    }

    handleLogOut = (e) => {
        base.initializedApp.auth().signOut();
    }
    
    render() {
        return(
            <div>
                <button onClick = {this.toggleSignUp}>Add</button><br/>
                {this.state.isSignUp ? <SignUp createStudent = {this.props.createStudent} createTeacher = {this.props.createTeacher} createClass = {this.props.createClass} teachers = {this.props.teachersList} editTeacher = {this.props.editTeacher} /> : null}<br/>
                
                <button onClick = {this.toggleAssignStudent}>Assign Student to Class</button>
                {this.state.isAssignStudent ? <AssignStudent editStudent = {this.props.editStudent} editClass = {this.props.editClass} classes = {this.props.classList} students = {this.props.studentsList}/> : null}<br/><br/>
            
                <button onClick = {this.toggleStudentView}>View List of All Enrolled Students</button>
                {this.state.isStudentView ? <UserList className = "studentList" list = {this.props.studentsList}/> : null}<br/><br/>

                <button onClick = {this.handleLogOut}>Log Out</button>
            </div>
            
        );
    }
}

export default Home;