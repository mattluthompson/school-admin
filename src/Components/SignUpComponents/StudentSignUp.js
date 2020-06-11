import React, {Component} from 'react';

class StudentSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentID: '',
            studentFirstName: '',
            studentLastName: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    
    handleSubmit = (event) => {
        this.props.create(this.state.studentID, this.state.studentFirstName, this.state.studentLastName);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
            <h1>Student Enrollment Form</h1>
            <label>
              StudentID: <input name = "studentID" type = "text" value = {this.state.studentID} onChange = {this.handleInputChange} required/>
            </label><br /><br />
            <label>
              First Name: <input name = "studentFirstName" type = "text" value = {this.state.studentFirstName} onChange = {this.handleInputChange} required/>
            </label><br /><br />
            <label>
              Last Name: <input name = "studentLastName" type = "text" value = {this.state.studentLastName} onChange = {this.handleInputChange} required/>
            </label> <br /><br />
            <input type = "submit" value = "Enroll Student" />
          </form>
        );
    }
}

export default StudentSignUp;