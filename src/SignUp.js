import React, {Component} from 'react';
import StudentSignUp from "./StudentSignUp";
import TeacherSignUp from "./TeacherSignUp";
import ClassSignUp from "./ClassSignUp"

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStudent: false,
            isTeacher: false,
            isClass: false
        };
    }

    toggleStudentSignUp = () => {
        this.setState({
            isStudent: this.state.isStudent ? false : true,
        })
    }

    toggleTeacherSignUp = () => {
        this.setState({
            isTeacher: this.state.isTeacher ? false : true,
        })
    }

    toggleClassSignUp = () => {
        this.setState({
            isClass: this.state.isClass ? false : true,
        })
    }

    render() {
        return(
            <div>
                <button onClick = {this.toggleStudentSignUp}>Enroll a Student</button>
                {this.state.isStudent ? <StudentSignUp create = {this.props.createStudent} /> : null}
                <button onClick = {this.toggleTeacherSignUp}>Sign a Teacher Up</button>
                {this.state.isTeacher ? <TeacherSignUp create = {this.props.createTeacher} /> : null}
                <button onClick = {this.toggleClassSignUp}>Create a Class</button>
                {this.state.isClass ? <ClassSignUp create = {this.props.createClass} teachers =  {this.props.teachers}/> : null}
            </div>
        );
    }
}

export default SignUp;