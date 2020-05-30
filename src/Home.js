import React, {Component} from 'react';
import SignUp from './SignUp';
import UserList from "./UserList";
import AssignStudent from "./AssignStudent";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignUp: false,
            isStudentView: false
        }
    }

    toggleSignUp = () => {
        this.setState({
            isSignUp: this.state.isSignUp ? false : true
        })
    }

    toggleStudentView = () => {
        this.setState({
            isStudentView: this.state.isStudentView ? false : true
        })
    }
    
    render() {
        return(
            <div>
                <button onClick = {this.toggleSignUp}>Add Member</button><br/>
                {this.state.isSignUp ? <SignUp createStudent = {this.props.createStudent} createTeacher = {this.props.createTeacher} createClass = {this.props.createClass} teachers = {this.props.teachersList} /> : null}<br/>
                <button onClick = {this.toggleStudentView}>View List of All Enrolled Students</button>
                {this.state.isStudentView ? <UserList className = "studentList" list = {this.props.studentsList}/> : null}
                <AssignStudent />
            </div>
            
        );
    }
}

export default Home;