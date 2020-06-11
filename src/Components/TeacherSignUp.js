import React, {Component} from 'react';

class TeacherSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacherID: '',
            teacherFirstName: '',
            teacherLastName: '',
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
        this.props.create(this.state.teacherID, this.state.teacherFirstName, this.state.teacherLastName);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
            <h1>Teacher Enrollment Form</h1>
            <label>
              TeacherID: <input name = "teacherID" type = "text" value = {this.state.teacherID} onChange = {this.handleInputChange} required/>
            </label><br /><br />
            <label>
              First Name: <input name = "teacherFirstName" type = "text" value = {this.state.teacherFirstName} onChange = {this.handleInputChange} required/>
            </label><br /><br />
            <label>
              Last Name: <input name = "teacherLastName" type = "text" value = {this.state.teacherLastName} onChange = {this.handleInputChange} required/>
            </label> <br /><br />
            <input type = "submit" value = "Sign Teacher Up" />
          </form>
        );
    }
}

export default TeacherSignUp;